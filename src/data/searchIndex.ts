import { sections } from "./sections";

export interface SearchEntry {
  title: string;
  subtitle?: string;
  to: string;
}

export const searchIndex: SearchEntry[] = sections.flatMap((section) => [
  { title: section.title, to: `/${section.path}` },
  ...section.items.map((item) => ({
    title: item.title,
    subtitle: section.title,
    to: item.href ?? `/${section.path}`,
  })),
]);
