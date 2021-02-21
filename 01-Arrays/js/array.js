var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42.1;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

//console.log("Tempo " + avgTemp[2]);
/*
var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
for (var i = 0; i < daysOfWeek.length; i++) {

    //   console.log(daysOfWeek[i]);
}

//soma dos dois anteriores e resultado do posterior
var fibonacci = []

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 2;

for (var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]

}

console.log(fibonacci) */
/*
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(11);
//adiciona depois

//adiciona antes
numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)
numbers.unshift(-5)

numbers.pop(); //remove no final

numbers.shift()

//adicionando elementos em posicao especifica

numbers.splice(3, 3, 67)
console.log(numbers); */

//Array bidimensinal
/*
var avgTempWeek = [] //-2
var avgTempWeek1 = [33, 25.2, 19, 27, 23.4]
var avgTempWeek2 = [41, 22.2, 20, 30, 26.4]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

//console.log(avgTempWeek[0][4]);

for (var i = 0; i < avgTempWeek.length; i++) {

    for (var j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[i][j])
    }
}*/

var month = []
var firstWeek = [] //-2
var lastWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4]
var avgTempWeek2 = [41, 22.2, 20, 30, 26.4]

var avgTempWeek3 = [1, 2.2, 8, 6, 6.4, 34]
var avgTempWeek4 = [5, 7.2, 38, 16, 6.4, 24]

firstWeek = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeek, lastWeeks]

for (var x = 0; x < month.length; x++) {

    for (var y = 0; y < month[x].length; y++) {

        for (var z = 0; z < month[x][y].length; z++) {
            console.log(month[x][y][z])
        }
    }
}