import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import "./CheckoutPage.css";
import { PaymentSummary } from "./PaymentSummary";

function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, SetPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };
    fetchCheckoutData()

  }, []);

  useEffect (()=> {
    const fetchPaymentSummaryData = async () =>{
      let response =  await axios.get("/api/payment-summary");
      SetPaymentSummary(response.data);
    }
    fetchPaymentSummaryData()
  }, [cart])
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart ={loadCart} />

          {paymentSummary && (
            <>
              <PaymentSummary paymentSummary={paymentSummary} loadCart = {loadCart} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
