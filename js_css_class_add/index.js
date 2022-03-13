btn=document.getElementById('btn');
console.log("====>",btn)
btn.addEventListener("click",addcss)
btn2.addEventListener("click",removecss)
btn3.addEventListener("click",()=>{
    document.getElementById("d1").classList.toggle("bmp")
})
function addcss()
{
    document.getElementById("d1").classList.remove("priyanka");
    document.getElementById("d1").classList.add("bmp")
    document.getElementById("d1").innerHTML="class added"
   // alert("clicked");
}
function removecss()
  {
      document.getElementById("d1").classList.remove("bmp")
      document.getElementById("d1").classList.add("priyanka");
  }