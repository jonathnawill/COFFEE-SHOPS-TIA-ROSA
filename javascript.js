
document.querySelector(".btn-primary").addEventListener("click", function() {
    window.location.href = "https://www.mokaclube.com.br/blog/melhores-cafes-do-brasil";
});
  

  document.querySelectorAll(".btn-primary").forEach(function(btn, index) {
    if (index > 0) { 
      btn.addEventListener("click", function() {
        alert("Item adicionado ao carrinho!"); 
      });
    }
  });
  