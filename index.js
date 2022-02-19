
 let data=[
    {
        "email":"anupam@gmail.com",
        "password":"1234"
    },
    {
        "email":"priyanka@gmail.com",
        "password":"1234"
    },
    {
        "email":"saptarshi@gmail.com",
        "password":"1234"
    }
]

function login()
{    
   
    var flag=false;
    var email= document.getElementById("i1").value;
    var password=document.getElementById("i2").value;
    for(i=0;i<data.length;i++)
    {
      //  console.log(data[i].email,data[i].password)
      if(email==data[i].email && password==data[i].password)
      flag=true;

    }
    if(flag)
         alert("welcome");
   else
        alert("check your password");
}

function f()
{
    // for(i=0;i<data.length;i++){
    // var newDiv = document.createElement("div"); 
    // var newContent = document.createTextNode(data[i].email); 
    // newDiv.appendChild(newContent);  
    // document.getElementById("d1").appendChild(newDiv);
    // }
    for(i=0;i<data.length;i++){
    document.getElementById("t1").innerHTML+= `<tr><td>${data[i].email}</td><td>${data[i].password}</td></tr> `
    }
}
function f1()
{
   var x= prompt("enter msg");
   console.log("x=",x)
}