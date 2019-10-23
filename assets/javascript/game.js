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
var trashuser = 0;
var trashcomputer = trashlist[Math.floor(Math.random()*trashlist.length)];

function trashtrash() {

};

function trashtrashtrash() {
    this.trashletter = this.trashlist[Math.floor(Math.random() * this.trashlist.length)];
     //because i  want a random number out of 26 choices from the array trashlist. im using this becasue i want global authority.
};

function trashtrashtrashtrash() {

};

function trashtrashtrashtrashtrash() {
    document.getElementById("trashjunkletterz").innerHTML = ("these are things you have guessed: " + trash);
    //becasue i want commas and spaces separating the entries

};

function trashtrashtrashtrashtrashthrash() {
    document.getElementById("trashjunkleft").innerHTML = "you have this guess quantity left: " + trashleft;
};

function trashresettrash() {
    trashw = 0;
    trashl = 0; 
    trashleft = 9;
    trash = [];
    trashtrashtrash();
    trashtrashtrashtrashtrash();
    trashtrashtrashtrashtrashthrash();

};

trashtrashtrash();
trashtrashtrashtrashtrash();
console.log(trashletter);
// establishes an empty guess list and a new computer guess. i cant think of an original way to write this.

//im dumb
//run this trash after the html loads. NOPE.

//stolen from https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
document.onkeyup = function(event) {
        //because i want it to be lowercase. thats why. or not. whatever. move on.
        var trashuser = event.key;
        var trashman = trashlist.includes(trashuser);
        // console.log("stop");
        // console.log(trashman);
        // console.log(trashuser);
        // console.log(trashlist);
        if(trashman === false) {
            alert("sheesh");
            return false;
        } else if(trashman === true) {
            trash.push(trashuser);
            trashtrashtrashtrashtrashthrash();
            trashtrashtrashtrashtrash();
            console.log(trash);

            if (trashleft > 0) {
                if (trashuser == trashletter) {
                    trashw++;
                    document.getElementById("trashdebris").innerHTML = "non-losses: " + trashw;
                    trashresettrash();

                } else {
                    trashleft--;
                    console.log(trashleft)
                    trashtrashtrashtrashtrashthrash();
                    trashtrashtrashtrashtrash();
                    if(this.trashleft == 0) {
                        //this.trashl++;
                        document.getElementById("trashjunk").innerHTML = "LOSSES: " + trashl;
                        trashresettrash();
                    }

                }
                
                 
            return false;
        }
        else {
            alert("iT's A tRaP!111!");
            trashresettrash();
            trashl++;
            document.getElementById("trashjunk").innerHTML = "LOSSES: " + trashl;
        }
        console.log(trashw);
        console.log(trashletter);
        console.log(trash);
  }
};