import { Grid } from "semantic-ui-react";
import Image from "next/image";

export default function Footer() {
    return(
        <div id="footer">
            <div>
                <Grid stackable columns={3} style={{ paddingTop: "4vh", backgroundColor: "#292c33" }}>
                    <Grid.Column>
                        <div style={{textAlign: "center"}}>
                            <Image src="/images/logo.png" alt="logo" height="128vh" width="128vh" />
                            <p style={{color: "#ccc", padding: "10px"}}>© 2021 Luke Tong</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 style={{color: "#ccc"}}>Contact Me</h2>
                        <p style={{fontSize: "16px", color: "white"}}>Feel free to email me at luke.rtong@gmail.com<br />for any questions or if you just want to talk.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 style={{color: "#ccc"}}>Channels</h2>
                        <p style={{fontSize: "16px", paddingLeft: "6px", color: "white"}}>Github</p>
                        <p style={{fontSize: "16px", paddingLeft: "6px", color: "white"}}>StackOverflow</p>
                        <p style={{fontSize: "16px", paddingLeft: "6px", color: "white"}}>LinkedIn</p>
                    </Grid.Column>
                </Grid>
            </div>
            <div style={{textAlign: "right", paddingBottom: "10px", backgroundColor: "#292c33"}}>
                <h5 style={{color: "#ccc"}}>This website was built with <a href="https://nextjs.org/">Next.js</a><br />View the page source <a href="https://github.com/ltgr/ltgr.github.io">here</a></h5>
            </div>
            
        </div>
    )
}