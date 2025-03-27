import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.get("/api/scrape", async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }
    console.log(`Scraping for keyword: ${keyword}`);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});