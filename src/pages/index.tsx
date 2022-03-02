import type { NextPage } from 'next'

import { Navbar } from '@components/Navbar'
import { Wrapper } from '@styles/pages/home';
import { Head } from '@components/Head';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head title="Yune Store - Inicio"/>

      <Navbar></Navbar>
      <div>Hello World!</div>
    </Wrapper>
  );
}

export default Home
