const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const formulario = async (req, res) => {

    res.render("identificar.ejs")

}


const logear = async (req, res) => {


    const { email, password } = req.body
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            user.getIdToken()

            res.send("logeado")
            console.log(user)
            // ...
        })

        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

}


const crearCuenta = async (req, res) => {

    res.render("crear.ejs")

}


const creada = async (req, res) => {

    const { email, password } = req.body;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            res.send("cuenta creada")
            console.log(user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}




module.exports = {
    formulario,
    logear,
    crearCuenta,
    creada

}