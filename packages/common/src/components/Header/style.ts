import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 5rem;
  background: ${({ theme }) => theme.color.gray['010']};
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.button};
  color: #444872;
  font-weight: 700;
  margin-left: 0.9375rem;
`;

export const MenuNav = styled.div`
  display: flex;
  gap: ${({ role }) => (role === 'admin' ? '1.5rem' : '2.25rem')};
`;

export const MenuItemWrapper = styled(Link)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary : theme.color.black};

  & svg,
  circle {
    stroke: ${({ isActive, theme }) =>
      isActive ? theme.color.primary : theme.color.black};

    & path {
      stroke: ${({ isActive, theme }) =>
        isActive ? theme.color.primary : theme.color.black};
    }
  }

  &:hover {
    span,
    & svg {
      color: ${({ isActive, theme }) =>
        isActive ? theme.color.black : theme.color.primary};

      & path {
        stroke: ${({ isActive, theme }) =>
          isActive ? theme.color.black : theme.color.primary};
      }

      circle {
        stroke: ${({ isActive, theme }) =>
          isActive ? theme.color.black : theme.color.primary};
      }

      rect {
        stroke: ${({ isActive, theme }) =>
          isActive ? theme.color.black : theme.color.primary};
      }
    }
  }
`;

export const ItemTitle = styled.span`
  ${({ theme }) => theme.typo.body3};

  margin-left: 0.9375rem;
`;
