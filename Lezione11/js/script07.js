let demo = document.querySelector("#demo");
let btn = document.querySelector("#btn");

let elNome = document.querySelector("#nome");

elNome.addEventListener("keypress", function(event){
    // console.log(elNome.value);
    // console.log(event);
    if(event.code == "Enter"){
        // demo.innerHTML = "Ciao " + elNome.value;
        btn.click();
    }

});

btn.addEventListener("click", function() {
    demo.innerHTML = "Ciao " + elNome.value;
})