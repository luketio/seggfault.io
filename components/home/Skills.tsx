import Section from "../common/Section";

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
        <Section name="Skills">
            { iconList }
        </Section> 
    );
}