export default `\
Subscription::create([
    'customer' => $customer->id,
    'off_session' => true,
    'payment_behavior' => 'error_if_incomplete',
    'items' => [
        [
            'plan' => $plan->id,
            'quantity' => 1
        ]
    ],
]);
`;
