
import React from 'react';

// This logo is designed for a light background as seen in the header.
// It adapts the provided brand assets for better visibility.
const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
<div className={`flex items-center gap-3 group transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}>
  {/* The image part */}
  <div className="shadow-sm">
    <img src="/images/logo.png" alt="Symbol" width="200" height="170" />
  </div>
  </div>
  );
};

export default Logo;