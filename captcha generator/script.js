const captcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.querySelector(".input-area input");
const checkBtn = document.querySelector(".check-btn");
const statusTxt = document.querySelector(".status-text");
let characters = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRTSUWXYZ1234567890'];
console.log(characters);

function show() {
     
    captcha.innerHTML = "";
    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length); // Corrected the typo here
        captcha.innerHTML += characters[randomIndex]; // Append the character at the randomly generated index
    }
    
}

inputField.addEventListener('input', function() {
    const inputValue = inputField.value.trim(); // Remove leading and trailing whitespaces
    if (inputValue.length === 6) {
        checkBtn.style.display = 'inline-block'; // Show the check button
    } else {
        checkBtn.style.display = 'none'; // Hide the check button
    }
});
show();
reloadBtn.addEventListener("click" , ()=>{
    
    show();
    inputField.value = "";
})
checkBtn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    statusTxt.style.display = "block";
    let inputVal = inputField.value;
    if(inputVal === captcha.innerHTML){
        statusTxt.innerHTML = "You are approved!!";
        setTimeout(() => {
            show();
            inputField.value="";
            statusTxt.innerHTML = "TimeOut,Retry!!";
            statusTxt.style.color = "red";
        }, 5000);
    }
    else{
        statusTxt.innerHTML = "You are not approved. Please try again!!";
    }
})