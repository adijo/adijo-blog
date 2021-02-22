import Link from "next/link";

import { Layout, Bio, SEO, Description } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Bio className="my-14" />
      <Description />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
