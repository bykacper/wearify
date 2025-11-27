const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kgoluchowski112@gmail.com",
        pass: "czxq mpct slcl mhcy",
    },
});

app.post("/api/newsletter", async (req, res) => {
    const { name, email } = req.body;

    try {
        await transporter.sendMail({
            from: `WEARIFY Newsletter`,
            to: email,
            subject: "Dziękujemy za zapis",
            text: `Hej ${name}, dziękujemy za zapis do newslettera Wearify`,
        });

        res.json({ message: "Email wysłany pomyślnie" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Nie udało się wysłać maila." });
    }
});

app.listen(4000, () => {
    console.log("🔥 API działa na http://localhost:4000");
});
