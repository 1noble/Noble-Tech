document.getElementById('damageSelect').addEventListener('change', function() {
  const damage = this.value;
  const whatsappLink = document.getElementById('whatsappLink');

  if (damage) {
    // Enable the WhatsApp link with the correct message
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const message = `Hi, I need a repair for my device with the following damage: ${damage}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Set the href to the WhatsApp URL and enable the button
    whatsappLink.href = whatsappUrl;
    whatsappLink.style.pointerEvents = 'auto';  // Enable clicking the link
  } else {
    // Disable the WhatsApp link if no damage type is selected
    whatsappLink.href = '#';
    whatsappLink.style.pointerEvents = 'none';  // Disable clicking the link
  }
});