import Link from "next/link";
import { Menu } from "semantic-ui-react"

export default function NavBar() {
    return (
        <Menu
            borderless
            inverted
            fixed="top"
            size="massive"
            style={{
                background: "#292c33",
            }}
        >
            <Menu.Item link >
                <Link href="/#home">Home</Link>
            </Menu.Item>
        </Menu>
    );
}