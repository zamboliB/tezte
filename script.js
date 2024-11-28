const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
  const isClosed = sideMenu.style.right === '-300px' || !sideMenu.style.right;
  sideMenu.style.right = isClosed ? '0' : '-300px';
});

// Fechando o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!sideMenu.contains(event.target) && event.target !== hamburger) {
    sideMenu.style.right = '-300px';
  }
});


const backButton = document.getElementById('backButton');

// Fecha o menu ao clicar no botão de voltar
backButton.addEventListener('click', () => {
  sideMenu.style.right = '-300px'; // Ajuste conforme o estilo do seu menu
});