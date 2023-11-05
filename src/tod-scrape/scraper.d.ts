export type TodType = 'truth' | 'dare';

export interface ScrapeOptions {
  category: 'Classic' | 'Teens' | 'Party' | 'Nsfw' | 'Mixed';
  type: 'Truth' | 'Dare';
}

declare const scrapeTOD: (
  options: ScrapeOptions
) => Promise<{ [key in TodType]: string }>;

export { scrapeTOD };
