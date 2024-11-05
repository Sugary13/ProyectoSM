import { Router } from "express";
import path from "path";
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/index.html"));
});

router.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/login.html"));
});

router.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/register.html"));
});

export default router;


