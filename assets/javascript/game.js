//what am i allowed to write/?
//is it possible to write javascript that has never been written before? should i?
//is it legal to copy something that I wrote? what if i was inspired? is this all trash? is it all stolen? 
//why are you still reading this? What is your goal? 
//id like to establish global variables, but that's been done by others.

//id like to keep track of some variables to store information in, and use them to fill in some divs in my index.html, but i cant think of an orginal way to say that. 

//how can i write logic and be original? 

//Everything following this comment is stolen.

var trashlist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var trashw = 0;
var trashl = 0;
var trashleft = 9;
var trash = [];
var trashletter = null;
var trashcomputer = trashlist[Math.floor(Math.random()*trashlist.length)];

function trashtrash() {

};

function trashtrashtrash() {

};

function trashtrashtrashtrash() {

};

function trashtrashtrashtrashtrash() {

};

function trashtrashtrashtrashtrashthrash() {

};

function trashresettrash() {
    trashw = 0;
    trashl = 0; 
    trashleft = 9;
    trash = [];
};

//im dumb
//run this trash after the html loads. NOPE.

//stolen from https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
document.onkeyup = function(event) {
        //because i want it to be lowercase. thats why. or not. whatever. get a life. move on.
        var trashuser = event.key;
        var trashman = trashlist.includes(trashuser);
        console.log("man, what did i pay fourteen thousand dollars for?");
        console.log(trashman);
        console.log(trashuser);
        console.log(trashlist);
        if(trashman === false) {
            alert("you're almost as terrible as me.");
            return false;
        } else if(trashman === true) {
            trash.push(trashuser);
            trashtrashtrashtrashtrashthrash();
            trashtrashtrashtrashtrash();

            if (trashleft > 0) {
                if (trashuser == trashletter) {
                    trashw++;
                    document.getElementById("#trashjunk").innerHTML = "non-losses: " + trashw;
                    trashresettrash();
                }
            } else if(trashleft == 0) {
                trashl++;
                document.getElementById("#trashdebris").innerHTML = "LOSSES: " + trashl;
                trashresettrash();

            }
            return false;
        }
        else {
            alert("iT's A tRaP!111!");
        }
        console.log(trashw);
  };

