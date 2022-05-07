import Head from "next/head";
import { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { getAllPosts } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import { TPost } from "@/types/models";
import { Container } from "@/components/Container";
import { HeroPost } from "@/components/HeroPost";
import { Intro } from "@/components/Intro";
import { MoreStories } from "@/components/MoreStories";

type IndexPageProps = {
  allPosts: TPost[];
};

function IndexPage({ allPosts }: IndexPageProps) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

const getStaticProps: GetStaticProps<IndexPageProps> = async (_) => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

export default IndexPage;
export { getStaticProps };
export type { IndexPageProps };
