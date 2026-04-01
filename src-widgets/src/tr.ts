import de from './i18n/de.json';
import en from './i18n/en.json';

const dict: Record<string, Record<string, string>> = { de, en };

export function tr(key: string): string {
    const lang = typeof window !== 'undefined' && (window as any).systemLang || 'de';
    return (dict[lang] || dict.de)[key] ?? key;
}
