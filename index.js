require('dotenv').config();
const express = require('express');
// import express from 'express'//both are same 

const app = express();

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/aa', (req, res) => {
    res.send('Ayush Singh Chauhan')
})

app.get('/login', (req, res) =>{
    res.send('<h1>please login at my website</h1>')
})

app.get('/youtube',(req,res) =>{
    res.send('<h2>Youtube</h2>')
})

app.listen(process.env.PORT,() => {
    console.log(`Example app listening on port ${port}`)
})