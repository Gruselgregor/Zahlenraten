let randomNumber = generateRandomNumber();
let answerwrapper = document.getElementById("answer-wrapper");

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});



let rules = "Ich habe mir eine Zahl zwischen 1 und 100 ausgedacht. " +
            "Kannst du sie erraten? Gib eine Zahl in das Feld mit der Hinterlegung Dein Tipp ein. " +
            "Danach werde ich Dir sagen, ob meine Zahl größer oder kleiner ist als die von dir Geschätzte. " +
            "Versuche mit so wenig Anläufen wie Möglich, die Gesuchte Zahl zu erraten. Viel Erfolg!";

document.getElementById('rules-text').innerText = rules;

console.log("Die generierte Zufallszahl ist: " + randomNumber);



function generateRandomNumber() {
    closeSideMenu();
    return Math.floor(Math.random() * 100) + 1;
}

function checkNumber(){
    answerwrapper.style.display = 'block';
    answerwrapper.classList.add('center');
    let inputNumber = document.getElementById("guess").value;
    if(inputNumber == randomNumber){
        document.getElementById("answer").innerText = "Herzlichen Glückwunsch! Du hast die richtige Zahl erraten!";
    } else if(inputNumber < randomNumber){
        document.getElementById("answer").innerText = "Die gesuchte Zahl ist größer als " + inputNumber;
    } else {
        document.getElementById("answer").innerText = "Die gesuchte Zahl ist kleiner als " + inputNumber;
    }
    document.getElementById("guess").value = "";
    console.log("Die eingegebene Zahl ist: " + inputNumber);
}


function openSideMenu(value=0) {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('closed');

    const highscoreDiv = document.querySelector('.highscore');
    const rulesDiv = document.querySelector('.rules');

    if (value === 1) {
        sideMenu.style.display = 'block';
        highscoreDiv.style.display = 'block';
        rulesDiv.style.display = 'none';
    } else if (value === 2) {
        sideMenu.style.display = 'block';
        highscoreDiv.style.display = 'none';
        rulesDiv.style.display = 'block';
    }
}

function closeSideMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.add('closed');
    console.log('Side menu closed');
}

