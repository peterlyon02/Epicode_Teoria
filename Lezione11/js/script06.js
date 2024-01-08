let demo = document.querySelector("#demo");

demo.addEventListener("mouseover", function(){
    demo.classList.add("bgRed");
})

demo.addEventListener("mouseleave", function(){
    demo.classList.remove("bgRed");
})

demo.addEventListener("dblclick", function(){
    demo.classList.replace("bgRed", "bgPurple");
})