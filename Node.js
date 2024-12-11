const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let ratings = [];
let totalRatings = 200000;
let averageRating = 4.5;

app.use(bodyParser.json());

// Endpoint to save rating
app.post("/save-rating", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    ratings.push(rating);
    totalRatings++;
    averageRating = (averageRating * (totalRatings - 1) + rating) / totalRatings;

    res.json({ success: true, averageRating: averageRating.toFixed(1), totalRatings });
});

// Serve static files for the demo
app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));