import React, { useState } from 'react';
import axios from 'axios';
import {
  FormContainer,
  FormTitle,
  StyledForm,
  Input,
  FileInput,
  SubmitButton,
  BackgroundImage,
  FormContent,
  Description
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
      {/* Formulario ocupa la mitad izquierda */}
      <FormContent>
        <BackgroundImage src="https://res.cloudinary.com/dfxpfatj7/image/upload/v1741026261/Linkin-Park-From-Zero_jb5rsk.jpg" alt="Header" />
        <FormTitle>Únete al Fan Club</FormTitle>
        <StyledForm onSubmit={handleSubmit}>
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
          <Input
            type="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
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
      </FormContent>

      {/* Descripción en la mitad derecha */}
      <Description>
        <h3>¿Por qué inscribirte?</h3>
        <ul>
          <li>Obtén tu credencial exclusiva</li>
          <li>Accede a eventos especiales de Hybrid Soldiers</li>
          <li>Participa en concursos exclusivos</li>
          <li>Gana premios en rifas</li>
          <li>Forma parte de una comunidad increíble</li>
        </ul>
      </Description>
    </FormContainer>
  );
};

export default SignUp;
