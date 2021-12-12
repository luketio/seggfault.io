import Link from "next/link";
import Image from "next/image";
import { Item, Icon, Button } from "semantic-ui-react";
import { stringifyDates } from "../../lib/dates";

type Props = {
  slug: string;
  title: string;
  author: string;
  date: string;
  description?: string;
  img?: string;
}

export default function Post(post: Props) {
  return (
    <Item >
      <Item.Image size="small" src={ "/images/content/posts/" + post.img } alt={post.slug} />
      <Item.Content>
        <Link href={"/posts/" + post.slug} passHref >
          <Item.Header as="a" style={{fontSize: "28px", paddingTop: "6vh"}}>{post.title}</Item.Header>
        </Link>
        <Item.Meta>
          <span>{ stringifyDates(post.date) }</span>
        </Item.Meta>
        <Item.Description>{post.description}</Item.Description>
        <Item.Extra>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
