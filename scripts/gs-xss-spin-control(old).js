// Create and inject the infinite spins button
const infiniteSpinButton = document.createElement('button');
infiniteSpinButton.innerHTML = '♾️ Infinite Spins';
infiniteSpinButton.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  padding: 12px 20px;
  background: linear-gradient(135deg, #ff4b4f, #f0b00c);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-family: HarmonyOS_Sans_Medium, sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
`;

// Add hover effect
infiniteSpinButton.addEventListener('mouseover', function() {
  this.style.transform = 'translateY(-2px)';
  this.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
});

infiniteSpinButton.addEventListener('mouseout', function() {
  this.style.transform = 'translateY(0)';
  this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
});

// Add click functionality
infiniteSpinButton.addEventListener('click', function() {
  // Find and trigger the spin function
  const spinButtons = document.querySelectorAll('button, [onclick*="spin"], [class*="spin"]');
  let found = false;
  
  spinButtons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes('spin') || 
        btn.innerHTML.toLowerCase().includes('spin') ||
        (btn.onclick && btn.onclick.toString().toLowerCase().includes('spin'))) {
      btn.click();
      found = true;
      console.log('Spin button triggered!');
    }
  });
  
  if (!found) {
    // Try to find and execute any spin functions in global scope
    for (let key in window) {
      if (typeof window[key] === 'function' && 
          key.toLowerCase().includes('spin')) {
        window[key]();
        console.log('Spin function executed:', key);
        found = true;
        break;
      }
    }
  }
  
  if (!found) {
    console.warn('Could not find spin mechanism automatically. You may need to manually identify the spin function.');
  }
});

// Add to page
document.body.appendChild(infiniteSpinButton);

console.log('Infinite spins button added! Click it to spin the wheel.');
