document.addEventListener('DOMContentLoaded', function () {
    updatePricing(); // Call the existing function to set up initial pricing
    populatePricingPlans(); // Call the new function to populate pricing plans and comparison table
    addHoverEffects(); // Call the function to add hover effects
  });
  
  function addHoverEffects() {
    const navLinks = document.querySelectorAll('nav a, .user-actions button');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', function () {
        link.style.color = '#27ae60';
      });
  
      link.addEventListener('mouseout', function () {
        link.style.color = '#fff';
      });
    });
  }
  
document.addEventListener('DOMContentLoaded', function () {
    // Handle currency selection
    const currencyButtons = document.querySelectorAll('.dropdown-content a');
  
    currencyButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedCurrency = this.getAttribute('data-currency');
        // Implement the logic to update currency as needed
        console.log(`Selected currency: ${selectedCurrency}`);
      });
    });
  });
  