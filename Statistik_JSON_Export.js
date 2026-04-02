// ============================================
// Statistik JSON Export
// Liest die hierarchische Verbrauchsstatistik
// und schreibt pro Gerät einen JSON-State
// für das VerbrauchWidget
// ============================================

const CONFIG = {
    basePath: '0_userdata.0.Statistik',

    geraete: {
        'Strom_Eingang': { unit: 'kWh', decimals: 2 },
        'Strom_Ausgang': { unit: 'kWh', decimals: 2 },
        'Gas_m3':        { unit: 'm³',  decimals: 3 },
        'Gas_kWh':       { unit: 'kWh', decimals: 2 }
    },

    limits: {
        years: 10,
        months: 24,
        weeks: 12,
        days: 14
    }
};

const MONATSNAMEN = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
const WOCHENTAGE  = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

// ============================================
// Hilfsfunktionen
// ============================================
function safeGetValue(id) {
    if (!existsState(id)) return null;
    const s = getState(id);
    if (!s || s.val === null || s.val === undefined) return null;
    return Number(s.val);
}

function getISOWeek(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

// ============================================
// Daten sammeln
// ============================================
function collectYears(geraet, cfg) {
    const result = [];
    const now = new Date();
    const curYear = now.getFullYear();

    for (let y = curYear - CONFIG.limits.years + 1; y <= curYear; y++) {
        const summePath = `${CONFIG.basePath}.Jahr_${y}.${geraet}.Summe`;
        const aktPath = `${CONFIG.basePath}.Statistics.${geraet}.akt_year`;

        let val = null;
        if (y === curYear) {
            val = safeGetValue(aktPath);
        }
        if (val === null) {
            val = safeGetValue(summePath);
        }
        if (val !== null) {
            result.push({ label: String(y), value: Number(val.toFixed(cfg.decimals)) });
        }
    }
    return result;
}

function collectMonths(geraet, cfg) {
    const result = [];
    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth() + 1;

    // Letzte 12 Monate sammeln
    for (let i = CONFIG.limits.months - 1; i >= 0; i--) {
        let m = curMonth - i;
        let y = curYear;
        while (m <= 0) { m += 12; y--; }

        const mm = String(m).padStart(2, '0');
        const summePath = `${CONFIG.basePath}.Jahr_${y}.Monat_${mm}.${geraet}.Summe`;
        const aktPath = `${CONFIG.basePath}.Statistics.${geraet}.akt_month`;

        let val = null;
        if (y === curYear && m === curMonth) {
            val = safeGetValue(aktPath);
        }
        if (val === null) {
            val = safeGetValue(summePath);
        }
        if (val !== null) {
            const yy = String(y).slice(2);
            const label = `${MONATSNAMEN[m - 1]} ${yy}`;
            result.push({ label: label, value: Number(val.toFixed(cfg.decimals)) });
        }
    }
    return result;
}

function collectWeeks(geraet, cfg) {
    const result = [];
    const now = new Date();
    const curYear = now.getFullYear();
    const curWeek = getISOWeek(now);

    for (let i = CONFIG.limits.weeks - 1; i >= 0; i--) {
        let w = curWeek - i;
        let y = curYear;
        if (w <= 0) { w += 52; y--; }

        const ww = String(w).padStart(2, '0');
        const summePath = `${CONFIG.basePath}.Jahr_${y}.Woche_${ww}.${geraet}.Summe`;
        const aktPath = `${CONFIG.basePath}.Statistics.${geraet}.akt_week`;

        let val = null;
        if (y === curYear && w === curWeek) {
            val = safeGetValue(aktPath);
        }
        if (val === null) {
            val = safeGetValue(summePath);
        }
        if (val !== null) {
            result.push({ label: `KW ${ww}`, value: Number(val.toFixed(cfg.decimals)) });
        }
    }
    return result;
}

function collectDays(geraet, cfg) {
    const result = [];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (let i = CONFIG.limits.days - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);

        const y = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');

        const summePath = `${CONFIG.basePath}.Jahr_${y}.Monat_${mm}.Tag_${dd}.${geraet}.Summe`;
        const aktPath = `${CONFIG.basePath}.Statistics.${geraet}.akt_day`;

        let val = null;
        // Heute → aktuellen Tageswert verwenden
        if (i === 0) {
            val = safeGetValue(aktPath);
        }
        if (val === null) {
            val = safeGetValue(summePath);
        }
        if (val !== null) {
            const wt = WOCHENTAGE[d.getDay()];
            const label = `${wt} ${dd}.${mm}`;
            result.push({ label: label, value: Number(val.toFixed(cfg.decimals)) });
        }
    }
    return result;
}

// ============================================
// JSON-State schreiben
// ============================================
function exportGeraet(geraet, cfg) {
    const json = {
        unit: cfg.unit,
        years: collectYears(geraet, cfg),
        months: collectMonths(geraet, cfg),
        weeks: collectWeeks(geraet, cfg),
        days: collectDays(geraet, cfg)
    };

    const stateId = `${CONFIG.basePath}.Statistics.${geraet}.json_summary`;
    const jsonStr = JSON.stringify(json);

    if (!existsState(stateId)) {
        createState(stateId, jsonStr, {
            type: 'string',
            role: 'json',
            read: true,
            write: false
        });
    } else {
        setState(stateId, jsonStr, true);
    }
}

function exportAll() {
    Object.keys(CONFIG.geraete).forEach(function(g) {
        exportGeraet(g, CONFIG.geraete[g]);
    });
    log('Statistik JSON Export aktualisiert');
}

// ============================================
// Start + Schedule
// ============================================
setTimeout(function() {
    exportAll();
    schedule('*/5 * * * *', exportAll);
    log('Statistik JSON Export gestartet – aktualisiert alle 5 Minuten');
}, 2000);
