import { Grid, Header } from "semantic-ui-react";
import Link from "next/link";

interface Props {
    name: string;
    children: any;
}

export default function Section({name, children}: Props) {
    return(
        <div id={name.replace(/\s/g, "").toLowerCase()} className="anchor" style={{ backgroundColor: "white" }}>
            <Grid
                centered
                columns={2}
                verticalAlign="middle"
                style={{ padding: "0% 20% 0% 20%" }}
            >
                <Grid.Row style={{ padding: "3vh" }}>
                    <Link href={"/#" + name.replace(/\s/g, "").toLowerCase()} passHref >
                        <Header dividing style={{ fontSize: "25px" }}>
                            {name}
                        </Header>
                    </Link>
                </Grid.Row>
                <Grid.Row style={{ paddingBottom: "2vh" }}>
                    {children}
                </Grid.Row>
            </Grid>
        </div>
    )
}