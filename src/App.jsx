import React, { useState } from 'react';
import './App.css';

function App() {
  const [showBanners, setShowBanners] = useState(false);

  return (
    <>
      <main className="hero">
        <img src="images/logo.png" alt="HAI Creations Logo" className="logo" />
        <img src="images/creative-solutions.png" alt="Creative Solutions" className="creative-image" />
      </main>

      <section className="red-card-section">
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

      <section className="our-services-section">
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

      <section className="portfolio-section">
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

      {/* Graphic Design Section */}
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
      <section className="our-work-section">
        <div 
          className="our-work-title" 
          onClick={() => setShowBanners(!showBanners)}
          title="Click to view our banners"
        >
          <div className="our-text">OUR</div>
          <div className="work-text-outline">WORK</div>
        </div>

        {/* Expandable Banners Container */}
        <div className={`banners-wrapper ${showBanners ? 'open' : ''}`}>
          <div className="banners-inner">
            <div className="banners-grid">
              {[...Array(10)].map((_, i) => (
                <img 
                  key={i} 
                  src={`images/Banner${i + 1}.png`} 
                  alt={`Banner ${i + 1}`} 
                  className="banner-pic"
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="work-logos-container">
          <div className="work-logos-track">
            <img src="images/trustedBy.png" alt="Our Client Work Logos" className="work-logos-img" />
            <img src="images/trustedBy.png" alt="Our Client Work Logos" className="work-logos-img" />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="our-process-wrapper">
        <img src="images/road.png" alt="Road Background" className="process-bg-img" />
        <div className="our-process-section">
          
          <div className="services-sidebar">
            <h2 className="vertical-title"><span className="text-red">Our</span> Process</h2>
            <div className="vertical-red-line"></div>
          </div>

          <div className="process-content">
            {/* Step 1 */}
            <div className="process-row left-align">
              <div className="process-circle bg-red">01</div>
              <div className="process-text">
                <h3>Strategy</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-row right-align">
              <div className="process-text text-right">
                <h3>Design</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
              <div className="process-circle bg-dark">02</div>
            </div>

            {/* Step 3 */}
            <div className="process-row left-align">
              <div className="process-circle bg-red">03</div>
              <div className="process-text">
                <h3>Development</h3>
                <p>We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.</p>
              </div>
            </div>

            {/* Step 4 */}
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

      
    </>
  );
}

export default App;