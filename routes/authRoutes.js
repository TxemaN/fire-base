const express = require("express");
const router = express.Router();
const{formulario, logear, crearCuenta, creada}=require("../controller/authController")

router.get("/", formulario)

router.post("/logear", logear)

router.get("/crearcuenta", crearCuenta)

router.post("/cuentacreada", creada)


module.exports = router