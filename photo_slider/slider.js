var arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxNZacC-FGw2-q4TG9TTIX8LpYaAD3vAQHbgOCTEr3hgJMIrGcwY51ReK2ANfFhhzSsk&usqp=CAU",
"https://www.myclickmagazine.com/wp-content/uploads/2018/04/magnolia-jessica-nelson-flower-photography.jpg",
"https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/how_to_photograph_flowers.jpg"]

var i=0;
setInterval(()=>{
    var img=document.getElementById("i1");
    img.src=arr[i];
    // console.log(arr[i]);
    i++;
    if(i==arr.length)
    {
        i=0;
    }
},100);