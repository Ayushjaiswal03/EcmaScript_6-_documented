console.log("functions");

const done = () => {
    console.log("done");
}

function average(a, b, c){
    let sum = (x, y) => {
        return x + y;
    }

    let ab = sum(a, b)/2
    let ac = sum(a, c)/2
    let bc = sum(b, c)/2

    console.log(`Average of a and b is ${ab}`);
    done()
    console.log(`Average of a and c is ${ac}`)
    done()
    console.log(`Average of b and c is ${bc}`)
    done()

}

average(4, 78, 34);