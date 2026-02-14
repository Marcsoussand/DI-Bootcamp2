// Language Switcher
const flags = document.querySelectorAll('.flag');

// Function to switch language
function switchLanguage(lang) {
  // Update all elements with data attributes
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      el.textContent = text;
    }
  });
  
  // Handle RTL for Hebrew
  if (lang === 'he') {
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'he');
  } else {
    document.body.setAttribute('dir', 'ltr');
    if (lang === 'fr') {
      document.documentElement.setAttribute('lang', 'fr');
    } else {
      document.documentElement.setAttribute('lang', 'en');
    }
  }
  
  // Save preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update active flag
  flags.forEach(flag => {
    flag.classList.remove('active');
    if (flag.getAttribute('data-lang') === lang) {
      flag.classList.add('active');
    }
  });
}

// Add click event to flags
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const lang = flag.getAttribute('data-lang');
    switchLanguage(lang);
  });
});

// Load saved language or default to French
const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
switchLanguage(savedLang);
