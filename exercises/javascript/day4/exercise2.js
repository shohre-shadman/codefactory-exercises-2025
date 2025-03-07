const circle= document.getElementById("circle");
const message= document.getElementById("message");

console.log(typeof circle)
circle.addEventListener("mouseenter", () => {
    message.textContent = "You are in the circle";

});

circle.addEventListener("mouseleave", () => {
    message.textContent = "You are outside of the circle";

});

message.addEventListener("click", ()=>{
    console.log("message clicked")
})

