import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (

    <>

      <Head>

        <meta name="viewport" content='width=device-width, intitial-scale=1.0'></meta>

      </Head>
  
  
  
  
  
  
  
          <Component {...pageProps} />
    </>
  )
}

export default MyApp
