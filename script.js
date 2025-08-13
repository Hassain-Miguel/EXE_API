function buscarGato() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(data => {
        document.getElementById("imagemGato").src = data[0].url;
      })
      .catch(error => console.error("Erro ao buscar a imagem:", error));
  }

  buscarGato()
  
