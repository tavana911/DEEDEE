import { useState } from "react";
import logo from "@/assets/DEEDEE-.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md fixed-top" style={{ backgroundColor: 'rgba(255,247,237,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
<img src={logo} alt="Dee Dee Chinchin Logo" style={{width: '40px', height: '40px', objectFit: 'contain'}} />
          <span className="navbar-brand-text">DEEDEE CHINCHIN</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto me-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a className="nav-link nav-link-custom" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2 mt-3 mt-md-0">
<a href="tel:+2349134440694" className="btn-outline-custom" onClick={() => setOpen(false)}>Wholesale</a>
            <a href="#products" className="btn-primary-custom" onClick={() => setOpen(false)}>
               Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
