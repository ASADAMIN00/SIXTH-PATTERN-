var num = 15;

// Loop for create no. of rows 
for (var i = 1; i <= num; i++) {

    // Loop for create spaces around LEFT CORNER 
    for (var j = num; j > i; j--) { // 15 > 1

        document.write('&nbsp');     

    }

    // Loop for print * 
    for (var k = 1; k <= i; k++) { // 1 <= 1 = T | 2 <= 1 = F

        document.write('*')

    }

    document.write('<br>')

}

var Num = 14;

// run 5 times , LOOP FOR print no. of rows
for (var p = 1; p <= Num; p++) { // run 5 times , print no. of rows | 1 <= 5 = T

 // LOOP FOR create space
 for (var q = 1; q <= p; q++) { // increase value according to i | 1 < 1 | 1 < 2 | 2 < 2 "terminate"

    document.write('&nbsp');

 }

 // LOOP FOR print *

 for (var r = Num ; r >= p; r--) { // 1 >= 1

    document.write('*');

 }
 
 document.write('<br>');
//  document.write('<br>');

}