// Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById('billAmt').value;
  var serviceQual =
    document.getElementById('serviceQual').value;
  var numOfPeople =
    document.getElementById('numOfPeople').value;

  // Validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
}
