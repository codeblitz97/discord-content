type TodCategory = 'Classic' | 'Teens' | 'Party' | 'Nsfw' | 'Mixed';
type TodType = 'Truth' | 'Dare';

interface DiscordContentType {
  truthOrDare: (
    type: TodType,
    category: TodCategory
  ) => Promise<{ [key in TodType]: string }>;
}

declare const DiscordContent: DiscordContentType;

export = DiscordContent;
