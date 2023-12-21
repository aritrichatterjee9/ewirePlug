import React from 'react';

const Footer = () => (
  <div
    className="mt-24 footer"
    style={{
      backgroundColor: 'black',
      padding: '20px',
      textAlign: 'center',
      animation: 'dance 15s',
      transformOrigin: 'center',
      transform: 'rotate(0deg)',
    }}
  >
    <p style={{ color: 'white' }}>
      © 2023 All rights reserved Aritri |
      <a
        href="https://github.com/aritrichatterjee9"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', marginLeft: '5px' }}
      >
        GitHub@Aritri
      </a>
    </p>
    <style>
      {`
        @keyframes dance {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }
      `}
    </style>
  </div>
);

export default Footer;
