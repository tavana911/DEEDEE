const DeliveryBanner = () => {
  return (
    <section className="delivery-banner" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container text-center">
        <h2 className="h3 fw-bold mb-3">
          Our delivery is made to your comfort zone! 
        </h2>
        <p className="mx-auto mb-5" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '55ch' }}>
          From our kitchen to your door — fresh, fast, and always perfect.
        </p>
        <div className="row g-4 justify-content-center" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="col-sm-4 text-center">
            <div className="delivery-icon-box mx-auto mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div className="fw-semibold">Fast Delivery</div>
            <p className="small mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Straight to your doorstep</p>
          </div>
          <div className="col-sm-4 text-center">
            <div className="delivery-icon-box mx-auto mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
            </div>
            <div className="fw-semibold">Gift Ready</div>
            <p className="small mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Perfect for souvenirs & gifts</p>
          </div>
          <div className="col-sm-4 text-center">
            <div className="delivery-icon-box mx-auto mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
            </div>
            <div className="fw-semibold">Event Catering</div>
            <p className="small mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Bulk orders for any occasion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
