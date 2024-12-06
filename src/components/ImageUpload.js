import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="image-upload">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Profile" className="profile-image" />}
      <label>Upload Your Picture</label>
    </section>
  );
}

export default ImageUpload;
