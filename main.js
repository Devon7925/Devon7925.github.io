let patch_selectors = document.getElementsByClassName("patch-selector");
const patches = {
    "APR 16, 2024": {
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
                        "Fortify": {
                            "Duration": 4.5,
                            "Movement speed reduction": 0
                        },
                        "Javelin Spin": {
                            "Cooldown": 7
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
            },
            "damage": {
                "general": {
                    "Healing reduction inflicted on hit": 15
                },
                "Cassidy": {
                    "abilities": {
                        "Peacekeeper": {
                            "Secondary fire \"Fan the Hammer\" damage": 50
                        },
                        "Combat Roll": {
                            "Damage reduction": 75
                        },
                        "Flashbang": {
                            "Effect": "Applies hinder on stick",
                            "Duration": 1.25,
                            "Maximum travel time": 1.5,
                            "Slow": 25,
                            "hinder prevents crouching": true,
                            "Explosive damage": 70,
                            "Cooldown": 12,
                            "Projectile speed": 25
                        },
                        "Deadeye": {
                            "Max movement speed penalty": 70,
                            "Min movement speed penalty": 70,
                            "Max damage reduction": 40,
                            "Min damage reduction": 40
                        }
                    }
                },
                "Mei": {
                    "abilities": {
                        "Endothermic Blaster": {
                            "Secondary fire projectile size": 0.225,
                            "Secondary fire damage": 75
                        }
                    }
                },
                "Reaper": {
                    "abilities": {
                        "Hellfire Shotguns": {
                            "Spread": 6.5
                        },
                        "Shadow Step": {
                            "Cast time": 1.5
                        }
                    }
                },
                "Sojourn": {
                    "abilities": {
                        "Railgun": {
                            "Secondary fire maximum damage": 130,
                            "Secondary fire minimum damage": 30,
                            "requires overclock for secondary primary piercing": true,
                            "Primary fire shots per second": 14
                        },
                        "Overclock": {
                            "Energy charge rate": 100
                        }
                    }
                },
                "Symmetra": {
                    "general": {
                        "Base health": 100
                    },
                    "abilities": {
                        "Photon Projector": {
                            "Primary fire charge rate": 1
                        }
                    }
                },
                "Venture": {
                    "abilities": {
                        "SMART Excavator": {
                            "Maximum explosion damage": 45
                        },
                        "Drill Dash": {
                            "Cooldown start": "ability end",
                            "Cooldown reduction while burrowed": 50,
                            "Cooldown acceleration while burrowed": 0,
                            "Initial impact damage": 40
                        },
                        "Burrow": {
                            "Grace period": 0
                        },
                        "Tectonic Shock": {
                            "Ultimate Cost": 1932
                        }
                    }
                },
                "Junkrat": {
                    "abilities": {
                        "Frag Launcher": {
                            "Impact Damage": "40"
                        }
                    }
                },
                "Echo": {
                    "abilities": {
                        "Duplicate": {
                            "Ultimate gain modifier": 4
                        }
                    }
                },
                "Hanzo": {
                    "abilities": {
                        "Dragonstrike": {
                            "Speed": 12
                        }
                    }
                }
            },
            "support": {
                "Illari": {
                    "abilities": {
                        "Outburst": {
                            "Damage": 10
                        },
                        "Healing Pylon": {
                            "Healing per projectile": 30,
                            "Self healing efficiency": 100,
                            "Health": 50,
                            "Shield health": 50
                        }
                    }
                },
                "Kiriko": {
                    "abilities": {
                        "Swift Step": {
                            "Cooldown": 7
                        },
                        "Protection Suzu": {
                            "cleanses hard knockdown stuns": true
                        }
                    }
                },
                "Brigitte": {
                    "abilities": {
                        "Rally": {
                            "resets Shield Bash cooldown upon activation": false
                        }
                    }
                }
            }
        }
    },
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
                        "Fortify": {
                            "Duration": 3.5,
                            "Movement speed reduction": 20
                        },
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
            },
            "damage": {
                "general": {
                    "Healing reduction inflicted on hit": 20
                },
                "Cassidy": {
                    "abilities": {
                        "Peacekeeper": {
                            "Secondary fire \"Fan the Hammer\" damage": 50
                        },
                        "Combat Roll": {
                            "Damage reduction": 75
                        },
                        "Flashbang": {
                            "Effect": "Applies hinder on stick",
                            "Duration": 1.25,
                            "Maximum travel time": 1.5,
                            "Slow": 25,
                            "hinder prevents crouching": true,
                            "Explosive damage": 70,
                            "Cooldown": 12,
                            "Projectile speed": 25
                        },
                        "Deadeye": {
                            "Max movement speed penalty": 70,
                            "Min movement speed penalty": 70,
                            "Max damage reduction": 40,
                            "Min damage reduction": 40
                        }
                    }
                },
                "Mei": {
                    "abilities": {
                        "Endothermic Blaster": {
                            "Secondary fire projectile size": 0.225,
                            "Secondary fire damage": 75
                        }
                    }
                },
                "Reaper": {
                    "abilities": {
                        "Hellfire Shotguns": {
                            "Spread": 6.5
                        },
                        "Shadow Step": {
                            "Cast time": 1.5
                        }
                    }
                },
                "Sojourn": {
                    "abilities": {
                        "Railgun": {
                            "Secondary fire maximum damage": 130,
                            "Secondary fire minimum damage": 30,
                            "requires overclock for secondary primary piercing": true,
                            "Primary fire shots per second": 14
                        },
                        "Overclock": {
                            "Energy charge rate": 100
                        }
                    }
                },
                "Symmetra": {
                    "general": {
                        "Base health": 100
                    },
                    "abilities": {
                        "Photon Projector": {
                            "Primary fire charge rate": 1
                        }
                    }
                },
                "Venture": {
                    "abilities": {
                        "SMART Excavator": {
                            "Maximum explosion damage": 40
                        },
                        "Drill Dash": {
                            "Cooldown start": "ability end",
                            "Cooldown reduction while burrowed": 50,
                            "Cooldown acceleration while burrowed": 0,
                            "Initial impact damage": 30
                        },
                        "Burrow": {
                            "Grace period": 0
                        },
                        "Tectonic Shock": {
                            "Ultimate Cost": 2125
                        }
                    }
                },
                "Junkrat": {
                    "abilities": {
                        "Frag Launcher": {
                            "Impact Damage": "40"
                        }
                    }
                },
                "Echo": {
                    "abilities": {
                        "Duplicate": {
                            "Ultimate gain modifier": 4
                        }
                    }
                },
                "Hanzo": {
                    "abilities": {
                        "Dragonstrike": {
                            "Speed": 12
                        }
                    }
                }
            },
            "support": {
                "Illari": {
                    "abilities": {
                        "Outburst": {
                            "Damage": 10
                        },
                        "Healing Pylon": {
                            "Healing per projectile": 30,
                            "Self healing efficiency": 100,
                            "Health": 50,
                            "Shield health": 50
                        }
                    }
                },
                "Kiriko": {
                    "abilities": {
                        "Swift Step": {
                            "Cooldown": 7
                        },
                        "Protection Suzu": {
                            "cleanses hard knockdown stuns": true
                        }
                    }
                },
                "Brigitte": {
                    "abilities": {
                        "Rally": {
                            "resets Shield Bash cooldown upon activation": false
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
                        "Fortify": {
                            "Duration": 3.5,
                            "Movement speed reduction": 20
                        },
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
            },
            "damage": {
                "general": {
                    "Healing reduction inflicted on hit": 20
                },
                "Cassidy": {
                    "abilities": {
                        "Peacekeeper": {
                            "Secondary fire \"Fan the Hammer\" damage": 50
                        },
                        "Combat Roll": {
                            "Damage reduction": 75
                        },
                        "Flashbang": {
                            "Effect": "Applies hinder on stick",
                            "Duration": 1.25,
                            "Maximum travel time": 1.5,
                            "Slow": 25,
                            "hinder prevents crouching": true,
                            "Explosive damage": 70,
                            "Cooldown": 12,
                            "Projectile speed": 25
                        },
                        "Deadeye": {
                            "Max movement speed penalty": 70,
                            "Min movement speed penalty": 70,
                            "Max damage reduction": 40,
                            "Min damage reduction": 40
                        }
                    }
                },
                "Mei": {
                    "abilities": {
                        "Endothermic Blaster": {
                            "Secondary fire projectile size": 0.225,
                            "Secondary fire damage": 75
                        }
                    }
                },
                "Reaper": {
                    "abilities": {
                        "Hellfire Shotguns": {
                            "Spread": 6.5
                        },
                        "Shadow Step": {
                            "Cast time": 1.5
                        }
                    }
                },
                "Sojourn": {
                    "abilities": {
                        "Railgun": {
                            "Secondary fire maximum damage": 130,
                            "Secondary fire minimum damage": 30,
                            "requires overclock for secondary primary piercing": true,
                            "Primary fire shots per second": 14
                        },
                        "Overclock": {
                            "Energy charge rate": 100
                        }
                    }
                },
                "Symmetra": {
                    "general": {
                        "Base health": 100
                    },
                    "abilities": {
                        "Photon Projector": {
                            "Primary fire charge rate": 1
                        }
                    }
                },
                "Venture": {
                    "abilities": {
                        "SMART Excavator": {
                            "Maximum explosion damage": 40
                        },
                        "Drill Dash": {
                            "Cooldown start": "ability end",
                            "Cooldown reduction while burrowed": 50,
                            "Cooldown acceleration while burrowed": 0,
                            "Initial impact damage": 30
                        },
                        "Burrow": {
                            "Grace period": 0
                        },
                        "Tectonic Shock": {
                            "Ultimate Cost": 2125
                        }
                    }
                },
                "Junkrat": {
                    "abilities": {
                        "Frag Launcher": {
                            "Impact Damage": "45"
                        }
                    }
                },
                "Echo": {
                    "abilities": {
                        "Duplicate": {
                            "Ultimate gain modifier": 4.5
                        }
                    }
                },
                "Hanzo": {
                    "abilities": {
                        "Dragonstrike": {
                            "Speed": 15
                        }
                    }
                }
            },
            "support": {
                "Illari": {
                    "abilities": {
                        "Outburst": {
                            "Damage": 10
                        },
                        "Healing Pylon": {
                            "Healing per projectile": 30,
                            "Self healing efficiency": 100,
                            "Health": 50,
                            "Shield health": 50
                        }
                    }
                },
                "Kiriko": {
                    "abilities": {
                        "Swift Step": {
                            "Cooldown": 7
                        },
                        "Protection Suzu": {
                            "cleanses hard knockdown stuns": true
                        }
                    }
                },
                "Brigitte": {
                    "abilities": {
                        "Rally": {
                            "resets Shield Bash cooldown upon activation": true
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
                        "Fortify": {
                            "Duration": 3.5,
                            "Movement speed reduction": 20
                        },
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
            },
            "damage": {
                "general": {
                    "Healing reduction inflicted on hit": 20
                },
                "Cassidy": {
                    "abilities": {
                        "Peacekeeper": {
                            "Secondary fire \"Fan the Hammer\" damage": 50
                        },
                        "Combat Roll": {
                            "Damage reduction": 75
                        },
                        "Flashbang": {
                            "Effect": "Applies hinder on stick",
                            "Duration": 1.25,
                            "Maximum travel time": 1.5,
                            "Slow": 25,
                            "hinder prevents crouching": true,
                            "Explosive damage": 70,
                            "Cooldown": 12,
                            "Projectile speed": 25
                        },
                        "Deadeye": {
                            "Max movement speed penalty": 70,
                            "Min movement speed penalty": 70,
                            "Max damage reduction": 40,
                            "Min damage reduction": 40
                        }
                    }
                },
                "Mei": {
                    "abilities": {
                        "Endothermic Blaster": {
                            "Secondary fire projectile size": 0.225,
                            "Secondary fire damage": 75
                        }
                    }
                },
                "Reaper": {
                    "abilities": {
                        "Hellfire Shotguns": {
                            "Spread": 6.5
                        },
                        "Shadow Step": {
                            "Cast time": 1.5
                        }
                    }
                },
                "Sojourn": {
                    "abilities": {
                        "Railgun": {
                            "Secondary fire maximum damage": 130,
                            "Secondary fire minimum damage": 30,
                            "requires overclock for secondary primary piercing": true,
                            "Primary fire shots per second": 14
                        },
                        "Overclock": {
                            "Energy charge rate": 100
                        }
                    }
                },
                "Symmetra": {
                    "general": {
                        "Base health": 100
                    },
                    "abilities": {
                        "Photon Projector": {
                            "Primary fire charge rate": 1
                        }
                    }
                },
                "Venture": {
                    "abilities": {
                        "SMART Excavator": {
                            "Maximum explosion damage": 40
                        },
                        "Drill Dash": {
                            "Cooldown start": "ability use",
                            "Cooldown reduction while burrowed": 0,
                            "Cooldown acceleration while burrowed": 90,
                            "Initial impact damage": 30
                        },
                        "Burrow": {
                            "Grace period": 0.2
                        },
                        "Tectonic Shock": {
                            "Ultimate Cost": 2125
                        }
                    }
                },
                "Junkrat": {
                    "abilities": {
                        "Frag Launcher": {
                            "Impact Damage": "45"
                        }
                    }
                },
                "Echo": {
                    "abilities": {
                        "Duplicate": {
                            "Ultimate gain modifier": 4.5
                        }
                    }
                },
                "Hanzo": {
                    "abilities": {
                        "Dragonstrike": {
                            "Speed": 15
                        }
                    }
                }
            },
            "support": {
                "Illari": {
                    "abilities": {
                        "Outburst": {
                            "Damage": 10
                        },
                        "Healing Pylon": {
                            "Healing per projectile": 30,
                            "Self healing efficiency": 100,
                            "Health": 50,
                            "Shield health": 50
                        }
                    }
                },
                "Kiriko": {
                    "abilities": {
                        "Swift Step": {
                            "Cooldown": 7
                        },
                        "Protection Suzu": {
                            "cleanses hard knockdown stuns": true
                        }
                    }
                },
                "Brigitte": {
                    "abilities": {
                        "Rally": {
                            "resets Shield Bash cooldown upon activation": true
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
                        "Fortify": {
                            "Duration": 3.5,
                            "Movement speed reduction": 20
                        },
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
            },
            "damage": {
                "general": {
                    "Healing reduction inflicted on hit": 20
                },
                "Cassidy": {
                    "abilities": {
                        "Peacekeeper": {
                            "Secondary fire \"Fan the Hammer\" damage": 50
                        },
                        "Combat Roll": {
                            "Damage reduction": 75
                        },
                        "Flashbang": {
                            "Effect": "Applies hinder on stick",
                            "Duration": 1.25,
                            "Maximum travel time": 1.5,
                            "Slow": 25,
                            "hinder prevents crouching": true,
                            "Explosive damage": 70,
                            "Cooldown": 12,
                            "Projectile speed": 25
                        },
                        "Deadeye": {
                            "Max movement speed penalty": 70,
                            "Min movement speed penalty": 70,
                            "Max damage reduction": 40,
                            "Min damage reduction": 40
                        }
                    }
                },
                "Mei": {
                    "abilities": {
                        "Endothermic Blaster": {
                            "Secondary fire projectile size": 0.225,
                            "Secondary fire damage": 75
                        }
                    }
                },
                "Reaper": {
                    "abilities": {
                        "Hellfire Shotguns": {
                            "Spread": 6.5
                        },
                        "Shadow Step": {
                            "Cast time": 1.5
                        }
                    }
                },
                "Sojourn": {
                    "abilities": {
                        "Railgun": {
                            "Secondary fire maximum damage": 130,
                            "Secondary fire minimum damage": 30,
                            "requires overclock for secondary primary piercing": true,
                            "Primary fire shots per second": 14
                        },
                        "Overclock": {
                            "Energy charge rate": 100
                        }
                    }
                },
                "Symmetra": {
                    "general": {
                        "Base health": 100
                    },
                    "abilities": {
                        "Photon Projector": {
                            "Primary fire charge rate": 1
                        }
                    }
                },
                "Venture": {
                    "abilities": {
                        "SMART Excavator": {
                            "Maximum explosion damage": 40
                        },
                        "Drill Dash": {
                            "Cooldown start": "ability use",
                            "Cooldown reduction while burrowed": 0,
                            "Cooldown acceleration while burrowed": 90,
                            "Initial impact damage": 30
                        },
                        "Burrow": {
                            "Grace period": 0.2
                        },
                        "Tectonic Shock": {
                            "Ultimate Cost": 2125
                        }
                    }
                },
                "Junkrat": {
                    "abilities": {
                        "Frag Launcher": {
                            "Impact Damage": "45"
                        }
                    }
                },
                "Echo": {
                    "abilities": {
                        "Duplicate": {
                            "Ultimate gain modifier": 4.5
                        }
                    }
                },
                "Hanzo": {
                    "abilities": {
                        "Dragonstrike": {
                            "Speed": 15
                        }
                    }
                }
            },
            "support": {
                "Illari": {
                    "abilities": {
                        "Outburst": {
                            "Damage": 10
                        },
                        "Healing Pylon": {
                            "Healing per projectile": 30,
                            "Self healing efficiency": 100,
                            "Health": 50,
                            "Shield health": 50
                        }
                    }
                },
                "Kiriko": {
                    "abilities": {
                        "Swift Step": {
                            "Cooldown": 7
                        },
                        "Protection Suzu": {
                            "cleanses hard knockdown stuns": true
                        }
                    }
                },
                "Brigitte": {
                    "abilities": {
                        "Rally": {
                            "resets Shield Bash cooldown upon activation": true
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
                        "Fortify": {
                            "Duration": 3.5,
                            "Movement speed reduction": 20
                        },
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
            },
            "damage": {
                "general": {
                    "Healing reduction inflicted on hit": 20
                },
                "Cassidy": {
                    "abilities": {
                        "Peacekeeper": {
                            "Secondary fire \"Fan the Hammer\" damage": 45
                        },
                        "Combat Roll": {
                            "Damage reduction": 50
                        },
                        "Flashbang": {
                            "Effect": "Applies hinder on hit",
                            "Duration": 1.2,
                            "Maximum travel time": 0.23,
                            "Slow": 50,
                            "hinder prevents crouching": true,
                            "Explosive damage": 45,
                            "Cooldown": 12,
                            "Projectile speed": 30
                        },
                        "Deadeye": {
                            "Max movement speed penalty": 70,
                            "Min movement speed penalty": 35,
                            "Max damage reduction": 40,
                            "Min damage reduction": 0
                        }
                    }
                },
                "Mei": {
                    "abilities": {
                        "Endothermic Blaster": {
                            "Secondary fire projectile size": 0.2,
                            "Secondary fire damage": 85
                        }
                    }
                },
                "Reaper": {
                    "abilities": {
                        "Hellfire Shotguns": {
                            "Spread": 6
                        },
                        "Shadow Step": {
                            "Cast time": 1.2
                        }
                    }
                },
                "Sojourn": {
                    "abilities": {
                        "Railgun": {
                            "Secondary fire maximum damage": 100,
                            "Secondary fire minimum damage": 1,
                            "requires overclock for secondary primary piercing": false,
                            "Primary fire shots per second": 16
                        },
                        "Overclock": {
                            "Energy charge rate": 120
                        }
                    }
                },
                "Symmetra": {
                    "general": {
                        "Base health": 125
                    },
                    "abilities": {
                        "Photon Projector": {
                            "Primary fire charge rate": 1.25
                        }
                    }
                },
                "Venture": {
                    "abilities": {
                        "SMART Excavator": {
                            "Maximum explosion damage": 40
                        },
                        "Drill Dash": {
                            "Cooldown start": "ability use",
                            "Cooldown reduction while burrowed": 0,
                            "Cooldown acceleration while burrowed": 90,
                            "Initial impact damage": 30
                        },
                        "Burrow": {
                            "Grace period": 0.2
                        },
                        "Tectonic Shock": {
                            "Ultimate Cost": 2125
                        }
                    }
                },
                "Junkrat": {
                    "abilities": {
                        "Frag Launcher": {
                            "Impact Damage": "45"
                        }
                    }
                },
                "Echo": {
                    "abilities": {
                        "Duplicate": {
                            "Ultimate gain modifier": 4.5
                        }
                    }
                },
                "Hanzo": {
                    "abilities": {
                        "Dragonstrike": {
                            "Speed": 15
                        }
                    }
                }
            },
            "support": {
                "Illari": {
                    "abilities": {
                        "Outburst": {
                            "Damage": 25
                        },
                        "Healing Pylon": {
                            "Healing per projectile": 40,
                            "Self healing efficiency": 50,
                            "Health": 75,
                            "Shield health": 50
                        }
                    }
                },
                "Kiriko": {
                    "abilities": {
                        "Swift Step": {
                            "Cooldown": 8
                        },
                        "Protection Suzu": {
                            "cleanses hard knockdown stuns": false
                        }
                    }
                },
                "Brigitte": {
                    "abilities": {
                        "Rally": {
                            "resets Shield Bash cooldown upon activation": true
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
    "Cassidy": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d161c49df5a962ece9ceafc6500bea473d9dd3695b9e24e39d5be616295e6c5.png",
    "Mei": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/08586dceed41e030d575b2b643118f55390f1c2af91dd15394528f5399fcc934.png",
    "Reaper": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b7aac87959afbe062cc31518ded04b9dbcadb0a2282f8963c6bfd5ba0a2d6a27.png",
    "Sojourn": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/515f25a729a4a3f51d956fc54c600dc60d8e5242f2b188c178496cea1a2e11b5.png",
    "Symmetra": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b0a19d5c8b0e299705036f4d0b9394da5ff415dc0dcd4e9207b6e63254022dff.png",
    "Venture": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4c5bad8535b648d9dcf4c369e0ab5b9d67685b8ddaee22139eaa63bc5c5a3183.png",
    "Junkrat": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d3628dc64d78ca6dc2a8b509cf5a6fc417c0f5068d5f75d1f5c094be1f58ee4e.png",
    "Echo": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0dc3f1679d739ef530ba2b8cbe02bf09f4d40a57c0af84f694a3241d3a7ef948.png",
    "Hanzo": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3febc2e638ff56d8f0161ea278ac3116b5baf8c0328f1eded6b499552a0eccad.png",
    "Illari": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f33f6fe94ad55fcf9027e779f66afac358a2f93651070b95cd565ff90d670c8b.png",
    "Kiriko": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24d1d7bf86c331b3d81b934442ed36fd0121f6815255c6f26f456127fb342d15.png",
    "Brigitte": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/51b93ea59f369a1defa78e5d08c12b1391f5d2d94614a51fd95c125a7a6151fa.png",
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
    "Peacekeeper": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/afb27d71eeb6f3635ac1ff236c7b3f9e3c6d017360ce022d5d384288ff95bce7.png",
    "Combat Roll": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24a3f2f619859812bba6b6374513fa971b6b19ccb34950c02118b41cc4f93142.png",
    "Flashbang": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47a593ad7f83394b011161e67a6f414e49f2221c5e014ea909fdcd9df4f94371.png",
    "Deadeye": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/346cb576a19f978a7b2c52859c5639423f076d66ca740658da0d46955ab2c97d.png",
    "Endothermic Blaster": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a935216c60c1c7d72502f373f4af24651c9eb6513781bc482c60ef4d551fb6b9.png",
    "Hellfire Shotguns": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/76b6866587871744aca310645f66d2d07755c5a55093eb8734ed0898b17efc51.png",
    "Shadow Step": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bad9345de1f04a46f219364952464c38d2b2a9afa335df6894cde81565816fa4.png",
    "Railgun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3d7f261e05e3abda155cede4409ec8348490e286805c123d54d7f81fdd50d077.png",
    "Overclock": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/83bd9d101e779075fadaed194d1964897794c49ce56c59ccc34799753b55efeb.png",
    "Photon Projector": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b3f003d2ba6bba4f3d44f167cd1b03469c4e3c4d3900805b8adddffeedd2c56.png",
    "Drill Dash": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2ad4581a6801402aaa413301fdf851d1b4d09d67e1ef2a4538baf52ea0a5a889.png",
    "Burrow": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c2d29876f3015bb9625743a7bb03ba22e2758571a34703d3b5546727679679c5.png",
    "Frag Launcher": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e43d916b0851551d17a2385f92497cdcfcd781ac155663643a1e1ff3500bbf37.png",
    "Duplicate": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/457d6ebcb2b92d1e7f7a7174b426903879e131422196825589adbc5e5d9f7efb.png",
    "Dragonstrike": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f2d63b8f0e19e91d2c1199ed3ac0f20bb180dabe9ad1ffc7d1f1e880e58f0220.png",
    "Fortify": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d697fa90726cf683222920822d2ee00a85e0420c6cbc6ec2365573f313d06357.png",
    "SMART Excavator": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9d5a868a280aba70231d6555b6a5df3bb713b39ea9f994a37eb7cb7425d8f7e6.png",
    "Tectonic Shock": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/210991b74451a635e28e53da0fcfdfe2a0600c0845392db627e8829ecca7149e.png",
    "Outburst": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fc671d73e54a10847ee9b1990030a8f937c17c6b46b45fc397c5dc97e28c97d7.png",
    "Healing Pylon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/03b7303b1480cad458afd46b746f6f0ad55dde473063c93afeef250f6679d214.png",
    "Swift Step": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e6ed3a36c4ed15b2127d6ca74756b25e0db7cf33ce7e26d9a79fd821526f055f.png",
    "Protection Suzu": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3775c37a363e1aaf02a6df4cdfb611f18e38bb69ce42dd59abddb4140cea9790.png",
    "Rally": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/08552423da53faa55238bd66a2a72d32d1038e42f2eebc911921bc9d5d575432.png",
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
        for (let key in template) {
            if (Object.hasOwn(data, key)) {
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