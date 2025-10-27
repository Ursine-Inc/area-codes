import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0 0 0;
`;

export interface AppHeaderProps {
  title?: string;
  subtitle?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ 
  title = "Area Codes", 
  subtitle = "Hello there," 
}) => {
  return (
    <HeaderContainer>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};