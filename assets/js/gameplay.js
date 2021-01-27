const easyAnagrams = [
    {answer: "calm", clue: "peace"},
    {answer: "lantern", clue: "guiding light"},
    {answer: "blemish", clue: "imperfection"},
    {answer: "divine", clue: "holy"},
    {answer: "emotion", clue: "feelings"},
    {answer: "rotation", clue: "circular"},
    {answer: "karma", clue: "what comes around goes around"},
    {answer: "revenge", clue: "payback"},
    {answer: "shipwreck", clue: "the Titanic"},
    {answer: "poetry", clue: "... in motion"}]

const mediumAnagrams = [
    {answer: "rejoice", clue: "celebrate"},
    {answer: "elevate", clue: "higher"},
    {answer: "invulnerable", clue: "can't be hurt"},
    {answer: "liberty", clue: "freedom"},
    {answer: "scarce", clue: "hard to find"},
    {answer: "zealot", clue: "a true fanatic"},
    {answer: "heretic", clue: "a blasphemous person"},
    {answer: "subordinate", clue: "member of the rank and file"},
    {answer: "citadel", clue: "fortress"},
    {answer: "paramount", clue: "important"}]

const hardAnagrams = [
    {answer: "tyrannical", clue: "oppressive"},
    {answer: "meticulous", clue: "in great detail"},
    {answer: "miniscule", clue: "tiny"},
    {answer: "flagrant", clue: "brazen wrongdoing"},
    {answer: "juxtapostion", clue: "side by side comparison"},
    {answer: "paradox", clue: "a contradiction"},
    {answer: "philanthropic", clue: "charitable intentions"},
    {answer: "impervious", clue: "no entry"},
    {answer: "emphatic", clue: "forceful"},
    {answer: "prehistoric", clue: "time of the dinosaurs"}]

const nextButton = document.getElementById('next-btn')
const anagramElement = document.getElementById('anagram')
const clueElement = document.getElementById('clue')
let shuffledAnagrams, currentAnagramIndex

function startGame() {
    
    // on easy mode I want to shuffle through the easyAnagrams object take out the answer and use function to scramble the word to make the anagram
    if (sessionStorage.getItem("gamemode") === "easy") {
    shuffledAnagrams = easyAnagrams[Math.floor(Math.random()*easyAnagrams.length)]
    nextAnagram();

    // on medium mode I want to shuffle through the mediumAnagrams object
    } else if (sessionStorage.getItem("gamemode") === "medium") {
        shuffledAnagrams = mediumAnagrams[Math.floor(Math.random()*mediumAnagrams.length)]
        nextAnagram();

    // when it's neither on easy or medium I want to shuffle through the hardAnagrams object
    } else {
        shuffledAnagrams = hardAnagrams[Math.floor(Math.random()*hardAnagrams.length)]
        nextAnagram();
}

function nextAnagram() {
    showAnagram(shuffledAnagrams[currentAnagramIndex])
}

function showAnagram(anagram, clue) {

    // want to show the current anagram and clue from the easyAnagram object when on easy mode
    if (sessionStorage.getItem("gamemode") === "easy") {
        anagramElement.innerText = easyAnagrams.anagram
    clueElement.innerText = easyAnagrams.clue
    }

    // want to show the current anagram and clue from the mediumAnagram object when on medium mode
    else if (sessionStorage.getItem("gamemode") === "medium") {
        anagramElement.innerText = mediumAnagrams.anagram
    clueElement.innerText = mediumAnagrams.clue
    }

    // want to show the current anagram and clue from the hardAnagram object when on hard mode
    else {
        anagramElement.innerText = hardAnagrams.anagram
    clueElement.innerText = hardAnagrams.clue
    }
    
}


function answerSubmitted() {

}

function countdownTimer() {

    $("#timer").removeClass("yellow-timer");
    $("#timer").removeClass("red-timer");
    time = 30;

    counterTime = setInterval(function () {
        $("#timer").html(time);
        time--;
        if (time<16 && time>5) {
            $("#timer").addClass("yellow-timer");
        }
        if (time<=5) {
            $("#timer").addClass("red-timer");
        }
        if (time<=0) {
            resetTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(counterTime);
    countdownTimer();
}

function stopTimer() {
    clearInterval(counterTime);
}

function finalScore() {
    $("#endgame-score").html(`You fnished the game with ${localStorage.getItem("points")} points`)
}}


function createAnagram(answer) {
    var newAnagram = answer.split('');

    newAnagram.sort(function() {
        return 0.5 - Math.random();
    });
    answer = newAnagram.join('');
    return answer;
}

answer = easyAnagrams.answer

answer = createAnagram();

console.log();


