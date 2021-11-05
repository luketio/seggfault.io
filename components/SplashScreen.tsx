import Image from "next/image";


export default function SplashScreen() {
    return(
        <div 
            id="splashscreen"
            style={{
                height: "100vh",
                width: "100%",
                display: "block",
            }}
        >
            <Image src={"/images/front-page.jpeg"} alt="" layout="fill" objectFit="cover" quality={100}/>
        </div>
    )
}