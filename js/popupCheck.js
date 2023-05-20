// popup.js

let popupShown = false;

// Check if the popup should be displayed
function shouldDisplayPopup() {
  return !popupShown;
}

// Show the popup
function showPopup() {
  // Display the popup code here

  popupShown = true;
}
// Check if the popup should be displayed and show it if necessary
if (shouldDisplayPopup()) {
  showPopup();
}