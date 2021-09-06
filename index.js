
const promptNumer = () => {
    const numer = prompt("Inserte un numero");
    if(numer > 0) {
        alert("1");
        promptNumer();
    } else if(numer < 0) {
        alert("-1")
        promptNumer();
    } else {
        alert("0");
        promptNumer();
    }
};

promptNumer();

