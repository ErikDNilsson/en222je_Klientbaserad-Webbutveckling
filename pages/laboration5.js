function toggletable() {
    // Hämta DIV-taggen och döp den till "div"
    // = tilldela
    var div = document.getElementById("hide");
    // displaySet visar vad "div" har för display-stil. ("style" hämtar CSS-stil)
    var displaySet = div.style.display;
    // Om stilen är display: block; , sätt den till display: none; 
    if (displaySet === "block") {
        div.style.display = "none";
    }
    // Annars (om den är "none") sätt den till display: block;
    else {
        div.style.display = "block";
    }
}