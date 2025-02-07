import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Events.css'; // Import the CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '', photo: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('age', formData.age);
    data.append('email', formData.email);
    data.append('photo', formData.photo);

    try {
      const res = await axios.post('http://localhost:5000/api/members/signup', data);
      alert(`Member created successfully! Your member number is ${res.data.memberNumber}`);
    } catch (err) {
      alert('Error creating member');
    }
  };

  return (
    <div className="form-container">
      <h2>Join the Fan Club</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;