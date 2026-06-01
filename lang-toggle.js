function toggleLang() {
  var lang = localStorage.getItem('lang') 
    === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  var elements = document.querySelectorAll(
    '[data-en][data-es]'
  );
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 
      elements[i].getAttribute('data-' + lang);
  }
  var placeholders = document.querySelectorAll(
    '[data-en-placeholder]'
  );
  for (var j = 0; j < placeholders.length; j++) {
    var attr = 'data-' + lang + '-placeholder';
    if (placeholders[j].hasAttribute(attr)) {
      placeholders[j].placeholder = 
        placeholders[j].getAttribute(attr);
    }
  }
  var btn = document.getElementById(
    'lang-toggle'
  );
  if (btn) {
    btn.textContent = 
      lang === 'es' ? 'English' : 'Español';
  }
}

window.onload = function() {
  var saved = localStorage.getItem('lang') 
    || 'en';
  applyLang(saved);
};
