// Language Toggle Functionality
function toggleLanguage() {
    const currentLang = sessionStorage.getItem('lang') || 'en';
    const newLang = currentLang === 'en' ? 'es' : 'en';
    sessionStorage.setItem('lang', newLang);
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    // Update all elements with data-en and data-es attributes
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // Update button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'Español' : 'English';
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = sessionStorage.getItem('lang') || 'en';
    applyLanguage(savedLang);
});
