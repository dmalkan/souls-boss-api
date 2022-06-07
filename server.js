const express = require('express')
const { listen } = require('express/lib/application')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

// boss object
const bosses = {
    "asylum demon" : {
        name: "Asylum Demon",
        health: 825,
        souls_ng: 123456,
        loc: "Undead Asylum",
        optional: false
    },

    "taurus demon" : {
        name: "Taurus Demon",
        health: 1215,
        souls_ng: 1234567,
        loc: "Undead Burg Wall",
        optional: false
    },

    "bellfrey gargoyles" : {
        name: "Bellfrey Gargoyles",
        health: 1480,
        souls: 1234567,
        loc: "Undead Parish",
        optional: false
    },
    "capra demon" : {
        name: "Capra Demon",
        health: 1176,
        souls_ng: 1234567,
        loc: "Lower Undead Burg",
        optional: false
    },
    // "gaping dragon" : {
    //     name: "Gaping Dragon",
    //     health: 825,
    //     souls_ng: 123456 ,
    //     loc: "Undead Asylum",
    //     optional: false
    // },


    // "chaos witch quelaag" : {
    //     name:"Chaos Witch Quelaag",
    //     health: 3139,
    //     souls_ng: 1234567,
    //     loc: "Lower Blighttown",
    //     optional: false
    // },

    // "moonlight butterfly" : {
    //     name:"Moonlight Butterfly",
    //     health: 1234,
    //     souls_ng: 10000,
    //     loc: "Darkroot Garden",
    //     optional: false
    // },

    // "great grey wolf sif" : {
    //     name:"Great Grey Wolf Sif",
    //     health: 3432,
    //     souls_ng: 1234567,
    //     loc: "Grave of Artorias",
    //     optional: false
    // },
    
    // unkcown, but also the best rapper alive
    "unkown" : {
        name:"unknown",
        souls_ng: 0,
        loc: "unkown",
        optional: true
    }
    
}

// root
app.get('/',(request, response) =>{
    
    response.sendFile(__dirname + '/index.html');
});

// about
// app.get('/about',(request, response) =>{
//     //some stuff happens
//     response.sendFile(__dirname + '/about.html');
// });

// api
app.get('/api',(request, response)=>{
    //some stuff happens
    // const bossName = request.params.name.toLowerCase();
        response.json(bosses);
})

app.listen(PORT, () =>{
    console.log(`Server is now running on port: ${PORT}...`);
})