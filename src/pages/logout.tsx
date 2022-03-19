import jwt from 'jsonwebtoken';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { destroyCookie } from 'nookies';

export default function Login() {}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const redirectUrl = typeof context.query.redirect === 'string' ? context.query.redirect : '/';

  destroyCookie(context, 'token');

  return {
    redirect: {
      destination: redirectUrl,
      permanent: false,
    },
  };
};
