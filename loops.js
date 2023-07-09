var nutzerEingabe = document.querySelector("input");
var hinzufügenButton = document.querySelector("button");


function listeErstellen(){
    var ol = document.querySelector("ol");
    var li = document.createElement("li");
    var fertigButton = document.createElement("button");
    var löschenButton = document.createElement("button");
    var span = document.createElement("span");
    var textNode = document.createTextNode(nutzerEingabe.value);
    var storing = document.createElement("section");

    fertigButton.append("Fertig")
    löschenButton.append("Löschen")
    fertigButton.classList.add("list-buttons")
    löschenButton.classList.add("list-buttons")
    storing.append(fertigButton);
    storing.append(löschenButton)
    
    
    span.append(textNode);
    li.append(span);
    li.append(storing);
    ol.append(li);

    nutzerEingabe.value = " "

    fertigButton.addEventListener("click", function(){
        span.classList.toggle("done")
    })
    löschenButton.addEventListener("click", function(){
        li.remove();
    })

}








hinzufügenButton.addEventListener("click", listeErstellen);
nutzerEingabe.addEventListener("keypress", function(event) {
    if (nutzerEingabe.value.length > 0 && event.key === 'Enter'){
        listeErstellen()
        nutzerEingabe.value = " "
    }
});