require("dotenv").config()
const express = require("express");
const cors = require("cors");

const pool = require("./db_config")

const app = express();
// client.connect();

//middleware
app.use(cors({ origin: "*" }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const httpServer = app.listen(process.env.PORT || 8000, () => {
    const port = httpServer.address().port;
    console.log("Express is running on port " + port);
})

//routes
app.post('/articles', async (req, res) => {
    const { title, content, img, author_id } = req.body
    console.log("POST : /")
    try {
        const newArticle = await pool.query(
            `INSERT INTO "articles" (title, content, img, author_id) VALUES ($1, $2, $3, $4)`, [title, content, img, author_id]
        )
        console.log("Article Posted")
        return res.status(200).json({ message: "Article Posted" })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

app.get("/articles", async (req, res) => {
    console.log("GET : /")
    try {
        const allArticles = await pool.query(
            `SELECT * FROM articles`
        );
        return res.status(200).json({ data: allArticles.rows })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})


app.post('/users', async (req, res) => {
    const { username, firstname, lastname, email, password, avatar } = req.body
    console.log("POST : /")
    try {
        const newArticle = await pool.query(
            `INSERT INTO "users" (username, firstname, lastname, email, password, avatar) VALUES ($1, $2, $3, $4, $5, $6)`, [username, firstname, lastname, email, password, avatar]
        )
        console.log("User Added")
        return res.status(200).json({ message: "User Added" })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});


app.get("/categories", async (req, res) => {
    try {
        const allCategories = await pool.query(
            `SELECT * FROM categories`
        );
        return res.status(200).json({ data: allCategories.rows })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})