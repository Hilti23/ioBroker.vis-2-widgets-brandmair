import React from 'react';
import {
    Select,
    MenuItem,
    type SelectChangeEvent,
} from '@mui/material';
import type { RxRenderWidgetProps, RxWidgetInfo, VisRxWidgetState } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface EmRxData {
    widgetTitle: string;
    'oid-base': string;
    // Global
    'oid-surplus-current': string;
    'oid-surplus-avg': string;
    'oid-pv-power': string;
    'oid-battery-soc': string;
    'oid-forecast-today': string;
    'oid-managed-power': string;
    'oid-active-devices': string;
    'oid-is-holiday': string;
    'oid-holiday-days-remain': string;
    // Temperaturen & Sensoren
    'oid-ww-temp-bottom': string;
    'oid-ww-temp-top': string;
    'oid-pool-temp': string;
    'oid-outside-temp': string;
    'oid-humidity': string;
    // Temp-Abschaltung Heizstab
    'oid-dev1-temp-max-top': string;
    'oid-dev1-temp-restart': string;
    'oid-dev1-temp-blocked': string;
    // Holiday RW (kept for backwards compat)
    'oid-holiday-from': string;
    'oid-holiday-to': string;
    // Device 1
    'oid-dev1-name': string;
    'oid-dev1-mode': string;
    'oid-dev1-priority': string;
    'oid-dev1-power-min': string;
    'oid-dev1-power-max': string;
    'oid-dev1-is-dimmable': string;
    'oid-dev1-is-on': string;
    'oid-dev1-power': string;
    'oid-dev1-last-action': string;
    'oid-dev1-holiday-blocked': string;
    'oid-dev1-notif-today': string;
    'oid-dev1-min-soc': string;
    'oid-dev1-soc-off': string;
    'oid-dev1-surplus-on': string;
    'oid-dev1-surplus-off': string;
    'oid-dev1-avg-min': string;
    'oid-dev1-time-start': string;
    'oid-dev1-time-end': string;
    'oid-dev1-days': string;
    'oid-dev1-excl-holidays': string;
    'oid-dev1-min-runtime': string;
    'oid-dev1-min-pause': string;
    'oid-dev1-notify': string;
    'oid-dev1-notify-on': string;
    'oid-dev1-notify-off': string;
    'oid-dev1-max-notif': string;
    'oid-dev1-fc-enabled': string;
    'oid-dev1-fc-start': string;
    'oid-dev1-fc-end': string;
    'oid-dev1-fc-min-soc': string;
    'oid-dev1-fc-rules': string;
    'oid-dev1-dis-holiday': string;
    'oid-dev1-hol-pre-days': string;
    'oid-dev1-silent-rules': string;
    'oid-dev1-silent-active': string;
    'oid-dev1-time-rules': string;
    // Device 2
    'oid-dev2-name': string;
    'oid-dev2-mode': string;
    'oid-dev2-priority': string;
    'oid-dev2-power-min': string;
    'oid-dev2-power-max': string;
    'oid-dev2-is-dimmable': string;
    'oid-dev2-is-on': string;
    'oid-dev2-power': string;
    'oid-dev2-last-action': string;
    'oid-dev2-holiday-blocked': string;
    'oid-dev2-notif-today': string;
    'oid-dev2-min-soc': string;
    'oid-dev2-soc-off': string;
    'oid-dev2-surplus-on': string;
    'oid-dev2-surplus-off': string;
    'oid-dev2-avg-min': string;
    'oid-dev2-time-start': string;
    'oid-dev2-time-end': string;
    'oid-dev2-days': string;
    'oid-dev2-excl-holidays': string;
    'oid-dev2-min-runtime': string;
    'oid-dev2-min-pause': string;
    'oid-dev2-notify': string;
    'oid-dev2-notify-on': string;
    'oid-dev2-notify-off': string;
    'oid-dev2-max-notif': string;
    'oid-dev2-fc-enabled': string;
    'oid-dev2-fc-start': string;
    'oid-dev2-fc-end': string;
    'oid-dev2-fc-min-soc': string;
    'oid-dev2-fc-rules': string;
    'oid-dev2-dis-holiday': string;
    'oid-dev2-hol-pre-days': string;
    'oid-dev2-silent-rules': string;
    'oid-dev2-silent-active': string;
    'oid-dev2-time-rules': string;
    // Device 3
    'oid-dev3-name': string;
    'oid-dev3-mode': string;
    'oid-dev3-priority': string;
    'oid-dev3-power-min': string;
    'oid-dev3-power-max': string;
    'oid-dev3-is-dimmable': string;
    'oid-dev3-is-on': string;
    'oid-dev3-power': string;
    'oid-dev3-last-action': string;
    'oid-dev3-holiday-blocked': string;
    'oid-dev3-notif-today': string;
    'oid-dev3-min-soc': string;
    'oid-dev3-soc-off': string;
    'oid-dev3-surplus-on': string;
    'oid-dev3-surplus-off': string;
    'oid-dev3-avg-min': string;
    'oid-dev3-time-start': string;
    'oid-dev3-time-end': string;
    'oid-dev3-days': string;
    'oid-dev3-excl-holidays': string;
    'oid-dev3-min-runtime': string;
    'oid-dev3-min-pause': string;
    'oid-dev3-notify': string;
    'oid-dev3-notify-on': string;
    'oid-dev3-notify-off': string;
    'oid-dev3-max-notif': string;
    'oid-dev3-fc-enabled': string;
    'oid-dev3-fc-start': string;
    'oid-dev3-fc-end': string;
    'oid-dev3-fc-min-soc': string;
    'oid-dev3-fc-rules': string;
    'oid-dev3-dis-holiday': string;
    'oid-dev3-hol-pre-days': string;
    'oid-dev3-silent-rules': string;
    'oid-dev3-silent-active': string;
    'oid-dev3-time-rules': string;
}

interface EmState extends VisRxWidgetState {
    editDev1Priority: number | null;
    editDev2Priority: number | null;
    editDev3Priority: number | null;
    editDev1PowerMin: number | null;
    editDev1PowerMax: number | null;
    editDev2PowerMin: number | null;
    editDev2PowerMax: number | null;
    editDev3PowerMin: number | null;
    editDev3PowerMax: number | null;
    showTimeModal1: boolean;
    showTimeModal2: boolean;
    showTimeModal3: boolean;
    editTimeRules1: TimeRule[] | null;
    editTimeRules2: TimeRule[] | null;
    editTimeRules3: TimeRule[] | null;
}

// ---------------------------------------------------------------------------
// Time rules types
// ---------------------------------------------------------------------------
interface TimeRule {
    days: number[];
    start: string;
    end: string;
}

// ---------------------------------------------------------------------------
// Auto-fill mapping
// ---------------------------------------------------------------------------
const DEVICE_PREFIXES: Record<number, string> = {
    1: 'heizstab_warmwasser',
    2: 'luftentfeuchter_keller',
    3: 'pool_wp',
};

const DEVICE_NEW_FIELDS: Array<[string, string]> = [
    ['min-soc', 'min_soc'],
    ['soc-off', 'soc_off'],
    ['surplus-on', 'surplus_on_avg_w'],
    ['surplus-off', 'surplus_off_avg_w'],
    ['avg-min', 'avg_minutes'],
    ['time-start', 'time_start'],
    ['time-end', 'time_end'],
    ['days', 'days'],
    ['excl-holidays', 'exclude_holidays'],
    ['min-runtime', 'min_runtime_min'],
    ['min-pause', 'min_pause_min'],
    ['notify', 'notify'],
    ['notify-on', 'notify_on'],
    ['notify-off', 'notify_off'],
    ['max-notif', 'max_notifications_per_day'],
    ['fc-enabled', 'forecast_enabled'],
    ['fc-start', 'forecast_preheat_start'],
    ['fc-end', 'forecast_preheat_end'],
    ['fc-min-soc', 'forecast_preheat_min_soc'],
    ['fc-rules', 'forecast_rules'],
    ['dis-holiday', 'disable_on_holiday'],
    ['hol-pre-days', 'holiday_pre_days'],
    ['silent-rules', 'silent_rules'],
    ['silent-active', 'silent_active'],
    ['time-rules', 'time_rules'],
];

const OID_MAP: Array<[string, string]> = [
    // Global
    ['oid-surplus-current', 'surplus_current_w'],
    ['oid-surplus-avg', 'surplus_avg_w'],
    ['oid-pv-power', 'pv_power_w'],
    ['oid-battery-soc', 'battery_soc'],
    ['oid-forecast-today', 'forecast_today_kwh'],
    ['oid-managed-power', 'managed_power_w'],
    ['oid-active-devices', 'active_devices'],
    ['oid-is-holiday', 'is_holiday'],
    ['oid-holiday-days-remain', 'holiday_days_remaining'],
    ['oid-ww-temp-bottom', 'warmwasser_temp_bottom'],
    ['oid-ww-temp-top', 'warmwasser_temp_top'],
    ['oid-holiday-from', 'holiday_from'],
    ['oid-holiday-to', 'holiday_to'],
];

// Build device OID mappings for all 3 devices
for (let d = 1; d <= 3; d++) {
    const prefix = DEVICE_PREFIXES[d];
    const dp = `oid-dev${d}`;
    // Existing fields
    OID_MAP.push(
        [`${dp}-name`, `${prefix}.name`],
        [`${dp}-mode`, `${prefix}.mode`],
        [`${dp}-priority`, `${prefix}.priority`],
        [`${dp}-power-min`, `${prefix}.power_min_w`],
        [`${dp}-power-max`, `${prefix}.power_max_w`],
        [`${dp}-is-dimmable`, `${prefix}.is_dimmable`],
        [`${dp}-is-on`, `${prefix}.is_on`],
        [`${dp}-power`, `${prefix}.power_w`],
        [`${dp}-last-action`, `${prefix}.last_action`],
        [`${dp}-holiday-blocked`, `${prefix}.holiday_blocked`],
        [`${dp}-notif-today`, `${prefix}.notifications_today`],
    );
    // New fields
    for (const [shortName, oidSuffix] of DEVICE_NEW_FIELDS) {
        OID_MAP.push([`${dp}-${shortName}`, `${prefix}.${oidSuffix}`]);
    }
}
// Dev1-specific: Temperatur-Abschaltung
OID_MAP.push(
    ['oid-dev1-temp-max-top', 'heizstab_warmwasser.temp_max_top'],
    ['oid-dev1-temp-restart', 'heizstab_warmwasser.temp_restart'],
    ['oid-dev1-temp-blocked', 'heizstab_warmwasser.temp_blocked'],
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function wwColor(t: number): string {
    if (isNaN(t)) return '#777';
    if (t < 30) return '#4a9edd';
    if (t < 45) return '#f5a623';
    return '#e8622a';
}

function surplusColor(w: number): string {
    return w >= 0 ? '#2ec27e' : '#e8622a';
}

function socColor(soc: number): string {
    if (soc < 20) return '#e8622a';
    if (soc < 50) return '#f5a623';
    return '#2ec27e';
}

function modeColor(mode: string): string {
    switch (mode) {
        case 'auto': return '#4a9edd';
        case 'manual_on': return '#2ec27e';
        case 'manual_off': return '#f5a623';
        case 'disabled': return '#888';
        default: return '#888';
    }
}

function formatWatt(w: number): string {
    if (Math.abs(w) >= 1000) return `${(w / 1000).toFixed(1)} kW`;
    return `${Math.round(w)} W`;
}

const DAY_NAMES = ['', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const DAY_NAMES_FULL = ['', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

interface SilentRule {
    days: number[];
    before?: string;
    silent: boolean;
}

function parseSilentRules(jsonStr: string): SilentRule[] {
    try {
        return JSON.parse(jsonStr) as SilentRule[];
    } catch {
        return [];
    }
}

function formatSilentRules(jsonStr: string): string {
    try {
        const rules: SilentRule[] = JSON.parse(jsonStr);
        return rules
            .filter((r) => r.silent)
            .map((r) => {
                const days = r.days.map((d) => DAY_NAMES[d] || d).join(',');
                return r.before ? `${days} <${r.before}` : days;
            })
            .join(' | ') || '\u2013';
    } catch {
        return '\u2013';
    }
}

function parseDaysArray(jsonStr: string): number[] {
    try {
        const arr = JSON.parse(jsonStr);
        if (Array.isArray(arr)) return arr;
    } catch { /* ignore */ }
    return [];
}

function parseTimeRules(jsonStr: string): TimeRule[] {
    try {
        const arr = JSON.parse(jsonStr);
        if (Array.isArray(arr)) return arr;
    } catch { /* ignore */ }
    return [];
}

function formatTimeRules(rulesJson: string, legacyStart: string, legacyEnd: string, legacyDays: string): string {
    let rules = parseTimeRules(rulesJson);
    if (rules.length === 0 && (legacyStart || legacyEnd)) {
        // Fall back to legacy
        const days = parseDaysArray(legacyDays);
        if (days.length > 0 && (legacyStart || legacyEnd)) {
            rules = [{ days, start: legacyStart || '00:00', end: legacyEnd || '23:59' }];
        }
    }
    if (rules.length === 0) return '\u2013';

    return rules.map((r) => {
        const dayStr = formatDayRange(r.days);
        return `${dayStr} ${r.start}-${r.end}`;
    }).join(' | ');
}

function formatDayRange(days: number[]): string {
    if (days.length === 0) return '';
    const sorted = [...days].sort((a, b) => a - b);
    const ranges: string[] = [];
    let start = sorted[0];
    let prev = sorted[0];
    for (let i = 1; i <= sorted.length; i++) {
        if (i < sorted.length && sorted[i] === prev + 1) {
            prev = sorted[i];
        } else {
            if (start === prev) {
                ranges.push(DAY_NAMES[start]);
            } else {
                ranges.push(`${DAY_NAMES[start]}-${DAY_NAMES[prev]}`);
            }
            if (i < sorted.length) {
                start = sorted[i];
                prev = sorted[i];
            }
        }
    }
    return ranges.join(',');
}

// Text shadow for colored values on variable backgrounds
const valueShadow = '0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)';

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function StatCard({ label, value, unit, color, sub }: {
    label: string; value: string; unit?: string; color?: string; sub?: string;
}) {
    return (
        <div style={{
            flex: '1 1 0', minWidth: 100, padding: '6px 10px',
            border: '1px solid rgba(0,0,0,0.15)', borderRadius: 10,
            display: 'flex', flexDirection: 'column', gap: 1,
            alignItems: 'center', textAlign: 'center',
        }}>
            <div style={{ fontSize: 10, color: '#333', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {label}
            </div>
            <div style={{
                fontSize: 18, fontWeight: 700, color: color || '#111',
                textShadow: color ? valueShadow : 'none',
            }}>
                {value}
                {unit && <span style={{ fontSize: 11, fontWeight: 400, marginLeft: 2, color: '#333', textShadow: 'none' }}>{unit}</span>}
            </div>
            {sub && (
                <div style={{ fontSize: 10, color: '#555' }}>{sub}</div>
            )}
        </div>
    );
}

function SensorCard({ label, value, unit, color }: {
    label: string; value: string; unit: string; color?: string;
}) {
    return (
        <div style={{
            flex: '1 1 0', minWidth: 100, padding: '6px 10px',
            border: '1px solid rgba(0,0,0,0.15)', borderRadius: 10,
            display: 'flex', flexDirection: 'column', gap: 1,
            alignItems: 'center', textAlign: 'center',
        }}>
            <div style={{ fontSize: 10, color: '#333', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {label}
            </div>
            <div style={{
                fontSize: 18, fontWeight: 700, color: color || '#111',
                textShadow: color ? valueShadow : 'none',
            }}>
                {value}
                <span style={{ fontSize: 11, fontWeight: 400, marginLeft: 2, color: '#333', textShadow: 'none' }}>{unit}</span>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Toggle component
// ---------------------------------------------------------------------------
function Toggle({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
    return (
        <div onClick={onClick} style={{
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', userSelect: 'none',
        }}>
            <div style={{
                width: 36, height: 20, borderRadius: 10, position: 'relative',
                background: on ? 'rgba(245,166,35,0.5)' : 'rgba(0,0,0,0.15)',
                border: `1px solid ${on ? '#f5a623' : 'rgba(0,0,0,0.2)'}`,
                transition: 'all 0.2s',
            }}>
                <div style={{
                    width: 14, height: 14, borderRadius: '50%', position: 'absolute',
                    top: 2, left: 2, transition: 'all 0.2s',
                    transform: on ? 'translateX(14px)' : 'translateX(0)',
                    background: on ? '#f5a623' : 'rgba(0,0,0,0.3)',
                }} />
            </div>
            <span style={{ fontSize: 11, color: '#333' }}>{label}</span>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Compact checkbox
// ---------------------------------------------------------------------------
function Checkbox({ checked, label, onChange }: { checked: boolean; label: string; onChange: (v: boolean) => void }) {
    return (
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', fontSize: 11, color: '#333' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                style={{ width: 14, height: 14, margin: 0 }}
            />
            {label}
        </label>
    );
}

// ---------------------------------------------------------------------------
// TimeRulesModal
// ---------------------------------------------------------------------------
interface TimeRulesModalProps {
    rules: TimeRule[];
    silentRules: SilentRule[];
    excludeHolidays: boolean;
    onSave: (rules: TimeRule[], silentRules: SilentRule[], excludeHolidays: boolean) => void;
    onCancel: () => void;
}

interface DayRow {
    day: number;
    active: boolean;
    start: string;
    end: string;
    silent: boolean;
    silentBefore: string;
}

function TimeRulesModal({ rules, silentRules, excludeHolidays, onSave, onCancel }: TimeRulesModalProps): React.JSX.Element {
    const initRows = (): DayRow[] => {
        const rows: DayRow[] = [];
        for (let d = 1; d <= 7; d++) {
            const rule = rules.find((r) => r.days.includes(d));
            const sr = silentRules.find((r) => r.days.includes(d));
            rows.push({
                day: d,
                active: !!rule,
                start: rule ? rule.start : '08:00',
                end: rule ? rule.end : '20:00',
                silent: sr ? sr.silent : false,
                silentBefore: sr && sr.before ? sr.before : '',
            });
        }
        return rows;
    };

    const [dayRows, setDayRows] = React.useState<DayRow[]>(initRows);
    const [exclHol, setExclHol] = React.useState(excludeHolidays);

    const updateRow = (idx: number, field: keyof DayRow, value: any): void => {
        setDayRows((prev) => {
            const next = [...prev];
            next[idx] = { ...next[idx], [field]: value };
            return next;
        });
    };

    const handleSave = (): void => {
        // Group time rules
        const timeGroups: Record<string, number[]> = {};
        for (const row of dayRows) {
            if (!row.active) continue;
            const key = `${row.start}|${row.end}`;
            if (!timeGroups[key]) timeGroups[key] = [];
            timeGroups[key].push(row.day);
        }
        const timeResult: TimeRule[] = Object.entries(timeGroups).map(([key, days]) => {
            const [start, end] = key.split('|');
            return { days: days.sort((a, b) => a - b), start, end };
        });

        // Group silent rules
        const silentGroups: Record<string, number[]> = {};
        for (const row of dayRows) {
            const key = `${row.silent}|${row.silentBefore}`;
            if (!silentGroups[key]) silentGroups[key] = [];
            silentGroups[key].push(row.day);
        }
        const silentResult: SilentRule[] = Object.entries(silentGroups).map(([key, days]) => {
            const [silent, before] = key.split('|');
            const rule: SilentRule = { days: days.sort((a, b) => a - b), silent: silent === 'true' };
            if (before) rule.before = before;
            return rule;
        });

        onSave(timeResult, silentResult, exclHol);
    };

    const inputStyle: React.CSSProperties = {
        padding: '4px 6px', fontSize: 13, border: '1px solid rgba(0,0,0,0.2)',
        borderRadius: 5, background: '#fff', color: '#111', textAlign: 'center',
        width: 80,
    };

    return (
        <div
            onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', zIndex: 1100,
            }}
        >
            <div style={{
                background: '#fff', borderRadius: 12, padding: 24, minWidth: 380,
                maxWidth: 560, boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                color: '#111', maxHeight: '90vh', overflow: 'auto',
            }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#111' }}>
                    {tr('em_time_rules') || 'Zeitfenster'} & Silent
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', fontSize: 11, color: '#555', padding: '4px 4px' }}>Tag</th>
                            <th style={{ textAlign: 'center', fontSize: 11, color: '#555', padding: '4px 4px' }}>Aktiv</th>
                            <th style={{ textAlign: 'center', fontSize: 11, color: '#555', padding: '4px 4px' }}>Start</th>
                            <th style={{ textAlign: 'center', fontSize: 11, color: '#555', padding: '4px 4px' }}>Ende</th>
                            <th style={{ textAlign: 'center', fontSize: 11, color: '#8b5cf6', padding: '4px 4px' }}>Silent</th>
                            <th style={{ textAlign: 'center', fontSize: 11, color: '#8b5cf6', padding: '4px 4px' }}>bis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dayRows.map((row, idx) => (
                            <tr key={row.day} style={{
                                borderTop: '1px solid rgba(0,0,0,0.08)',
                                opacity: row.active ? 1 : 0.4,
                            }}>
                                <td style={{ padding: '4px', fontSize: 13, fontWeight: 600, color: '#333' }}>
                                    {DAY_NAMES_FULL[row.day]}
                                </td>
                                <td style={{ padding: '4px', textAlign: 'center' }}>
                                    <input
                                        type="checkbox"
                                        checked={row.active}
                                        onChange={(e) => updateRow(idx, 'active', e.target.checked)}
                                        style={{ width: 16, height: 16 }}
                                    />
                                </td>
                                <td style={{ padding: '4px', textAlign: 'center' }}>
                                    <input
                                        type="time"
                                        value={row.start}
                                        disabled={!row.active}
                                        onChange={(e) => updateRow(idx, 'start', e.target.value)}
                                        style={{ ...inputStyle, width: 75, opacity: row.active ? 1 : 0.3 }}
                                    />
                                </td>
                                <td style={{ padding: '4px', textAlign: 'center' }}>
                                    <input
                                        type="time"
                                        value={row.end}
                                        disabled={!row.active}
                                        onChange={(e) => updateRow(idx, 'end', e.target.value)}
                                        style={{ ...inputStyle, width: 75, opacity: row.active ? 1 : 0.3 }}
                                    />
                                </td>
                                <td style={{ padding: '4px', textAlign: 'center' }}>
                                    <input
                                        type="checkbox"
                                        checked={row.silent}
                                        onChange={(e) => updateRow(idx, 'silent', e.target.checked)}
                                        style={{ width: 16, height: 16, accentColor: '#8b5cf6' }}
                                    />
                                </td>
                                <td style={{ padding: '4px', textAlign: 'center' }}>
                                    <input
                                        type="time"
                                        value={row.silentBefore}
                                        disabled={!row.silent}
                                        onChange={(e) => updateRow(idx, 'silentBefore', e.target.value)}
                                        style={{ ...inputStyle, width: 75, opacity: row.silent ? 1 : 0.3 }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{
                    marginTop: 14, padding: '10px 6px', borderTop: '1px solid rgba(0,0,0,0.1)',
                    display: 'flex', alignItems: 'center', gap: 8,
                }}>
                    <input
                        type="checkbox"
                        checked={exclHol}
                        onChange={(e) => setExclHol(e.target.checked)}
                        style={{ width: 16, height: 16 }}
                    />
                    <span style={{ fontSize: 13, color: '#333' }}>
                        {tr('em_excl_holidays') || 'An Feiertagen aus'}
                    </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 14 }}>
                    <button
                        onClick={onCancel}
                        style={{
                            padding: '8px 20px', fontSize: 13, border: '1px solid rgba(0,0,0,0.2)',
                            borderRadius: 6, background: '#f5f5f5', color: '#333', cursor: 'pointer',
                        }}
                    >
                        {tr('em_time_cancel') || 'Abbrechen'}
                    </button>
                    <button
                        onClick={handleSave}
                        style={{
                            padding: '8px 20px', fontSize: 13, border: '1px solid #4a9edd',
                            borderRadius: 6, background: '#4a9edd', color: '#fff', cursor: 'pointer',
                            fontWeight: 600,
                        }}
                    >
                        {tr('em_time_save') || 'Speichern'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Device OID field generator
// ---------------------------------------------------------------------------
function deviceOidFields(devNum: number, labelPrefix: string): Array<{ name: string; type: string; label: string }> {
    const p = `oid-dev${devNum}`;
    const fields = [
        { name: `${p}-name`, type: 'id', label: `${labelPrefix}_name` },
        { name: `${p}-mode`, type: 'id', label: `${labelPrefix}_mode` },
        { name: `${p}-priority`, type: 'id', label: `${labelPrefix}_priority` },
        { name: `${p}-power-min`, type: 'id', label: `${labelPrefix}_power_min` },
        { name: `${p}-power-max`, type: 'id', label: `${labelPrefix}_power_max` },
        { name: `${p}-is-dimmable`, type: 'id', label: `${labelPrefix}_is_dimmable` },
        { name: `${p}-is-on`, type: 'id', label: `${labelPrefix}_is_on` },
        { name: `${p}-power`, type: 'id', label: `${labelPrefix}_power` },
        { name: `${p}-last-action`, type: 'id', label: `${labelPrefix}_last_action` },
        { name: `${p}-holiday-blocked`, type: 'id', label: `${labelPrefix}_holiday_blocked` },
        { name: `${p}-notif-today`, type: 'id', label: `${labelPrefix}_notif_today` },
        // New fields for all devices
        { name: `${p}-min-soc`, type: 'id', label: 'em_min_soc' },
        { name: `${p}-soc-off`, type: 'id', label: 'em_soc_off' },
        { name: `${p}-surplus-on`, type: 'id', label: 'em_surplus_on' },
        { name: `${p}-surplus-off`, type: 'id', label: 'em_surplus_off' },
        { name: `${p}-avg-min`, type: 'id', label: 'em_avg_min' },
        { name: `${p}-time-start`, type: 'id', label: 'em_time_window' },
        { name: `${p}-time-end`, type: 'id', label: 'em_time_window' },
        { name: `${p}-days`, type: 'id', label: 'em_days_label' },
        { name: `${p}-excl-holidays`, type: 'id', label: 'em_excl_holidays' },
        { name: `${p}-min-runtime`, type: 'id', label: 'em_min_runtime' },
        { name: `${p}-min-pause`, type: 'id', label: 'em_min_pause' },
        { name: `${p}-notify`, type: 'id', label: 'em_notify_active' },
        { name: `${p}-notify-on`, type: 'id', label: 'em_notify_on' },
        { name: `${p}-notify-off`, type: 'id', label: 'em_notify_off' },
        { name: `${p}-max-notif`, type: 'id', label: 'em_max_notif' },
        { name: `${p}-fc-enabled`, type: 'id', label: 'em_forecast' },
        { name: `${p}-fc-start`, type: 'id', label: 'em_fc_preheat' },
        { name: `${p}-fc-end`, type: 'id', label: 'em_fc_preheat' },
        { name: `${p}-fc-min-soc`, type: 'id', label: 'em_fc_min_soc' },
        { name: `${p}-fc-rules`, type: 'id', label: 'em_forecast' },
        { name: `${p}-dis-holiday`, type: 'id', label: 'em_dis_holiday' },
        { name: `${p}-hol-pre-days`, type: 'id', label: 'em_hol_pre_days' },
        { name: `${p}-silent-rules`, type: 'id', label: 'em_silent_rules' },
        { name: `${p}-silent-active`, type: 'id', label: 'em_silent_active' },
        { name: `${p}-time-rules`, type: 'id', label: 'em_time_rules' },
    ];
    if (devNum === 1) {
        fields.push(
            { name: `${p}-temp-max-top`, type: 'id', label: 'em_temp_max_top' },
            { name: `${p}-temp-restart`, type: 'id', label: 'em_temp_restart' },
            { name: `${p}-temp-blocked`, type: 'id', label: 'em_temp_blocked' },
        );
    }
    return fields;
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class EnergiemanagerWidget extends Generic<EmRxData, EmState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state,
            editDev1Priority: null,
            editDev2Priority: null,
            editDev3Priority: null,
            editDev1PowerMin: null,
            editDev1PowerMax: null,
            editDev2PowerMin: null,
            editDev2PowerMax: null,
            editDev3PowerMin: null,
            editDev3PowerMax: null,
            showTimeModal1: false,
            showTimeModal2: false,
            showTimeModal3: false,
            editTimeRules1: null,
            editTimeRules2: null,
            editTimeRules3: null,
        };
    }

    // -- Widget metadata ----------------------------------------------------
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplEnergiemanagerWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'em_widget',
            visName: 'EnergiemanagerWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Energiemanager' },
                        {
                            name: 'oid-base',
                            type: 'text',
                            label: 'em_base_oid',
                            tooltip: 'em_base_oid_tooltip',
                            onChange: async (_field: any, data: any, changeData: any) => {
                                const base = data['oid-base'];
                                if (!base) return;
                                for (const [field, prop] of OID_MAP) {
                                    data[field] = `${base}.${prop}`;
                                }
                                changeData(data);
                            },
                        },
                    ],
                },
                {
                    name: 'global',
                    label: 'em_group_global',
                    fields: [
                        { name: 'oid-surplus-current', type: 'id', label: 'em_surplus_current' },
                        { name: 'oid-surplus-avg', type: 'id', label: 'em_surplus_avg' },
                        { name: 'oid-pv-power', type: 'id', label: 'em_pv_power' },
                        { name: 'oid-battery-soc', type: 'id', label: 'em_battery_soc' },
                        { name: 'oid-forecast-today', type: 'id', label: 'em_forecast_today' },
                        { name: 'oid-managed-power', type: 'id', label: 'em_managed_power' },
                        { name: 'oid-active-devices', type: 'id', label: 'em_active_devices' },
                        { name: 'oid-is-holiday', type: 'id', label: 'em_is_holiday' },
                        { name: 'oid-holiday-days-remain', type: 'id', label: 'em_holiday_days' },
                        { name: 'oid-ww-temp-bottom', type: 'id', label: 'em_ww_temp_bottom' },
                        { name: 'oid-ww-temp-top', type: 'id', label: 'em_ww_temp_top' },
                        { name: 'oid-pool-temp', type: 'id', label: 'em_pool_temp' },
                        { name: 'oid-outside-temp', type: 'id', label: 'em_outside_temp' },
                        { name: 'oid-humidity', type: 'id', label: 'em_humidity' },
                    ],
                },
                {
                    name: 'holiday',
                    label: 'em_group_holiday',
                    fields: [
                        { name: 'oid-holiday-from', type: 'id', label: 'em_holiday_from' },
                        { name: 'oid-holiday-to', type: 'id', label: 'em_holiday_to' },
                    ],
                },
                {
                    name: 'device1',
                    label: 'em_group_device1',
                    fields: deviceOidFields(1, 'em_dev'),
                },
                {
                    name: 'device2',
                    label: 'em_group_device2',
                    fields: deviceOidFields(2, 'em_dev'),
                },
                {
                    name: 'device3',
                    label: 'em_group_device3',
                    fields: deviceOidFields(3, 'em_dev'),
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100%',
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return EnergiemanagerWidget.getWidgetInfo();
    }

    // -- Helpers ------------------------------------------------------------
    private val(key: keyof EmRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    private setVal(key: keyof EmRxData, value: any): void {
        const oid = this.state.rxData[key];
        if (!oid) return;
        const values = JSON.parse(JSON.stringify(this.state.values));
        values[`${oid}.val`] = value;
        this.setState({ values } as any);
        this.props.context.setValue(oid, value);
    }

    private toBool(v: any): boolean {
        return v === true || v === 'true';
    }

    // -- Get time rules for a device, with fallback -------------------------
    private getTimeRulesForDevice(devNum: 1 | 2 | 3): TimeRule[] {
        const k = (suffix: string): keyof EmRxData => `oid-dev${devNum}-${suffix}` as keyof EmRxData;
        const rulesStr: string = this.val(k('time-rules')) || '';
        const rules = parseTimeRules(rulesStr);
        if (rules.length > 0) return rules;

        // Fallback to legacy
        const timeStart: string = this.val(k('time-start')) || '';
        const timeEnd: string = this.val(k('time-end')) || '';
        const daysStr: string = this.val(k('days')) || '[]';
        const days = parseDaysArray(daysStr);
        if (days.length > 0 && (timeStart || timeEnd)) {
            return [{ days, start: timeStart || '00:00', end: timeEnd || '23:59' }];
        }
        return [];
    }

    // -- Device card renderer -----------------------------------------------
    private renderDevice(devNum: 1 | 2 | 3): React.JSX.Element {
        const k = (suffix: string): keyof EmRxData => `oid-dev${devNum}-${suffix}` as keyof EmRxData;

        const name: string = this.val(k('name')) || `Ger\u00e4t ${devNum}`;
        const mode: string = this.val(k('mode')) || 'auto';
        const priority = Number(this.val(k('priority'))) || 1;
        const powerMin = Number(this.val(k('power-min'))) || 0;
        const powerMax = Number(this.val(k('power-max'))) || 0;
        const isDimmable = this.toBool(this.val(k('is-dimmable')));
        const isOn = this.toBool(this.val(k('is-on')));
        const power = Number(this.val(k('power'))) || 0;
        const lastAction: string = this.val(k('last-action')) || '\u2013';
        const holidayBlocked = this.toBool(this.val(k('holiday-blocked')));

        // Time rules
        const timeRulesStr: string = this.val(k('time-rules')) || '';
        const timeStart: string = this.val(k('time-start')) || '';
        const timeEnd: string = this.val(k('time-end')) || '';
        const daysStr: string = this.val(k('days')) || '[]';

        // Silent
        const silentActive = this.toBool(this.val(k('silent-active')));
        const silentRulesStr: string = this.val(k('silent-rules')) || '[]';

        // Edit state keys
        const priKey = `editDev${devNum}Priority` as keyof EmState;
        const pMinKey = `editDev${devNum}PowerMin` as keyof EmState;
        const pMaxKey = `editDev${devNum}PowerMax` as keyof EmState;
        const timeModalKey = `showTimeModal${devNum}` as keyof EmState;
        const editPri = this.state[priKey] as number | null;
        const editPMin = this.state[pMinKey] as number | null;
        const editPMax = this.state[pMaxKey] as number | null;
        const showTimeModal = this.state[timeModalKey] as boolean;

        const displayPri = editPri !== null ? editPri : priority;
        const displayPMin = editPMin !== null ? editPMin : powerMin;
        const displayPMax = editPMax !== null ? editPMax : powerMax;

        const pctPower = powerMax > 0 ? Math.min(100, (power / powerMax) * 100) : 0;
        const mc = modeColor(mode);

        const inputStyle: React.CSSProperties = {
            width: 65, padding: '3px 6px', fontSize: 12,
            border: '1px solid rgba(0,0,0,0.15)', borderRadius: 5,
            background: 'transparent', color: '#111',
            textAlign: 'right',
        };

        const smallInputStyle: React.CSSProperties = {
            ...inputStyle, width: 40, fontSize: 11,
        };

        const timeInputStyle: React.CSSProperties = {
            ...inputStyle, width: 70, fontSize: 11, textAlign: 'center',
        };

        const timeRulesSummary = formatTimeRules(timeRulesStr, timeStart, timeEnd, daysStr);

        return (
            <div key={devNum} style={{
                flex: '1 1 300px', minWidth: 280,
                border: '1px solid rgba(0,0,0,0.15)', borderRadius: 12,
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
            }}>
                {/* Mode color stripe */}
                <div style={{ height: 4, background: mc, flexShrink: 0 }} />

                {/* Header */}
                <div style={{
                    padding: '10px 14px 6px', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between', gap: 8,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {/* Status dot */}
                        <div style={{
                            width: 10, height: 10, borderRadius: '50%',
                            background: isOn ? '#2ec27e' : 'rgba(0,0,0,0.2)',
                            boxShadow: isOn ? '0 0 6px rgba(46,194,126,0.5)' : 'none',
                            flexShrink: 0,
                        }} />
                        <div style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{name}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {/* Priority input */}
                        <span style={{ fontSize: 11, color: '#555' }}>Prio</span>
                        <input
                            type="number"
                            min={1}
                            max={99}
                            value={displayPri}
                            onChange={(e) => this.setState({ [priKey]: Number(e.target.value) } as any)}
                            onBlur={() => {
                                if (editPri !== null) {
                                    this.setVal(k('priority'), editPri);
                                    this.setState({ [priKey]: null } as any);
                                }
                            }}
                            style={{
                                width: 32, padding: '2px 4px', fontSize: 12,
                                border: '1px solid rgba(0,0,0,0.15)', borderRadius: 5,
                                background: 'transparent', color: '#111', textAlign: 'center',
                            }}
                        />
                        {/* Calendar icon for time rules */}
                        <div
                            onClick={() => this.setState({ [timeModalKey]: true } as any)}
                            style={{
                                width: 28, height: 28, borderRadius: 6,
                                background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', fontSize: 14, flexShrink: 0,
                            }}
                            title={tr('em_time_rules') || 'Zeitfenster'}
                        >
                            &#128197;
                        </div>
                    </div>
                </div>

                {/* Power bar */}
                <div style={{ padding: '0 14px 8px' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        fontSize: 12, color: '#333', marginBottom: 4,
                    }}>
                        <span>{tr('em_dev_power') || 'Leistung'}</span>
                        <span style={{ fontWeight: 600, color: '#111' }}>
                            {formatWatt(power)} / {formatWatt(powerMax)}
                        </span>
                    </div>
                    <div style={{
                        height: 22, borderRadius: 6, overflow: 'hidden',
                        background: 'rgba(0,0,0,0.08)', position: 'relative',
                    }}>
                        <div style={{
                            width: `${pctPower}%`, height: '100%',
                            background: isOn
                                ? 'linear-gradient(90deg, #2ec27e, #2ec27ecc)'
                                : 'rgba(0,0,0,0.15)',
                            borderRadius: 6,
                            transition: 'width 0.5s ease',
                        }} />
                    </div>
                </div>

                {/* Mode selector + Holiday toggle */}
                <div style={{
                    padding: '0 14px 8px', display: 'flex',
                    alignItems: 'center', gap: 10,
                }}>
                    <span style={{ fontSize: 12, color: '#333', minWidth: 45 }}>
                        {tr('em_dev_mode') || 'Modus'}
                    </span>
                    <Select
                        value={mode}
                        size="small"
                        onChange={(e: SelectChangeEvent) => this.setVal(k('mode'), e.target.value)}
                        sx={{
                            flex: 1, fontSize: 13, height: 32, color: '#111',
                            '& .MuiSelect-select': { padding: '4px 10px' },
                            '& .MuiSelect-icon': { color: '#555' },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0,0,0,0.15)',
                            },
                        }}
                    >
                        <MenuItem value="auto">{tr('em_mode_auto') || 'Auto'}</MenuItem>
                        <MenuItem value="manual_on">{tr('em_mode_manual_on') || 'Manuell EIN'}</MenuItem>
                        <MenuItem value="manual_off">{tr('em_mode_manual_off') || 'Manuell AUS'}</MenuItem>
                        <MenuItem value="disabled">{tr('em_mode_disabled') || 'Deaktiviert'}</MenuItem>
                    </Select>
                </div>

                {/* Holiday blocked status (read-only, set by script) */}
                {holidayBlocked && (
                    <div style={{ padding: '0 14px 8px' }}>
                        <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 8,
                            background: 'rgba(245,166,35,0.15)', color: '#f5a623',
                            fontWeight: 600,
                        }}>
                            {tr('em_holiday_blocked') || 'Urlaub-Sperre aktiv'}
                        </span>
                    </div>
                )}

                {/* Time rules summary */}
                <div style={{
                    padding: '0 14px 8px', fontSize: 11, color: '#555',
                    display: 'flex', alignItems: 'center', gap: 4,
                }}>
                    <span style={{ color: '#333', fontWeight: 600 }}>{tr('em_time_rules') || 'Zeitfenster'}:</span>
                    <span style={{ flex: 1 }}>{timeRulesSummary}</span>
                </div>

                {/* Silent status */}
                <div style={{
                    padding: '0 14px 8px', display: 'flex', alignItems: 'center', gap: 8,
                }}>
                    <span style={{ fontSize: 11, color: '#333' }}>Silent</span>
                    <span style={{
                        fontSize: 10, padding: '2px 6px', borderRadius: 8,
                        background: silentActive ? 'rgba(139,92,246,0.15)' : 'rgba(0,0,0,0.06)',
                        color: silentActive ? '#8b5cf6' : '#777',
                        fontWeight: 600,
                    }}>
                        {silentActive ? 'aktiv' : 'aus'}
                    </span>
                    <span style={{ fontSize: 10, color: '#555', marginLeft: 'auto' }}>
                        {formatSilentRules(silentRulesStr)}
                    </span>
                </div>

                {/* Settings row: Min/Max W side by side */}
                <div style={{
                    padding: '0 14px 8px', display: 'flex', alignItems: 'center', gap: 10,
                    borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 8,
                }}>
                    {/* Min + Max side by side */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 11, color: '#555' }}>Min</span>
                        <input
                            type="number"
                            min={0}
                            step={50}
                            value={displayPMin}
                            onChange={(e) => this.setState({ [pMinKey]: Number(e.target.value) } as any)}
                            onBlur={() => {
                                if (editPMin !== null) {
                                    this.setVal(k('power-min'), editPMin);
                                    this.setState({ [pMinKey]: null } as any);
                                }
                            }}
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 11, color: '#555' }}>Max</span>
                        <input
                            type="number"
                            min={0}
                            step={50}
                            value={displayPMax}
                            onChange={(e) => this.setState({ [pMaxKey]: Number(e.target.value) } as any)}
                            onBlur={() => {
                                if (editPMax !== null) {
                                    this.setVal(k('power-max'), editPMax);
                                    this.setState({ [pMaxKey]: null } as any);
                                }
                            }}
                            style={inputStyle}
                        />
                    </div>
                    <span style={{ fontSize: 10, color: '#555' }}>W</span>

                </div>

                {/* Expandable settings section - always visible */}
                {this.renderDeviceSettings(devNum, k, smallInputStyle, timeInputStyle)}

                {/* Time rules modal */}
                {showTimeModal && (
                    <TimeRulesModal
                        rules={this.getTimeRulesForDevice(devNum)}
                        silentRules={parseSilentRules(this.val(k('silent-rules')) || '[]')}
                        excludeHolidays={this.toBool(this.val(k('excl-holidays')))}
                        onSave={(newRules, newSilentRules, newExclHol) => {
                            this.setVal(k('time-rules'), JSON.stringify(newRules));
                            this.setVal(k('silent-rules'), JSON.stringify(newSilentRules));
                            this.setVal(k('excl-holidays'), newExclHol);
                            this.setState({ [timeModalKey]: false } as any);
                        }}
                        onCancel={() => this.setState({ [timeModalKey]: false } as any)}
                    />
                )}

                {/* Footer: last action */}
                <div style={{
                    padding: '6px 14px', borderTop: '1px solid rgba(0,0,0,0.08)',
                    fontSize: 11, color: '#555', marginTop: 'auto',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                    {lastAction}
                </div>
            </div>
        );
    }

    // -- Expandable settings per device -------------------------------------
    private renderDeviceSettings(
        devNum: 1 | 2 | 3,
        k: (suffix: string) => keyof EmRxData,
        smallInputStyle: React.CSSProperties,
        timeInputStyle: React.CSSProperties,
    ): React.JSX.Element {
        const minSoc = Number(this.val(k('min-soc'))) || 0;
        const socOff = Number(this.val(k('soc-off'))) || 0;
        const surplusOn = Number(this.val(k('surplus-on'))) || 0;
        const surplusOff = Number(this.val(k('surplus-off'))) || 0;
        const avgMin = Number(this.val(k('avg-min'))) || 0;
        const exclHolidays = this.toBool(this.val(k('excl-holidays')));
        const minRuntime = Number(this.val(k('min-runtime'))) || 0;
        const minPause = Number(this.val(k('min-pause'))) || 0;
        const notifyOn = this.toBool(this.val(k('notify-on')));
        const notifyOff = this.toBool(this.val(k('notify-off')));
        const fcEnabled = this.toBool(this.val(k('fc-enabled')));
        const fcStart: string = this.val(k('fc-start')) || '';
        const fcEnd: string = this.val(k('fc-end')) || '';
        const fcMinSoc = Number(this.val(k('fc-min-soc'))) || 0;
        const disHoliday = this.toBool(this.val(k('dis-holiday')));
        const holPreDays = Number(this.val(k('hol-pre-days'))) || 0;

        const sectionStyle: React.CSSProperties = {
            padding: '6px 14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8,
            borderTop: '1px solid rgba(0,0,0,0.06)',
        };

        const sectionLabel: React.CSSProperties = {
            fontSize: 10, fontWeight: 700, color: '#555', textTransform: 'uppercase',
            letterSpacing: '0.03em', width: '100%', marginBottom: 2,
        };

        const numInput = (
            value: number,
            oidSuffix: string,
            unit: string,
            width: number = 50,
            step: number = 1,
        ): React.JSX.Element => (
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <input
                    type="number"
                    value={value}
                    step={step}
                    onChange={(e) => this.setVal(k(oidSuffix), Number(e.target.value))}
                    style={{ ...smallInputStyle, width }}
                />
                <span style={{ fontSize: 10, color: '#555' }}>{unit}</span>
            </div>
        );

        return (
            <div style={{
                background: 'rgba(0,0,0,0.02)',
                borderTop: '1px solid rgba(0,0,0,0.08)',
            }}>
                {/* SOC & Thresholds - Row 1: SOC + Avg */}
                <div style={sectionStyle}>
                    <div style={sectionLabel}>{tr('em_soc_thresholds') || 'SOC & Schwellen'}</div>
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_min_soc') || 'Min SOC'}</span>
                    {numInput(minSoc, 'min-soc', '%', 35)}
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_soc_off') || 'SOC Aus'}</span>
                    {numInput(socOff, 'soc-off', '%', 35)}
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_avg_min') || '\u00d8'}</span>
                    {numInput(avgMin, 'avg-min', 'min', 30)}
                </div>
                {/* SOC & Thresholds - Row 2: Surplus on/off */}
                <div style={{ ...sectionStyle, borderTop: 'none', paddingTop: 0 }}>
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_surplus_on') || 'Einsch.'}</span>
                    {numInput(surplusOn, 'surplus-on', 'W', 45)}
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_surplus_off') || 'Aussch.'}</span>
                    {numInput(surplusOff, 'surplus-off', 'W', 45)}
                </div>

                {/* Runtimes */}
                <div style={sectionStyle}>
                    <div style={sectionLabel}>{tr('em_runtimes') || 'Laufzeiten'}</div>
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_min_runtime') || 'Min. Lauf'}</span>
                    {numInput(minRuntime, 'min-runtime', 'min')}
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_min_pause') || 'Min. Pause'}</span>
                    {numInput(minPause, 'min-pause', 'min')}
                </div>

                {/* Notifications */}
                <div style={sectionStyle}>
                    <div style={sectionLabel}>{tr('em_notifications') || 'Benachrichtigungen'}</div>
                    <Checkbox
                        checked={notifyOn}
                        label={tr('em_notify_on') || 'Bei Einschalten'}
                        onChange={(v) => this.setVal(k('notify-on'), v)}
                    />
                    <Checkbox
                        checked={notifyOff}
                        label={tr('em_notify_off') || 'Bei Ausschalten'}
                        onChange={(v) => this.setVal(k('notify-off'), v)}
                    />
                </div>

                {/* Forecast - Row 1 */}
                <div style={sectionStyle}>
                    <div style={sectionLabel}>{tr('em_forecast') || 'Forecast'}</div>
                    <Checkbox
                        checked={fcEnabled}
                        label={tr('em_fc_preheat') || 'Vorheizen'}
                        onChange={(v) => this.setVal(k('fc-enabled'), v)}
                    />
                    <input
                        type="time"
                        value={fcStart}
                        onChange={(e) => this.setVal(k('fc-start'), e.target.value)}
                        style={timeInputStyle}
                    />
                    <span style={{ fontSize: 11, color: '#555' }}>-</span>
                    <input
                        type="time"
                        value={fcEnd}
                        onChange={(e) => this.setVal(k('fc-end'), e.target.value)}
                        style={timeInputStyle}
                    />
                </div>
                {/* Forecast - Row 2 */}
                <div style={{ ...sectionStyle, borderTop: 'none', paddingTop: 0 }}>
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_fc_min_soc') || 'Vorheiz SOC'}</span>
                    {numInput(fcMinSoc, 'fc-min-soc', '%', 40)}
                </div>

                {/* Holiday */}
                <div style={sectionStyle}>
                    <div style={sectionLabel}>{tr('em_holiday_settings') || 'Urlaub'}</div>
                    <Checkbox
                        checked={disHoliday}
                        label={tr('em_dis_holiday') || 'Im Urlaub aus'}
                        onChange={(v) => this.setVal(k('dis-holiday'), v)}
                    />
                    <span style={{ fontSize: 11, color: '#333' }}>{tr('em_hol_pre_days') || 'Vorlauf'}</span>
                    {numInput(holPreDays, 'hol-pre-days', tr('em_holiday_days_label') || 'Tage', 40)}
                </div>

                {/* Temperatur-Abschaltung (nur dev1 / Heizstab) */}
                {devNum === 1 && (() => {
                    const tempMaxTop = Number(this.val(k('temp-max-top'))) || 75;
                    const tempRestart = Number(this.val(k('temp-restart'))) || 0;
                    const tempBlocked = this.toBool(this.val(k('temp-blocked')));
                    return (
                        <div style={sectionStyle}>
                            <div style={{ ...sectionLabel, display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span>{tr('em_temp_section') || 'Temperatur'}</span>
                                {tempBlocked && (
                                    <span style={{
                                        fontSize: 10, padding: '2px 8px', borderRadius: 8,
                                        background: 'rgba(232,98,42,0.15)', color: '#e8622a',
                                        fontWeight: 600, textTransform: 'none',
                                    }}>
                                        {tr('em_temp_blocked') || 'Temp-Sperre aktiv'}
                                    </span>
                                )}
                            </div>
                            <span style={{ fontSize: 11, color: '#333' }}>{tr('em_temp_max_top') || 'Max oben'}</span>
                            {numInput(tempMaxTop, 'temp-max-top', '°C', 40)}
                            <span style={{ fontSize: 11, color: '#333' }}>{tr('em_temp_restart') || 'Wiedereinsch.'}</span>
                            {numInput(tempRestart, 'temp-restart', '°C', 40)}
                        </div>
                    );
                })()}
            </div>
        );
    }

    // -- Render -------------------------------------------------------------
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const title = this.state.rxData.widgetTitle || 'Energiemanager';

        // Global values
        const surplusCurrent = parseFloat(this.val('oid-surplus-current')) || 0;
        const surplusAvg = parseFloat(this.val('oid-surplus-avg')) || 0;
        const pvPower = parseFloat(this.val('oid-pv-power')) || 0;
        const batterySoc = parseFloat(this.val('oid-battery-soc')) || 0;
        const forecastToday = parseFloat(this.val('oid-forecast-today')) || 0;
        const managedPower = parseFloat(this.val('oid-managed-power')) || 0;
        const activeDevices: string = this.val('oid-active-devices') || '';

        // Temperaturen & Sensoren
        const wwBottom = parseFloat(this.val('oid-ww-temp-bottom'));
        const wwTop = parseFloat(this.val('oid-ww-temp-top'));
        const poolTemp = parseFloat(this.val('oid-pool-temp'));
        const outsideTemp = parseFloat(this.val('oid-outside-temp'));
        const humidity = parseFloat(this.val('oid-humidity'));

        return (
            <div style={{
                width: '100%', height: '100%', fontFamily: 'sans-serif',
                display: 'flex', flexDirection: 'column', overflow: 'auto',
                padding: 16, gap: 10, boxSizing: 'border-box',
            }}>
                {/* Zeile 1: Strom & Energie */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <StatCard
                        label={tr('em_pv_power') || 'PV-Leistung'}
                        value={formatWatt(pvPower)}
                        color="#f5a623"
                    />
                    <StatCard
                        label={surplusCurrent >= 0
                            ? (tr('em_grid_feed') || 'Einspeisung')
                            : (tr('em_grid_draw') || 'Netzbezug')}
                        value={formatWatt(Math.abs(surplusCurrent))}
                        color={surplusColor(surplusCurrent)}
                        sub={`Avg: ${formatWatt(surplusAvg)}`}
                    />
                    <StatCard
                        label={tr('em_battery_soc') || 'Batterie'}
                        value={`${Math.round(batterySoc)}`}
                        unit="%"
                        color={socColor(batterySoc)}
                    />
                    <StatCard
                        label={tr('em_forecast_today') || 'Rest heute'}
                        value={`${forecastToday.toFixed(1)}`}
                        unit="kWh"
                        color="#4a9edd"
                    />
                    <StatCard
                        label={tr('em_managed_power') || 'Gesteuert'}
                        value={formatWatt(managedPower)}
                        color="#8b5cf6"
                        sub={activeDevices || (tr('em_no_devices') || 'Keine')}
                    />
                </div>

                {/* Zeile 2: Temperaturen & Luftfeuchtigkeit */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <SensorCard
                        label={tr('em_ww_temp_top') || 'WW oben'}
                        value={isNaN(wwTop) ? '-' : wwTop.toFixed(1)}
                        unit="°C"
                        color={wwColor(wwTop)}
                    />
                    <SensorCard
                        label={tr('em_ww_temp_bottom') || 'WW unten'}
                        value={isNaN(wwBottom) ? '-' : wwBottom.toFixed(1)}
                        unit="°C"
                        color={wwColor(wwBottom)}
                    />
                    <SensorCard
                        label={tr('em_pool_temp') || 'Pool'}
                        value={isNaN(poolTemp) ? '-' : poolTemp.toFixed(1)}
                        unit="°C"
                        color={wwColor(poolTemp)}
                    />
                    <SensorCard
                        label={tr('em_outside_temp') || 'Außen'}
                        value={isNaN(outsideTemp) ? '-' : outsideTemp.toFixed(1)}
                        unit="°C"
                        color={wwColor(outsideTemp)}
                    />
                    <SensorCard
                        label={tr('em_humidity') || 'Feuchte'}
                        value={isNaN(humidity) ? '-' : Math.round(humidity).toString()}
                        unit="%"
                        color={humidity > 65 ? '#e8622a' : humidity > 50 ? '#f5a623' : '#2ec27e'}
                    />
                </div>

                {/* Device cards */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 12,
                }}>
                    {this.renderDevice(1)}
                    {this.renderDevice(2)}
                    {this.renderDevice(3)}
                </div>
            </div>
        );
    }
}
