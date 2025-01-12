---
layout: post
title:  "Neural Networks for Rating Systems"
date:   2024-07-06 15:46:20 -0700
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

## Problem Statement

&ensp;Conventional rating systems such as Elo, Glicko, and Trueskill are fundementally designed for games with low input randomness. By that I mean that they decrease in accuracy for games in which the game starts out differently each time it is played. However, many modern video games using these types of systems have very high input randomness due to their inclusion of factors such as random gamemodes, random maps, and chosen characters for themselves, their teammates or their enemies. Although the impact of these factors can be somewhat mitigated by factors such as a pick/ban system, or [allowing swapping characters](#enabling-disabling-character-swapping-from-a-game-design-perspective), these have their own downsides such as lower match variety and [counterswapping](#the-effects-of-swapping).

## Idea

&ensp;Neural networks have increasingly been shown to be capable of solving almost arbitrarily complex problems given sufficent data. The fundemental idea proposed here is to use a neural network to predict match outcomes based on all data possibly available at matchmaking time, such as player skill and character picks, map, and side that goes first in the case of an asymmetrical gamemode. This predictor can then be used as a heuristic to find well balanced matchups.

## Design

### Evaluator

I will not go too deep into the design of how the neural network would work because:

1. I am not an expert in the machine learning space
1. The precise design would depend on the game it would be used for
1. I have not put in the work to test this theory and do not know where I could get the public data neccessary to test it

However the layers I would propose are:

1. A layer for inputs where character picks and maps are encoded as a one-hot vector
1. An encoding layer for characters and maps
    * Ideally for new characters and maps this would be the only layer that would be needed to train.
1. A layer combining character and skill rating information to account for characters that play differently at different skill levels. This can also be used if using [multiple mmr](#multiple-mmr) to encode play styles.
1. Some layers using an attention like mechanism so that character map information can be combined to account for synergies and counters.
1. A fully connected dense layer connected to an output neuron with a sigmoid(or similar) activation function.

### Other factors

&ensp;When using this system you probably want to use character specific mmr instead of a role based or global mmr. The neural network may interpret character mmrs differently, and using character specific mmr should lead to better matchmaking. This also has other potential positive impacts on player experience (see [Opening up character design](#opening-up-character-design)).

## Using backpropagation

&ensp;One benefit of this system is that via backpropagation the impact of changing inputs on the matchup can be measured. This has an additional cost of approximately double that of the evaluation function but has a number of potential benefits.

### Using backpropagation to measure player impact

&ensp;One way backpropagation can be used is to measure the impact of changing a player's input mmr on the expected match result. This can be used as a heuristic for measuring a player's impact.

#### Matchmaking uses

&ensp;It could be used for matchmaking to prevent matches where a player would have a very small impact, as these matches can be frustrating for the player. Similarly it could also be used to prevent matches where a single player has too high of an impact, as these matches can be both frustrating for the high impact player as it becomes carry or lose, as well as frustrating for other players as their impact can only be seen if the high impact player neither carries nor underperforms.

#### Rating update uses

&ensp;It could also be used to update player mmr after the match. If a player had a small impact on a match it makes sense that that game is less good data for updating mmr compared to a game where a player had a large impact on a match. This should allow players to find their correct mmr faster.

&ensp;This also has the benefit of being able to correctly separate the mmr of players who play together due to a grouping system. Currently, as far as I know the only system that helps with this is the rating deviation system, which can help adjust stabalized mmr less when they are grouped with players with unstabalized mmr. It does not however account for new players of different skill playing together, which can lead to unbalanced matches if these players ever play without eachother.

### Using backpropagation to find fair matches faster

&ensp;Backpropagation can also be used to evaluate the impact of character pick or map on the matchup. This can be used in the case where a guess occurs for a possible match that is not balanced. By reading the gradients of the one-hot vectors, maps or character picks that would lead to a better matchup can be determined. In the case of maps, the matchup can be immediately reevaluated with the more fair map. In the case of character picks, the player can be swapped out for another player of the changed character pick. Alternatively, if the player is allowed to queue for multiple characters at a time, you can swap only their character, which may be nessecary in the case of groups when you can't just swap a player out.

## Enabling disabling character swapping from a game design perspective

Some character based games allow the player to swap characters mid game, whereas others don't. They both have upsides and downsides I'll list here for reference.

### The Effects of Swapping

1. Players can change up gameplay if they realize they aren't enjoying current gameplay
1. Allows for more unique character design as players can swap to avoid bad matchups
1. Competitive players will swap to good matchups
    1. Notably good matchups are not the same as fun matchups or characters they enjoy playing, likely decreasing net enjoyment
    1. Their enemies are likely to also swap to get a better matchup in response, likely leading to even more swaps
    1. Players recognize bad situational character picks in their teammates
        1. This increases toxicity as people complain about their teammates character picks
        1. This makes people feel like they don't have an impact as they feel they are losing due to their teammate's character pick
        1. This makes people who just want to play a character have less fun as they have to deal with their teammate's complaints
    1. Good matchups are more common for "meta" characters leading to players feeling like they have to play "meta" characters instead of characters they enjoy or lose.
    1. Even players who simply want to avoid bad matchups then end up playing characters that have no extremely bad matchups, which are often either less unique, more "meta" or tanky characters that tend to be less fun
1. Unique characters can cause extreme power in certain situations leading to characters being pick or lose in certain situations. (ex. players swapping to a character to get out of spawn faster, certain maps)
    1. This can lead to misleading statistics as characters are only played in the situations they are strong
    1. This makes characters oppressive in some circumstances while being almost impossible to play in others
1. Character based games rely on character fantasies, they enjoyment of becoming another character. This is disrupted any time they swap. This is likely part of why many players in games where swapping is allowed, either choose not to or maintain a small amount of characters played even at the cost of losing more games. These players with a small amount of characters played disrupt fair matchmaking under a conventional rating system, as their preferences cannot be accounted for.

### The effect of neural rating on no swapping downsides

I would argue that neural rating fixes most of the downsides of changing to a no swapping system. In regards to the above:

1. This is perhaps the most valid point for swapping, however much of why people don't enjoy gameplay has to do with losing/ feeling like you cannot win. Knowing that a matchup is fair helps with feelings of a game not being winnable
1. When uneven matchups are prevented through matchmaking, unique heros no longer break fair matchmaking when you can't swap.
1. Although some players enjoy the tactical element of swapping, preventing swapping all these issues of swapping.
1. Although some players enjoy the tactical element of swapping, preventing swapping all these issues of swapping.
1. Without swapping, character fantasies are disrupted less, and players who don't swap don't screw up matchmaking.

Another advantage is that because you can determine character picks at matchmaking time, you can prevent putting players who want to play the same character on the same team, thereby allowing players to play the characters they like more often.

### Adapting previous data for training

&ensp;One problem of adapting no character swapping neural matchmaking to character swapping games is that the dataset of games available include swapping, and are therefore not ideal data for no swapping matchmaking. You can take data from those chance few games that did not have swaps, but depending on the complexity of the game and number of games available to train on, this data alone may not be enough.

#### Individual fight data

&ensp;One source of data you may be able to use to enhance your dataset is individual fights. By training on simplified game states such as only including score, time, and ultimate economy data to predict the overall outcome of the game, including only gamestates where there were no swaps for the rest of the game, you can train on valid data, and then evaluate at the game's start state when matchmaking. As a bonus, you can give players this tool to help identify their mistakes based on significant decreases to their probability of winning after losing a fight.

#### Synthetic data

&ensp;Another way you can increase your dataset is by altering your current data in ways that should not affect outcome. For example you can change the order players are inputted, swap both the teams and the results, and increase the mmrs of the winning team, as this should not affect the result.

### Combatting toxicity

&ensp;Using character mmrs and neural ratings should decrease player's variance in performance compared to expected performance, thereby decreasing cases where a player lashes out due to feeling like a game is unwinnable due to a teammate's underperformance.

### Queue time impact analysis

&ensp;One response I've gotten when suggesting this idea is that because you're increasing the burden of quality on the matchmaker, the amount of time it takes a player to find a game must go up. In general I don't entirely disagree with this sentiment, although I believe that between players queueing for multiple characters to get shorter queue times, and using map picks to compensate for bad matchups the impact should be minimal. I also think that avoiding bad matchups also helps even out other factors that have previously been a problem for matchmaking. For example, normally the impact of high rating disparities causes the result of a match to be unpredictable at matchmaking time, leading to lower match quality. However, if such impacts could be predicted by the matchmaker, you could include much wider rating disparities without a guaranteed decrease in match fairness. Another factor is that a wider variety of fair matches are possible, for example when overwatch implemented role queue queue times went up significantly, but many of the player's complaints with open queue had to do with the increased impact of matchups, that could potentially be accounted for by a neural rating system.

### Opening up character design

&ensp;Although character swapping allows for more unique character design than normal no swapping, it also limits character design as unique characters leading to unfair matchups continue to cause issues through counterswapping and characters being oppressively powerful in certain situations but unplayable in others. Accounting for matchups properly through matchmaking could allow designers to create more unique and fun characters. In addition, effects such as character overall power can be accounted for via the matchmaker, either by putting them in a mirror, against better opponents or against counters. This allows designers to make characters that are unbalanced in either direction without messing up fair matches independent of character pick. With character specific mmr, all that matters is how good you are relative to other players of your character, meaning players don't have to play meta to climb leaderboards, and variety of play can come from player choice rather than balance.

### Having better data

&ensp;Having this system also allows you to get better data about the balance of a character. Raw winrates can paint a misleading picture of overall character power as players only use characters in the situations they are powerful. This can either lead to an unwarranted belief of high power, as players who use them in their niches outperform those who don't. Or the opposite, where if a character is, for example, used to get out of spawn faster to defend in a losing fight, they might have a lower winrate statistic than what they would have if played more universally as they are only played in losing situations. By evaluating the rating system on hypothetical examples, designers can get a better sense of when a character is strong.

## Adapting for game changes

&ensp;In the general sense, changes to a game affect matchmaking quality. If a character is made more powerful, the players of that character will win an unexpected amount of games. Meanwhile other players playing against them will lose an unexpected amnount of games. Still others will swap to playing the character because they are powerful, lose games because they don't know how to play them, and then start winning as they learn the character's basics enough to get up to their normal skill. These factors decrease the fairness of matches and therefore enjoyment of players, and are difficult to mitigate with a traditional rating system. With a neural rating system, designers can predict the impact of a change on winrates and attempt to adjust the system to account for this. This should lead to improved early matchmaking, and as the system learns on new data, it will continue to improve, such that players who join late after these changes are not affected by a decrease in match quality.

## Matchmaking for fun

> Note this is optional extension to the idea, and not a critical part of it.

### Fun Matchmaking Problem Statement

&ensp;Just because a match is fair, doesn't mean it is guaranteed to be fun for players. I have previously talked about accounting for impact in matchmaking to mitigate this, but there are more examples. In some matchups characters might have abilities with very little power which often decreases their fun, even if the match is fair.

### Proposed idea

&ensp;If you ask players after each match to rate how much fun they had, you could not only get good data on situations where the game isn't fun for designers, but also train your neural rating system to output a player expected enjoyment value as well as its match prediction result. This can then be used in matchmaking to reduce the prevalence of matchups that aren't fun. There are some interesting improvements you would likely want to make for this idea, like normalizing the player fun ratings for different characters and match results. Ultimately the impact of this would have to be tested to find problems with it, and whether it would work overall.

## Multiple MMR

> Note this is optional extension to the idea, and not a critical part of it.

&ensp;Character picks and overall skill level are not the only thing that can affect a player's performance in a game. Other factors include playstyle and situational strengths. For example a player might have very good mechanics, but relativly bad game sense, which would impact their performance in matchups that require different amounts of the different skills. By using a neural rating system, multiple ratings for different skills can be put in to evaluate a matchup, and they can be adjusted differently based on the differing result of backpropagation between them. This could lead to better matchmaking accuracy.

&ensp;One difficulty with this strategy is getting the neural network to learn these seperate ratings in the first place. To do this you would initialize the training data with either random mmrs, or a random variation on mmr, and apply the gradients of the mmr to the training data. This has its own costs however, as it would likely make it more prone to overfitting, and might make applying old mmr to the new system difficult.

## Potential Downsides

### Manipulation

&ensp;By intentionally losing certain matchups on alt accounts, players could provide invalid training data that would then allow them to come back and win those matchups on their main, thereby abusing the system to gain an unfairly high rating. There are ways to detect this, and it's unclear why a player would do this as opposed to other cheating methods such as hacking, win trading, or smurfing.

### Effect on professional scenes

&ensp;If this system causes designers to come up with more unique characters, and make changes for fun rather than balance, then the pro scene could be incredibly unbalanced and therefore less fun to watch and play in. You could try doing tournaments based on a swiss system, with varying points depending on matchup, but this would still likely be worse.

### Factors this does not account for

&ensp;This does not account for player mental state such as tilted players, tired players, players being toxic or distracting to make their teammates play worse, optimistic players, energized players, or players that give good communication to make their team play better. These will still have a cost to match fairness and are hard to account for.

### Computation cost

&ensp;As this system is more complex than current matchup evaluation systems, it neccessarily comes with an increased compute cost in both training and matchmaking, this may have an affect to increase queue times, or increase matchmaking expenses to make it not worth it economically.
