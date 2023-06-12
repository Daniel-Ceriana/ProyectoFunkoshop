const express = require("express");
const router = express.Router();
const path = require('path')


router.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + "/../../public/index.html"));
})
router.get("/shop", (req, res) => {

    res.sendFile(path.join(__dirname + "/../../public/pages/shop.html"));
})
router.get("/item", (req, res) => {

    res.sendFile(path.join(__dirname + "/../../public/pages/item.html"));
})
router.get("/login", (req, res) => {

    res.sendFile(path.join(__dirname + "/../../public/pages/login.html"));
})
router.get("/register", (req, res) => {

        res.sendFile(path.join(__dirname + "/../../public/pages/register.html"));
    })
    // router.get("/contacto", (req, res) => {

//     res.sendFile(path.join(__dirname + "/../../public/pages/contacto.html"));
// })



module.exports = router;