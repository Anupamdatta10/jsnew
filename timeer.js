var arr=["anupam","priyanka","saptarshi"];
var i=0;
setInterval(()=>{
    document.getElementById("d1").innerText=arr[i];
    console.log(arr[i]);
    i++;
    if(i==arr.length)
    {
        i=0;
    }
},2000);