import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        <div className="product-card">
          <img src={product1} alt="Face Cream" />
          <h3>Face Cream</h3>
          <p>₹499</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={product2} alt="Hair Oil" />
          <h3>Hair Oil</h3>
          <p>₹399</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={product3} alt="Body Lotion" />
          <h3>Body Lotion</h3>
          <p>₹599</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={product4} alt="Face Wash" />
          <h3>Face Wash</h3>
          <p>₹299</p>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
}

export default Products;