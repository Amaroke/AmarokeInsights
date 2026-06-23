import { storage } from "./storage";

export const VISIT_KEY = "amaroke_visits";

export function getVisits(): Record<string, string> {
  const stored = storage.get(VISIT_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored) as Record<string, string>;
  } catch {
    return {};
  }
}

export function setVisit(sectionPath: string) {
  const visits = getVisits();
  visits[sectionPath] = new Date().toISOString();
  storage.set(VISIT_KEY, JSON.stringify(visits));
}

export function isNew(
  sectionPath: string,
  lastUpdated: string,
  visits: Record<string, string> = getVisits(),
  months = 1,
): boolean {
  if (!lastUpdated) return false;

  const lastUpdatedDate = new Date(lastUpdated);
  const recentThreshold = new Date(lastUpdatedDate);
  recentThreshold.setMonth(recentThreshold.getMonth() + months);
  if (recentThreshold < new Date()) return false;

  const visitedAt = visits[sectionPath];
  if (!visitedAt) return true;

  return new Date(visitedAt) < lastUpdatedDate;
}
