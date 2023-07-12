var nutzerEingabe = document.querySelector("input");
var hinzufügenButton = document.querySelector("button");
var hintergrundButton = document.querySelector("img");
var body = document.querySelector("body");
var input1 = document.createElement("input");
var input2 = document.createElement("input");
var input3 = document.createElement("input");

var navigation = document.querySelector("nav");


function listeErstellen(){
    var fertigButton = document.createElement("button");
    var löschenButton = document.createElement("button");
    if (nutzerEingabe.value.length > 0){
        var ol = document.querySelector("ol");
        var li = document.createElement("li");
        
        var span = document.createElement("span");
        var textNode = document.createTextNode(nutzerEingabe.value);
        var storing = document.createElement("section");

        fertigButton.append("Fertig");
        löschenButton.append("Löschen");
        fertigButton.classList.add("list-buttons");
        löschenButton.classList.add("list-buttons");
        storing.append(fertigButton);
        storing.append(löschenButton);
        
        
        span.append(textNode);
        li.append(span);
        li.append(storing);
        ol.append(li);

        changeColorForBars();

        nutzerEingabe.value = ""
        löschenUndDurchstreichen(fertigButton, span, löschenButton, li)
        
    

    }else{
        return;
    }
}

function löschenUndDurchstreichen(fertigButton, span, löschenButton, li){
    fertigButton.addEventListener("click", function(){
        span.classList.toggle("done");
    })
    löschenButton.addEventListener("click", function(){
        li.remove();
    })
}


function changeColor(){
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

function changeColorForBars() {
    hinzufügenButton.style.backgroundColor = input3.value;
    navigation.style.backgroundColor = input3.value;
    var item = document.getElementsByClassName('list-buttons')
    for(let i = 0; i < item.length; i++){
        item[i].style.backgroundColor = input3.value;
    }
}



hinzufügenButton.addEventListener("click", listeErstellen);
nutzerEingabe.addEventListener("keypress", function(event) {
    if (nutzerEingabe.value.length > 0 && event.key === 'Enter'){
        listeErstellen()
        nutzerEingabe.value = ""
    }else{
        return
    }
});

hintergrundButton.addEventListener("click", function(){
    
    if (navigation.innerHTML.length <= 150){
        
        input2.type = "color"
        input1.type = "color"
        input3.type ="color"
        
        input1.classList.add("farben")
        input2.classList.add("farben")
        input3.classList.add("farben")
        navigation.append(input1);
        navigation.append(input2);
        navigation.append(input3)

        input1.addEventListener("input", changeColor);
        input2.addEventListener("input", changeColor);
        input3.addEventListener("input", changeColorForBars)
    }else{
        return;
    }
})