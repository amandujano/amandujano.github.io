import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Blog</h1>

        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
