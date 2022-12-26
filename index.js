const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 15
let passOne = document.getElementById("btn1-el")
let passTwo = document.getElementById("btn2-el")
let length = document.getElementById("pwLength")

function generate(){
    let pass1 = []
    let pass2 = []
    passOne.textContent = pass1
    passTwo.textContent = pass2
        
    for (i = 0; i < 15; i++){
        pass1.push(characters[(Math.floor(Math.random() * 90))])
        pass2.push(characters[(Math.floor(Math.random() * 90))])
    }
    pass1.join()
    pass2.join()
    passOne.textContent += pass1.join("")
    passTwo.textContent += pass2.join("")
}

function copyPass1(){
    let copyPass = document.getElementById("btn1-el")
    navigator.clipboard.writeText(copyPass.textContent)
}

function copyPass2(){
    let copyPass = document.getElementById("btn2-el")
    navigator.clipboard.writeText(copyPass.textContent)
}
