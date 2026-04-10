import lifestyleImage from "@/assets/lifestyle-event.jpg";

const StorySection = () => {
  return (
    <section id="story" className="story-section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.04)' }}>
              <img
                src={lifestyleImage}
                alt="Deedee Chinchin served at an elegant event"
                className="w-100"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="display-6 fw-bold" style={{ color: 'var(--text-dark)' }}>Our Story</h2>
            <div className="mt-4" style={{ color: 'var(--text-muted)' }}>
              <p>Born from a deep love for West African flavors, Deedee Chinchin brings the warmth of homemade snacks to your table — with a premium twist.</p>
              <p className="mt-3">Every batch is handcrafted using time-honored recipes passed down through generations, combined with the finest ingredients to deliver that perfect crunch and sweetness.</p>
              <p className="mt-3">From family gatherings to corporate events, our chinchin has become the go-to treat that brings people together. We take pride in every golden piece.</p>
            </div>
            <div className="row g-4 mt-4">
              <div className="col-4 text-center">
                <div className="stat-number">5K+</div>
                <div className="small mt-1" style={{ color: 'var(--text-muted)' }}>Happy Customers</div>
              </div>
              <div className="col-4 text-center">
                <div className="stat-number">100%</div>
                <div className="small mt-1" style={{ color: 'var(--text-muted)' }}>Natural Ingredients</div>
              </div>
              <div className="col-4 text-center">
                <div className="stat-number">24hr</div>
                <div className="small mt-1" style={{ color: 'var(--text-muted)' }}>Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
