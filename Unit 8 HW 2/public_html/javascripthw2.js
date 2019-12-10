var numArray = [];
var total = 0;
for (i=0; i < 20; i++){
    numArray[i] = Number(window.prompt("Enter twenty numbers."));
}
for (i=0; i < 20; i++){
    total = total + numArray[i];
}

var average = total/20;

var smallest = numArray[0];

for (i=1; i < 20; i++){
    if (numArray[i] < smallest){
        smallest = numArray[i];
    }
}

var largest = numArray[0];

for (i=1; i < 20; i++){
    if (numArray[i] > largest){
        largest = numArray[i];
    }
}

document.write("The total of your numbers is " + total + ".");
document.write("The average of your numbers is " + average + ".");
document.write("The smallest of your numbers is " + smallest + ".");
document.write("The largest of your numbers is " + largest + ".");
