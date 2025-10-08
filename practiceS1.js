// var of data type string, add a number to it

{
    let a = "33"
    // console.log(typeof a);

    let b = BigInt("33")
    // console.log(typeof a + b) //No

    let c = 31;
    console.log(a + c)
    console.log(typeof (a + c))


    const PS1 = () => {
        const d = {
        name : "ayush",
        }
        d.name = 3;
        console.log(typeof d.name)

        d.num = 4;
        // console.log(d);
        return d
        }
        console.log(PS1())

}