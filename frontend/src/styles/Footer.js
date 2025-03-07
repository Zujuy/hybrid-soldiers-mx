/* Footer */
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  position: fixed; /* Se queda pegado abajo */
  bottom: 0;
  left: 0;
`;

export const SocialMedia = styled.div`
  margin-bottom: 10px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;