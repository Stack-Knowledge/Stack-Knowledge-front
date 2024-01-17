import Link from 'next/link';

import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1240px) {
    width: calc(100vw - 12.5rem);
  }
  @media ${({ theme }) => theme.breakPoint[600]} {
    width: calc(100vw - 3rem);
  }
`;

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 5rem;
  background: ${({ theme }) => theme.color.gray['010']};
  display: flex;
  justify-content: center;
`;

export const ItemTitle = styled.span`
  ${({ theme }) => theme.typo.body3};
  margin-left: 0.9375rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MenuFillItemWrapper = styled(Link)<{ isActive?: boolean }>`
  @media (max-width: 300px) {
    width: 30px;
  }
  ${({ isActive, theme }) => {
    const activeColor = isActive ? theme.color.primary : theme.color.black;
    const hoverColor = theme.color.primary;
    return `
      display: flex;
      align-items: center;
      color:${activeColor};

      & svg {
        circle { stroke:${activeColor};}
        
        rect, path {fill:${activeColor};}
      }

        &:hover{
        span,
        & svg{
          color:${hoverColor};

          circle{stroke:${hoverColor};}

          rect,path{fill:${hoverColor};}
        }
      }
    `;
  }}
`;

export const MenuNav = styled.div`
  display: flex;
  gap: ${({ role }) => (role === 'admin' ? '1.5rem' : '2.25rem')};
`;

export const MenuStrokeItemWrapper = styled(Link)<{ isActive?: boolean }>`
  @media (max-width: 300px) {
    width: 30px;
  }
  ${({ isActive, theme }) => {
    const activeColor = isActive ? theme.color.primary : theme.color.black;
    const hoverColor = theme.color.primary;
    return `
      display: flex;
      align-items: center;
      color:${activeColor};

      & svg {
        circle { stroke:${activeColor};}
        
        rect, path {stroke:${activeColor};}
      }

      &:hover{
        span,
        & svg{
          color:${hoverColor};

          circle{stroke:${hoverColor};}

          rect,path{stroke:${hoverColor};}
        }
      }
    `;
  }}
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.button};
  color: #444872;
  font-weight: 700;
  margin-left: 0.9375rem;
  display: flex;
  align-items: center;
`;

export const LogoutTitle = styled.span`
  ${({ theme }) => theme.typo.body3};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    color: #ffd79b;
  }
`;
export const ModalWrapper = styled.dialog`
  border-radius: 1.25rem;
  border: 0;
  padding: 0;
`;
