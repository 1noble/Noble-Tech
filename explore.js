function submitContactForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert("Thank you, " + name + "! We’ll get back to you shortly.");
    document.querySelector("form").reset();
  } else {
    alert("Please fill in all fields.");
  }
}