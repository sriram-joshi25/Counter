const btn1=document.querySelector(".inc")
const btn2=document.querySelector(".dec")
const btn3=document.querySelector(".reset")
const num=document.querySelector("#disp")

btn1.onclick=()=>{
    let count=parseInt(num.innerText)||0;
    count++;
    num.innerText=count
    console.log(num);
}

btn2.onclick=()=>{
    let count=parseInt(num.innerText)||0;
    count--;
    num.innerText=count
    console.log(num);
}

btn3.onclick=()=>{
    let count=parseInt(num.innerText)||0;
    count=0;
    num.innerText=count
    console.log(num);
    
}
