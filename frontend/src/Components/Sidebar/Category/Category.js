
function Category() {
  return (
    <>
      <div>
        <h3 className="sidebar-title">Category</h3>
        <div>
          <label className="sidebar-option">
            <input type="radio" name="category-option"/>
            <span className="option-label">All</span>
          </label>

          <label className="sidebar-option">
            <input type="radio" name="category-option"/>
            <span className="option-label">Meat</span>
          </label>

          <label className="sidebar-option">
            <input type="radio" name="category-option"/>
            <span className="option-label">Vegetable</span>
          </label>

          <label className="sidebar-option">
            <input type="radio" name="category-option"/>
            <span className="option-label">Fruits</span>
          </label>

          <label className="sidebar-option">
            <input type="radio" name="category-option"/>
            <span className="option-label">Other</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default Category;
