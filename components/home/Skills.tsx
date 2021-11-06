import { Grid, Header } from "semantic-ui-react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { 
    faAngular,
    faReact,
    faJava,
    faCuttlefish,
    faRust,
} from "@fortawesome/free-brands-svg-icons";

const icons: IconProp[] = [
    faAngular,
    faReact,
    faJava,
    faCuttlefish,
    faRust,

]

export default function Skills() {
    var iconList = icons.map(function(icon, index) {
        return <FontAwesomeIcon icon={icon} size="6x" key={index} style={{margin: "8px"}}></FontAwesomeIcon>;
    });

    return(
        <div id="skills" className="anchor">
            <Grid
                centered
                columns={2}
                verticalAlign="middle"
                style={{ padding: "0% 20% 0% 20%" }}
            >
                <Grid.Row style={{ padding: "3vh" }}>
                    <Link href="/#skills" passHref >
                        <Header dividing style={{ fontSize: "25px" }}>
                            Skills
                        </Header>
                    </Link>

                </Grid.Row>

                <Grid.Row style={{ paddingBottom: "10vh" }}>
                    { iconList }
                </Grid.Row>
            </Grid>

        </div>

    );
}