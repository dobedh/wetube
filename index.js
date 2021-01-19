import express from "express";
const app = express() 

const PORT = 4000

const handleListening = () => 
console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hi from home! dobedh");


const handleProfile = (req, res) => res.send("You are seeing my profile");

app.get("/", handleHome) 
app.get("/profile", handleProfile)



app.listen(PORT, handleListening);