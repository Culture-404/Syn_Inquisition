document.getElementById('copyButton').onclick = function() {
    // Select the Bitcoin address text
    var btcAddress = document.getElementById('btcAddress');
    btcAddress.select();
    btcAddress.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(btcAddress.value);

    // Alert the copied text
    alert("Copied the Bitcoin address: " + btcAddress.value);
}