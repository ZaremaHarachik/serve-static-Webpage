const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));



let foods = [ 
    { 
        id: 1, name: 'Pizza', 
        cuisine: 'Italian', 
        price: 9.99 
    }, 
    { 
        id: 2, name: 'Sushi', 
        cuisine: 'Japanese', 
        price: 12.99 
    }, 
    { 
        id: 3, name: 'Tacos', 
        cuisine: 'Mexican', 
        price: 7.99 
    }, 
    { 
        id: 4, name: 'Pad Thai', 
        cuisine: 'Thai', 
        price: 10.99 
    }, 
    { 
        id: 5, name: 'Burger', 
        cuisine: 'American', 
        price: 8.99 
    } 
];

app.get("/foods", (req, res) => {
    res.status(200).json(foods);
})



app.listen(3000, () => {
    console.log("listen on port 3000", 3000)
});