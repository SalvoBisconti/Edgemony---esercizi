import { postsJson } from "@/pages/api/posts";

export const getAllPosts = () => postsJson[0];

export const getAllSlugs = () => {
  let slugs = [];
  getAllPosts().map((post) => {
    slugs.push(`/blog/${post.slug}`);
  });
  return slugs;
};

export const getPostData = (slug) => {
  let post = null;
  getAllPosts().map((p) => {
    if (p.slug === slug) {
      post = p;
      return;
    }
  });
  return post;
};
