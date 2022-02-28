import type { NextPage } from 'next'
import { Navbar } from '@components/Navbar'

const Home: NextPage = () => {
  return (
   <div>
     <Navbar></Navbar>
     <div>Hello World!</div>
   </div>
  )
}

export default Home
