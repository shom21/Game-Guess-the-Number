
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

function newGame() {
    window.location.reload()
}

function init() {
   computerNumber = Math.floor(Math.random() * 100 + 1)
   console.log(computerNumber)

}

function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value)      
    userNumbers.push(' ' + userNumber)
    document.getElementById("guesses").innerHTML = userNumbers   

    if (attempts < maxguesses) {
        if (userNumber > computerNumber ){
            document.getElementById("textOutput").innerHTML = "Your number is too high"
            document.getElementById("inputBox").value = ''
            attempts++
            document.getElementById("attempts").innerHTML = attempts 

            if (userNumber > "100" ){
                document.getElementById("textOutput").innerHTML = "Your number is greater than 100" 
				document.getElementById("textOutput").style.color = "#fa4eab";
                document.getElementById("inputBox").value = ''
                attempts++
                document.getElementById("attempts").innerHTML = attempts                
            }      
        }        
        else if (userNumber < computerNumber ){
            document.getElementById("textOutput").innerHTML = "Your number is too low" 
            document.getElementById("inputBox").value = ''
            attempts++
            document.getElementById("attempts").innerHTML = attempts
            
        }             
        else {
            document.getElementById("textOutput").innerHTML = "Congratulations!!! "
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute("Readonly", "Readonly")           
        }
    }
    else {
        let textOutput = document.getElementById('textOutput');
        document.getElementById('textOutput').innerHTML = "You Lose!<br> The computer number was " + computerNumber
        textOutput.style.color = "#fa4eab";
        document.getElementById('inputBox').setAttribute("Readonly", "Readonly")  
    }
}