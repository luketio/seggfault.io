import Link from "next/link";
import { Item, Icon, Button } from "semantic-ui-react";
import { stringifyDates } from "../../lib/dates";
import PostType from "../../types/post";

export default function Post(post: PostType) {
  return (
    <Item>{}
      <Item.Image src={"../../public/images/content/posts/" + post.img}/>
      <Item.Content>
        <Item.Header as= "a ">{post.title}</Item.Header>
        <Item.Meta>
          <span className= "cinema ">{ stringifyDates(post.date) }</span>
        </Item.Meta>
        <Item.Description>{post.description}</Item.Description>
        <Item.Extra>
        <Button primary float = "right ">
            Read More
            <Icon name="chevron right" />
          </Button>
        </Item.Extra>
      </Item.Content>

    </Item>
  );
}
