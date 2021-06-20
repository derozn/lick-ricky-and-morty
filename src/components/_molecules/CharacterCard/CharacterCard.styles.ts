import styled from 'styled-components';

export const Article = styled.article`
  position: relative;
  width: 100%;
  max-width: 320px;
  background: var(--cultured);
`;

export const AttributeList = styled.ul`
  width: 100%;
  margin: 10px 0;
`;

export const AttributeItem = styled.li`
  font-family: var(--primary-font);
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
