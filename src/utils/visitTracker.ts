export const VISIT_KEY = "amaroke_visits";

export function getVisits(): Record<string, string> {
  const stored = localStorage.getItem(VISIT_KEY);
  return stored ? JSON.parse(stored) : {};
}

export function setVisit(sectionPath: string) {
  const visits = getVisits();
  visits[sectionPath] = new Date().toISOString();
  localStorage.setItem(VISIT_KEY, JSON.stringify(visits));
}

export function isNew(
  sectionPath: string,
  lastUpdated: string,
  months = 1
): boolean {
  if (!lastUpdated) return false;

  const visitedAt = getVisits()[sectionPath];
  const visitedDate = new Date(visitedAt);
  const lastUpdatedDate = new Date(lastUpdated);

  const now = new Date();
  const recentThreshold = new Date(lastUpdatedDate);
  recentThreshold.setMonth(recentThreshold.getMonth() + months);
  if (recentThreshold < now) return false;

  return visitedDate < lastUpdatedDate;
}
