import styled from "styled-components";

export interface IHeadLineProps {
  marginBottom?: string;
}

export const Wrapper = styled.div<IHeadLineProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 100%;
  min-width: 0;
  
  margin-bottom: ${(props) => props.marginBottom ?? '80px'};
`;