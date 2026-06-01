function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  
  document.querySelectorAll(
    '[data-en], [data-es]'
  ).forEach(el => {
    if (el.hasAttribute('data-' + lang)) {
      el.innerHTML = 
        el.getAttribute('data-' + lang);
    }
  });

  document.querySelectorAll(
    '[data-en-placeholder], 
     [data-es-placeholder]'
  ).forEach(el => {
    if (el.hasAttribute(
      'data-' + lang + '-placeholder'
    )) {
      el.placeholder = el.getAttribute(
        'data-' + lang + '-placeholder'
      );
    }
  });

  const btn = document.getElementById(
    'lang-toggle'
  );
  if (btn) {
    btn.textContent = 
      lang === 'es' ? 'English' : 'Español';
  }
}

function initLanguage() {
  const saved = localStorage.getItem('lang') 
    || 'en';
  setLanguage(saved);
}

document.addEventListener(
  'DOMContentLoaded', 
  initLanguage
);

document.addEventListener(
  'DOMContentLoaded', 
  function() {
    const btn = document.getElementById(
      'lang-toggle'
    );
    if (btn) {
      btn.addEventListener('click', 
        function() {
          const current = 
            localStorage.getItem('lang') 
            || 'en';
          setLanguage(
            current === 'es' ? 'en' : 'es'
          );
        }
      );
    }
  }
);
