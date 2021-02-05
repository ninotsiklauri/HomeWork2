function first(n){ //1, 2, 3
    document.write("N1. " + Math.ceil(n))
    document.write("<hr>")
    document.write("N2. " + Math.floor(n))
    document.write("<hr>")
    document.write("N3. " + Math.round(n))
    document.write("<hr>")
}
function forth(n, m){
    if (m == true){
        document.write(Math.ceil(n));
    } else {
        document.write(Math.floor(n));
    }
    document.write("<hr>")
}
function fifth(a, b){  //5, 6, 7
    document.write("N5. " + Math.random())
    document.write("<hr>")
    document.write("N6. " + Math.random()*(50 - 5 + 1)) + 5;
    document.write("<hr>")
    document.write("N7. " + Math.random()*(a - b + 1)) + b;
    document.write("<hr>")
    document.write("N8. " + Math.round((Math.random()*(a - b + 1)) + b));
    document.write("<hr>")
}