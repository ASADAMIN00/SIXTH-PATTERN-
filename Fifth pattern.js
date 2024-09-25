var star = '*';
var num = 10;

for (var i = 1; i <= num; i++) { // 1 <= 10 = True , loop run 10 times, because is ki value 10 times true de gi


    for(var j = num; j > i; j--) { // i =1; 3 > 1 = T | after -- 2 > 1 = T | after -- 1 > 1 = F "terminate" i = 2;

        // document.write("&nbsp","&nbsp",'&nbsp','&nbsp');
        document.write("&nbsp","&nbsp");
        // // console.log(star);
        // star = "*" + star + '*';

    }

    for (var k = 1; k < 2*i ; k++) {  // 1 < 2 = true |  2 < 2 = false , depends on i value

        document.write('*');
        // document.write(star);
        // star = star + '*';

    }

    document.write('<br>')

    // console.log(star);
    // star = "*" + star + '*';
   

}