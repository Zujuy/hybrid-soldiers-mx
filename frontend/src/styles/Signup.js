import styled from 'styled-components';

/* Contenedor del formulario */
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

/* Header con imagen de fondo */
export const FormHeader = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

/* Imagen de fondo */
export const BackgroundImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

/* Icono de perfil */
export const ProfileIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

/* Título del formulario */
export const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 50px;
  text-align: center;
`;

/* Formulario estilizado */
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

/* Grupo de inputs (para alinear 2 en una fila si es necesario) */
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  input {
    flex: 1;
  }
`;

/* Inputs */
export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/* Input de archivo */
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

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
