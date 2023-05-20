// Check if the popup should be displayed
function shouldDisplayPopup() {
    // Check if the 'popupShown' cookie or 'popupShown' local storage item exists
    return !document.cookie.includes('popupShown') && !localStorage.getItem('popupShown');
  }
  
  // Show the popup
  function showPopup() {
    // Display the popup code here
  
    // Set the 'popupShown' cookie with an expiry date (e.g., 30 days)
    document.cookie = 'popupShown=true; expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
  
    // Set the 'popupShown' local storage item
    localStorage.setItem('popupShown', 'true');
  }
  
  // Check if the popup should be displayed and show it if necessary
  if (shouldDisplayPopup()) {
    showPopup();
  }
  