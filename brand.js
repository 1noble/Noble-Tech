// JavaScript to handle form submission
document.getElementById('repairForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents default form submission behavior

  const damage = document.getElementById('damageSelect').value;
  if (damage) {
    alert(`You selected: ${damage}`);
  } else {
    alert('Please select a damage type.');
  }
});