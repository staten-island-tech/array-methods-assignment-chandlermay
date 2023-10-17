const valorantweapons = [
    {
        name:"vandal",
        price: 2900,
        range: "mid",
        killcount: 5561,
        averagedmg: "743 damage per match",
        skins: ["reaver" , "oni" , "prelude to chaos" , "neptune" , "prime"]
    },
    {
        name:"shorty",
        price: 300,
        range: "close",
        killcount: 86,
        averagedmg: "36.3 damage per match",
        skins: ["prelude to chaos" , "oni" , "neptune"]
    },
    {
        name:"spectre",
        price: 1600,
        range: "close",
        killcount: 430,
        averagedmg: "800 damage per match",
        skins: ["prime" , "reaver" , "neptune" , "forsaken"]
    },
    {
        name:"operator",
        price: 4700,
        range: "long",
        killcount: 3340,
        averagedmg: "650 damage per match",
        skins: ["reaver" , "forsaken" , "prelude to chaos" , "glitchpop"]
    }
];

valorantweapons.forEach((valorantweapons) => console.log(valorantweapons.name));

valorantweapons.forEach(valorantweapons => {
    valorantweapons.skins.forEach(element => {
        console.log(element);
    });
}); 

valorantweapons.forEach(valorantweapons => {
    valorantweapons.skins.filter("reaver") =>{
        console.log(valorantweapons.name)
    };
})