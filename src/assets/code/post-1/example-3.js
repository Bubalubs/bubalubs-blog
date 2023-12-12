export default `\
use Stripe/Customer;
use Stripe/PaymentMethod;

// Check if customer already exists
$customer = Customer::all([
    'email' => $request->email,
    'limit' => 1,
]);

if (isset($customer['data']) && count($customer['data'])) {
    $customer = $customer['data'][0];
} else {
    $customer = Customer::create($data);
}

$paymentMethod = PaymentMethod::retrieve($paymentMethodID);

$paymentMethod->attach(['customer' => $customer->id]);

// Update customers default payment method, in the case of the customer already having a stored a card.
Customer::update(
    $customer->id,
    [
        'invoice_settings' => [
            'default_payment_method' => $paymentMethod->id
        ],
    ]
);
`;
