import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import candidateRouter from "./routes/candidate.route.js";
import loginRouter from "./routes/login.route.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/v1/candidates", candidateRouter);
app.use("/api/v1/admin", loginRouter);

// app.get("/", (req, res) => {
//     res.send("Recruitment Management Backend Running");
// });

export { app };