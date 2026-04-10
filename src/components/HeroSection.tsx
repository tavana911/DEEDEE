import heroImage from "@/assets/hero-chinchin.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6 order-2 order-md-1">
            <h1 className="display-4 fw-bold animate-fade-up" style={{ color: 'var(--text-dark)', lineHeight: 1.1 }}>
              DEEDEE CHINCHIN
              <span className="d-block mt-2" style={{ color: 'var(--primary)' }}>Crispy, Authentic, Irresistible.</span>
            </h1>
            <p className="mt-4 fs-5 animate-fade-up-delay-1" style={{ color: 'var(--text-muted)', maxWidth: '50ch' }}>
              Deedee chinchin is a masterpiece mix of sweetness that give you the tasty treat you desire, we offer you a quality, 
              rich and mouthwatering bite! 
            </p>
            <p className="mt-2 animate-fade-up-delay-2" style={{ color: 'var(--text-muted)' }}>
              A perfect fit for your souvenirs at events and can be added to your gift item or serve with your food trays.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 animate-fade-up-delay-3">
              <a href="#products" className="btn-primary-custom fs-6 px-4 py-2">
                Order Now
              </a>
              <a href="tel:+2349134440694" className="btn-outline-custom fs-6 px-4 py-2">Wholesale Inquiry </a>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 animate-fade-up">
            <div style={{ position: 'relative' }}>
              <div className="hero-image-glow" />
              <img
                src={heroImage}
                alt="Deedee Chinchin - golden crispy West African snack in a beautiful bowl"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
