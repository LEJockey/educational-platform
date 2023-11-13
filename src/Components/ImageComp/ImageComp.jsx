import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const ImageComp = ({ src, alt, imgStyle }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = src;
    img.alt = alt;
  }, [src, alt]);

  return (
    <>
      {!imgLoaded && (
        <div style={{width: '100%', height: '100%' }}>
          <Skeleton width='100%' height="100%" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: imgLoaded ? 'inline-block' : 'none', ...imgStyle }}
      />
    </>
  );
};

export default ImageComp;