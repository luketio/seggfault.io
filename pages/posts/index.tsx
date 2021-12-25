import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import PostPreview from "../../components/posts/PostPreview";

import { getAllPosts } from "../../lib/api";
import PostType from "../../types/post";
import { Item } from "semantic-ui-react";

type Props = {
  allPosts: PostType[]
}

export default function Posts({ allPosts }: Props) {
  return(
    <div id="posts" className="bg-color">
      <NavBar/>

      <main style={{ marginLeft: "6vw", marginRight: "6vw", paddingBottom: "6vh", paddingTop: "14vh", paddingLeft: "2vw", paddingRight: "2vw", backgroundColor: "white"}}>
        <Item.Group divided>
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              slug={post.slug}
              title={post.title}
              author={post.author}
              date={post.date}
              description={post.description}
              img={post.img}
            />
          ))}
        </Item.Group>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "description",
    "author",
    "date",
    "img",
  ]);

  return {
    props: { allPosts },
  };
}
