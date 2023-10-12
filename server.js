
const express = require("express");
const cors = require('cors');
const app = express();
const axios = require('axios'); // Import the axios library

const PORT = process.env.PORT || 5000

// Use cors middleware with specific configuration
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the URL of your frontend application
    methods: 'GET,,POST,DELETE',
    credentials: true,
}));

app.get("/",async(req,res)=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const jsonData = response.data;
        res.json(jsonData);

    }
    catch (error) {
        // Handle errors, e.g., send an error response
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
    }
})

app.get("/user/:id",(req,res)=>{
    console.log("User route requested");
})

app.listen(PORT,()=>{console.log("Server running")})
