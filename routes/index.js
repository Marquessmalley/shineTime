const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/", (req, res) => {
  res.render("index.ejs", { contact: new Contact() });
});

router.post("/", async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.text,
  });
  try {
    const newContact = await contact.save();
    res.render("confirmation", { contact: newContact });
  } catch {
    res.send("error");
  }
});

module.exports = router;
