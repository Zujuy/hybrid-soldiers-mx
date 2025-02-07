import React from 'react';
import '../styles/Credentials.css'; // Import the CSS file

const Credential = ({ name, memberNumber, photo }) => {
  const handleDownload = () => {
    const credentialElement = document.getElementById('credential');
    const html2canvas = require('html2canvas');

    html2canvas(credentialElement).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'credential.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="credential-container" id="credential">
      <img src="/logo.png" alt="Fan Club Logo" className="credential-logo" />
      <img src={photo} alt="Member Photo" className="member-photo" />
      <h1 className="member-name">{name}</h1>
      <p className="member-number">Member #{memberNumber}</p>
      <button className="download-button" onClick={handleDownload}>Download Credential</button>
    </div>
  );
};

export default Credential;