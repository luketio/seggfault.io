import { Header } from "semantic-ui-react";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export default function SplashScreen() {
  return(
    <div
      id="splashscreen"
      style={{
        height: "100vh",
        width: "100%",
        display: "block",
        textAlign: "center",
      }}
    >
      <Image src={"/images/front-page.jpeg"} alt="" layout="fill" objectFit="cover" quality={100}/>
      <Header
        style = {{
          top: "20vh",
          zIndex: 100,
          position: "relative",
          fontSize: "5rem",
          color: "#2c2f33",
        }}
      >
        Luke Tong
        <Header.Subheader style={{ fontSize: "2rem", color: "#2c2f33" }}>
          Software Engineer and Environmentalist
        </Header.Subheader>
      </Header>
    </div>
  );
}
