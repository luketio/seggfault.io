import Link from "next/link";
import { Menu } from "semantic-ui-react";

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
      <Link href="/home" passHref >
        <Menu.Item link>
          Home
        </Menu.Item>
      </Link>
      <Link href="/posts" passHref >
        <Menu.Item link>
          Posts
        </Menu.Item>
      </Link>
    </Menu>
  );
}
