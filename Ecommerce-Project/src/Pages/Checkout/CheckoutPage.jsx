import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import "./CheckoutPage.css";
import { PaymentSummary } from "./PaymentSummary";

function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, SetPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
  
      response = await axios.get("/api/payment-summary");
      SetPaymentSummary(response.data);
    };

    fetchCheckoutData()

  }, []);
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          {paymentSummary && (
            <>
              <PaymentSummary paymentSummary={paymentSummary} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
