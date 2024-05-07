// Task 1
// let x = confirm("Səhifədən çıxırsan?");

// if (x == true) {
//     alert("Əla");
// } else {
//     alert("Yaxşı fikirləş");
// }

// Task 2

// const MarksWeight1 = 78;
// const MarksHeight1 = 1.69;

// const MarksWeight2 = 95;
// const MarksHeight2 = 1.88;

// const JohnsWeight1 = 92;
// const JohnsHeight1 = 1.95;

// const JohnsWeight2 = 85;
// const JohnsHeight2 = 1.76;

// const MarksBMI1 = MarksWeight1 / MarksHeight1 ** 2;
// const MarksBMI2 = MarksWeight2 / MarksHeight2 ** 2;

// const JohnsBMI1 = JohnsWeight1 / JohnsHeight1 ** 2;
// const JohnsBMI2 = JohnsWeight2 / JohnsHeight2 ** 2;

// if (MarksBMI1 > JohnsBMI1) {
//     alert(`Mark's BMI (${MarksBMI1}) is higher than John's (${JohnsBMI1})!`);
// } else {
//     alert(`John's BMI (${JohnsBMI1}) is higher than Mark's (${MarksBMI1})!`);
// }

// if (MarksBMI2 > JohnsBMI2) {
//     alert(`Mark's BMI (${MarksBMI2}) is higher than John's (${JohnsBMI2})!`);
// } else {
//     alert(`John's BMI (${JohnsBMI2}) is higher than Mark's (${MarksBMI2})!`);
// }

// Task 3

// alert('We have two teams competing with each other: Dolphins vs. Koalas');

// const DolphinsScore = [96, 108, 89];
// const KoalasScore = [88, 91, 110];

// const avgScoreOfDolphins = (DolphinsScore[0] + DolphinsScore[1] + DolphinsScore[2])/3;
// const avgScoreOfKoalas = (KoalasScore[0] + KoalasScore[1] + KoalasScore[2])/3;

// const minScore = 100;

// if (DolphinsScore >= minScore && (avgScoreOfDolphins > avgScoreOfKoalas)) {
//     alert('Dolphins team is a winner');
// } else if (KoalasScore >= minScore && (avgScoreOfKoalas > avgScoreOfDolphins)) {
//     alert('Koalas team is a winner');
// } else if (DolphinsScore >= 100 && KoalasScore >= 100 && (avgScoreOfDolphins === avgScoreOfKoalas)){
//     alert('Each team draws');
// } else {
//     alert('No one wins');
// }

// Task 4

// let bill;

// bill = [275, 40, 430];

// let tip1 = bill[0] >= 50 && bill[0] <= 300 ? bill[0] * 15 / 100 : bill[0] * 20 / 100;
// let tip2 = bill[1] >= 50 && bill[1] <= 300 ? bill[1] * 15 / 100 : bill[1] * 20 / 100;
// let tip3 = bill[2] >= 50 && bill[2] <= 300 ? bill[2] * 15 / 100 : bill[2] * 20 / 100;

// console.log(tip1, bill[0], bill[0] + tip1);
// console.log(tip2, bill[1], bill[1] + tip2);
// console.log(tip3, bill[2], bill[2] + tip3);