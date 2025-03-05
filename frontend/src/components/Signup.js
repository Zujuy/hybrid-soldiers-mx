import React, { useState } from 'react';
import axios from 'axios';
import {
  FormContainer,
  FormHeader,
  FormTitle,
  StyledForm,
  InputGroup,
  Input,
  FileInput,
  SubmitButton,
  BackgroundImage,
  ProfileIcon
} from '../styles/Signup';

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
      alert(`¡Registro exitoso! Tu número de miembro es ${res.data.memberNumber}`);
    } catch (err) {
      alert('Error al registrar el miembro');
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <BackgroundImage src="https://res.cloudinary.com/dfxpfatj7/image/upload/v1741026261/Linkin-Park-From-Zero_jb5rsk.jpg" alt="Header" />
        <ProfileIcon src="https://via.placeholder.com/100" alt="Profile" />
        <FormTitle>Únete al Fan Club</FormTitle>
      </FormHeader>
      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="number"
            placeholder="Edad"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </InputGroup>
        <FileInput>
          <label htmlFor="photo">Sube tu foto</label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
            required
          />
        </FileInput>
        <SubmitButton type="submit">Registrarse</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default SignUp;
