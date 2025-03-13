import styled from 'styled-components';

/* Contenedor principal ocupa TODO el ancho sin bordes */
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0 0 100px 0;
  padding: 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

/* Contenedor del formulario con fondo blanco */
export const FormContent = styled.div`
  width: 100%;
  padding: 60px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

/* Título del formulario */
export const FormTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 25px;
`;

/* Formulario sin bordes */
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

/* Imagen de fondo ahora ocupa toda la parte superior en mobile */
export const BackgroundImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 50px;
`;

/* Descripción ahora ocupa toda la mitad derecha con fondo degradado */
export const Description = styled.div`
  width: 100%;
  padding: 100px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 50%;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }

  li::before {
    content: "✔";
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 10px;
  }
`;

/* Inputs sin bordes y con diseño minimalista */
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  outline: none;
  background: transparent;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: none;
  }
`;

/* Botón de carga de foto */
export const FileInput = styled.div`
  label {
    display: block;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  input {
    display: none;
  }

  &:hover label {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

/* Botón de Enviar */
export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
