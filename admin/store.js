var storedItem = localStorage.getItem("storedItem");
 
var stock = new Array(3);
var cartNumber = 0;

function store() {
    var package1 = "";
    //var cartNumber = document.getElementById("cartNo").value;
    

    document.getElementById("cartNo").innerHTML = cartNumber+"";

    //cartNumber++;
    //document.getElementById("cartNo").innerHTML = cartNumber+"";


}
function checkOut () {
    cartNumber++;
    document.getElementById("cartNo").innerHTML = cartNumber+"";
    var shoppingCrt=true;
    //window.open("payement.html");
}