function call() {
  var receiver = document.querySelector("input[name=tel]").value;
  var amount = document.querySelector("input[name=number]").value;
  var merchant = document.querySelector("input[name=merchant]").value;
  localStorage.setItem("receiver", receiver);
  localStorage.setItem("amount", amount);
  localStorage.setItem("merchant", merchant);

  if (!amount) {
    return;
  }

  var ussd;
  if (merchant) {
    ussd = `*126*4*${merchant}*${amount}%23`;
  } else if (receiver) {
    ussd = `*126*9*${receiver}*${amount}%23`;
  } else {
    return;
  }

  window.open(`tel:${ussd}`, "_self");
}

function initialize() {
  document
    .querySelector("#pay-btn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      call();
    });

  var storedAmount = localStorage.getItem("amount");
  document.getElementById("amount").value = storedAmount;

  var storedReceiver = localStorage.getItem("receiver");
  document.getElementById("receiver").value = storedReceiver;

  var storedMerchant = localStorage.getItem("merchant");
  document.getElementById("merchant").value = storedMerchant;
}
