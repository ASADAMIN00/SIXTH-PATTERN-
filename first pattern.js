// var num = prompt('enter a number');
var num = 10;
var i;
var j;

if ( num > 0 && num < 100) {

    for (i = 1; i <= num; i++) { // num = 5 , means loop run 5 times, | first time i = 1, second time i = 2, ....

        for (j = 1; j <= i; j++) { // 1 <= 1 = T | after j++ --> 2 <= 1 = F ==> Terminate
            document.write(j + "&nbsp" + "&nbsp" + "&nbsp");
        }
        document.write('<br>')
    }

} else {
    alert('enter another number');
}

// if ( num > 0 && num < 100) {

//     for (i = 1; i <= num; i++) {

//         for (j = 1; j <= i; j++) {
//             document.write(i + "" + "");
//         }
//         document.write('<br>')
//     }

// } else {
//     alert('enter another number');
// }