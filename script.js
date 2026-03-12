
document.getElementById("btnCursos").addEventListener("click", () => {

document.getElementById("cursos").scrollIntoView({
behavior: "smooth"
});

});


const botoes = document.querySelectorAll(".detalhes");

botoes.forEach(btn => {

btn.addEventListener("click", () => {

alert("Mais detalhes sobre o curso em breve!");

});

});


document.getElementById("formContato").addEventListener("submit", function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso!");

});