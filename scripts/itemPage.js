const minusButton = document.querySelector('.product__form--minus');
const quantityInput = document.querySelector('.product__form--quantity');
const plusButton = document.querySelector('.product__form--plus');
const sendButton = document.querySelector('.product__form--send');


minusButton.addEventListener("click", (e) => {
    //validaciones
    try {
        let inputValue = Number(quantityInput.value);
        if (inputValue >= 1) {
            inputValue--;
        }
        quantityInput.value = inputValue;
    } catch (error) {
        console.log("Hubo un error, el numero de productos a agregar al carrito no es valido");
    }




})
plusButton.addEventListener("click", (e) => {

    try {
        let inputValue = Number(quantityInput.value);
        inputValue++;
        quantityInput.value = inputValue;
    } catch (error) {
        console.log("Hubo un error, el numero de productos a agregar al carrito no es valido");
    }

})
sendButton.addEventListener("click", (e) => {
    // implementar carrito
    // console.log("se agrego al carrito");
})