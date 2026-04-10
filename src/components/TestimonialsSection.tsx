const testimonials = [
  {
    name: "Adebayo O.",
    text: "A patronage will make you glue  Honestly the best chinchin I've ever tasted. Can't stop ordering!",
    rating: 5,
  },
  {
    name: "Funmilayo A.",
    text: "I used Deedee Chinchin for my wedding souvenirs and guests couldn't stop talking about it. Pure quality!",
    rating: 5,
  },
  {
    name: "Chidinma E.",
    text: "The coconut flavor is absolutely divine. My kids ask for it every weekend. Our delivery is always on time!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: 'var(--text-dark)' }}>What Our Customers Say</h2>
          <p className="mt-3 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '50ch' }}>
            Loved by thousands across Nigeria and beyond.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t) => (
            <div key={t.name} className="col-sm-6 col-lg-4">
              <div className="card-custom p-4 h-100">
                <div className="d-flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C75A00" stroke="#C75A00" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="fst-italic mb-3" style={{ color: 'var(--text-dark)' }}>"{t.text}"</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <span className="fw-semibold" style={{ color: 'var(--text-dark)' }}>{t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
