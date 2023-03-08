import Link from 'next/link'
// import Layout from '../components/Layout'
import Tabs from '../components/Tabs'
import Store from '../components/Store';

const IndexPage = () => {
  // <Layout title="Home | Next.js + TypeScript Example">
  //   <Tabs></Tabs>
  // </Layout>
  return(
  <Store>
    <Tabs></Tabs>
  </Store>  
  )
  
}

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1>Hello Next.js 👋</h1>
//     <p>
//       <Link href="/about">About</Link>
//     </p>
//   </Layout>
// )

export default IndexPage
