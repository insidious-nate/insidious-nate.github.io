var storedItem = localStorage.getItem("storedItem");

function save() {
    var text_to_save = document.getElementById("input").value;
    localStorage.setItem("storedItem", text_to_save); // save the item
    document.getElementById("savedText").innerHTML = text_to_save+" saved.";
    }
    function get() {
        localStorage.getItem("storedItem");
        document.getElementById("openedText").innerHTML = storedItem+" opened.";
    }