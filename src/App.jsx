import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expandedBanner, setExpandedBanner] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBanner = (index) => {
    if (expandedBanner === index) {
      setExpandedBanner(null); // Closes if already open
    } else {
      setExpandedBanner(index); // Opens the clicked one
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = document.querySelectorAll('.our-services-section, .portfolio-section, .our-process-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`hamburger-btn ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-menu-links">
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a></li>
          <li><a href="#process" onClick={() => setMenuOpen(false)}>Process</a></li>
          <li><a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </div>

      <main className="hero" id="hero">
        <img src="images/logo.png" alt="HAI Creations Logo" className="logo" />
        <img src="images/creative-solutions.png" alt="Creative Solutions" className="creative-image" />
      </main>

      <section className="red-card-section" id="about">
        <img src="images/logo.png" alt="Hai Creations Watermark" className="watermark-img" />
        <div className="red-card-content">
          <p>Hai Creations (Pvt) Ltd<br />is a smart mix of talented professionals,<br />who are dedicated to moving mountains<br />to deliver a masterpiece beyond<br />expectations to benefit our clientele.</p>
          <p>We enjoy a successful reputation both<br />locally and internationally and are<br />fortunate to have clients who trust and<br />empower us to do what we think is right<br />& mutually beneficial.</p>
          <p>We believe that our work should speak<br />for itself.</p>
        </div>
        <div className="huge-about-us">about us</div>
      </section>

      <div className="trusted-by-section">
        <h2 className="trusted-by-title">Trusted By</h2>
        <img src="images/trustedBy.png" alt="Trusted Clients" className="trusted-by-logos" />
      </div>

      <section className="our-services-section animate-on-scroll" id="services">
        <div className="services-sidebar">
          <h2 className="vertical-title"><span className="text-red">Our</span> Services</h2>
          <div className="vertical-red-line"></div>
        </div>
        <div className="services-list">
          <div className="service-row">
            <div className="service-header">
              <h3>Branding</h3>
              <div className="service-tags">
                <span className="tag tag-red">Logos</span>
                <span className="tag tag-dark">Illustrations</span>
                <span className="tag tag-red">Packaging</span>
              </div>
            </div>
            <div className="service-text">
              <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
            </div>
          </div>
          <hr className="service-divider" />
          
          <div className="service-row">
            <div className="service-header">
              <h3>Web Designing</h3>
              <div className="service-tags">
                <span className="tag tag-red">Logos</span>
                <span className="tag tag-dark">Illustrations</span>
                <span className="tag tag-red">Packaging</span>
              </div>
            </div>
            <div className="service-text">
              <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
            </div>
          </div>
          <hr className="service-divider" />

          <div className="service-row">
            <div className="service-header">
              <h3>Digital Marketing</h3>
              <div className="service-tags">
                <span className="tag tag-red">Logos</span>
                <span className="tag tag-dark">Illustrations</span>
                <span className="tag tag-red">Packaging</span>
              </div>
            </div>
            <div className="service-text">
              <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
            </div>
          </div>
          <hr className="service-divider" />

          <div className="service-row">
            <div className="service-header">
              <h3>Content Writing</h3>
              <div className="service-tags">
                <span className="tag tag-red">Logos</span>
                <span className="tag tag-dark">Illustrations</span>
                <span className="tag tag-red">Packaging</span>
              </div>
            </div>
            <div className="service-text">
              <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section animate-on-scroll" id="portfolio">
        <div className="services-sidebar">
          <h2 className="vertical-title"><span className="text-red">Our</span> Portfolio</h2>
          <div className="vertical-red-line"></div>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-row">
            <div className="portfolio-text">
              <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
            </div>
            <div className="portfolio-image">
              <img src="images/product1.png" alt="Portfolio Layout 1" />
            </div>
          </div>
          <div className="portfolio-row mobile-reverse">
            <div className="portfolio-image">
              <img src="images/product2.png" alt="Portfolio Layout 2" />
            </div>
            <div className="portfolio-text">
              <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="graphic-design-section">
        <div className="graphic-top-container">
          <div className="graphic-collage">
            <img src="images/creative-collage.png" alt="Creative Design Collage" />
          </div>
          <div className="graphic-huge-text">
            <div className="huge-design">design ux & ui</div>
            <div className="huge-graphic">graphic</div>
          </div>
        </div>
        
        <div className="graphic-content">
          <p>As a multi-disciplinary agency, we engineer creativity using digital and print media to deliver brand solutions that will grow your business.</p>
          <p>We know how to draw the eye and hook customers in the first three seconds and create a lasting impression in our creatives.</p>
        </div>
      </section>

      

      {/* Our Work Section */}
      <section className="our-work-section" id="work">
        <div className="our-work-title">
          <div className="our-text">OUR</div>
          <div className="work-text-outline">WORK</div>
        </div>

        {/* Banners are now always visible */}
        <div className="banners-wrapper">
          <div className="banners-grid">
            {[...Array(10)].map((_, i) => (
              <div className="banner-item" key={i}>
                <img 
                  src={`images/Banner${i + 1}.png`} 
                  alt={`Banner ${i + 1}`} 
                  className="banner-pic cursor-pointer"
                  onClick={() => toggleBanner(i)}
                />
                
                {/* Expandable Small Images Container */}
                <div className={`sub-images-wrapper ${expandedBanner === i ? 'expanded' : ''}`}>
                  <div className="sub-images-inner">
                    <img src={`images/detail${i + 1}-1.png`} alt="Detail 1" className="sub-image" />
                    <img src={`images/detail${i + 1}-2.png`} alt="Detail 2" className="sub-image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="work-logos-container">
          <div className="work-logos-track">
            <img src="images/trustedBy.png" alt="Our Client Work Logos" className="work-logos-img" />
            <img src="images/trustedBy.png" alt="Our Client Work Logos" className="work-logos-img" />
          </div>
        </div>
      </section>

      <section className="our-process-wrapper" id="process">
        <img src="images/road.png" alt="Road Background" className="process-bg-img" />
        <div className="our-process-section animate-on-scroll">
          
          <div className="services-sidebar">
            <h2 className="vertical-title"><span className="text-red">Our</span> Process</h2>
            <div className="vertical-red-line"></div>
          </div>

          <div className="process-content">
            <div className="process-row left-align">
              <div className="process-circle bg-red">01</div>
              <div className="process-text">
                <h3>Strategy</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
            </div>

            <div className="process-row right-align">
              <div className="process-text text-right">
                <h3>Design</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
              <div className="process-circle bg-dark">02</div>
            </div>

            <div className="process-row left-align">
              <div className="process-circle bg-red">03</div>
              <div className="process-text">
                <h3>Development</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
            </div>

            <div className="process-row right-align">
              <div className="process-text text-right">
                <h3>Quality Check</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
              <div className="process-circle bg-dark">04</div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="reviews-hero">
          <img src="images/reviews.png" alt="Reviews Background" className="reviews-hero-img" />
        </div>
        
        <div className="reviews-header">
          <div className="horizontal-red-line"></div>
          <h2>What People say about <span className="text-red">Us</span></h2>
        </div>

        <div className="reviews-container">
          <div className="reviews-track track-right">
            {[...Array(10)].map((_, i) => (
              <div className="review-card" key={`top-${i}`}>
                <p>Hai creations provided a best and fast service</p>
                <span>-Someone</span>
              </div>
            ))}
          </div>

          <div className="reviews-track track-left">
            {[...Array(10)].map((_, i) => (
              <div className="review-card" key={`bottom-${i}`}>
                <p>Hai creations provided a best and fast service</p>
                <span>-Someone</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-left">
          <h1 className="contact-heading">Let's<br />Create</h1>
          <p className="contact-subtext">We're ready to speak when you are.</p>
        </div>
        
        <div className="contact-right">
          <div className="contact-box">
            <div className="contact-card cursor-pointer">
              <div className="card-content">
                <span className="card-label">Email</span>
                <span className="card-value">hello@vovi.studio</span>
              </div>
              <span className="card-arrow">›</span>
            </div>

            <div className="contact-card cursor-pointer">
              <div className="card-content">
                <span className="card-label">Phone</span>
                <span className="card-value">07967799918</span>
              </div>
              <span className="card-arrow">›</span>
            </div>

            <div className="contact-grid-row">
              <div className="contact-card half-card cursor-pointer">
                <span className="card-value small-text">Chat to us now</span>
                <div className="chat-icons"></div>
              </div>
              <div className="contact-card half-card cursor-pointer">
                <span className="card-value small-text">Book a call </span>
              </div>
            </div>

            <div className="contact-card social-row cursor-pointer">
              <span className="card-value small-text">Follow us</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-left">
          <p className="footer-tagline">
            Digital craftmanship sculpting you<br />as an industry leader.
          </p>
          <div className="footer-links-grid">
            <div className="footer-col">
              <a href="#hero">Home</a>
              <a href="#portfolio">Portfolio</a>
            </div>
            <div className="footer-col">
              <a href="#hero">Home</a>
              <a href="#portfolio">Portfolio</a>
            </div>
          </div>
          <div className="footer-socials">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.048 1.79.217 2.428.492a4.88 4.88 0 011.77 1.153 4.902 4.902 0 011.153 1.772c.275.638.444 1.362.493 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.049 1.066-.218 1.79-.493 2.428a4.883 4.883 0 01-1.153 1.772C18.523 20.316 17.798 20.485 16.732 20.534c-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.049-1.79-.218-2.428-.493a4.89 4.89 0 01-1.77-1.153 4.904 4.904 0 01-1.153-1.772c-.275-.638-.444-1.363-.493-2.428-.05-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.049-1.065.218-1.79.493-2.428A4.88 4.88 0 014.28 4.21a4.89 4.89 0 011.772-1.153c.638-.275 1.363-.444 2.428-.492C9.544 2.01 9.883 2 12 2zm0 2.16c-2.67 0-2.996.01-4.047.058-.976.045-1.505.207-1.858.344a3.3 3.3 0 00-1.898 1.898c-.137.353-.299.882-.344 1.858-.048 1.05-.058 1.376-.058 4.047 0 2.67.01 2.996.058 4.047.045.976.207 1.505.344 1.858a3.3 3.3 0 001.898 1.898c.353.137.882.299 1.858.344 1.05.048 1.377.058 4.047.058 2.67 0 2.996-.01 4.047-.058.976-.045 1.505-.207 1.858-.344a3.3 3.3 0 001.898-1.898c.137-.353.299-.882.344-1.858.048-1.05.058-1.377.058-4.047 0-2.67-.01-2.996-.058-4.047-.045-.976-.207-1.505-.344-1.858a3.3 3.3 0 00-1.898-1.898c-.353-.137-.882-.299-1.858-.344-1.05-.048-1.376-.058-4.047-.058zM12 6.865A5.135 5.135 0 1112 17.135 5.135 5.135 0 0112 6.865zm0 8.11a2.975 2.975 0 100-5.95 2.975 2.975 0 000 5.95zm5.338-8.672a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"/></svg>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.256 2.657 7.9 6.418 9.324-.086-.795-.164-2.02.034-2.888.178-.783 1.15-4.88 1.15-4.88s-.294-.588-.294-1.455c0-1.36.79-2.375 1.774-2.375.836 0 1.24.627 1.24 1.38 0 .84-.533 2.095-.808 3.258-.23.974.488 1.766 1.448 1.766 1.737 0 3.07-1.834 3.07-4.478 0-2.336-1.678-3.968-4.08-3.968-2.77 0-4.4 2.078-4.4 4.225 0 .84.323 1.74.726 2.23.08.097.09.183.065.292-.075.312-.24.978-.272 1.112-.043.18-.142.22-.328.134-1.226-.57-1.993-2.36-1.993-3.797 0-3.085 2.24-5.918 6.467-5.918 3.393 0 6.027 2.418 6.027 5.642 0 3.372-2.132 6.084-5.097 6.084-1.026 0-1.99-.533-2.32-1.164l-.634 2.412c-.228.874-.848 1.967-1.265 2.63A10.02 10.02 0 0012 22c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/></svg>
          </div>
        </div>

        <div className="footer-right">
          <img src="images/logo.png" alt="Hai Creations Logo" className="footer-logo-img" />
        </div>
      </footer>
    </>
  );
}

export default App;