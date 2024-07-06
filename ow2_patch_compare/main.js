// import units from "./units.json" with { type: "json" };
// cant use because firefox dumb https://bugzilla.mozilla.org/show_bug.cgi?id=1736059
let units = await fetch("./units.json")
    .then((res) => res.text())
    .then((text) => JSON.parse(text));

let patch_selectors = document.getElementsByClassName("patch-selector");
export let patches = {};
const patchList = {
    "Overwatch 2": [
        "FEB 13, 2024",
        "FEB 21, 2024",
        "MAR 12, 2024",
        "MAR 19, 2024",
        "MAR 28, 2024",
        "APR 16, 2024",
        "APR 30, 2024",
        "MAY 14, 2024",
        "MAY 21, 2024",
        "MAY 24, 2024",
        "JUNE 20, 2024",
    ],
    "6v6 Adjustments": [
        "JUNE 21, 2024",
        "JUNE 28, 2024",
    ]
};
let promises = [];
for (let versionType in patchList) {
    for (let version of patchList[versionType]) {
        promises.push(fetch(`./patches/${versionType}/${version}.json`)
            .then((res) => res.text())
            .then((text) => {
                patches[`${versionType} - ${version}`] = JSON.parse(text);
            }));
    }
}
await Promise.all(promises);

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
    "Reinhardt": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b5e3a4f5629a3acfd47b5d2e695e79ea964b060bf67b7e4f8f15e63accd5f934.png",
    "Doomfist": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bc538b345188bdcb2d2be5b2894d471ba54aeea53b03862429205ed49d693bbe.png",
    "Sombra": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f348c1704dc50c009ac8acf6912a5a77eaf2a3acdd34e56927190af9eb9145d1.png",
    "Tracer": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ee20a1feed14da5153f19745328e9fc02bd79f8109593a9b7dab9283eb9629b.png",
    "Lúcio": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dee7e92975f5e659fa6b28c508d8fbad62bda720698b1d21f2492af7b9f94b48.png",
    "Lifeweaver": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/57d5014ab6034db9138f838e8450693b4a97ab3c54f85d594b199a8853e75ccb.png",
    "Moira": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/90fa2b69a7b80ae6d57c9ea6f3387dd18dfc1728bdb26949d28a17b98dd4e5f7.png",
    "Mauga": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6dbd80a0b40bd0464db35948f98d91ecc6dfcede8c94ff9b1ecefda781a7aa1f.png",
    "Ramattra": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf69d4bfa61ac14f61d3d541b0d2687a20fa24f55afe7a392d746f5ccb138dea.png",
    "Winston": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6a9a37012551410b46b2c28146404354fe21e4a1e8ea65db4e1e497eeaa05c71.png",
    "Ashe": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e41d918d0e7ffa772b5571df3d0dc1a05e6d9032307f78be935972cfd59f208a.png",
    "Bastion": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3a7dc6d45ce7a1e1c2d31bd4d88b4889c412b2003ad82d1fd8e41271952c1f68.png",
    "Genji": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/190a3dd9a5a4c8daeff9ec4da861f43cb28116964e89dc7416da104d8fae9134.png",
    "Pharah": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/93d639075993fdef3402aa9131f93be7789a33a11dc0099f2f88d22dda09c175.png",
    "Soldier: 76": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1cb6f3ad4b8afdc1a901c26180a4c134018bb805b91eefe9b7cf2946879f10c8.png",
    "Torbjörn": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2ef3a4bdd117829a83867a7775ece351c4226f29b24cdbf8d7fac89443e8d8a2.png",
    "Widowmaker": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b4871b9addd770582c8b6a1ab366b9ec08d986c2995248ee5fce7e15cb0d809d.png",
    "Ana": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/86debddbaaaf8699d68775a9dbffaf5b8db514772b77ff7234b1ff84c0b29fd5.png",
    "Baptiste": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ac801c6fe84f83fe5015af89858cbdfb2ec9d32d141f582889b5381fd0195fc.png",
    "Mercy": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c889fade479003fac5a1ff46a05aee7b0dc88fbb8d2d4b75e4be31159eb1f816.png",
    "Zenyatta": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9367143a32f3fc07781330a0b26c6f1087361204a2b7e4088d1daf26428273f2.png",
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
    "Carnage": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/74c40565f02f550ed362d8a5aaed21de94a3ff1915185cb4b93d6ce6207f03ab.png",
    "Experimental Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ae2c31f159331f73739932e85dc21bdfa8eb4f2b2d2de4e89c1488445da34ffb.png",
    "Adaptive Shield": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa65af9c692405f968fafbeedcdfc9092b38a050dc3562bd41280390ccd7a21d.png",
    "Earthshatter": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a63041a68d81c202a47a95035878edcfa75d5aa3f72414a7e84e1b1a68594bed.png",
    "Rocket Punch": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aa2a067fe151ac2795fe77546711c07be5f0880d9ae5dce554cab0c933d927f0.png",
    "Clobber": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1c299cc354b6fd1585e48c59a193ca39961013a460bd46387c28314dd8eda99d.png",
    "Virus": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/156dfc48d0e7a046692e27ea9f417ee3afbf9d918d92a909fe03d2b705dd3bdd.png",
    "Recall": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/30939502a8576da1fdcad8c7d21881e32066fb28847fc7df874b1436689e3425.png",
    "Pulse Bomb": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/383e9b039efb93da77bb91fbeb3654ef50724e0cea0de76b2cc1c4db43de9a6d.png",
    "Solar Rifle": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/97ca66b75aefd32c23d38a843b8be6b2325792e3cb62523b47541ce97375ab34.png",
    "Sonic Amplifier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7afd1ea98486f12a0338ca55a9a1c49a97867a380f162ea7c10cffa487bfb808.png",
    "Soundwave": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a8e254a309bf77a5c8b98f5a5893fcd252a17775e48db367028982989185bed2.png",
    "Rejuvenating Dash": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1df0e1d8798e26772880ac0fcd27cf00c280adff88dbd6a66881f78cd9f69791.png",
    "Tree of Life": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/105495a0c2ea708de307204b47c90915782256cffd83fc8dff8abcc508e0ef5a.png",
    "Biotic Grasp": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4073577768c5a1f5b5e8bcdb9ce9615be249d35cfbff4b66bc617c19e3b96591.png",
    "Coalescence": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/23d3ef53fd21d04e7e7b137b38e87c61b3d65394393dc00759ceb65d406e37b9.png",
    "Defense Matrix": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2713a8ef6742f4009da072d66d382eb8ff3dd8e00828deadb5af1a93b0d8ce4b.png",
    "Self Destruct": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f76e4b710ceb71f2e260029fc8d0ad15b227e3f006ab1b6c0c4e44da98c2d614.png",
    "Hand Cannon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/49c404d5887c562cdb5aafb55979c5589a450c0e18fa9d62a3c8cc0ac585886e.png",
    "Seismic Slam": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20f721d5fd05f91e203d6e0007a137bdc90a161356f85d5aa88b2ab02b8da22b.png",
    "Power Block": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/56267df764931eadeae09513e0f1b9594ae238eebba84878c501ba4b69acb71f.png",
    "Scattergun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f2e438e49ffae25e094d79f876a8538149ff2aefd7cdf962da4556bd3551184e.png",
    "Adrenaline Rush": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1706243e4996af6844e7f8233bbd3f98f04583a223cd3ad926d40ef6c4c8557.png",
    "Overrun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c23cc1056dcc40fb5976f3987181b7a46406a0a133f1e95b9b1db11d36253363.png",
    "Cardiac Overdrive": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1d19c61b479c82bbdd8ed645ccdec54e16431409d3c8a56b27376c7f8630ec9c.png",
    "Cage Fight": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/795ba75b2aaf304f69ea6fbc6e7fbfe5d3d4d7365d776243f8241f8e9e7f208e.png",
    "Energy Javelin": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0cf93f55a30fe7ec769c5f2eebd284c92851d6b1dbaca0e2c39eae908a9b35c6.png",
    "Terra Surge": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d8892b56df62b068343e5029a2ae1e2fa54f7568febac7141ffa945d02e214c.png",
    "Void Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a40466f823f39910c8453a42d9338e434d8d36d120c540a381c6a9a1557da78.png",
    "Annihilation": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbffca5b7b1e0dcc7a0cceaffe1fedb1a6bf7af73e71218a15df2779fc97805f.png",
    "Ravenous Vortex": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7a7334480013e1d2eccd7df8b4b1e2f484ca81dfe5719fd3506d1055ba79908c.png",
    "Rocket Hammer": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f116232be8cdbfd5e5ebd7ac13731f928e3b56e72fa0337e5ede414cc5944b08.png",
    "Barrier Field": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/121f13903665417446ee4673d9740080a3bc117e285cf3dcf6547861a0bc7d43.png",
    "Firestrike": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/568a5f49875557f735af36dce68474a923f7e8582a7be20fb68b6ee66ac077e6.png",
    "Charge": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/40c9f1c060033e58120c9ec174008b8f5d833412923f7f351a32e5df47fe8166.png",
    "Earthshatter": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a63041a68d81c202a47a95035878edcfa75d5aa3f72414a7e84e1b1a68594bed.png",
    "Scrap Gun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/50b6e388a6693ce31b5a1889e53037970a1b884b8265834f33dd6f7a3dedce44.png",
    "Chain Hook": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/139deabeb3d62c451b558367bf5e64641583355d99ed90fe42107a5716fdca3b.png",
    "Kinetic Grasp": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a7401d18a391bc0eafddd8fc47a31ccc7f277190ab61ed14ae98408f576d6a23.png",
    "Accretion": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/594b0ecbb34b41b288c08bc7b040b273f25289ef0afc2d00828d6a30a0687236.png",
    "Tesla Cannon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/050de92c7ce31e42368c796d9c246210a40bb1bd4a5273b2d64d8a980e1f9f9a.png",
    "Jump Pack": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbad1fe535da5b932ad706a0ca06373d530f1210cbbb095ef1bc8b3a7cc64172.png",
    "Primal Rage": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/685608721cb914e0412a090eb1e89c0f5d10edfb3dbc34218ba3acd35611c990.png",
    "Particle Cannon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/02aebadea29904eca48f514437522f9f3a52ea266e6c2b2688dad39641071bda.png",
    "Particle Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2d462e28ae2fc60b3ef9c32702bbc88936885dd7d20746a31dd2e3c51c20f199.png",
    "Projected Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e42984ee8329a50e9c2460ae2df7670d7be9846a093c336e4576d1eea1fb2f1.png",
    "The Best Defense": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e60ad8d06a44f829f6110b528751d2e5a1840e0a72bed4a9c848970ba6ebae80.png",
    "Incendiary and Volatile Changuns": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/df6bae435e7e319b51fe4977e92971fcfbb9b30fab2f39d1e614660274fab226.png",
    "Nemesis Form": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5a9818afe979474cd23a8a3863522be14ae549df841a6a7efc9ed5398f3d692f.png",
    "B.O.B": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e788b12d476e896dac3831bbc0842fb3b4d07a89b3c337959d9a6cd6ea5a7df5.png",
    "A-36 Tactical Grenade": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/37f3d4912b5ff848e9712a7941c5ac0123483561b4ddb1f9273b9c932d43a1bf.png",
    "Configuration: Assault": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5cf3fc40ec6eeee9716f66a934d9bf7f0803a924e72c12c5d1a6c74e57c933bd.png",
    "Configuration: Artillery": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/06c377aef476bfb21ee1dca3d4d1151f8a4131b388a5489f3dfce6fb232a2711.png",
    "Sticky Bombs": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcaa626e367b80b5bcd2425e26e0075b5343990785bc96e1705325904f73fe96.png",
    "Storm Bow": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1aa4358e8a1d423dd55669780908b856141a783d053224b629b064c66288469e.png",
    "Storm Arrows": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/92c56621ba267d94f16baacda3f10ba7777b475935981b02e5026449d8e3d79c.png",
    "Concussion Mine": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1d6135a3089363cf2c59d5157740cf5dc4ad572bc215553672a79812c397dbd2.png",
    "RIP-Tire": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d16b5c6c337b1c0ecee3e5bf0760c870927e921fed8f0caed12dcb996b5347ae.png",
    "Cryofreeze": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/183591c8c22fa134b6826555caf28481a4a3a22ec96d53a935612e0e45425378.png",
    "Ice Wall": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd63b2d05e4a2aa8615b7cad828fd05427f07e69c7611a662c5cb0d726b82627.png",
    "Blizzard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/892fd12cc3f8bd3b54bbc175b6d8caecdedaa819c819c5fc216c3c2b4f486a3f.png",
    "Rocket Launcher": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c5fee4019276f284dc81e3eaa4f6244a3a7477fbcebc2b5e70a1b9bdfc0fab9b.png",
    "Barrage": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0708775beda1d200b586ae1d019522ea5ad8baa9bdcbbe076854102830f9fdae.png",
    "Death Blossom": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e35595575880a304e14d427a0f9f5f04dc0886ba0f4cadd731ac935174f031e2.png",
    "Power Slide": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5e94ae14aee5e5054a6347e25f1c7ddd284b0cb73925dbc716e358970ec94f0d.png",
    "Heavy Pulse Rifle": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/69eaf669cd646a617439592615f023cfec82c27f4a3e19f48188941b3feaf55f.png",
    "Biotic Field": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aaadd3dee89ac8797ecb7a1e647f574a034b1930726296fd17946d343254bdf0.png",
    "Tactical Visor": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5e8d4b8fb5cd1271314b8462012e9894c811a7c4857739e73bde53f2431e673d.png",
    "EMP": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6104a559ac558db8f7356a10b419d1330e98758ba9f8099666d694c088c64265.png",
    "Sentry Turret": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6ca1ad903ec0121026994bd2318dd5f2488ba40e5dbf5bdb2d5fad8474359253.png",
    "Teleporter": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13b45663f441144ded977e8ccf9ed180c213176206a9f6f9e189e29f09a03b64.png",
    "Photon Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/366a8cb1fd0718d4e2307674c713277b2a6c095c1997ddb7f4b9d9779063adb1.png",
    "Rivet Gun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6fd3a8b1e1c43cd3c6f1a03d6ff9e76d9394d537235bc7b57380e78937e991ff.png",
    "Molten Core": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/640e2363d97cfe133716bb2811d5dedb18faddb50ebbf77c415163ea50e87b41.png",
    "Pulse Pistols": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82520ccd791a5befa5ac74a6b5263471de44b0674abb07fbf1568c149c88a91a.png",
    "Infra-Sight": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b7783e8f83afc45dac37b80d0801a5b8200727e3dde299510d2f1886e0c7237b.png",
    "Shuriken": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d0916035141abd9ab2bf72dbcfd0460b7a0019529e023d259ad4340890b34b3.png",
    "Deflect": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9e46bda733749ddd6512b61c021b4487b6201338a9ff39c716e4ee06e5d63a58.png",
    "Dragonblade": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e9c3c82c08ce1a6006dbdf6905591040ed83ddceba81efb2e526c217cd57c931.png",
    "Biotic Rifle": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/efe0ebb135e87dc26b60f0d20500dcd7553ad121ab2b10cd4ffb5db17be9c977.png",
    "Sleep Dart": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20707fd82265412fdc6d2353daa88ec7558cd71c89aa3ac6cf0e78bbbfcabd80.png",
    "Biotic Grenade": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c8190b234bf0a0e28eecffe162d0c942e6b8656e95f4688c6ca3b025fa5a487d.png",
    "Nano Boost": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6fda18b343f3fd0e8dc50fa5a91589e1ca9ed7471a354f61dfc9f22b27b19497.png",
    "Biotic Launcher": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/af62dfb3476b6389472188ce9e6e0e296928a5cb3ae87a4ed5133c8330e46f0d.png",
    "Regenerative Burst": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d887d165f7b0eb98a30af8f274ff740c6c7735af719b93e95dd9da17558815d8.png",
    "Immortality Field": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d66d82bab88fc813080dd15e31629cc3aa7c8b41cfb41d5b962b628dd345e433.png",
    "Amplification Matrix": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a31371b55e4007e67a86f8495949970d20f64b2f0166e78d3fd16217e090a83.png",
    "Inspire": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/487545fb37163e4029e1e8483266180fbcc59b7e8482062563168998774615f8.png",
    "Rocket Flail": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1304eead9caa02eb2057c7f9a3eb758bd438086223a8d6c475bb6912da5b8132.png",
    "Repair Pack": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5f9f1e00af992f4a090cafc8e83821dd2848f22cb9e0205fafcedacb26bd7335.png",
    "Captive Sun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/556c78ff01455fb1ab7ed7808e681ae0f1cd1fdf0fe1c92fe89672ea261ad187.png",
    "Kunai": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dd7da4b0caa30dafaa3359c902b31866e547f9a1ea7952d7f536e1671d47d9bd.png",
    "Kitsune Rush": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f29fd68592d73f20da39d783e0e2f86dcc65c311912d3284062d2bd1a8aa1c52.png",
    "Healing Blossom": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a3ccff02b44507df5c9bdaced0ecd56ac80b33285ad8a60e6c454acf90560579.png",
    "Thorn Volley": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2ff86a970fedb412a1166fddfbca13bbd08156043012608e538867f792fc1d78.png",
    "Petal Platform": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f64582890d92e968d79c54f9bb8cf1b9b1cc8da6dca7b8bdc647512957cac89f.png",
    "Sound Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/21c5a17be341a3c0da2dcc9372f4f3c88ef622c80776360bd844d0fba3eb88a7.png",
    "Caduceus Staff": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d1a18f702a0e30d58608da51a0b8eeeab72a04faf0de3579ce625066caa8389e.png",
    "Caduceus Blaster": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9d3118f2f0a262678fb1b11ffbaa3f5e929e453cb4d7c819e69ff137cde918e1.png",
    "Valkyrie": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0f5455a8a464e85370365bc954dc6c1cca11f4f5c09e7e6eee7a3dde29170c9e.png",
    "Snap Kick": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/43fbd6de39a636c92c9f17ee4638216fd5cd7dd517c94125e24fa64cddd7845e.png",
    "Orb of Destruction": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5740abd7e5f0de513ebcb32b073f27ba8f5625804598d5762cefd0c7331c1437.png",
    "Transcendence": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6ac5d4f08023cafc9f5412e45141cddecfdb2cb43ecf8415c12d1d161cce4678.png",
    "Regeneration": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c14b2c5652526a006233965b176fb2b5af9e7c5d44045fad3844267303f07091.png",
    "Sympathetic Recovery": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c14b2c5652526a006233965b176fb2b5af9e7c5d44045fad3844267303f07091.png",
    "Projected Barrier": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e42984ee8329a50e9c2460ae2df7670d7be9846a093c336e4576d1eea1fb2f1.png",
    "Meteor Strike": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa96b2650987b3784a725a0fb1704f7191a686a4f42c9ccf61c404e2f08b158c.png",
    "Augmented Fusion Driver": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8bf67f548fb8dd8fde4dd07ae567e635f8d6229c330a3656134697b9ecbd9140.png",
    "Void Accelerator": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f9b14ddf35c743968761ca0abd260385d836df9ce7d196a688ee3b5f25a720ca.png",
    "Pummel": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1dd2e8ea208e8a79def7852a422924c0c5f791ee7f09a0541240271bd3ecb0e7.png",
    "Pig Pen": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0150c28fe47ff4a7c16138266bf2b4903bd45e4b7770ab40572bb792b647838c.png",
    "Tri-shot": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8fc9f68f9cdcd7c90ce902d1882bca2e783609f7f0e62c8ee00996eec4026063.png",
    "Concussive Blast": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9747b440730824756ae2d17e4d1f38468f36c985c35f56cf1f175a613279479a.png",
    "Translocator": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e81f286184e24512c724af16a960a1faca6ade164238b025d19da64226f05f4d.png",
    "Deploy Turret": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a25d559460eed995f177b84eda6000aca6a52c8600dcf2249cc50ca31aa9c786.png",
    "Light Gun": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24074dececa8bf7b57628509e70731916db62b5ab5b30660ac1727b20bbc5b4d.png",
    "Widow's Kiss": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13a1e7903c23a5e140aa01fa930f585c1ea69e1e24378c0462f42053085f7ad9.png"
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let before_patch_path = "Overwatch 2:recent"
let after_patch_path = "Overwatch 2:latest"
if (urlParams.get("before")) {
    before_patch_path = urlParams.get("before")
}
if (urlParams.get("after")) {
    after_patch_path = urlParams.get("after")
}

function patch_from_path(joined_path) {
    let path = joined_path.split(":");
    if (path[1] == "oldest") {
        return path[0] + " - " + patchList[path[0]][0];
    } else if (path[1] == "latest") {
        return path[0] + " - " + patchList[path[0]][patchList[path[0]].length - 1];
    } else if (path[1] == "recent") {
        return path[0] + " - " + patchList[path[0]][patchList[path[0]].length - 2];
    } else {
        return path[0] + " - " + path[1];
    }
}

export let before_patch = patch_from_path(before_patch_path);
export let after_patch = patch_from_path(after_patch_path);

function isEmpty(obj) {
    for (var i in obj) { return false; }
    return true;
}

function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}

export function convert_to_changes(before, after) {
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
        for (let key in after) {
            if (!(key in before)) {
                result[key] = [undefined, after[key]];
            }
        }
        return result;
    }
    return [before, after];
}

export function getChangeText(name, change, units) {
    if (change[0] === undefined || !Array.isArray(change)) {
        let new_value = change[1];
        if (!Array.isArray(change)) {
            new_value = change;
        }
        if (units == "percent") {
            return `There is now ${new_value}% ${name.toLowerCase()}.`;
        } else if (units == "meters") {
            return `There is now ${new_value} meter ${name.toLowerCase()}.`;
        } else if (units == "seconds") {
            return `There is now ${new_value} second ${name.toLowerCase()}.`;
        }
        return `There is now ${new_value} ${name.toLowerCase()}.`;
    } else if (typeof change[0] == "number") {
        if (change[1] === undefined) {
            return `${name} removed.`;
        } else if (units == "percent") {
            let change_type = "increased";
            if (change[0] > change[1]) {
                change_type = "reduced";
            }
            return `${name} ${change_type} from ${change[0]}% to ${change[1]}%.`;
        } else if (units == "health per second") {
            let change_type = "increased";
            if (change[0] > change[1]) {
                change_type = "reduced";
            }
            return `${name} ${change_type} from ${change[0]} to ${change[1]} health per second.`;
        } else if (units == "seconds") {
            let change_type = "increased";
            if (change[0] > change[1]) {
                change_type = "reduced";
            }
            return `${name} ${change_type} from ${change[0]} to ${change[1]} seconds.`;
        } else if (units == "meters") {
            let change_type = "increased";
            if (change[0] > change[1]) {
                change_type = "reduced";
            }
            return `${name} ${change_type} from ${change[0]} to ${change[1]} meters.`;
        } else if (units == "relative percent") {
            if (change[0] > change[1]) {
                return `${name} reduced by ${round(100 * (1.0 - change[1] / change[0]), 2)}%.`;
            } else {
                return `${name} increased by ${round(100 * (change[1] / change[0] - 1.0), 2)}%.`;
            }
        }
        let change_type = "increased";
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
            changeRender += `<li>${getChangeText(generalRule, changes.general[generalRule], units.general[generalRule])}</li>`
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
    for (let role in changes.heroes) {
        let generalChangeRender = "";
        if (changes.heroes[role].general) {
            for (let generalRule in changes.heroes[role].general) {
                generalChangeRender += `<li>${getChangeText(generalRule, changes.heroes[role].general[generalRule], units.heroes[role].general[generalRule])}</li>`
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
        for (let hero of Object.keys(changes.heroes[role]).sort()) {
            if (hero == "general") continue;
            let generalChangesRender = "";
            let heroData = changes.heroes[role][hero];
            if (Array.isArray(heroData)) {
                heroData = heroData[1];
            }
            if (heroData.general) {
                generalChangesRender += "<ul>";
                for (let property in heroData.general) {
                    generalChangesRender += `<li>${getChangeText(property, heroData.general[property], units.heroes[role][hero].general[property])}</li>`
                }
                generalChangesRender += "</ul>";
            }
            let abilities = "";
            for (let ability in heroData.abilities) {
                let ability_changes = "";
                for (let stat in heroData.abilities[ability]) {
                    if(!units.heroes[role][hero].abilities[ability]) {
                        console.error(`Missing ability for ${hero} - ${ability}`)
                    }
                    if(!units.heroes[role][hero].abilities[ability][stat]) {
                        console.error(`Missing units for ${hero} - ${ability} - ${stat}`)
                    }
                    ability_changes += `<li>${getChangeText(stat, heroData.abilities[ability][stat], units.heroes[role][hero].abilities[ability][stat])}</li>`;
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



let patch_options = Object.entries(patchList)
    .flatMap(([k, v]) => v
        .map((p) => `${k} - ${p}`)
        .map((p) => `<option value=\"${p}\">${p}</option>`)
    ).join();
for (let i = 0; i < patch_selectors.length; i++) {
    patch_selectors[i].innerHTML = patch_options;
}
document.getElementById("patch_before").onchange = function () {
    before_patch = this.value;
    updatePatchNotes()
};
document.getElementById("patch_before").value = before_patch;
document.getElementById("patch_after").onchange = function () {
    after_patch = this.value;
    updatePatchNotes()
};
document.getElementById("patch_after").value = after_patch;
updatePatchNotes();