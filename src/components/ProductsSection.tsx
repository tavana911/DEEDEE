import productClassic from "@/assets/product-classic.jpg";
import productCoconut from "@/assets/product-coconut.jpg";
import productSpicy from "@/assets/product-spicy.jpg";
import bigproduct from "@/assets/big-product.jpg";


const products = [
  {
    name: "Small Pouch Chinchin",
    // description: "Our signature golden-fried crunchy delight. Sweet, buttery, and addictive.",
    price: "₦1,000",
    image: productClassic,
  },
  {
    name: "Medium Pouch Chinchin",
    // description: "Infused with real coconut for a tropical twist on the classic favorite.",
    price: "₦2,500",
    image: productCoconut,
  },
  {
    name: "Medium -2 Pouch Chinchin",
    // description: "A bold, chili-kissed version for those who love a little heat with their sweet.",
    price: "₦3,000",
    image: productSpicy,
  },
  {
    name: "Big Family Pouch 2kg",
    // description: "Large sharing pack for family gatherings/festivals - perfect for sharing.",
    price: "₦25,000",
    image: bigproduct,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: 'var(--text-dark)' }}>Our Products</h2>
          <p className="mt-3 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '50ch' }}>
            Handcrafted with love and the finest ingredients. Every bite is a taste of home.
          </p>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.name} className="col-sm-6 col-lg-4">
              <div className="card-custom h-100">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-image-overlay" />
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-dark)' }}>{product.name}</h3>
                    <span className="fw-bold" style={{ color: 'var(--primary)' }}>{product.price}</span>
                  </div>
                  <p className="small mb-3" style={{ color: 'var(--text-muted)' }}>{product.description}</p>
                  <div className="d-flex gap-2">
<a href="tel:+2349134440694" className="btn-primary-custom flex-fill text-center"> Call Now</a>
<a href="https://wa.me/+2349134440694" className="btn-primary-custom flex-fill text-center">Text on WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
