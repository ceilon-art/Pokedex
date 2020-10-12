import styled from 'styled-components';
export const Container = styled.div`
  background-color: #DCDCDC;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  @media(min-width: 400px) {
    margin: 8% 10%;
  }

  @media(min-width: 800px) {
    margin: 8% 20%;
  }

  @media(min-width: 1200px) {
    margin: 8% 30%;
  }
`;  

export const Formulary = styled.form`
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Field = styled.label`
  color: #000000;

  @media(min-width: 400px) {
    margin: 30px 0 5px 0;
    font-size: 20px;
  }

  @media(min-width: 800px) {
    font-size: 28px;
    margin: 30px 0 10px 0;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-line-in-white);

  @media(min-width: 400px) {
    width: 200px;
    height: 30px;
  }

  @media(min-width: 800px) {
    width: 300px;
    height: 40px;
  }

  @media(min-width: 1200px) {
    width: 300px;
    height: 40px;
  }

  &:focus {
    border: 1px solid var(--color-primary-light);
  }
`;

export const Button = styled.button`
  margin: 30px 0;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-box-base);

  background-color: var(--color-primary-dark);
  width: 120px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border:none;

  transition: background-color .3s;

  &:hover,
  &:focus {
    background: var(--color-primary-darker)
  }
`;
