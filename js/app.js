

const messageField = document.getElementById('message');
const setInnerText = (validateMessage, messageColorClass) =>{
    messageField.innerHTML =`<p class="${messageColorClass}">${validateMessage}</p>`;
}

document.getElementById('submit').addEventListener('click', function(){
    const inputField = document.getElementById('input');
    const inputText = inputField.value.toLowerCase();
    inputField.value = '';
    const emailValidatorReExpress =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailValidatorReExpress.test(inputText) ? setInnerText(`Congrats! <span>"${inputText}"</span> is a valid Email.`, "text-success") : setInnerText(`Ops! <span>"${inputText}"</span> isn't a valid Email.`, "text-danger");
})

