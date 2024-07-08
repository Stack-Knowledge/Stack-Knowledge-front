import { postLoginCode } from 'admin/app/apis';

import { LoginPage } from 'common';

interface Params {
  searchParams?: { [key: string]: string | undefined };
}

const Login = async ({ searchParams }: Params) => {
  const loginCode = searchParams?.code;

  if (loginCode) {
    postLoginCode(loginCode);
  }

  return <LoginPage />;
};

export default Login;
