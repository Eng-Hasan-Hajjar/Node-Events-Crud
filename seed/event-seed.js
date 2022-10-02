const db = require('../config/database')
const Event = require('../models/Evnet')


let newEvents = [

    new Event({
        title: 'beach cleaning at Muscat',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Muscat',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Oman',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Oman',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sohar',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Muscat',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Nizwa',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Nizwa',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        created_at: Date.now()
    }),
    
]

newEvents.forEach( (event)=> {
    event.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})
// let newEvent = new Event({
//     title: ' this is event 1',
//     description: ' ths is the best event in world',
//     location: 'oman',
//     date: Date.now()

// })


// newEvent.save( (err)=> {
    
//     if(!err) {
//         console.log('record was added')
//     } else {
//         console.log(err)
//     }
    
// })




