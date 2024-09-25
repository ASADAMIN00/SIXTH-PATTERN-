// var num = prompt('enter a number');
var num = 10;
var i;
var j;

if (num > 0 && num < 100){

    for (i = 1; i <= num; i++){ // num = 10

        for(j = 1; j <= i; j++){ // j = 1, and here In round 1 i = 1, | 1 <= 1 = true | 2 <= 1 = false | then <br>
            document.write('$' + '&nbsp' + '&nbsp');
        }
        document.write('<br>'); // when child loop Terminate, then <br> apply
    
    }

} else{
    alert('enter another number');
}