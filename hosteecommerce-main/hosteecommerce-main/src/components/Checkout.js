const Checkout = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const applyDiscount = () => {
        if (total > 499) {
            return total * 0.9; // Apply 10% discount
        }
        return total;
    };

    const freeDelivery = total > 499 ? 'Free Delivery' : 'Delivery Charges Apply';

    return (
        <div>
            <h1>Checkout</h1>
            <p>Total: ₹{applyDiscount()}</p>
            <p>{freeDelivery}</p>
        </div>
    );
};

export default Checkout;
