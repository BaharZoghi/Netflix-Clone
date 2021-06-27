import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import db from "../firebase";
import "../styles/plansScreen.css";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((snapShot) => {
        snapShot.forEach(async (queries) => {
          setSubscription({
            role: queries.data().role,
            curEnd: queries.data().current_period_end.seconds,
            curStart: queries.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  console.log("Subscription", subscription);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(
          "pk_test_51J0P1VGT9TXOvOuHJHwbNmp1BoxXI2g8XlU48ydjrF5M1aL3CdZnCS6j8AjFMjO2rSsNag2sAGXa0X187JQCPWjz00o9FmpMGu"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (doc) => {
          products[doc.id] = doc.data();
          const priceSnap = await doc.ref.collection("prices").get();
          priceSnap.docs.forEach((docs) => {
            products[doc.id].prices = {
              priceId: docs.id,
              priceData: docs.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  return (
    <div className="plansScreen">
      {subscription && (
        <p>
          Renewal Date:
          {new Date(subscription.curEnd * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentSubcription = productData.name
          ?.toLowerCase()
          .includes(subscription?.role.toLowerCase());
        return (
          <div
            key={productId}
            className={`planScreen__plan ${
              isCurrentSubcription && "planScreen__plan__disabled"
            }`}
          >
            <div className="planScreen_info">
              <h4>{productData.name}</h4>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentSubcription &&
                loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentSubcription ? "Current Plan" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
