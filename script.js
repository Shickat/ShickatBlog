// Función para mostrar contenido con animación
function mostrarContenido(url) {
  const dominiosView = document.getElementById('dominios-view');
  const wikiContent = document.getElementById('wiki-content');
  const iframe = document.getElementById('wiki-iframe');
  
  // Cambiar la URL del iframe
  iframe.src = url;
  
  // Añadir clase de fade-out
  dominiosView.classList.add('fade-out');
  
  // Después de la animación, ocultar dominios y mostrar contenido
  setTimeout(function() {
    dominiosView.classList.add('hidden');
    wikiContent.classList.remove('hidden');
    wikiContent.classList.add('show');
    
    // Scroll al inicio
    window.scrollTo(0, 0);
  }, 800);
}

// Script para la animación del botón del ojo y botones de dominios
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Cargado');
  
  const eyeButton = document.getElementById('eye-button');
  const btnWiki = document.getElementById('btn-wiki');
  const btnBlog = document.getElementById('btn-blog');
  
  console.log('eyeButton:', eyeButton);
  console.log('btnWiki:', btnWiki);
  console.log('btnBlog:', btnBlog);
  
  // Botón del ojo - mostrar wiki
  if (eyeButton) {
    eyeButton.addEventListener('click', function() {
      console.log('Eye button clicked!');
      mostrarContenido('Web/index.html');
    });
  }
  
  // Botón shickat.me - redirigir a https://shickat.me
  if (btnWiki) {
    btnWiki.addEventListener('click', function() {
      console.log('Wiki button clicked!');
      window.open('https://shickat.me', '_blank');
    });
  }
  
  // Botón shickat.blog - mostrar blog local
  if (btnBlog) {
    btnBlog.addEventListener('click', function() {
      console.log('Blog button clicked!');
      mostrarContenido('blog/index.html');
    });
  }
});
