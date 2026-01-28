const btn=document.getElementById("btn");
const pop=document.getElementById("form");
const closebtn=document.querySelector(".close-btn");
btn.addEventListener("click" ,function(){
pop.style.display="flex";
}); 
 closebtn.addEventListener("click",function(){
pop.style.display="none";

 });
 window.addEventListener("click",function(val){
  if(val.target === pop){
    pop.style.display="none";
  }
  
 });
 
 