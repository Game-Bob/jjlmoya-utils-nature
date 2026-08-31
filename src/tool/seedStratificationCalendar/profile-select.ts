import type { SeedStratificationCalendarUI } from './ui';
import { profileLabels } from './profile-labels';

export interface SelectParts {
  root: HTMLElement;
  trigger: HTMLButtonElement;
  menu: HTMLElement;
  choose: (id: string) => void;
}

function query<T extends Element>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing calendar element ${selector}`);
  return element;
}

export function setupSelect(root: HTMLElement, ui: SeedStratificationCalendarUI, initialId: string, onSelect: (id: string) => void): SelectParts {
  const select = query<HTMLElement>(root, '[data-role="profile-select"]');
  const trigger = query<HTMLButtonElement>(select, '[data-select-trigger]');
  const menu = query<HTMLElement>(select, '[data-select-menu]');
  const labels = profileLabels(ui);
  const choose = (id: string): void => {
    select.dataset.value = id;
    trigger.replaceChildren(document.createTextNode(labels[id] ?? labels.apple ?? ''));
    const chevron = document.createElement('span');
    chevron.className = 'n-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    trigger.append(chevron);
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    menu.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((option) => {
      const isActive = option.dataset.option === id;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-selected', String(isActive));
    });
    onSelect(id);
  };
  menu.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((option) => option.addEventListener('click', () => choose(option.dataset.option ?? initialId)));
  trigger.addEventListener('click', () => { menu.hidden = !menu.hidden; trigger.setAttribute('aria-expanded', String(!menu.hidden)); });
  document.addEventListener('click', (event) => { if (!select.contains(event.target as Node)) menu.hidden = true; });
  choose(initialId);
  return { root: select, trigger, menu, choose };
}
