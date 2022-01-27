import React from 'react';

function Arrow() {
  return (
    <a href="#about" className="link-dark">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="arrow bi bi-arrow-down-circle-fill"
          data-mdb-animation-start="onLoad slide-out-right"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>
      </span>
    </a>
  );
}

export default Arrow;
