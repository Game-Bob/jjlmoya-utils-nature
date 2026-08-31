import type { CalendarPlan } from './logic';
import type { SeedStratificationCalendarUI } from './ui';
import { profileLabels } from './profile-labels';

export function todayISO(): string {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function formatICSDate(value: string): string {
  return value.replaceAll('-', '');
}

function addDay(value: string): string {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function escapeICS(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll(';', '\\;').replaceAll(',', '\\,').replaceAll('\n', '\\n');
}

function buildICS(plan: CalendarPlan, ui: SeedStratificationCalendarUI): string {
  const labels = { soak: ui.labelSoak, warm: ui.labelWarm, cold: ui.labelCold, sow: ui.labelSow };
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//jjlmoya-utils-nature//Seed Calendar//EN', 'CALSCALE:GREGORIAN'];
  plan.phases.forEach((phase) => {
    const label = labels[phase.kind];
    lines.push('BEGIN:VEVENT', `UID:${plan.profileId}-${phase.kind}-${phase.startDate}@jjlmoya-utils-nature`, `DTSTAMP:${formatICSDate(todayISO())}T000000Z`, `DTSTART;VALUE=DATE:${formatICSDate(phase.startDate)}`, `DTEND;VALUE=DATE:${formatICSDate(addDay(phase.endDate))}`, `SUMMARY:${escapeICS(label)}`, `DESCRIPTION:${escapeICS(phase.technique)}`, 'BEGIN:VALARM', 'TRIGGER:PT0S', 'ACTION:DISPLAY', `DESCRIPTION:${escapeICS(label)}`, 'END:VALARM', 'END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return `${lines.join('\r\n')}\r\n`;
}

export function downloadCalendar(plan: CalendarPlan, ui: SeedStratificationCalendarUI): void {
  const blob = new Blob([buildICS(plan, ui)], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `seed-calendar-${plan.profileId}.ics`;
  link.click();
  URL.revokeObjectURL(link.href);
}

export async function copyShareLink(root: HTMLElement, link: string, ui: SeedStratificationCalendarUI): Promise<void> {
  try {
    await navigator.clipboard.writeText(link);
    root.querySelector<HTMLElement>('[data-role="share-status"]')!.textContent = ui.labelCopied;
  } catch {
    root.querySelector<HTMLElement>('[data-role="share-status"]')!.textContent = link;
  }
}

function formatDateForPrint(value: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

export function updatePrintLabel(root: HTMLElement, plan: CalendarPlan, ui: SeedStratificationCalendarUI, locale: string): void {
  const phaseLabels = { soak: ui.labelSoak, warm: ui.labelWarm, cold: ui.labelCold, sow: ui.labelSow };
  const profileLabelsMap = profileLabels(ui);
  root.querySelector<HTMLElement>('[data-role="print-profile"]')!.textContent = profileLabelsMap[plan.profileId] ?? ui.profileApple;
  root.querySelector<HTMLElement>('[data-role="print-start"]')!.textContent = `${ui.labelCalendarStarts}: ${formatDateForPrint(plan.startDate, locale)}`;
  root.querySelector<HTMLElement>('[data-role="print-sowing"]')!.textContent = `${ui.labelSowingDay}: ${formatDateForPrint(plan.sowingDate, locale)}`;
  root.querySelector<HTMLElement>('[data-role="print-phases"]')!.textContent = plan.phases.map((phase) => `${phaseLabels[phase.kind]} ${formatDateForPrint(phase.startDate, locale)}–${formatDateForPrint(phase.endDate, locale)}`).join(' · ');
}
