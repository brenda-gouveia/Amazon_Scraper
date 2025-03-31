import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/scrape", async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }
    console.log(`Scraping for keyword: ${keyword}`);
    const laptops = await fetchAmazonResults(keyword);
    console.log('Laptop');
    res.json(laptops);
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAmazonResults(keyword) {
    try {
        await delay(5000); // Delay to avoid being blocked by Amazon
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        
        const response = await axios.get(url, {
            headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Connection": "keep-alive",
            "Referer": "https://www.google.com/",
            "DNT": "1", // Do Not Track
            "Upgrade-Insecure-Requests": "1"
                
            }
        });

         const results = parseAmazonResults(response.data);
        //console.log(results);
        return results;
        
    } catch (error) {
        console.error("Error fetching Amazon results:", error.message);
    }
}

function parseAmazonResults(html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const items = document.querySelectorAll(".s-result-item");

    const results = [];
    items.forEach((item) => {
        const titleElement = item.querySelector("h2");
        const title = titleElement ? titleElement.textContent : "";

        const priceElement = item.querySelector(".a-price .a-offscreen");
        const price = priceElement ? priceElement.textContent : "";

        const ratingElement = item.querySelector(".a-icon-star-small");
        const rating = ratingElement ? ratingElement.textContent : "";

        const imageElement = item.querySelector("img");
        const image = imageElement ? imageElement.src : "";

        results.push({ title, price, rating, image });
    });

    return results.filter(item => item.title.includes("Laptop")); // avoid unrelated items
}
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});