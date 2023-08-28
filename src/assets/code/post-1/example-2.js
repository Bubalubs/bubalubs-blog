export default `\
stripe.confirmCardSetup(
    clientSecret,
    {
        payment_method: {
        card: cardElement,
        billing_details: {name: cardholderName.value}
        }
    }
    ).then(function(result) {
    if (result.error) {
        // Display error.message in your UI.
    } else {
        // Send setupIntent.payment_method to your server
    }
});
`;