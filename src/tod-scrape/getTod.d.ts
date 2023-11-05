type TodCategory = 'Classic' | 'Teens' | 'Party' | 'Nsfw' | 'Mixed';
type TodType = 'Truth' | 'Dare';

declare function tod(
  type: TodType,
  category: TodCategory
): Promise<{ [key in TodType]: string }>;

export { tod };
