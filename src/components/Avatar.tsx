import Image from "next/image";

type AvatarProps = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: AvatarProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={picture}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export { Avatar };
export type { AvatarProps };
