let patch_selectors = document.getElementsByClassName("patch-selector");
const patches = {
    "APR 30, 2024": {
        "general": {
            "Knockdown time": 2,
            "Armor health": "30% damage reduction",
            "Out-of-combat health regeneration": "20"
        },
        "heroes": {
            "tank": {
                "general": {
                    "Critical headshot damage reduction": 0,
                    "Knockback resistance": 30
                },
                "D.Va": {
                    "abilities": {
                        "Fusion Cannons": {
                            "Spread": 3.75
                        },
                        "Boosters": {
                            "Impact damage": 15
                        }
                    }
                },
                "Junker Queen": {
                    "abilities": {
                        "Jagged Blade": {
                            "pulls tanks further": true
                        },
                        "Rampage": {
                            "Startup time": 0.75
                        },
                        "Commanding Shout": {
                            "can be activated while using other abilities": false,
                            "Cooldown": 14
                        }
                    }
                },
                "Orisa": {
                    "abilities": {
                        "Javelin Spin": {
                            "Cooldown": 9
                        }
                    }
                },
                "Roadhog": {
                    "general": {
                        "Base health": 650
                    },
                    "abilities": {
                        "Take a Breather": {
                            "Damage reduction": 50,
                            "Cooldown": 1.5,
                            "Maximum healing": 450,
                            "Resource regeneration rate": 10
                        },
                        "Whole Hog": {
                            "Knockback": 14,
                            "Damage per pellet": 7
                        }
                    }
                },
                "Sigma": {
                    "abilities": {
                        "Gravitic Flux": {
                            "requires line-of-sight": true
                        }
                    }
                },
                "Wrecking Ball": {
                    "abilities": {
                        "Grappling Claw": {
                            "Impact damage": 50
                        },
                        "Piledriver": {
                            "Movement lockout duration for enemies": 0.5
                        },
                        "Minefield": {
                            "Damage": 130,
                            "Explosion knockback": 5
                        }
                    }
                },
                "Zarya": {
                    "abilities": {
                        "Graviton Surge": {
                            "Radius": 6,
                            "Duration": 3.5
                        }
                    }
                }
            }
        }
    },
    "MAY 14, 2024": {
        "general": {
            "Knockdown time": 2,
            "Armor health": "a flat damage reduction of 5 per projectile, up to a maximum of 50% damage reduction",
            "Out-of-combat health regeneration": "10 + 5% of max hp"
        },
        "heroes": {
            "tank": {
                "general": {
                    "Critical headshot damage reduction": 25,
                    "Knockback resistance": 50
                },
                "D.Va": {
                    "abilities": {
                        "Fusion Cannons": {
                            "Spread": 3.75
                        },
                        "Boosters": {
                            "Impact damage": 15
                        }
                    }
                },
                "Junker Queen": {
                    "abilities": {
                        "Jagged Blade": {
                            "pulls tanks further": true
                        },
                        "Rampage": {
                            "Startup time": 0.75
                        },
                        "Commanding Shout": {
                            "can be activated while using other abilities": true,
                            "Cooldown": 12
                        }
                    }
                },
                "Orisa": {
                    "abilities": {
                        "Javelin Spin": {
                            "Cooldown": 9
                        }
                    }
                },
                "Roadhog": {
                    "general": {
                        "Base health": 650
                    },
                    "abilities": {
                        "Take a Breather": {
                            "Damage reduction": 50,
                            "Cooldown": 1.5,
                            "Maximum healing": 450,
                            "Resource regeneration rate": 10
                        },
                        "Whole Hog": {
                            "Knockback": 14,
                            "Damage per pellet": 7
                        }
                    }
                },
                "Sigma": {
                    "abilities": {
                        "Gravitic Flux": {
                            "requires line-of-sight": false
                        }
                    }
                },
                "Wrecking Ball": {
                    "abilities": {
                        "Grappling Claw": {
                            "Impact damage": 60
                        },
                        "Piledriver": {
                            "Movement lockout duration for enemies": 0.75
                        },
                        "Minefield": {
                            "Damage": 165,
                            "Explosion knockback": 10
                        }
                    }
                },
                "Zarya": {
                    "abilities": {
                        "Graviton Surge": {
                            "Radius": 7,
                            "Duration": 4
                        }
                    }
                }
            }
        }
    },
    "MAY 21, 2024": {
        "general": {
            "Knockdown time": 2,
            "Armor health": "a flat damage reduction of 5 per projectile, up to a maximum of 50% damage reduction",
            "Out-of-combat health regeneration": "10 + 5% of max hp"
        },
        "heroes": {
            "tank": {
                "general": {
                    "Critical headshot damage reduction": 25,
                    "Knockback resistance": 50
                },
                "D.Va": {
                    "abilities": {
                        "Fusion Cannons": {
                            "Spread": 3.75
                        },
                        "Boosters": {
                            "Impact damage": 15
                        }
                    }
                },
                "Junker Queen": {
                    "abilities": {
                        "Jagged Blade": {
                            "pulls tanks further": true
                        },
                        "Rampage": {
                            "Startup time": 0.75
                        },
                        "Commanding Shout": {
                            "can be activated while using other abilities": true,
                            "Cooldown": 12
                        }
                    }
                },
                "Orisa": {
                    "abilities": {
                        "Javelin Spin": {
                            "Cooldown": 9
                        }
                    }
                },
                "Roadhog": {
                    "general": {
                        "Base health": 650
                    },
                    "abilities": {
                        "Take a Breather": {
                            "Damage reduction": 50,
                            "Cooldown": 1.5,
                            "Maximum healing": 450,
                            "Resource regeneration rate": 10
                        },
                        "Whole Hog": {
                            "Knockback": 14,
                            "Damage per pellet": 7
                        }
                    }
                },
                "Sigma": {
                    "abilities": {
                        "Gravitic Flux": {
                            "requires line-of-sight": false
                        }
                    }
                },
                "Wrecking Ball": {
                    "abilities": {
                        "Grappling Claw": {
                            "Impact damage": 60
                        },
                        "Piledriver": {
                            "Movement lockout duration for enemies": 0.75
                        },
                        "Minefield": {
                            "Damage": 165,
                            "Explosion knockback": 10
                        }
                    }
                },
                "Zarya": {
                    "abilities": {
                        "Graviton Surge": {
                            "Radius": 7,
                            "Duration": 4
                        }
                    }
                }
            }
        }
    },
    "MAY 24, 2024": {
        "general": {
            "Knockdown time": 2,
            "Armor health": "a flat damage reduction of 5 per projectile, up to a maximum of 50% damage reduction",
            "Out-of-combat health regeneration": "10 + 5% of max hp"
        },
        "heroes": {
            "tank": {
                "general": {
                    "Critical headshot damage reduction": 25,
                    "Knockback resistance": 50
                },
                "D.Va": {
                    "abilities": {
                        "Fusion Cannons": {
                            "Spread": 3.75
                        },
                        "Boosters": {
                            "Impact damage": 15
                        }
                    }
                },
                "Junker Queen": {
                    "abilities": {
                        "Jagged Blade": {
                            "pulls tanks further": true
                        },
                        "Rampage": {
                            "Startup time": 0.75
                        },
                        "Commanding Shout": {
                            "can be activated while using other abilities": true,
                            "Cooldown": 12
                        }
                    }
                },
                "Orisa": {
                    "abilities": {
                        "Javelin Spin": {
                            "Cooldown": 9
                        }
                    }
                },
                "Roadhog": {
                    "general": {
                        "Base health": 650
                    },
                    "abilities": {
                        "Take a Breather": {
                            "Damage reduction": 50,
                            "Cooldown": 1.25,
                            "Maximum healing": 400,
                            "Resource regeneration rate": 8
                        },
                        "Whole Hog": {
                            "Knockback": 16,
                            "Damage per pellet": 6
                        }
                    }
                },
                "Sigma": {
                    "abilities": {
                        "Gravitic Flux": {
                            "requires line-of-sight": true
                        }
                    }
                },
                "Wrecking Ball": {
                    "abilities": {
                        "Grappling Claw": {
                            "Impact damage": 60
                        },
                        "Piledriver": {
                            "Movement lockout duration for enemies": 0.75
                        },
                        "Minefield": {
                            "Damage": 165,
                            "Explosion knockback": 10
                        }
                    }
                },
                "Zarya": {
                    "abilities": {
                        "Graviton Surge": {
                            "Radius": 7,
                            "Duration": 4
                        }
                    }
                }
            }
        }
    },
    "JUNE 20, 2024": {
        "general": {
            "Knockdown time": 1.7,
            "Armor health": "a flat damage reduction of 5 per projectile, up to a maximum of 50% damage reduction",
            "Out-of-combat health regeneration": "10 + 5% of max hp"
        },
        "heroes": {
            "tank": {
                "general": {
                    "Critical headshot damage reduction": 25,
                    "Knockback resistance": 50
                },
                "D.Va": {
                    "abilities": {
                        "Fusion Cannons": {
                            "Spread": 3.375
                        },
                        "Boosters": {
                            "Impact damage": 25
                        }
                    }
                },
                "Junker Queen": {
                    "abilities": {
                        "Jagged Blade": {
                            "pulls tanks further": true
                        },
                        "Rampage": {
                            "Startup time": 0.5
                        },
                        "Commanding Shout": {
                            "can be activated while using other abilities": true,
                            "Cooldown": 12
                        }
                    }
                },
                "Orisa": {
                    "abilities": {
                        "Javelin Spin": {
                            "Cooldown": 8
                        }
                    }
                },
                "Roadhog": {
                    "general": {
                        "Base health": 600
                    },
                    "abilities": {
                        "Take a Breather": {
                            "Damage reduction": 40,
                            "Cooldown": 1.25,
                            "Maximum healing": 400,
                            "Resource regeneration rate": 8
                        },
                        "Whole Hog": {
                            "Knockback": 16,
                            "Damage per pellet": 6
                        }
                    }
                },
                "Sigma": {
                    "abilities": {
                        "Gravitic Flux": {
                            "requires line-of-sight": true
                        }
                    }
                },
                "Wrecking Ball": {
                    "abilities": {
                        "Grappling Claw": {
                            "Impact damage": 60
                        },
                        "Piledriver": {
                            "Movement lockout duration for enemies": 0.75
                        },
                        "Minefield": {
                            "Damage": 165,
                            "Explosion knockback": 10
                        }
                    }
                },
                "Zarya": {
                    "abilities": {
                        "Graviton Surge": {
                            "Radius": 7,
                            "Duration": 4
                        }
                    }
                }
            }
        }
    }
};

const hero_images = {
    "D.Va": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e69a3d819fd46d0dcd1d9474c248a95e69519c20077c60e9de73a1e2d3acdbb6.png",
    "Junker Queen": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf66adfac58a0321ec1f7d3a7241d6bf2f3b311707064d2f0ace2e3f4e342727.png",
    "Orisa": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20c12a10cfe0b5608f9eec63a74ecb0ccd18a114019bc77bb2765f87776e17ed.png",
    "Roadhog": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b6f4e837dc41e87d730f6b0fad3473e689c8bdcd1f732b97326ac08b0508f2ee.png",
    "Sigma": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9738e1687bf7064de3667169788ef1b5ea9cf1746a42753c767cf17c7cb67547.png",
    "Wrecking Ball": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f71d6948e8b6ae340e20ab569ef66d24aead6032c34a7ec09a00ea864b413a24.png",
    "Zarya": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d43075cba10cd711a129556142849587e78f1f55b0105d39a640da53ffa64e1b.png",
};

const ability_images = {
    "Fusion Cannons": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/29bd15ebb32c23483a59df18a79f71301b2128c05b2f8d0c052ab86e0715e07d.png",
    "Boosters": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89d6beb25b21eacd5a181b96438436692d9ad403fcef19873e506f6d46ed37a3.png",
    "Jagged Blade": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7aff09649e4e2daeec13cfcca4d5e369b4ddc0160587637bb607761ecf89f16c.png",
    "Rampage": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/68b7d33215b777410b834ba2e9e7202d5ecff15fe012712facd974ec32895c36.png",
    "Javelin Spin": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/804f9775ecfbc3ac2b84514e429cd8bc4e88027b00cb09126880d7f2c7759b59.png",
    "Take a Breather": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9cb8d867671bf917a9ba5d4a28ab6cb6ceeb10de2813567fcad97aca32c58499.png",
    "Gravitic Flux": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7140d3eaf82e580ab465dcdb04bd1faaf77ac54550a12d17ecde7c4e87e963e0.png",
    "Whole Hog": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78faa90f268424c6e770168ec15f5bb880d0b14e5d10f22c30bfbb64ffe244a8.png",
    "Grappling Claw": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e81e6ba9fb3391f29528021e453a0d3c16da1fc5e378994e6d00783356e0f2c9.png",
    "Piledriver": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e884373721448d109c1646599cfe651a5bccdbc7a12d5062372c91b28acd80c.png",
    "Minefield": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/17a54a345b715bc4301b330d8eb394f57e1c66308a8cba67f426de76a71ba868.png",
    "Graviton Surge": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e58e60f939026f3d0ee95cf3a0b5fc8091da3c35a178d34c358700f3720a70d3.png",
    "Commanding Shout": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1809c57884dafcfd1aab89eb80d2ad8fe0c64ce0036646a3e19c05f48c322c9d.png",
};

let before_patch = Object.keys(patches)[0];
let after_patch = Object.keys(patches)[0];

function isEmpty(obj) {
    for (var i in obj) { return false; }
    return true;
}

function overlay(template, data) {
    if (typeof template == "number" && typeof data == "number") {
        return data;
    }
    if (typeof template == "string" && typeof data == "string") {
        return data;
    }
    if (typeof template == "boolean" && typeof data == "boolean") {
        return data;
    }
    if (typeof template == "object" && typeof data == "object") {
        let result = {};
        for (key in template) {
            if (data[key]) {
                result[key] = overlay(template[key], data[key]);
            } else {
                result[key] = template[key];
            }
        }
        return result;
    }
    throw "Invalid";
}

function patch_overlay(overlay_version) {
    let result = {};
    for (let patch in patches) {
        result[patch] = overlay(patches[overlay_version], patches[patch]);
    }
    return result;
}

function convert_to_changes(before, after) {
    if (typeof before == "number" && typeof after == "number") {
        return [before, after];
    }
    if (typeof before == "string" && typeof after == "string") {
        return [before, after];
    }
    if (typeof before == "boolean" && typeof after == "boolean") {
        return [before, after];
    }
    if (typeof before == "object" && typeof after == "object") {
        let result = {};
        for (let key in before) {
            if (before[key] != after[key]) {
                let changes = convert_to_changes(before[key], after[key]);
                if (!isEmpty(changes)) {
                    result[key] = changes;
                }
            }
        }
        return result;
    }
    throw "Invalid";
}

function getChangeText(name, change) {
    if (typeof change[0] == "number") {
        let change_type = "increaced";
        if (change[0] > change[1]) {
            change_type = "reduced";
        }
        return `${name} ${change_type} from ${change[0]} to ${change[1]}.`;
    } else if (typeof change[0] == "boolean") {
        let change_type = "Now";
        if (change[0]) {
            change_type = "No longer";
        }
        return `${change_type} ${name}.`;
    } else if (typeof change[0] == "string") {
        return `${name} changed from ${change[0]} to ${change[1]}.`;
    }
}

function updatePatchNotes() {
    let changes = convert_to_changes(patches[before_patch], patches[after_patch]);
    let hero_section = document.getElementsByClassName("PatchNotes-section-hero_update")[0];
    hero_section.innerHTML = "";
    if (changes.general) {
        let changeRender = "";
        for (let generalRule in changes.general) {
            changeRender += `<li>${getChangeText(generalRule, changes.general[generalRule])}</li>`
        }
        hero_section.innerHTML += `
            <div class="PatchNotes-section PatchNotes-section-generic_update">
                <h4 class="PatchNotes-sectionTitle">Hero Updates</h4>
                <div class="PatchNotes-update PatchNotes-section-generic_update"></div>
                <div class="PatchNotesGeneralUpdate">
                    <div class="PatchNotesGeneralUpdate-title">General</div>
                    <div class="PatchNotesGeneralUpdate-description">
                        <ul>
                            ${changeRender}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    for (role in changes.heroes) {
        let generalChangeRender = "";
        if (changes.heroes[role].general) {
            for (let generalRule in changes.heroes[role].general) {
                generalChangeRender += `<li>${getChangeText(generalRule, changes.heroes[role].general[generalRule])}</li>`
            }
            generalChangeRender = `
                <div class="PatchNotes-sectionDescription">
                    <ul>
                        ${generalChangeRender}
                    </ul>
                </div>
            `;
        }
        let heroChanges = "";
        for (let hero in changes.heroes[role]) {
            if(hero == "general") continue;
            let generalChangesRender = "";
            if (changes.heroes[role][hero].general) {
                generalChangesRender += "<ul>";
                for (property in changes.heroes[role][hero].general) {
                    generalChangesRender += `<li>${getChangeText(property, changes.heroes[role][hero].general[property])}</li>`
                }
                generalChangesRender += "</ul>";
            }
            let abilities = "";
            for (let ability in changes.heroes[role][hero].abilities) {
                let ability_changes = "";
                for (stat in changes.heroes[role][hero].abilities[ability]) {
                    ability_changes += `<li>${getChangeText(stat, changes.heroes[role][hero].abilities[ability][stat])}</li>`;
                }
                abilities += `
                    <div class="PatchNotesAbilityUpdate">
                        <div class="PatchNotesAbilityUpdate-icon-container"><img class="PatchNotesAbilityUpdate-icon" src="${ability_images[ability]}">
                        </div>
                        <div class="PatchNotesAbilityUpdate-text">
                            <div class="PatchNotesAbilityUpdate-name">${ability}</div>
                            <div class="PatchNotesAbilityUpdate-detailList">
                                <ul>
                                    ${ability_changes}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            heroChanges += `
            <div class="PatchNotesHeroUpdate">
                <div class="PatchNotesHeroUpdate-header"><img class="PatchNotesHeroUpdate-icon" src="${hero_images[hero]}">
                    <h5 class="PatchNotesHeroUpdate-name">${hero}</h5>
                </div>
                <div class="PatchNotesHeroUpdate-body">
                    <div class="PatchNotesHeroUpdate-generalUpdates">
                    ${generalChangesRender}
                    </div>
                    <div class="PatchNotesHeroUpdate-abilitiesList">
                        ${abilities}
                    </div>
                </div>
            </div>`;
        }
        hero_section.innerHTML += `
        <div class="PatchNotes-section PatchNotes-section-hero_update">
            <h4 class="PatchNotes-sectionTitle">${role}</h4>
            ${generalChangeRender}
            <div class="PatchNotes-update PatchNotes-section-hero_update"></div>
            ${heroChanges}
        </div>
        `;
    }
}



let patch_options = Object.keys(patches).map((p) => `<option value=\"${p}\">${p}</option>`).join();
for (let i = 0; i < patch_selectors.length; i++) {
    patch_selectors[i].innerHTML = patch_options;
}
document.getElementById("patch_before").onchange = function () {
    before_patch = this.value;
    updatePatchNotes()
};
document.getElementById("patch_after").onchange = function () {
    after_patch = this.value;
    updatePatchNotes()
};