function abrirTelaAlerta() {
    const nomePO = document.getElementById('nomePO').value.trim();
  
    if (nomePO === "") {
      alert("Por favor, insira o nome do Product Owner.");
      return;
    }
  
    localStorage.setItem('nomePO', nomePO);
  
    // Abre nova janela com a tela de alerta
    window.open('alerta.html', 'Tela Alerta', 'width=600,height=400');
  }
  