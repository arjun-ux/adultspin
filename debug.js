// Debug script untuk membantu mengidentifikasi error
console.log('=== AdultSpin Debug Script Loaded ===');

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Global Error:', {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    error: e.error
  });
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled Promise Rejection:', {
    reason: e.reason,
    promise: e.promise
  });
});

// Check PWA requirements
function checkPWARequirements() {
  console.log('=== PWA Requirements Check ===');
  console.log('HTTPS:', window.location.protocol === 'https:');
  console.log('Service Worker Support:', 'serviceWorker' in navigator);
  console.log('Manifest:', document.querySelector('link[rel="manifest"]'));
  console.log('Display Mode:', window.matchMedia('(display-mode: standalone)').matches);
  
  // Check manifest
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    fetch(manifestLink.href)
      .then(response => response.json())
      .then(manifest => {
        console.log('Manifest Content:', manifest);
        console.log('Manifest Icons:', manifest.icons);
      })
      .catch(error => {
        console.error('Manifest fetch error:', error);
      });
  }
}

// Check service worker
function checkServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        console.log('Service Worker Registrations:', registrations);
      })
      .catch(error => {
        console.error('Service Worker check error:', error);
      });
  }
}

// Check DOM elements
function checkDOMElements() {
  console.log('=== DOM Elements Check ===');
  const elements = [
    'spinWheel',
    'wheelSVG',
    'modal-form',
    'modal-backdrop',
    'installBtn',
    'main-content'
  ];
  
  elements.forEach(id => {
    const element = document.getElementById(id);
    console.log(`${id}:`, element ? 'Found' : 'Not Found');
  });
}

// Run checks when page loads
window.addEventListener('load', function() {
  setTimeout(() => {
    checkPWARequirements();
    checkServiceWorker();
    checkDOMElements();
    console.log('=== Debug Check Complete ===');
  }, 1000);
});

// Export for manual testing
window.debugAdultSpin = {
  checkPWARequirements,
  checkServiceWorker,
  checkDOMElements
}; 