// Button click
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
  magicButton.textContent = "🎉 You clicked me!";
  magicButton.style.backgroundColor = "#8e44ad";
});

// Hover message already styled with CSS

// Keypress detection
document.getElementById('keypressBox').addEventListener('keypress', e => {
  console.log(`Key pressed: ${e.key}`);
});

// Double-click secret
magicButton.addEventListener('dblclick', () => {
  alert("🤫 Secret double-click activated!");
});

// Image gallery
const mainImg = document.getElementById('mainImg');
document.querySelectorAll('.thumbnails img').forEach(img => {
  img.addEventListener('click', () => {
    mainImg.src = img.src;
    mainImg.style.transform = "scale(1.1)";
    setTimeout(() => mainImg.style.transform = "scale(1)", 300);
  });
});

// Tabs
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Form validation
const form = document.getElementById('signupForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  if (!email.includes('@') || pass.length < 8) {
    feedback.textContent = "⚠️ Please enter a valid email and password (8+ chars).";
    feedback.style.color = 'red';
  } else {
    feedback.textContent = "✅ Successfully submitted!";
    feedback.style.color = 'green';
  }
});

// Real-time feedback on password
document.getElementById('password').addEventListener('input', e => {
  const len = e.target.value.length;
  if (len < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = "";
  }
});
