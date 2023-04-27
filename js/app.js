let input = document.getElementById("buscar-articulos");
input.addEventListener("input", buscarArticulos);

function buscarArticulos() {
    let input = document.getElementById("buscar-articulos");
    let filter = input.value.toLowerCase();
    let articles = document.querySelectorAll("[id^='articulo-']");
    
    for (let i = 0; i < articles.length; i++) {
      let article = articles[i];
      let title = article.querySelector("h3").textContent.toLowerCase();
      let content = article.querySelector("p").textContent.toLowerCase();
      
      if (title.indexOf(filter) > -1 || content.indexOf(filter) > -1) {
        article.style.display = "";
      } else {
        article.style.display = "none";
      }
    }
}