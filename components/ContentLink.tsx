import { IconBrandTwitch, IconBrandYoutubeFilled } from '@tabler/icons-react';

interface ContentLinkProps {
  image: string;
  name: string;
  twitchLink: string;
  youtubeLink: string;
}

const ContentLink: React.FC<ContentLinkProps> = ({ image, name, twitchLink, youtubeLink }) => {
  return (
    <div className="flex w-32 flex-col items-center justify-center gap-2">
      <p>{name}</p>
      <img src={image} alt={`${name}-image`} className="rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900" />
      {twitchLink && (
        <a href={twitchLink} target="_blank" className="w-full">
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-purple-500/20 p-2 text-purple-500 hover:bg-purple-500/30">
            <IconBrandTwitch />
            Twitch
          </button>
        </a>
      )}
      {youtubeLink && (
        <a href={youtubeLink} target="_blank" className="w-full">
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-red-500/20 p-2 text-red-500 hover:bg-red-500/30">
            <IconBrandYoutubeFilled />
            YouTube
          </button>
        </a>
      )}
    </div>
  );
};

export default ContentLink;
