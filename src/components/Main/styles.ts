import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  color:  ${props => props.theme.colors.primary};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;