const generateButton = document.getElementById("generate-button");
const passwordResult = document.getElementById("password-result");

generateButton.addEventListener("click",()=>{
   const passLength = Number(document.getElementById("pwd").value);
   const incCapital = document.getElementById("include-capital").checked;
   const incSmall = document.getElementById("include-small").checked;
   const incNumber = document.getElementById("include-numbers").checked;
   const incSymbol = document.getElementById("include-symbols").checked;
   let inc = [];
   let resPass = "";
   if(incCapital){
    for(let i =65; i<=90; i++){
        inc.push(String.fromCharCode(i));
    }
   }
   if(incSmall){
    for(let i=97; i<=122; i++){
        inc.push(String.fromCharCode(i));
    }
   }
   if(incNumber){
    for(let i=48; i<=57; i++){
        inc.push(String.fromCharCode(i));
    }
   }
   if(incSymbol){
    const specialChars = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~`';
    for(let i=0; i<specialChars.length; i++){
        inc.push(specialChars[i]);
    }
   }
   for(let i=0; i<passLength;i++){
    resPass = resPass+inc[Math.floor(Math.random()*inc.length)]

   }
    passwordResult.textContent = resPass;
})

// const specialChars = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~`';

// for (let i = 0; i < specialChars.length; i++) {
