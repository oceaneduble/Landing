function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        z.style.display = "none";
        o.style.display = "none";
        f.style.display = "block";
    } else {
        x.style.display = "none";
        z.style.display = "block";
        o.style.display = "block";
        f.style.display = "none";
    }
}
var z = document.getElementById("year");
    z.style.display = "none";
var o = document.getElementById("switchOn");
    o.style.display = "none";
var f = document.getElementById("switchOff");


    