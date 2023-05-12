const nightModeToggle = document.getElementById('night-mode-toggle');
const body = document.body;

nightModeToggle.addEventListener('click', function() {
  if (body.classList.contains('night-mode')) {
    body.classList.remove('night-mode');
    nightModeToggle.innerHTML = 'Night Mode <i class="fas fa-moon"></i>';
  } else {
    body.classList.add('night-mode');
    nightModeToggle.innerHTML = 'Day Mode <i class="fas fa-sun"></i>';
  }
});

document.getElementById("eye").addEventListener("click", togglePassword);
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the navbar toggle button element
  var barToggle = document.querySelector('.bar-toggle');

  // Get the target element for collapse
  var targetCollapse = document.querySelector('.bar-collapse');

  // Initially hide the target element
  targetCollapse.style.display = 'none';

  // Add a click event listener to the navbar toggle button
  barToggle.addEventListener('click', function() {
    // Toggle the collapse state of the target element
    if (targetCollapse.style.display === 'none') {
      targetCollapse.style.display = 'block';
    } else {
      targetCollapse.style.display = 'none';
    }
  });
});