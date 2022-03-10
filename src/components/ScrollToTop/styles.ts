import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--black);
  border-radius: 8px;
  
  cursor: pointer;
  
  z-index: 999;
`;