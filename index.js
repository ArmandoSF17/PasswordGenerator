const characters = {
    uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specials: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
}


let errorEL= document.getElementById("error")

let pwdEl1= document.getElementById("box-one")   
let pwdEl2 = document.getElementById("box-two") 
let genButton = document.getElementById("btn-pwdgenerator")

let uppercaseBox = document.getElementById("inc-uppercase")
let numbersBox = document.getElementById("inc-numbers") 
let specialBox = document.getElementById("inc-special") 
let lowercaseBox = document.getElementById("inc-lowercase") 
let copyBtn1 = document.querySelector(".copy-btn-1")
let copyBtn2 = document.querySelector(".copy-btn-2")






console.log(pwdGen2.textContent="er") 




function generatePassword() {

    let charactersPool = [];


    if (lowercaseBox.checked) {
        charactersPool = charactersPool.concat(characters.lowercase)
        errorEL.textContent = "";
    }
    
    if (uppercaseBox.checked) {
        charactersPool = charactersPool.concat(characters.uppercase)
        errorEL.textContent = "";
    }

    if (numbersBox.checked) {
        charactersPool = charactersPool.concat(characters.numbers)   
        errorEL.textContent = "";   

    }

    if (specialBox.checked) {
        charactersPool = charactersPool.concat(characters.specials)
        errorEL.textContent = "";
    }

    let password = ""
    for (let i = 0; i < 12; i++) {
        let randomGen = Math.floor(Math.random() * charactersPool.length)
        password += charactersPool[randomGen]
    }

   

    return password
}


function pwdGen1() {
    checkedBoxes()
}


function pwdGen2() {
    checkedBoxes()
}



genButton.addEventListener("click", function() {
    pwdGen1()
    pwdGen2()
})


function checkedBoxes() {
    if (lowercaseBox.checked || uppercaseBox.checked || numbersBox.checked || specialBox.checked) {
        pwdEl1.textContent = generatePassword()
        pwdEl2.textContent = generatePassword()
    } else {
        errorEL.textContent = "You must selected at least one option."
    } 
}

copyBtn1.addEventListener("click", function() {
    let msgEl = document.getElementById("copy-one");
    navigator.clipboard.writeText(pwdEl1.textContent);

    msgEl.classList.add("show");
    msgEl.textContent = "Copied to the clipboard!";
    setTimeout(() => {
        msgEl.classList.remove("show");
        msgEl.textContent = "";
    }, 2000);
    
    })

copyBtn2.addEventListener("click", function() {
    let msgEl = document.getElementById("copy-two");
    navigator.clipboard.writeText(pwdEl2.textContent)

    msgEl.classList.add("show");
    msgEl.textContent = "Copied to the clipboard!";
    setTimeout(() => {
        msgEl.classList.remove("show");
        msgEl.textContent = "";
    }, 2000);
    
})







