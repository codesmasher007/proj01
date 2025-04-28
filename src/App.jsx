import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Button from "./components/Button";
import "./App.css";
import book from "./assets/book.png";
import bookopen from "./assets/bookopen.png";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect when user scrolls past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroBottom =
          heroSection.offsetTop + heroSection.offsetHeight * 0.7;
        setScrolled(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header Section - Updated navbar design with scroll effect */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <Logo color={scrolled ? "#022183" : "#FFFFFF"} />
            <nav className="main-nav">
              <ul>
                <li>
                  <a
                    href="#home"
                    className={activePage === "home" ? "active" : ""}
                    onClick={() => setActivePage("home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={activePage === "about" ? "active" : ""}
                    onClick={() => setActivePage("about")}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#plans"
                    className={activePage === "plans" ? "active" : ""}
                    onClick={() => setActivePage("plans")}
                  >
                    Plans
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className={activePage === "testimonials" ? "active" : ""}
                    onClick={() => setActivePage("testimonials")}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className={activePage === "privacy" ? "active" : ""}
                    onClick={() => setActivePage("privacy")}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#more"
                    className={activePage === "more" ? "active" : ""}
                    onClick={() => setActivePage("more")}
                  >
                    More
                  </a>
                </li>
              </ul>
            </nav>
            <Button> Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Land job interviews 10x faster</h1>
              <p>
                Automated job application service that sends your resume and
                cover letter to employers
              </p>
              <Button icon={true}>Get Started</Button>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "0",
                    zIndex: 2,
                    backdropFilter: "blur(14px)",
                    border: "1px solid white",
                    padding: "20px",
                    borderRadius: "9999px",
                  }}
                >
                  <div
                    className="open-book"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "0",
                      zIndex: 2,
                      backdropFilter: "blur(14px)",
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "9999px",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "white",
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="100px"
                      width="100px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.75 8.5a.75.75 0 0 1 .75.75v7.19L16.72 6.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L7.56 17.5h7.19a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"></path>
                    </svg>
                  </div>
                  <img src={bookopen} alt="" className="openbook" />
                </div>

                <img src={book} alt="Job Application Guide" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How we work?</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Submit English Form</h3>
              <p>Fill out a simple form with your information</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We do the work of job searching for you</h3>
              <p>Let us handle the hard part</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Your application will be sent to employers</h3>
              <p>We submit your application to open positions</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>You get the interview</h3>
              <p>Start preparing for your interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us" id="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="team-container">
            <div className="team-member">
              <div className="member-image">
                <img src="/team-member1.png" alt="Team Member" />
              </div>
              <div className="member-info">
                <h3>CEO</h3>
                <p>
                  Leader in the field of job recruiting with a distinguished
                  background...
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/team-member2.png" alt="Team Member" />
              </div>
              <div className="member-info">
                <h3>CMO</h3>
                <p>
                  Marketing specialist with extensive experience in recruitment
                  services...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2>What our clients have to say</h2>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="quote-icon"></span>
                <p>
                  "How is it possible everyone else got my dream job except me?
                  I was getting desperate until I found MobulsEngine..."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <p>John D.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="quote-icon"></span>
                <p>
                  "Now I'm a remote developer and I couldn't be happier with my
                  new job. Thanks to MobulsEngine..."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <p>Sarah L.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="quote-icon"></span>
                <p>
                  "I've been struggling for months to find a job. Within 2 weeks
                  of using MobulsEngine I had multiple offers..."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <p>Michael T.</p>
              </div>
            </div>
          </div>
          <div className="testimonial-actions">
            <Button variant="outline">More customer testimonials</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="benefits-container">
            <div className="benefit-card">
              <div className="benefit-icon heart-icon"></div>
              <h3>Tried, Tested, Trusted</h3>
              <p>We're the job application service people trust for results</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon people-icon"></div>
              <h3>Real People, Real Help</h3>
              <p>A dedicated team ready to support your job hunt</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon star-icon"></div>
              <h3>Best Pro-to-Price</h3>
              <p>Highest value service at the most competitive rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-plans" id="plans">
        <div className="container">
          <h2>Job Application Service Plans</h2>
          <div className="plans-container">
            <div className="plan-card promo">
              <div className="plan-header">
                <h3>April Promo</h3>
                <div className="plan-price">
                  <span className="price">$35</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>15 Job Applications Per Month</li>
                  <li>Personal Resume Review</li>
                  <li>Basic Support via Email</li>
                  <li>Monthly Progress Report</li>
                  <li>Access to Learning Resources</li>
                </ul>
              </div>
              <Button>Get Started</Button>
            </div>
            <div className="plan-card">
              <div className="plan-header">
                <h3>Starter</h3>
                <div className="popular-tag">Popular</div>
                <div className="plan-price">
                  <span className="price">$50</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>30 Job Applications Per Month</li>
                  <li>Resume Review with Expert Feedback</li>
                  <li>Premium Support via Email</li>
                  <li>Weekly Progress Report</li>
                  <li>Interview Preparation Tips</li>
                </ul>
              </div>
              <Button>Get Started</Button>
            </div>
            <div className="plan-card">
              <div className="plan-header">
                <h3>Plus</h3>
                <div className="plan-price">
                  <span className="price">$100</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>60 Job Applications Per Month</li>
                  <li>Deep Resume & Cover Letter Review</li>
                  <li>Priority Support via Email & Phone</li>
                  <li>Daily Progress Updates</li>
                  <li>Mock Interview Sessions</li>
                </ul>
              </div>
              <Button>Get Started</Button>
            </div>
          </div>

          <div className="advanced-plan">
            <div className="advanced-plan-content">
              <h3>Advance</h3>
              <div className="plan-price">
                <span className="price">$150</span>
                <span className="period">/month</span>
              </div>
              <div className="plan-features">
                <ul>
                  <li>Unlimited Job Applications</li>
                  <li>Custom Resume & LinkedIn Optimization</li>
                  <li>24/7 Priority Support</li>
                  <li>Personal Job Search Strategy</li>
                  <li>Executive Career Coaching Sessions</li>
                </ul>
              </div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Services Section */}
      <section className="resume-services">
        <div className="container">
          <h2>Resume Building & Coaching</h2>
          <p>
            Expert services to optimize your job search materials and interview
            performance
          </p>

          <div className="services-container">
            <div className="service-card">
              <h3>Resume Rebuild</h3>
              <div className="service-price">$1000</div>
              <div className="service-features">
                <ul>
                  <li>Full resume reconstruction</li>
                  <li>Professional formatting & design</li>
                  <li>Keyword optimization for ATS</li>
                  <li>2 rounds of revisions</li>
                  <li>LinkedIn profile update</li>
                </ul>
              </div>
              <Button>Get Started</Button>
            </div>

            <div className="service-card">
              <h3>Interview Prep</h3>
              <div className="service-price">$500</div>
              <div className="service-features">
                <ul>
                  <li>3 mock interview sessions</li>
                  <li>Industry-specific preparation</li>
                  <li>Feedback and coaching</li>
                  <li>Salary negotiation tactics</li>
                  <li>Post-interview follow-up templates</li>
                </ul>
              </div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>STILL HAVE DOUBTS?</h2>
            <Button icon={true}>Contact us</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Logo color="#FFFFFF" />
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Email</h4>
                <p>support@mobulsengine.com</p>
              </div>
              <div className="footer-column">
                <h4>Socials</h4>
                <div className="social-links">
                  <a href="#" className="social-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 All Rights Reserved</p>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
