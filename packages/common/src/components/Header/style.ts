import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 130px;
  background: ${({ theme }) => theme.color.gray['010']};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding-left: 300px;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.button};
  color: #444872;
  font-weight: 700;
  margin-left: 15px;
`;

export const MenuNav = styled.div`
  display: flex;
  padding-right: 300px;
  gap: ${({ role }) => (role === 'admin' ? '50px' : '60px')};
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ItemTitle = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
  margin-left: 15px;
`;
