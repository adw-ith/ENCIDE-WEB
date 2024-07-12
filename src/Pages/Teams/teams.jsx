import React, { useState, useEffect, useRef } from 'react';
import './teams.css';

const Teamcarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const updateCarousel = () => {
    const width = trackRef.current.children[currentIndex].getBoundingClientRect().width;
    trackRef.current.style.transform = `translateX(-${width * currentIndex}px)`;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < trackRef.current.children.length - 1 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : trackRef.current.children.length - 1));
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, [currentIndex]);

  return (
    <section id="team">
        <h1>Meet the Team</h1>
        <div className="carousel">
        <div className="carousel-track" ref={trackRef}>
            <div className="carousel-item flex gap-2">
              <div className="dir fing">
                <div className="img dir1"></div>
                <h2>
                  <b>ALLEN BINU</b>
                  <i>DIRECTOR</i>
                </h2>
              </div>
              <div className="dir fing">
              <div className="img dir2"></div>
              <h2>
                  <b>JITHIN</b>
                  <i>CO-DIRECTOR</i>
                </h2>
              </div>
              <div className="dir fing">
                <div className="img dir3"></div>
                <h2>
                  <b>VENKATESH</b>
                  <i>CO-DIRECTOR</i>
                </h2>
                
              </div>
              <div className="dir fing">
                <div className="img dir4"></div>
                <h2>
                  <b>COLIN</b>
                  <i>CO-DIRECTOR</i>
                </h2>
              </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="org fing">
                <div className="img org1"></div>
                <h2>
                  <b>AHSAN</b>
                  <i>ORGANISING TEAM</i>
                </h2>
              </div>

              <div className="org fing">
              <div className="img org2"></div>
              <h2>
                <b>RISHANA</b>
                <i>ORGANISING TEAM</i>
              </h2>
            </div>

            <div className="org fing">
              <div className="img org3"></div>
              <h2>
                <b>SREEKUMAR</b>
                <i>ORGANISING TEAM</i>
              </h2>
            </div>

            <div className="org fing">
              <div className="img org4"></div>
              <h2>
                <b>ANIX</b>
                <i>ORGANISING TEAM</i>
              </h2>
            </div>

            <div className="org fing">
              <div className="img org5"></div>
              <h2>
                <b>JANI</b>
                <i>ORGANISING TEAM</i>
              </h2>
            </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="tech fing">
                <div className="img tech1"></div>
                <h2>
                  <b>DHANAY</b>
                  <i>TECH TEAM</i>
                </h2>
              </div>
              <div className="tech fing">
                <div className="img tech2"></div>
                <h2>
                  <b>AKASH</b>
                  <i>TECH TEAM</i>
                </h2>
              </div>
              <div className="tech fing">
                <div className="img tech3"></div>
                <h2>
                  <b>ABHIJATH</b>
                  <i>TECH TEAM</i>
                </h2>
              </div>
              <div className="tech fing">
                <div className="img tech4"></div>
                <h2>
                  <b>RAHUL</b>
                  <i>TECH TEAM</i>
                </h2>
              </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="web fing">
                  <div className="img web1"></div>
                  <h2>
                    <b>AJAY</b>
                    <i>WEB TEAM</i>
                  </h2>
                </div>
                <div className="web fing">
                  <div className="img web2"></div>
                  <h2>
                    <b>ADWAITH</b>
                    <i>WEB TEAM</i>
                  </h2>
                </div>
                <div className="web fing">
                  <div className="img web3"></div>
                  <h2>
                    <b>AHARON</b>
                    <i>WEB TEAM</i>
                  </h2>
                </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="des fing">
                  <div className="img des1"></div>
                  <h2>
                    <b>BIFIN</b>
                    <i>DESIGN TEAM</i>
                  </h2>
              </div>
              <div className="des fing">
                  <div className="img des2"></div>
                  <h2>
                    <b>CHACKOCHAN</b>
                    <i>DESIGN TEAM</i>
                  </h2>
              </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="doc fing">
                  <div className="img doc1"></div>
                  <h2>
                    <b>MEENAKSHI</b>
                    <i>DOCUMENTATION TEAM</i>
                  </h2>
              </div>
              <div className="doc fing">
                  <div className="img doc2"></div>
                  <h2>
                    <b>NEETHU</b>
                    <i>DOCUMENTATION TEAM</i>
                  </h2>
              </div>
              <div className="doc fing">
                  <div className="img doc3"></div>
                  <h2>
                    <b>JOE</b>
                    <i>DOCUMENTATION TEAM</i>
                  </h2>
              </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="com fing">
                  <div className="img com1"></div>
                  <h2>
                    <b>PARVANENDU</b>
                    <i>COMMUNITY MANAGER</i>
                  </h2>
              </div>
              <div className="com fing">
                  <div className="img com2"></div>
                  <h2>
                    <b>DIYA</b>
                    <i>COMMUNITY MANAGER</i>
                  </h2>
              </div>
              <div className="com fing">
                  <div className="img com3"></div>
                  <h2>
                    <b>RYAN</b>
                    <i>COMMUNITY MANAGER</i>
                  </h2>
              </div>
            </div>

            <div className="carousel-item flex gap-2">
              <div className="mp fing">
                  <div className="img mp1"></div>
                  <h2>
                    <b>ABIL</b>
                    <i>MEDIA</i>
                  </h2>
              </div>
              <div className="mp fing">
                  <div className="img mp2"></div>
                  <h2>
                    <b>RIYA</b>
                    <i>PUBLICITY</i>
                  </h2>
              </div>
            </div>   
        </div>
        
        <button className="carousel-button carousel-button--left" onClick={prevSlide}>&lt;</button>
        <button className="carousel-button carousel-button--right" onClick={nextSlide}>&gt;</button>
        </div>
    </section>
  );
};

export default Teamcarousel;
