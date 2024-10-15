import React, { useEffect } from 'react';

const IasBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www-cdn.icef.com/scripts/iasbadgeid.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpia el script al desmontar el componente
    };
  }, []);

  return <span id="iasBadge" data-account-id="5281"></span>;
};

export default IasBadge;
