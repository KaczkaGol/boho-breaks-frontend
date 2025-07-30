import React from 'react';
import ZenaImage from '../Assets/zena.jpg'; // Nahraď cestou ke své fotce

const BlobImage = () => {
  return (
    <div style={{ maxWidth: '650px', width: '100%', height: 'auto'  }}>
      <svg
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="blobClip">
            <path d="M161.7 -137.6C211.7 -111.7 255.9 -55.9 251.4 -4.5C246.9 46.9 193.8 93.8 143.8 121C93.8 148.1 46.9 155.6 5.1 150.5C-36.8 145.4 -73.5 127.9 -98.5 100.7C-123.5 73.5 -136.8 36.8 -145.3 -8.5C-153.7 -53.7 -157.5 -107.5 -132.5 -133.3C-107.5 -159.1 -53.7 -157.1 1.1 -158.1C55.9 -159.2 111.7 -163.4 161.7 -137.6"
              transform="translate(450 300) scale(1.8)" />
          </clipPath>
        </defs>

        <image
          href={ZenaImage}
          width="900"
          height="600"
          clipPath="url(#blobClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default BlobImage;
