import { todModule } from './getTod';

declare module './getTod' {
  const tod: typeof todModule;
}

export { topModule };
