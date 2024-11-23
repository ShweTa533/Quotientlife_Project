document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.nav-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          // Remove active class from all tabs
          tabs.forEach(tab => tab.classList.remove('active'));

          // Add active class to clicked tab
          this.classList.add('active');

          // Hide all tab contents
          contents.forEach(content => content.classList.remove('active'));

          // Show the target content
          const target = document.querySelector(this.dataset.bsTarget);
          target.classList.add('active');
      });
  });
});
