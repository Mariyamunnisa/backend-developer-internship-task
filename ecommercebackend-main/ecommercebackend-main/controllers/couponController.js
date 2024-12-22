const createCoupon = async (req, res) => {
    const { code, discount } = req.body;
    const coupon = new Coupon({ code, discount });
    await coupon.save();
    res.json({ message: 'Coupon created successfully!' });
};

const getCoupons = async (req, res) => {
    const coupons = await Coupon.find();
    res.json(coupons);
};

module.exports = { createCoupon, getCoupons };
