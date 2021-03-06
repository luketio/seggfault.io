import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(filename: string, fields: string[] = []) {
  const slug = filename.replace(/\.md$/, "");
  const path = join(postsDirectory, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(path, "utf8"));

  type Items = {
    [key: string]: string
  }

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
