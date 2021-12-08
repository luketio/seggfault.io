import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "../../lib/api";
import mdToHTML from "../../lib/mdToHTML";
import PostType from "../../types/post";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

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
    <div>
      <NavBar />
      <h1 style={{marginTop: "12vh",  textAlign: "center"}} >{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        style = {{
          marginLeft: "24vw",
          marginRight: "24vw",
          paddingTop: "2vh",
          paddingBottom: "6vh",
        }}
      />
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
