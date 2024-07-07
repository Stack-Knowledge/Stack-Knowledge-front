import { postLoginCode } from 'api/common';

import { LoginPage } from 'common';

interface Params {
  searchParams?: { [key: string]: string | undefined };
}

const Login: React.FC<Params> = async ({ searchParams }) => {
  const loginCode = searchParams?.code;

  if (loginCode) {
    postLoginCode(loginCode);
  }

  return <LoginPage />;
};

export default Login;
