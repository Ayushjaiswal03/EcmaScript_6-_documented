// var of data type string, add a number to it

{
    let a = "33"
    // console.log(typeof a);

    let b = BigInt("33")
    // console.log(typeof a + b) //No

    let c = 31;
    // console.log(a + c)
    // console.log(typeof (a + c))


    const PS1 = () => {
        const d = {
        name : "ayush",
        }
        d.name = 3;
        console.log(typeof d.name)

        d.num = 4;
        // console.log(d);
        return d;
    }
    console.log(PS1());

    const dict = {
        earphones : "device you put on your ears for better listening",
        lighter : "for instant flame and to light a flame as well",
        charger : `to charge every device just like`,
        watch : "it tells you time",
        book : "to read/ write text"
    }

    console.log(dict.book);

}