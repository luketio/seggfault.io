import type { NextPage } from "next";
import Head from "next/head";

import { URL } from "../lib/constants";
import Home from "./home";

const App: NextPage = () => (
  <div className="container">
    <Head>
      <title>Luke Tong - Blog</title>
      <meta name="description" content="Luke Tong 's blog built with Next.js" />
      <meta property="og:title" content="Luke Tong - Blog" />
      <meta property="og:description" content="Luke Tong 's blog built with Next.js" />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Home />
  </div>

);

export default App;
