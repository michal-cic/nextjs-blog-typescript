import { TAuthor } from "@/types/models";
import { Avatar } from "./Avatar";
import { CoverImage } from "./CoverImage";
import { DateFormatter } from "./DateFormatter";
import { PostTitle } from "./PostTitle";

type PostHeaderProps = {
  title: string;
  coverImage: string;
  date: string;
  author: TAuthor;
};

const PostHeader = ({ title, coverImage, date, author }: PostHeaderProps) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export { PostHeader };
export type { PostHeaderProps };
