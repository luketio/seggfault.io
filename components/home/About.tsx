import { Grid, Header } from "semantic-ui-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return(
        <div id="about" className="anchor" style={{ backgroundColor: "white" }}>
            <Grid
                centered
                columns={2}
                verticalAlign="middle"
                style={{ padding: "0% 20% 0% 20%" }}
            >
                <Grid.Row style={{ padding: "3vh" }}>
                    <Link href="/#about" passHref >
                        <Header dividing style={{ fontSize: "25px" }}>
                            About
                        </Header>
                    </Link>
                </Grid.Row>
                <Grid.Row style={{ paddingBottom: "10vh" }}>
                    <Grid.Column width={4} >
                        <Image src="/images/logo.png" alt="Logo" height="180vh" width="180vh" />
                    </Grid.Column>

                    <Grid.Column width={12} style={{fontSize: "16px"}}>
                        <p>Hi! My name is Luke Tong, and I am a junior at PHS.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
   );
}