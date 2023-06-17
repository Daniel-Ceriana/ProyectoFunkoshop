const { STATUS_CODES } = require('http');
const path = require('path');

const login = (req, res) => {
    //chequear que el formulario tiene datos validos
    console.log(req.body);
    //en teoria si esta todo correcto, deberia logearse,
    //pero por ahora solo da un modal que confirma el logeo exitoso

    // const modal = document.getElementById('modal');
    // modal.style.display = grid;

    res.send(`/`);
    // res.status(200);

}
const register = (req, res) => {
    //chequear que el formulario tiene datos validos
    console.log(req.body);
    //en teoria si esta todo correcto, deberia logearse,
    //pero por ahora solo da un modal que confirma el logeo exitoso

    // const modal = document.getElementById('modal');
    // modal.style.display = grid;

    // res.send();

}


module.exports = {
    login,
    register
};