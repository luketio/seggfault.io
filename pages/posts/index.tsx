import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Post from "../../components/posts/Post";

import { getAllPosts } from "../../lib/api";
import PostType from "../../types/post";
import { Item } from "semantic-ui-react";

type Props = {
  allPosts: PostType[]
}

export default function Posts({ allPosts }: Props) {
  return(
    <div id="posts">
      <NavBar/>

      <main style={{ marginLeft: "20vw", marginRight: "20vw", marginBottom: "6vh", marginTop: "14vh"}}>
        <Item.Group divided>
          {allPosts.map((post) => (
            <Post
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
