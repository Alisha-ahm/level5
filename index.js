import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const ports = process.env.PORT || 5000;

app.get('/health', (req, res) => {
    return res.status(200).json({ message: "health is good" })
})

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello Alisha" })
})

app.listen(ports, () => {
    console.log(`Server is running on port:${ports}`)
})