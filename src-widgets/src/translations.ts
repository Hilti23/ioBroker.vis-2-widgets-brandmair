import en from './i18n/en.json';
import de from './i18n/de.json';

const PREFIX = 'vis_2_widgets_brandmair_';

function prefixKeys(obj: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};
    for (const key of Object.keys(obj)) {
        result[PREFIX + key] = obj[key];
    }
    return result;
}

const translations = {
    en: prefixKeys(en),
    de: prefixKeys(de),
    prefix: PREFIX,
};

export default translations;
