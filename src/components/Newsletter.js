import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/newsletterStyles.css';
import Logo from '../assets/Logos/goal-logo-color-3-rgb.png';
import SoccerBall from '../assets/Icons/ball.png';

const Newsletter = () => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }, observerOptions);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showForm && iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      // Get your custom CSS as a string (hard-coded or imported from somewhere else)
      const customStyles = `
      label {
          color: white !important;
      }
      .form-header {
         padding: 0px 0 2rem !important;
          margin: auto !important;
         max-width: 280px;
          background: #034d37 !important;
          color: white !important;
      }
      #ic_signupform .elcontainer {
        background: #034d37 !important;
        border: 0px !important;
      }
      #ic_signupform .form-header {
       margin-bottom: 0 !important;
    }
      form#ic_signupform {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: fit-content;
        }
        #ic_signupform .elcontainer .submit-container input[type="submit"] {
          background: #c7f267 !important;
          border: 3px none #ffffff;
          border-radius: 50px !important;
          color: #034d37 !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
        }
        input.btn.btn-submit:hover {
            background-color: #eff3e4 !important;
        }
      `;
      iframeDoc.open();
      iframeDoc.write(`
        <html>
          <head>
            <base target="_parent">
            <style type="text/css">${customStyles}</style>
          </head>
          <body>
            <script data-jetpack-boost="ignore" type="text/javascript" src="https://app.icontact.com/icp/core/mycontacts/signup/designer/form/automatic?id=182&cid=1043826&lid=15990"></script>
          </body>
        </html>
      `);
      iframeDoc.close();
    }
  }, [showForm]);
  

  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  const modal = showForm
    ? ReactDOM.createPortal(
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="modal-close-btn">×</button>
            <iframe 
              ref={iframeRef}
              id="icFormFrame"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="iContact Signup Form"
            />
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <section ref={sectionRef} className={`newsletter ${isActive ? 'active' : ''}`}>
        <img src={SoccerBall} alt="Soccer Ball" className="background-logo" />
        <div className="newsletter-container">
          <img src={Logo} alt="Newsletter Logo" className="newsletter-logo" />
          <h2>NEWSLETTER</h2>
          <button onClick={openModal} className="subscribe-btn">
            SUBSCRIBE NOW
          </button>
        </div>
      </section>
      {modal}
    </>
  );
};

export default Newsletter;
