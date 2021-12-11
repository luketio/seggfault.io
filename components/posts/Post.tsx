import Link from "next/link";
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
    <Item>
      <Item.Image size="tiny" src={ "/images/content/posts/" + post.img }/>

      <Item.Content>
        <Item.Header>{post.title}</Item.Header>
        <Item.Meta>
          <span>{ stringifyDates(post.date) }</span>
        </Item.Meta>
        <Item.Description>{post.description}</Item.Description>
        <Item.Extra>
          <Link href={"/posts/" + post.slug} passHref >
            <Button primary floated="right">
              Read More
              <Icon name="chevron right" />
            </Button>
          </Link>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
