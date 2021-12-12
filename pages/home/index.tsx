import type { NextPage } from "next";

import NavBar from "../../components/common/NavBar";
import SplashScreen from "../../components/home/SplashScreen";
import About from "../../components/home/About";
import Skills from "../../components/home/Skills";
import RecentPosts from "../../components/home/RecentPosts";
import Footer from "../../components/common/Footer";

export default function Home() {
  return(
    <div id="home" className="bg-color">
      <NavBar />
      <SplashScreen />
      <About />
      <Skills />
      <RecentPosts />
      <Footer />
    </div>
  );
}
