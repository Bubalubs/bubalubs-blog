export default `\
use Stripe/PaymentMethod;

// Set up payment data
$data = [];

// Get customer's payment method
$paymentMethod = PaymentMethod::all([
    'customer' => $customer->id,
    'type' => 'card'
]);

$data['payment_method'] = $paymentMethod->data[0]->id;
$data['off_session'] = true;
$data['confirm'] = true;

return PaymentIntent::create($data);
`;