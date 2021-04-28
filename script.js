function displayAlert() {
    alert("Loading weather report...");
}

function dismissPolicy() {
    var element = document.querySelector(".fixed");
    element.remove();
}

function changeTemperature(element) {
    var red = document.querySelectorAll(".red");
    var blue = document.querySelectorAll(".blue");
    if (element.value=="F"){
        for (var i=0; i<red.length; i++){
            var redText = red[i].textContent;
            var redNumber = Number(redText);
            red[i].textContent = ((redNumber*9/5)+32).toFixed(1) ;
            var blueText = blue[i].textContent;
            var blueNumber = Number(blueText);
            blue[i].textContent = ((blueNumber*9/5)+32).toFixed(1) ;
        }
    }
    if (element.value=="C"){
        for (var i=0; i<blue.length; i++){
            var blueText = blue[i].textContent;
            var blueNumber = Number(blueText);
            blue[i].textContent = ((blueNumber-32)*5/9).toFixed(1) ;
            var redText = red[i].textContent;
            var redNumber = Number(redText);
            red[i].textContent = ((redNumber-32)*5/9).toFixed(1) ;
        }
    }  
}
