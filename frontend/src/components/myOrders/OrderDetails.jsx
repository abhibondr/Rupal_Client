import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sashb"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Abhishek"}
          </p>
          <p>
            <b>Phone</b>
            {9284883940}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-03-22"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-04-22"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>
            {"asabhkb"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-04-22"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{125678}
          </p>
          <p>
            <b>Shipping Charges</b>₹{120}
          </p>
          <p>
            <b>Tax</b>₹{234}
          </p>
          <p>
            <b>Total Amount</b>₹{234 + 120 + 125678}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{120}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{150}</span>
            </div>
          </div>
          <div>
            <h4>Cheese Vadapav</h4>
            <div>
              <span>{10}</span> x <span>{70}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{120 + 150 + 70}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
