const express = require("express")
const firebase = require("firebase/app")
const cors = require('cors');



const{firebaseConfig}=require("./helpers/firebaseHelper")

require('dotenv').config();



  
//SERVIDOR

const app = express();

//VIEWER
app.locals.firebaseConfiguracion = ()=>{
    return firebase.initializeApp(firebaseConfig)
}
app.set("view engine, ejs")
//PARSER
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//PUERTO
const port = 3000
//CORS
app.use(cors());

//FIREBASE

firebase.initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service






 

//RUTAS
app.use("/", require("./routes/authRoutes"));

//ESCUCHA SERVIDOR
app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port}`)

});
