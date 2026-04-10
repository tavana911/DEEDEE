import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="newsletter-section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container text-center">
        <h2 className="display-6 fw-bold" style={{ color: 'var(--text-dark)' }}>Stay in the Loop</h2>
        <p className="mt-3 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '45ch' }}>
          Be the first to know about new flavors, special offers, and event packages.
        </p>
        <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 mt-4 mx-auto" style={{ maxWidth: '28rem' }}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '0.65rem 1rem' }}
          />
          <button type="submit" className="btn-primary-custom text-nowrap">
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-3 fw-semibold" style={{ color: 'var(--primary)' }}>Thanks for subscribing! 🎉</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
