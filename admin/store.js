var storedItem = localStorage.getItem("storedItem");
 
var stock = new Array(3);

function store() {
    var package1 = "";
    //var cartNumber = document.getElementById("cartNo").value;
    var cartNumber = 0;

    document.getElementById("cartNo").innerHTML = cartNumber+"";

    cartNumber++;
    document.getElementById("cartNo").innerHTML = cartNumber+"";


}
function checkOut () {
    var shoppingCrt=true;
    //window.open("payement.html");
}