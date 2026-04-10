const Footer = () => {
  return (
    <footer className="footer-custom" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
<img src="/src/assets/efewfewf.png" alt="DEEDEE CHINCHIN Logo" style={{width: '28px', height: '28px', objectFit: 'contain'}} />
              <span className="fw-bold fs-5">DEEDEE CHINCHIN</span>
            </div>
            <p className="footer-muted small" style={{ maxWidth: '30ch' }}>
              Premium  chinchin. Crispy, authentic, irresistible.
            </p>
             <div className="mt-2">
                <small className="footer-muted">
                   Wholesale Inquiry: <a href="tel:+2349134440694">Call</a> / <a href="https://wa.me/+2349134440694">WhatsApp</a> +2349134440694
                </small>
              </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="d-flex flex-column gap-2">
              {["Home", "Products", "Our Story", "Wholesale"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "")}`} className="small">
                  {link}
                </a>
              ))}
             
            </nav>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h4 className="footer-heading">Contact</h4>
            <div className="d-flex flex-column gap-2 small footer-muted">
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: 'var(--primary)' }}>✉</span> <a href="mailto:hello@deedeechinchin.com">hello@deedeechinchin.com</a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: 'var(--primary)' }}>📞</span> <a href="tel:+2349134440694">+2349134440694</a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: 'var(--primary)' }}>📍</span> Lagos, Nigeria
              </div>
            </div>
          </div>

<div className="col-sm-6 col-lg-3">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="https://www.tiktok.com/@deedeechinchin0?_r=1&_t=ZN-95QHCEAFQW6" target="_blank" rel="noopener noreferrer">
                 TikTok
              </a>
              <a href="https://www.instagram.com/deedeechinchin?igsh=MXQzZGd0OTB6cDgxNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
            <div className="mt-3">
              <h6 className="footer-heading mb-2">Hours</h6>
              <div className="d-flex flex-column gap-1 small footer-muted">
                <div>Mon - Fri: 8am – 6pm</div>
                <div>Sat: 9am – 4pm</div>
                <div>Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 text-center small footer-muted" style={{ borderTop: '1px solid rgba(255,247,237,0.1)' }}>
          © {new Date().getFullYear()} Deedee Chinchin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
