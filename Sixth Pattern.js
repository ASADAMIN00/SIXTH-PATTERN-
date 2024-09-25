var num = 10;
// loop for create Node. of rows 
for (var i = 1; i <= num; i++) {  // 1 <= 5 = T


    // loop for create spaces around left corner
    for (var j = 1; j < i; j++) { // 2 < 3 = F | 3 < 4 = T = loop chaly Ga 

        document.write('&nbsp');

    }

    // loop for print *
    for (var k = num; k >= i; k--) { // 5 >= 5 

        document.write('*');
    }

    // for (var k = num; k > i; k--) { // 5 > 5 

    //     document.write('*');
    // }

    document.write('<br>');

}

var Num = 10;
// loop for create Node. of rows 
for (var p = 1; p <= Num; p++) {  // 1 <= 5 = T


    // loop for create spaces around left corner
    for (var q = Num; q > p; q--) { // 2 > 1 = T 

        document.write('&nbsp');

    }

    // loop for print *
    for (var r = 1; r <= p ; r++) { // 2 <= 2

        document.write('*');
    }

    document.write('<br>');

}

// 3 WALAY M 2 &nbsp ATAY HN, AUR 2 WALAY M 1 &nbsp


// 3 WALAY M YE POSSIBLE NHE H.


// var num =   15;
// // loop for create Node. of rows 
// for (var i = 1; i <= num; i++) {  // 1 <= 5 = T


//     // loop for create spaces around left corner
//     for (var j = 1; j < i; j++) { // 2 < 3 = F | 3 < 4 = T = loop chaly Ga 

//         document.write('&nbsp' + '&nbsp');

//     }

//     // loop for print *
//     for (var k = num; k > i*2; k--) { // 3 > 2 | in second round i=2 -->   4  >  4 = F | 5 > 10

//         document.write('*');
//     }

//     document.write('<br>');

// }

// var Num =   5;
// // loop for create Node. of rows 
// for (var p = 1; p <= Num; p++) {  // 1 <= 5 = T


//     // loop for create spaces around left corner
//     for (var q = Num; q > p; q--) { //  > 1 = T 

//         document.write('&nbsp' + '&nbsp');

//     }

//     // loop for print *
//     for (var r = 1; r < p*2 ; r++) { // 1 > 2 = False , 3 < 4 = T

//         document.write('*');
//     }

//     document.write('<br>');

// }