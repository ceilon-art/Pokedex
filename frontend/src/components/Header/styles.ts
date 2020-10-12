import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;
  width: 100%;
  object-fit: contain;
  background-color: var(--color-primary);
  margin-bottom: 10px;
`;

export const LogoImage = styled.img`
  color: var(--color-primary-dark);
  height: 120px;
  width: 120px;
  padding: 10px;
`;

export const LogoName = styled.div`
  color: var(--color-title-in-primary);
  font-size: 50px;
  font-weight: bold;
  padding: 10px;
`;
