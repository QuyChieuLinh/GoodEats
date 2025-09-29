import "./Cart.css";

function Cart() {
  return (
    <>
      <div className="page-title">
        <h1>My cart hello</h1>
      </div>
      <div className="container">
        <div className="shopping-cart">
          <h3>This is the cart</h3>
          <div className="card">
            <div className="product">
              <img src="https://i.pinimg.com/736x/7f/66/56/7f66563674d4ecc13fbe5ed6b9119b8f.jpg" className="product-img"/>
            </div>
            <div className="price">Per unit</div>
            <div className="quantity">quantity</div>
            <div className="total">Total</div>
          </div>
          
          <div className="card">
            <div className="product">Product</div>
            <div className="price">Per unit</div>
            <div className="quantity">quantity</div>
            <div className="total">Total</div>
          </div>

          <div className="card">
            <div className="product">Product</div>
            <div className="price">Per unit</div>
            <div className="quantity">quantity</div>
            <div className="total">Total</div>
          </div>

        </div>
        <div className="order-summary">
          <h3>Order summary</h3>
          <div className="property">
            <span className="label">Total</span>
            <span className="value">700$</span>
          </div>
          <div className="property">
            <span className="label">Discount amount</span>
            <span className="value">-200$</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
