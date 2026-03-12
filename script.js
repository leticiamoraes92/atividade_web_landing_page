
document.getElementById("btnComprar").addEventListener("click",()=>{

document.getElementById("produtos").scrollIntoView({
behavior:"smooth"
});

});


const botoes = document.querySelectorAll(".comprar");

botoes.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Produto adicionado ao carrinho 🌵");

});

});



document.getElementById("formContato").addEventListener("submit",(e)=>{

e.preventDefault();

alert("Mensagem enviada com sucesso!");

});