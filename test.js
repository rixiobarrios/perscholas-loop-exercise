
/*

Output 1:

1
12
123

*/

// FOR LOOP example

for (let i = 1; i <= 3; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        str += j
    }
    console.log(str)
}

// WHILE LOOP example

let i = 1;

while(i <= 3) {

    let str = ''
    let j = 1;
    
    while(j <= i) {
        str += j
        j++
    }

    console.log(str)
    i++
}


'' + 1  //  = '1'






