const pelota = document.querySelector('.pelota');
const pelotitasPorColumna = {}; // Simula acumulación por columnas

// Sigue el mouse
document.addEventListener('mousemove', (e) => {
  const x = e.clientX - 25;
  const y = e.clientY - 25;
  pelota.style.transform = `translate(${x}px, ${y}px)`;
});

// Al hacer clic, generar pelotitas
document.addEventListener('click', (e) => {
  for (let i = 0; i < 5; i++) {
    const pelotita = document.createElement('div');
    pelotita.classList.add('pelotita');

    const x = e.clientX + (Math.random() - 0.5) * 40;
    const columna = Math.round(x / 15);
    const stackHeight = pelotitasPorColumna[columna] || 0;
    pelotitasPorColumna[columna] = stackHeight + 1;

    const finalY = window.innerHeight - 15 * pelotitasPorColumna[columna];

    pelotita.style.left = `${columna * 15}px`;
    pelotita.style.top = `-20px`;
    pelotita.style.backgroundColor = getRandomColor();

    document.body.appendChild(pelotita);

    requestAnimationFrame(() => {
      pelotita.style.top = `${finalY}px`;
    });
  }
});

function getRandomColor() {
  const colores = ['#ff5252', '#ffb74d', '#4db6ac', '#9575cd', '#81c784', '#f06292', '#64b5f6'];
  return colores[Math.floor(Math.random() * colores.length)];
}
