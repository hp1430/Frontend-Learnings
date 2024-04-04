console.log("Good")
let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="I was <b>clicked !!!</b>";
  // alert("I was Clicked");
});