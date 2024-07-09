import { redirect } from 'next/navigation';

import { LoginPage } from 'common';

interface Params {
  searchParams?: { [key: string]: string | undefined };
}

const Login = async ({ searchParams }: Params) => {
  const loginCode = searchParams?.code;

  if (loginCode) {
    const res = await fetch(
      new URL(`/auth/login/post?code=${loginCode}`, process.env.BASE_URL),
      {
        method: 'POST',
      }
    );

    redirect(res.url);
    // postLoginCode(loginCode);
  }

  return <LoginPage />;
};

export default Login;
