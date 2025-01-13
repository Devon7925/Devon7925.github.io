---
layout: post
title:  "Abusing Typescipt's Type System to Create Generic Typeguards"
date:   2025-01-12 15:46:20 -0700
---

<style type="text/css">
   /* Indent Formatting */
   ol {list-style-type: decimal;}
   ol ol { list-style-type: lower-alpha;}
   ol ol ol { list-style-type: lower-roman;}
   ol ol ol ol { list-style-type: upper-alpha;}
   ol ol ol ol ol { list-style-type: decimal;}
   ol ol ol ol ol ol { list-style-type: upper-roman;}
   /* https://www.w3schools.com/cssref/pr_list-style-type.asp */
   /* https://stackoverflow.com/questions/11445453/css-set-li-indent */
   /* https://stackoverflow.com/questions/13366820/how-do-you-make-lettered-lists-using-markdown */
</style>

> The following post is about creating verifiable generic typeguards in Typescript. I don't actually recommend using this as it slows compilation times and is a bit of a hack.

## Typeguards

&ensp;&ensp;Typescript is a language that prides itself on allowing developers to write type safe code. One of the ways that Typescript allows developers to write type safe code is through the use of typeguards. Typeguards are functions that return a boolean value that indicates whether a value is of a certain type. For example, the following function is a typeguard that checks if a value is a string:

```ts
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

This can then be used to check if a value is a string:

```ts
const value: unknown = getSomeUntrustedValue();
if (isString(value)) {
  // typescript knows the value is a string so we can access the length property 
  console.log(value.length);
}
```

&ensp;&ensp;The problem with this approach is that it requires a new typeguard function to be written for each type that needs to be checked, and each written typeguard function can be wrong and will need to be updated every time the type is updated, but won't warn the developer when this happens. I wanted to create something that would both make writing typeguards easier and would warn the developer when the typeguard is out of date.

## Alternatives

Note there are existing alternatives to my approach that are probably better:
* [ts-auto-guard](https://github.com/rhys-vdw/ts-auto-guard): Requires you to remember to run the tool every time you update your types.
* [ajv](ajv.js.org): Limited union support

## Generic Typeguards

&ensp;&ensp;Typescript has a powerful type system that allows for pretty complex behavior such as [building arithmetic operations](https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f). However it is also an erasable type system, meaning you can't use the type system to do anything at runtime. This means that you can't use the type system to create typeguards. However, you can use the type system to create verified typeguards.

&ensp;&ensp;Below is a simple example of this concept. The function `isArrayMatchingTypeguard` takes a typeguard function and returns a typeguard function that checks if an array is of the type that the original typeguard function checks for.

```ts
export function isArrayMatchingTypeguard<T>(typeguard: (x: unknown) => x is T) {
    return (data: unknown): data is T[] => {
        if (!Array.isArray(data)) return false
        return data.every(typeguard)
    }
}

const value: unknown = getSomeUntrustedValue();
if (isArrayMatchingTypeguard(isString)(value)) {
  // typescript knows the value is an array of strings so we can access the length property 
  console.log(value[0].length);
}
```

The only thing left is to create typeguards for every basic type, and every way of combining types. The basic types are easy:

```ts
export function isNull(value: unknown): value is null {
    return value === null;
}

export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean"
}

export function isNumber(value: unknown): value is number {
    return typeof value === "number"
}

export function isString(value: unknown): value is string {
    return typeof value === "string"
}

export function isObject(value: unknown): value is { [key: string | number | symbol]: unknown } {
    return typeof value === "object" && value !== null && !Array.isArray(value)
}
```

Although this is *technically* all the basic types, there is one more case that is important to add:

```ts
export function isLiteral<T extends any>(literal: T): (value: unknown) => value is T {
    return (value: unknown): value is T => value === literal
}
```

This allows for checking for literal types, which is important for checking for enums.

## Object typeguards

&ensp;&ensp;The simple case of a map type object(`{[key: string]: A}`) is relatively simple:

```ts
export function isObjectWithValues<T>(typeguard: (x: unknown) => x is T) {
    return (data: unknown): data is { [key: string]: T } => {
        if (!isObject(data)) return false
        return Object.values(data).every(typeguard)
    }
}
```

The more common object type you want to cover has set keys however, for example:

```ts
type Person = {
    name: string,
    age: number,
    description?: string
    favoriteNumbers: number[]
}
```

&ensp;&ensp;It should be clear that this is not a trivial case to cover. You have to handle required and optional properties, have different typeguards for each property. Therefore I will have to show a could of utility types first. First is a way to filter which properties are optional and which are required:

```ts
type ForcedOptionalKey<T extends {}> = keyof { [K in keyof T as undefined extends T[K] ? K : never]: K } & keyof T
type ForcedRequiredKey<T extends {}> = keyof { [K in keyof T as undefined extends T[K] ? never : K]: K } & keyof T
```

&ensp;&ensp;This works by mapping the keys of an object to `never` to remove them iff the value is optional. We check if the value is optional by checking if `undefined` is a valid value via `undefined extends T[K]`. I then use the `keyof` operator to get the keys of the object. Because Typescript can no longer tell that these are keys of T after this operation I then use the `&` operator to get the intersection with the keys of the object. These are then used in the following utility functions:

```ts
type PropertyKey = string | number | symbol;
export function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown>;
export function hasOwnProperty<V, X extends { [key: PropertyKey]: V }, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, V>;
export function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
    return obj.hasOwnProperty(prop)
}

export function checkRequiredProperty<T extends {}>() {
    return function <X extends {}, Y extends ForcedRequiredKey<T>, TG extends undefined | ((x: unknown) => x is T[Y])>(obj: X, prop: Y, typeGuard?: TG): obj is X & Record<Y, TG extends undefined ? unknown : T[Y]> {
        if (!hasOwnProperty(obj, prop)) return false
        return typeGuard ? typeGuard(obj[prop]) : true
    }
}

export function checkOptionalProperty<T extends {}>() {
    return function <X extends {}, Y extends ForcedOptionalKey<T>, TG extends undefined | ((x: unknown) => x is T[Y])>(obj: X, prop: Y, typeGuard?: TG): obj is X & Record<Y, TG extends undefined ? unknown : (T[Y] | undefined)> {
        if (!hasOwnProperty(obj, prop)) return true
        return typeGuard ? typeGuard(obj[prop]) : true
    }
}
```

&ensp;&ensp;`hasOwnProperty` is just a version of `obj.hasOwnProperty` that typeguards the object so the key can be used for the function implementation. These functions seem unneccessarily complex as they immediately return another function, but this is used to reduce the amount of generic parameters you need to pass in. Using these you can get the following typeguard:

```ts
export function autoTypeguard<T extends {}>(typeGuardRequiredKeys: { [key in ForcedRequiredKey<T>]-?: (d: unknown) => d is T[key] }, typeGuardOptionalKeys: { [key in ForcedOptionalKey<T>]-?: (d: unknown) => d is T[key] }): (data: unknown) => data is CheckNotUnion<T> {
    return function (data: unknown): data is CheckNotUnion<T> {
        if (data === null || data === undefined || typeof data !== "object" || Array.isArray(data)) return false
        for (const key in typeGuardRequiredKeys) {
            const requiredKey = key as ForcedRequiredKey<T>
            if (!checkRequiredProperty<T>()(data, requiredKey, typeGuardRequiredKeys[requiredKey])) return false
        }
        for (const key in typeGuardOptionalKeys) {
            const optionalKey = key as ForcedOptionalKey<T>
            if (!checkOptionalProperty<T>()(data, optionalKey, typeGuardOptionalKeys[optionalKey])) return false
        }
        return true
    }
}

// Using typeguards directly can start to become unreadable so bringing them into their own function can help
const personTypeguard: (data: unknown) => data is Person = autoTypeguard<Person>({
    name: isString,
    age: isNumber,
    favoriteNumbers: isArrayMatchingTypeguard(isNumber)
}, {
    description: isString
})
```

&ensp;&ensp;Here you can already start to see how you can chain these typeguards together to create more complex typeguards. You can also notice how this is automatically checked by the compiler. If you were to add a new required property to `Person` and forget to add it to the typeguard, or if you were to change the type of a property, the compiler would warn you that the typeguard is out of date. You might notice the `CheckNotUnion` type and it may seem unnecessary, but it is used to prevent the developer from accidentally using a union type in the typeguard. The typeguard would not be able to check for the union type correctly, and the entire point of this is to ensure you don't accidentally mess up your typeguard. `CheckNotUnion` is defined as follows:

```ts
type CheckNotUnion<T> = TuplifyUnion<T> extends [infer _] ? T : unknown
```

&ensp;&ensp;This is relatively simple, it simply checks if there is only one type in the union, and if there is it returns that type, otherwise it returns `unknown`. But what is `TuplifyUnion`?

```ts
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>
```

What?

&ensp;&ensp;This is where the hacky part starts. It uses type parameter default values as pseudo-variables since the type system doesn't have typical variable definition. Then it uses a recursive type to take out the last case of the union and push it to a tuple. This type of type transformation is not intended by typescript developers and union cases are supposed to be unordered and therefore their order could technically change at any time, although they haven't while I've been using these functions. I'll show the types it uses:

```ts
// This is a built in type
type Exclude<T, U> = T extends U ? never : T;

type Push<T extends unknown[], V> = [...T, V];
type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type LastOf<T> = UnionToIntersection<T extends unknown ? () => T : never> extends () => (infer R) ? R : never
```

What?

&ensp;&ensp;`Exclude` and `Push` are pretty simple, they are just removing a type from a union and adding a type to a tuple respectively.

&ensp;&ensp;`UnionToIntersection` is a bit more complex. It converts a union type to an intersection by putting it as a function parameter and then inferring that same function parameter. This works because the union gets broken up in the first step(`A|B` becomes `((k: A) => void) | ((k: B) => void)`) which is interpretted specially as a function with multiple type definitions. Then the infer tries to get a single type due to it seeing a single function with different definitions and ends up making an intersection. The `extends unknown` is used to split up the union when mapping to a function so it doesn't become `((k: A | B) => void)`.

&ensp;&ensp;Finally `LastOf` first maps the union to a function and then creates an intersection. The function mapping is important because `UnionToIntersection<string | number>` is `never` but `UnionToIntersection<() => string | () => number>` is `() => string & () => number`. This doesn't make sense, but it works ¯\_(ツ)_/¯. Then it infers the type parameter of the intersection function and this pulls out the last type.

## Union typeguards

&ensp;&ensp;The simplest way to create a union typeguard is to just split the union into two parts and check each part. This can be done with the following function:

```ts
export function eitherType<A, B>(aTypeGuard: (x: unknown) => x is A, bTypeGuard: (x: unknown) => x is B): (x: unknown) => x is A | B {
    return (x: unknown): x is A | B => {
        return aTypeGuard(x) || bTypeGuard(x)
    }
}
```

&ensp;&ensp;This doesn't work so well for a union with more than two types. For that you need a more complex following function:

```ts
type TupleToTypeguards<T extends unknown[]> = { [K in keyof T]: (data: unknown) => data is T[K] }
type NoArrayUnionTypeguards<T> = TupleToTypeguards<TuplifyUnion<T>>

export function unionTypeguard<T>(typeguards: NoArrayUnionTypeguards<T>): (data: unknown) => data is T
export function unionTypeguard<T, U extends (NoArrayUnionTypeguards<T>[number][])>(typeguards: U): (data: NoArrayUnionTypeguards<T>[number][] extends U ? unknown : T) => data is T
export function unionTypeguard<T, U extends (NoArrayUnionTypeguards<T>[number][])>(typeguards: U): (data: NoArrayUnionTypeguards<T>[number][] extends U ? unknown : T) => data is T {
    return function (data: unknown): data is T {
        for (const typeguard of typeguards) {
            if (typeguard(data)) return true
        }
        return false
    }
}
```

&ensp;&ensp;This uses the previously explained type transformation to convert a union to a tuple of typeguards. This is then used to create a typeguard that checks if the data is of any of the types in the union. The multiple function signitures are used to make completions work if you define the typeguards in order, while still allowing you to pass in the typeguards out of order with some amount of checking.

## Tuple typeguards

&ensp;&ensp;Tuple typeguards are relatively simple at this point. You can just use the following function:

```ts
export function isTupleMatchingTypeguards<T extends any[]>(...typeguards: TupleToTypeguards<T>): (x: unknown) => x is T {
    return (data: unknown): data is T => {
        if (!Array.isArray(data)) return false
        if (data.length !== typeguards.length) return false
        for (let i = 0; i < typeguards.length; i++) {
            const typeguard = typeguards[i]
            if (typeguard === undefined) throw new Error("typeguard is undefined")
            if (!typeguard(data[i])) return false
        }
        return true
    }
}
```

&ensp;&ensp;This function does not however finish covering all type cases as it misses the case of a tuple with a rest element such as `[A, ...B]`.

```ts
export function isSplitTupleMatchingTypeguards<T extends any[]>(startTypeguard: (d: unknown) => d is T[0], restTypeguard: (d: unknown) => d is Tail<T>): (x: unknown) => x is T {
    return (data: unknown): data is T => {
        if (!Array.isArray(data)) return false
        if (data.length === 0) return false
        if (!startTypeguard(data[0])) return false
        if (!restTypeguard(data.slice(1))) return false
        return true
    }
}
```

## Other typeguards

&ensp;&ensp;Another case this type of function can handle is for typeguarding a shared key from a union. Using these can reduce the duplicate code in some cases:

```ts
type TupleOmit<T extends unknown[], Key extends string> = { [K in keyof T]: Omit<T[K], Key> }
type BetterOmit<T extends {}, K extends keyof T> = TupleOmit<TuplifyUnion<T>, K & string>[number]
export function partialTypeguard<T extends {}, K extends ForcedRequiredKey<T>>(key: K, partialTypeguard: (data: unknown) => data is T[K], restTypeguard: (data: unknown) => data is BetterOmit<T, K>): (data: unknown) => data is T {
    return function (data: unknown): data is T {
        if (data === null || typeof data !== "object" || Array.isArray(data)) return false
        if (!hasOwnProperty(data, key)) return false
        if (!partialTypeguard(data[key])) return false
        let datacopy = structuredClone(data)
        delete datacopy[key]
        return restTypeguard(datacopy)
    }
}

export function partialTypeguardOptional<T extends {}, K extends ForcedOptionalKey<T>>(key: K, partialTypeguard: (data: unknown) => data is T[K], restTypeguard: (data: unknown) => data is BetterOmit<T, K>): (data: unknown) => data is T {
    return function (data: unknown): data is T {
        if (data === null || typeof data !== "object" || Array.isArray(data)) return false
        if (!hasOwnProperty(data, key)) return true
        if (!partialTypeguard(data[key])) return false
        let datacopy = structuredClone(data)
        delete datacopy[key]
        return restTypeguard(datacopy)
    }
}
```

An example of when these would be useful is when you have a type like this:

```ts
type Request = {
    type: "GET",
    url: string,
    token?: string
} | {
    type: "POST",
    url: string,
    token?: string,
    body: string
} | {
    type: "DELETE",
    url: string,
    token?: string
}
```

By using the above functions you can avoid duplicating the `url` and `token` typeguards like so:

```ts
const longRequestTypeguard: (data: unknown) => data is Request = unionTypeguard<Request>([
    autoTypeguard<TuplifyUnion<Request>[0]>({
        type: isLiteral("GET"),
        url: isString,
    }, {
        token: isString,
    }),
    autoTypeguard<TuplifyUnion<Request>[1]>({
        type: isLiteral("POST"),
        url: isString,
        body: isString,
    }, {
        token: isString,
    }),
    autoTypeguard<TuplifyUnion<Request>[2]>({
        type: isLiteral("DELETE"),
        url: isString,
    }, {
        token: isString,
    }),
])

type PartialRequest = BetterOmit<BetterOmit<Request, "url">, "token">
const shortRequestTypeguard: (data: unknown) => data is Request = partialTypeguard("url", isString,
    partialTypeguardOptional("token", isString, unionTypeguard([
        autoTypeguard<TuplifyUnion<PartialRequest>[0]>({
            type: isLiteral("GET"),
        }, {}),
        autoTypeguard<TuplifyUnion<PartialRequest>[1]>({
            type: isLiteral("POST"),
            body: isString,
        }, {}),
        autoTypeguard<TuplifyUnion<PartialRequest>[2]>({
            type: isLiteral("DELETE"),
        }, {}),
    ])))
```

As you can see, the `shortRequestTypeguard` is much more readable and shorter than the `longRequestTypeguard`.

## Conclusion

&ensp;&ensp;This shows it is possible to generate verified typeguards in vanilla typescript. However, not only does it use abuse niche features of the type system that could change, but it also still requires a lot of boilerplate to be written. It has been somewhat useful for me, but I wouldn't neccessarily recommend it for others. If you want to see a project that uses this, you can check out my [Overwatch patch compare tool](https://github.com/Devon7925/overwatch_patch_compare).
