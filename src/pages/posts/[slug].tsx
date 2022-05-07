import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "@/components/Container";
import { Markdown } from "@/components/Markdown";
import { Header } from "@/components/Header";
import { PostHeader } from "@/components/PostHeader";
import { Layout } from "@/components/Layout";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { PostTitle } from "@/components/PostTitle";
import { CMS_NAME } from "@/lib/constants";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { TPost } from "@/types/models";

type PostPageProps = {
  post: TPost | null;
};

function PostPage({ post }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  if (!post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <Markdown content={post.content} />
          </article>
        )}
      </Container>
    </Layout>
  );
}

const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  if (!params?.slug || Array.isArray(params.slug)) {
    return {
      props: {
        post: null,
      },
    };
  }

  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default PostPage;
export { getStaticProps, getStaticPaths };
