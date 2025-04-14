import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../styles/carouselStyles.css';
import dictionaryData from '../dictionary/dictionaryjson';

const HoverCardPortal = ({ children, position }) => {
  return ReactDOM.createPortal(
    <div
      className="hoverCardPortal"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: position.width,
        height: 'fit-content',
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

const ShowCard = ({ show, showType, onShowClick }) => {
  const cardRef = useRef(null);
  const [hoverPosition, setHoverPosition] = useState(null);
  const [showHover, setShowHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const extraHorizontal = 30;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setHoverPosition({
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset - extraHorizontal,
        width: rect.width + extraHorizontal * 2,
        minHeight: rect.height,
      });
      setShowHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowHover(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      onShowClick(show);
    }
  };

  const cardClass = showType === 'series' ? 'showCard seriesCard' : 'showCard filmCard';
  const imageSource = showType === 'series' ? show.img_URL : show.poster_URL;

  return (
    <div
      className={cardClass}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={imageSource} alt={show.title} className="showCardImage" />
      {!isMobile && showHover && hoverPosition && (
        <HoverCardPortal position={hoverPosition}>
          <div className="hoverCard" style={{ width: '100%', height: '100%' }}>
            <img
              src={show.img_URL}
              alt={`${show.title} overlay`}
              className="hoverImage"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <div className="hoverInfo">
              <h3>{show.title}</h3>
              <Synopsis synopsis={show.description} />
            </div>
          </div>
        </HoverCardPortal>
      )}
    </div>
  );
};

const Synopsis = ({ synopsis }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 240;

  const toggleReadMore = () => {
    setIsExpanded(prev => !prev);
  };

  const shouldTruncate = synopsis.length > maxLength;

  const displayText = isExpanded || !shouldTruncate
    ? synopsis
    : synopsis.substring(0, maxLength) + '...';

  return (
    <p className="synopsis">
      {displayText}
      {shouldTruncate && (
        <span className="read-more" onClick={toggleReadMore}>
          {isExpanded ? ' Show Less' : ' Read More'}
        </span>
      )}
    </p>
  );
};

const Carousel = ({ category, showType }) => {
  const [showsMap, setShowsMap] = useState(new Map());
  const collectionRef = useRef(null);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    if (!Array.isArray(dictionaryData)) {
      console.error('Expected an array but got:', dictionaryData);
      return;
    }
    const map = new Map();
    dictionaryData.forEach(show => {
      map.set(show._id, show);
    });
    setShowsMap(map);
  }, []);

  const filteredShows = Array.from(showsMap.values()).filter(show =>
    show.category && show.category.includes(category)
  );

  const handleNext = () => {
    const container = collectionRef.current;
    if (!container) return;
    const visibleWidth = container.clientWidth;
    const maxScrollLeft = container.scrollWidth - visibleWidth;
    const currentScroll = container.scrollLeft;
    const tolerance = 5;

    if (currentScroll >= maxScrollLeft - tolerance) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const remaining = maxScrollLeft - currentScroll;
      const scrollByAmount = remaining < visibleWidth ? remaining : visibleWidth;
      container.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const container = collectionRef.current;
    if (!container) return;
    const visibleWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const tolerance = 5;

    if (currentScroll <= tolerance) {
      const maxScrollLeft = container.scrollWidth - visibleWidth;
      container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
      const scrollByAmount = currentScroll < visibleWidth ? currentScroll : visibleWidth;
      container.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
    }
  };

  const closeLightbox = () => setSelectedShow(null);

  return (
    <>
      <div className="carousel">
        <div className="carousel-btn prev-btn" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100">
            <polygon points="50,10 50,90 0,50" fill="#7ac71f" />
          </svg>
        </div>
        <div className="carousel-btn next-btn" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100">
            <polygon points="0,10 0,90 50,50" fill="#7ac71f" />
          </svg>
        </div>

        <div className="collection-wrapper">
          <div className="collection" ref={collectionRef}>
            {filteredShows.map(show => (
              <ShowCard
                key={show._id}
                show={show}
                showType={showType}
                onShowClick={setSelectedShow}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedShow &&
        ReactDOM.createPortal(
          <div className="mobileLightbox" onClick={closeLightbox}>
            <div className="modalCard" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedShow.img_URL}
                alt={`${selectedShow.title} overlay`}
                className="hoverImage"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <div className="hoverInfo">
                <h3>{selectedShow.title}</h3>
                <Synopsis synopsis={selectedShow.description} />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Carousel;
