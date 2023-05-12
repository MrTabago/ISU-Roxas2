function toggleNightMode() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.toggle('night-mode');
  }
  
  function setInitialMode() {
    var body = document.getElementsByTagName('body')[0];
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (prefersDarkMode) {
      body.classList.add('night-mode');
    }
  }
  