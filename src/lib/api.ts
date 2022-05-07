import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { TPost } from "@/types/models";

const postsDirectory = join(process.cwd(), "_posts");

const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostBySlug = (slug: string): TPost => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: TPost = {
    ...data,
    date: data.date.toISOString(),
  } as TPost;

  return {
    ...post,
    content,
  } as TPost;
};

const getAllPosts = (): TPost[] => {
  const slugs = getPostSlugs();
  console.log("slugs", slugs);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export { getAllPosts, getPostBySlug };
