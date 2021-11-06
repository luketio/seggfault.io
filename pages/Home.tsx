import type { NextPage } from "next";

import NavBar from "../components/NavBar";
import SplashScreen from "../components/home/SplashScreen";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Footer from "../components/Footer";

export default function Home() {
    return(
        <div id="home">
            <NavBar />
            <SplashScreen />
            <About />
            <Skills />
            <Footer />
        </div>
    );
}