require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use(express.json())
// app.use(express())

//port, callback
app.listen(PORT, () => {
    console.log(`TO-DO is listening on port : ${PORT}`)
})


const todo = [
    {id : 1, title : "wash plate", description : "wash all plates at 2pm"},
    {id : 2, title : "market", description : "buy cooking ingredients"},
    {id : 3, title : "online meet", description : "meeting with prof at 6pm"},
    {id : 4, title : "eat", description : "eat fried meat with gari like tobi and jay at 8pm"}
    ]
// Endpoint for my landing page
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to my TODO LIST",
        data: todo
    })
})

// Endpoint for create a task
app.post("/create-task", (req, res) => {
    try{
        const {title, description} = req.body
        if(!title ||!description) throw new Error("Please provide title and description")
            if(title.length < 4) throw new Error("Title must be at least 4 characters")
        todo.push({title, description})
        res.status(201).json({
            success: true,
            message: "task created successfully",
            data: todo
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: "Please provide title and description"
        })
    }
})



// Endpoint Update Task
app.patch("/update-task/:id", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Update Successful"
    })
})


// Endpoint delete Task
app.delete("/delete-task/:id", (req, res) => {
    res.status(200).json({
        success: true,
        message: "deleted Successful"
    })
})

