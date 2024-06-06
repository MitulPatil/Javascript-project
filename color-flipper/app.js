const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById('btn')
const color=document.querySelector('.color')

btn.addEventListener('click',function(){
    const randomnumber=RandomNumber();

    document.body.style.backgroundColor = colors[randomnumber]
    color.innerHTML=colors[randomnumber]
})

function RandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
