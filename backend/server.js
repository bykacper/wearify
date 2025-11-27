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
        pass: "czxq mpct slcl mhcy", // wkleic do .env
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

    } catch (error) {
        console.error(error);
    }
});

app.listen(4000, () => {
    console.log("http://localhost:4000");
});
