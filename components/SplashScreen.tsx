import Image from "next/image";


export default function SplashScreen() {
    return(
        <div style={{width: "100%", height: "100%"}}>
            <Image src={"/images/front-page.jpeg"} alt="" layout="fill" objectFit="cover" quality={100}/>
        </div>
    )
}