import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import NavBar from "../components/NavBar";
import SplashScreen from "../components/SplashScreen";
import Footer from "../components/Footer";

const App: NextPage = () => {
  return(
    <div className={styles.container}>
      <Head>
        <title>Luke Tong</title>
        <meta name="description" content="Luke's blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <SplashScreen />
      <Footer />

    </div>
    
  )
}

export default App;
