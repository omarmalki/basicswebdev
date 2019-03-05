var userFirstName = prompt("What's your first name?");
var userLastName = prompt("What's your last name?");
var age = prompt("What's your age?");
alert("Hello " + userFirstName +' '+ userLastName);
alert("Your age is "+ age +'.'+" Feel old yet?");

if( age < 18 ) {
    alert("You can't enter");
}
else if (age >= 18 && age < 21) {
    alert("You can enter but cannot drink");
}
else {
    alert("you going to drunk as fuck");
}