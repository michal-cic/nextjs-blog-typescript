type TAuthor = {
  name: string;
  picture: string;
};

type TPost = {
  title: string;
  coverImage: string;
  date: string;
  author: TAuthor;
  slug: string;
  excerpt: string;
  content: string;
  ogImage: {
    url: string;
  };
};

export type { TPost, TAuthor };
