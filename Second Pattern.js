var num = 15;

// run 5 times , LOOP FOR print no. of rows
for (var i = 1; i <= num; i++) { // run 5 times , print no. of rows | 1 <= 5 = T

 // LOOP FOR create space
 for (var j = 1; j <= i; j++) { // increase value according to i | 1 < 1 | 1 < 2 | 2 < 2 "terminate"

    document.write('&nbsp');

 }

 // LOOP FOR print *

 for (var k = num ; k >= i; k--) { // 1 >= 1

    document.write('*');

 }
 
 document.write('<br>');
//  document.write('<br>');

}