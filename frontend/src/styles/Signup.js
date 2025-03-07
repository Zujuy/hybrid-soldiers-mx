import styled from 'styled-components';

/* Contenedor del formulario */
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

/* Header con imagen */
export const FormHeader = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

/* Imagen de fondo */
export const BackgroundImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

/* Título */
export const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

/* Formulario */
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

/* Grupo de inputs (para alineación) */
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  input {
    flex: 1;
  }
`;

/* Inputs con fondo y sombra */
export const Input = styled.input`
  width: 100%; /* Hace que los inputs ocupen todo el ancho */
  padding: 12px;
  margin: 10px 0;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  background: #f5f5f5;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: white;
    box-shadow: 0 0 5px rgba(186, 12, 151, 0.5);
  }
`;


/* Botón de carga de foto */
export const FileInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  label {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
  }

  input {
    display: none;
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
  transition: background 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 5px 15px rgba(186, 12, 151, 0.5);
  }
`;
