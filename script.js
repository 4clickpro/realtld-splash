document.getElementById('join-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Thank you! Redirecting to realtld.com...');
  window.location.href = 'https://realtld.com';
});
