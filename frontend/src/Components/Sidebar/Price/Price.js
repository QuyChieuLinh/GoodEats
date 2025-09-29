// import "./Price.css";

function Price() {
  return (
    <>
      <div>
        <h3 className="sidebar-title">Price</h3>
        <div>
          <label className="sidebar-option">
            <span className="option-label">All</span>
            <input type="radio" name="price-option" />
          </label>

          <label className="sidebar-option">
            <span className="option-label">50-100$</span>
            <input type="radio" name="price-option" />
          </label>

          <label className="sidebar-option">
            <span className="option-label">100-200$</span>
            <input type="radio" name="price-option" />
          </label>

          <label className="sidebar-option">
            <span className="option-label">200-300$</span>
            <input type="radio" name="price-option" />
          </label>

          <label className="sidebar-option">
            <span className="option-label">300-500$</span>
            <input type="radio" name="price-option" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Price;
