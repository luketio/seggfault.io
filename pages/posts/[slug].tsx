import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "../../lib/api";
import mdToHTML from "../../lib/mdToHTML";
import PostType from "../../types/post";

import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";

type Props = {
  post: PostType
  preview?: boolean
}

export default function PostPage({ post, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="bg-color">
      <NavBar />
      <div className="post-body" style={{marginLeft: "18vw", marginRight: "18vw", marginTop: "2vh", marginBottom: "2vh", backgroundColor: "white", padding: "2vw"}}>
        <h1 style={{paddingTop: "12vh",  textAlign: "center"}} >{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style = {{
            paddingTop: "2vh",
            paddingBottom: "6vh",
          }}
        />
      </div>

      <Footer />
    </div>

  );
};

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "author",
    "date",
    "img",
    "content",
  ]);
  const content = await mdToHTML(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
