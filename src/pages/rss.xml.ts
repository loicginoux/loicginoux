import { getRssString } from '@astrojs/rss';
import { getCollection } from "astro:content";

export const GET = async () => {
  const posts = await getCollection("blog", ({ data }) => {
    return data.published
  });

  posts.sort(function (a, b) {
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
  console.log(posts);
  const rss = await getRssString({
    title: `Loic Ginoux Blog`,
    description: "Where I'll share tips, notes and anecdotes on my dev journey.",
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: `/blog/${post.slug}`,
      title: post.data.title,
      description: post.data.snippet,
      pubDate: post.data.pubDate,
    })),
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
