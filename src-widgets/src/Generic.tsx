import type { VisRxWidgetState } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';
import translations from './translations';

// Register translations with VIS2 via window.addWords
(function registerTranslations(): void {
    if (typeof window === 'undefined' || typeof window.addWords !== 'function') return;
    const { prefix, ...langs } = translations as Record<string, any>;
    const langKeys = Object.keys(langs);
    if (!langKeys.length) return;
    const words: Record<string, Record<string, string>> = {};
    for (const key of Object.keys(langs[langKeys[0]])) {
        const fullKey = prefix + key;
        words[fullKey] = {};
        for (const lang of langKeys) {
            words[fullKey][lang] = langs[lang][key];
        }
    }
    window.addWords(words);
})();

export default class Generic<
    RxData extends Record<string, any>,
    State extends Partial<VisRxWidgetState> = VisRxWidgetState,
> extends (window.visRxWidget as typeof VisRxWidget)<RxData, State> {
    getPropertyValue = (stateName: string): any =>
        this.state.values[`${(this.state.rxData as any)[stateName]}.val`];

    static getI18nPrefix(): string {
        return 'vis_2_widgets_brandmair_';
    }
}
