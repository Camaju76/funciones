document.addEventListener("DOMContentLoaded", function () {
    const cuadrados = document.querySelectorAll(".cuadrado");

    cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener("mouseover", function () {
            cuadrado.style.backgroundColor = "black";
        });

        cuadrado.addEventListener("mouseout", function () {
            cuadrado.style.backgroundColor = "";
        });
    });
});


/* INPUT */  
const input=document.getElementById('input')
input.addEventListener('input',()=>{
let globalVariable=''
if(input.value === 'a'){
    globalVariable='rosado'
    console.log(globalVariable)

}
if(input.value === 's'){
    globalVariable= 'naranja'
    console.log(globalVariable)
}
if(input.value === 'd'){
    globalVariable= 'celeste'
    console.log(globalVariable)
}
})
