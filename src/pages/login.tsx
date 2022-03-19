import jwt from 'jsonwebtoken';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export default function Login() {}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { token } = parseCookies(context);
  if (token) {
    if (jwt.verify(token, process.env.JWT_SECRET)) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  }

  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL}`,
    response_type: 'code',
    scope: 'identify email guilds guilds.join',
  });

  return {
    redirect: {
      destination: `https://discord.com/api/oauth2/authorize?${params}`,
      permanent: false,
    },
  };
};
