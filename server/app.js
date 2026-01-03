const express =  require('express');
const dotenv =   require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const reviewRoutes = require('./routes/reviewRoutes.js');
const adminReviewRoutes = require('./routes/adminReviewRoutes.js');

dotenv.config();
connectDB();

const app = express();


const allowedOrigins = [
    "http://localhost:5173",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);
app.use(express.json());

app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminReviewRoutes);

const PORT = process.env.PORT || 5080;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
