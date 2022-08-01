
import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './utils/cropImage';

import './crop.css';
const CropEasy = ({ urlBase: photoURL, cropFunction, setPhotoURL, setFile, setOpenCrop }) => {


  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {


    const { file, url } = await getCroppedImg(
      photoURL,
      croppedAreaPixels,
      rotation
    );
    setPhotoURL(url);
    setFile(file);
    cropFunction(file);


  };
  return (
    <>
      <div className='container-cropper'>
        <Cropper
          image={photoURL}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={3 / 4}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </div>
      <div>
        <div>
          <label>Zoom: </label>
          <input className='range'
            type='range'
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
          />
        </div>
        <div>
          <label>rotation</label>
          <input className='range'
            type='range'

            min={0}
            max={360}
            value={rotation}
            onChange={(e) => setRotation(e.target.value)}
          />
        </div>



        <div>
          <button

            onClick={() => setOpenCrop(false)}
          >
            Cancel
          </button>
          <button

            onClick={cropImage}
          >
            Crop
          </button>
        </div>
      </div>
    </>
  );
};

export default CropEasy;

/* const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};
 */