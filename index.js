const express = require("express");
const app = express()
const axios = require("axios")
const path = require("path")

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/players", async (req, res) => {
    const apiRes = await axios.get("https://www.balldontlie.io/api/v1/players?per_page=100")
    res.render("players", {players: apiRes.data.data})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})