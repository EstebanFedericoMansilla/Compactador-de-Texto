// script.js
const textoEntrada = document.getElementById('texto-entrada');
const textoSalida = document.getElementById('texto-salida');
const copiarTextoBtn = document.getElementById('copiar-texto');

textoEntrada.addEventListener('input', compactarTexto);

function compactarTexto() {
  const textoOriginal = textoEntrada.value;
  const textoCompactado = textoOriginal.replace(/\s+/g, '');
  textoSalida.value = textoCompactado;

  // Habilitar el botón "Copiar Texto" si hay texto compactado
  copiarTextoBtn.disabled = textoCompactado === '';
}

copiarTextoBtn.addEventListener('click', () => {
  // Seleccionar el texto compactado
  textoSalida.select();

  // Copiar el texto al portapapeles
  document.execCommand('copy');

  // Mostrar un mensaje de confirmación (opcional)
  alert('¡Texto copiado al portapapeles!');
});