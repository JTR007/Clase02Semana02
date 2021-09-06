
const promptNumer = () => {
    const numer = prompt("Inserte un numero");
    if(numer > 0) {
        alert("1");
        
    } else if(numer < 0) {
        alert("-1")
        
    } else {
        alert("0");
        
    }
};

promptNumer();

