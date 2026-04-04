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
    // Warmwasser Temperaturen
    'oid-ww-temp-bottom': string;
    'oid-ww-temp-top': string;
    // Holiday RW
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
    // Pool WP extras
    'oid-dev3-silent-rules': string;
    'oid-dev3-silent-active': string;
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
}

// ---------------------------------------------------------------------------
// Auto-fill mapping
// ---------------------------------------------------------------------------
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
    // Device 1: heizstab_warmwasser
    ['oid-dev1-name', 'heizstab_warmwasser.name'],
    ['oid-dev1-mode', 'heizstab_warmwasser.mode'],
    ['oid-dev1-priority', 'heizstab_warmwasser.priority'],
    ['oid-dev1-power-min', 'heizstab_warmwasser.power_min_w'],
    ['oid-dev1-power-max', 'heizstab_warmwasser.power_max_w'],
    ['oid-dev1-is-dimmable', 'heizstab_warmwasser.is_dimmable'],
    ['oid-dev1-is-on', 'heizstab_warmwasser.is_on'],
    ['oid-dev1-power', 'heizstab_warmwasser.power_w'],
    ['oid-dev1-last-action', 'heizstab_warmwasser.last_action'],
    ['oid-dev1-holiday-blocked', 'heizstab_warmwasser.holiday_blocked'],
    ['oid-dev1-notif-today', 'heizstab_warmwasser.notifications_today'],
    // Device 2: luftentfeuchter_keller
    ['oid-dev2-name', 'luftentfeuchter_keller.name'],
    ['oid-dev2-mode', 'luftentfeuchter_keller.mode'],
    ['oid-dev2-priority', 'luftentfeuchter_keller.priority'],
    ['oid-dev2-power-min', 'luftentfeuchter_keller.power_min_w'],
    ['oid-dev2-power-max', 'luftentfeuchter_keller.power_max_w'],
    ['oid-dev2-is-dimmable', 'luftentfeuchter_keller.is_dimmable'],
    ['oid-dev2-is-on', 'luftentfeuchter_keller.is_on'],
    ['oid-dev2-power', 'luftentfeuchter_keller.power_w'],
    ['oid-dev2-last-action', 'luftentfeuchter_keller.last_action'],
    ['oid-dev2-holiday-blocked', 'luftentfeuchter_keller.holiday_blocked'],
    ['oid-dev2-notif-today', 'luftentfeuchter_keller.notifications_today'],
    // Device 3: pool_wp
    ['oid-dev3-name', 'pool_wp.name'],
    ['oid-dev3-mode', 'pool_wp.mode'],
    ['oid-dev3-priority', 'pool_wp.priority'],
    ['oid-dev3-power-min', 'pool_wp.power_min_w'],
    ['oid-dev3-power-max', 'pool_wp.power_max_w'],
    ['oid-dev3-is-dimmable', 'pool_wp.is_dimmable'],
    ['oid-dev3-is-on', 'pool_wp.is_on'],
    ['oid-dev3-power', 'pool_wp.power_w'],
    ['oid-dev3-last-action', 'pool_wp.last_action'],
    ['oid-dev3-holiday-blocked', 'pool_wp.holiday_blocked'],
    ['oid-dev3-notif-today', 'pool_wp.notifications_today'],
    ['oid-dev3-silent-rules', 'pool_wp.silent_rules'],
    ['oid-dev3-silent-active', 'pool_wp.silent_active'],
];

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

interface SilentRule {
    days: number[];
    before?: string;
    silent: boolean;
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
            .join(' | ') || '–';
    } catch {
        return '–';
    }
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
            flex: '1 1 0', minWidth: 120, padding: '12px 14px',
            border: '1px solid rgba(0,0,0,0.15)', borderRadius: 12,
            display: 'flex', flexDirection: 'column', gap: 2,
        }}>
            <div style={{ fontSize: 11, color: '#333', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {label}
            </div>
            <div style={{
                fontSize: 22, fontWeight: 700, color: color || '#111',
                textShadow: color ? valueShadow : 'none',
            }}>
                {value}
                {unit && <span style={{ fontSize: 13, fontWeight: 400, marginLeft: 3, color: '#333', textShadow: 'none' }}>{unit}</span>}
            </div>
            {sub && (
                <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>{sub}</div>
            )}
        </div>
    );
}

function WaterTempCard({ label, temp }: { label: string; temp: number }) {
    const display = isNaN(temp) ? '–' : `${temp.toFixed(1)}`;
    return (
        <div style={{
            flex: '1 1 0', minWidth: 120, padding: '12px 14px',
            border: '1px solid rgba(0,0,0,0.15)', borderRadius: 12,
            display: 'flex', flexDirection: 'column', gap: 2,
        }}>
            <div style={{ fontSize: 11, color: '#333', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {label}
            </div>
            <div style={{
                fontSize: 22, fontWeight: 700, color: wwColor(temp),
                textShadow: valueShadow,
            }}>
                {display}
                <span style={{ fontSize: 13, fontWeight: 400, marginLeft: 3, color: '#333', textShadow: 'none' }}>°C</span>
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
    ];
    if (devNum === 3) {
        fields.push(
            { name: `${p}-silent-rules`, type: 'id', label: 'em_silent_rules' },
            { name: `${p}-silent-active`, type: 'id', label: 'em_silent_active' },
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
        };
    }

    // ── Widget metadata ──────────────────────────────────────────────────
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

    // ── Helpers ───────────────────────────────────────────────────────────
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

    // ── Device card renderer ─────────────────────────────────────────────
    private renderDevice(devNum: 1 | 2 | 3): React.JSX.Element {
        const k = (suffix: string): keyof EmRxData => `oid-dev${devNum}-${suffix}` as keyof EmRxData;

        const name: string = this.val(k('name')) || `Gerät ${devNum}`;
        const mode: string = this.val(k('mode')) || 'auto';
        const priority = Number(this.val(k('priority'))) || 1;
        const powerMin = Number(this.val(k('power-min'))) || 0;
        const powerMax = Number(this.val(k('power-max'))) || 0;
        const isDimmable = this.val(k('is-dimmable')) === true || this.val(k('is-dimmable')) === 'true';
        const isOn = this.val(k('is-on')) === true || this.val(k('is-on')) === 'true';
        const power = Number(this.val(k('power'))) || 0;
        const lastAction: string = this.val(k('last-action')) || '–';
        const holidayBlocked = this.val(k('holiday-blocked')) === true || this.val(k('holiday-blocked')) === 'true';
        const notifToday = Number(this.val(k('notif-today'))) || 0;

        // Edit state keys
        const priKey = `editDev${devNum}Priority` as keyof EmState;
        const pMinKey = `editDev${devNum}PowerMin` as keyof EmState;
        const pMaxKey = `editDev${devNum}PowerMax` as keyof EmState;
        const editPri = this.state[priKey] as number | null;
        const editPMin = this.state[pMinKey] as number | null;
        const editPMax = this.state[pMaxKey] as number | null;

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

        // Pool WP silent mode (only dev3)
        let silentSection: React.JSX.Element | null = null;
        if (devNum === 3) {
            const silentActive = this.val(k('silent-active')) === true || this.val(k('silent-active')) === 'true';
            const silentRulesStr: string = this.val(k('silent-rules')) || '[]';
            silentSection = (
                <div style={{
                    padding: '6px 14px 10px', display: 'flex', alignItems: 'center', gap: 8,
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                }}>
                    <span style={{ fontSize: 11, color: '#333' }}>
                        Silent
                    </span>
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
            );
        }

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
                        {isDimmable && (
                            <span style={{
                                fontSize: 10, padding: '2px 6px', borderRadius: 8,
                                background: 'rgba(74,158,221,0.15)', color: '#4a9edd',
                            }}>
                                {tr('em_dimmable') || 'stufenlos'}
                            </span>
                        )}
                    </div>
                    {/* Priority badge */}
                    <span style={{
                        fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10,
                        background: 'rgba(0,0,0,0.08)', color: '#333',
                        border: '1px solid rgba(0,0,0,0.1)',
                    }}>
                        P{displayPri}
                    </span>
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
                                ? `linear-gradient(90deg, ${mc}, ${mc}dd)`
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

                {/* Holiday blocked toggle */}
                <div style={{ padding: '0 14px 8px' }}>
                    <Toggle
                        on={holidayBlocked}
                        label={tr('em_holiday_blocked') || 'Urlaub-Sperre'}
                        onClick={() => this.setVal(k('holiday-blocked'), !holidayBlocked)}
                    />
                </div>

                {/* Settings row: Priority input + Min/Max W side by side */}
                <div style={{
                    padding: '0 14px 8px', display: 'flex', alignItems: 'center', gap: 10,
                    borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 8,
                }}>
                    {/* Priority */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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
                            style={{ ...inputStyle, width: 42 }}
                        />
                    </div>
                    <div style={{ width: 1, height: 20, background: 'rgba(0,0,0,0.1)' }} />
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

                {/* Silent mode (Pool WP only) */}
                {silentSection}

                {/* Footer: last action + notifications */}
                <div style={{
                    padding: '6px 14px', borderTop: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontSize: 11, color: '#555', marginTop: 'auto',
                }}>
                    <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {lastAction}
                    </div>
                    {notifToday > 0 && (
                        <div style={{
                            marginLeft: 8, padding: '1px 6px', borderRadius: 8,
                            background: 'rgba(0,0,0,0.08)', fontSize: 10, color: '#333', flexShrink: 0,
                        }}>
                            {notifToday} notif
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // ── Render ────────────────────────────────────────────────────────────
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
        const isHoliday = this.val('oid-is-holiday') === true || this.val('oid-is-holiday') === 'true';
        const holidayDaysRemain = Number(this.val('oid-holiday-days-remain')) || 0;

        // Warmwasser
        const wwBottom = parseFloat(this.val('oid-ww-temp-bottom'));
        const wwTop = parseFloat(this.val('oid-ww-temp-top'));

        // Holiday dates
        const holidayFrom: string = this.val('oid-holiday-from') || '';
        const holidayTo: string = this.val('oid-holiday-to') || '';

        return (
            <div style={{
                width: '100%', height: '100%', fontFamily: 'sans-serif',
                display: 'flex', flexDirection: 'column', overflow: 'auto',
                padding: 16, gap: 16, boxSizing: 'border-box',
            }}>
                {/* Title */}
                <div style={{
                    fontSize: 18, fontWeight: 700, letterSpacing: '0.02em', color: '#111',
                    textShadow: '0 0 4px rgba(0,0,0,0.3)',
                }}>
                    {title}
                </div>

                {/* Global stat cards */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 10,
                }}>
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
                        sub={`Ø30min: ${formatWatt(surplusAvg)}`}
                    />
                    <StatCard
                        label={tr('em_battery_soc') || 'Batterie'}
                        value={`${Math.round(batterySoc)}`}
                        unit="%"
                        color={socColor(batterySoc)}
                    />
                    <StatCard
                        label={tr('em_forecast_today') || 'Prognose'}
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
                    <WaterTempCard
                        label={tr('em_ww_temp_top') || 'Warmwasser oben'}
                        temp={wwTop}
                    />
                    <WaterTempCard
                        label={tr('em_ww_temp_bottom') || 'Warmwasser unten'}
                        temp={wwBottom}
                    />
                </div>

                {/* Holiday section */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12,
                    padding: '10px 14px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: 12,
                    background: isHoliday ? 'rgba(245,166,35,0.08)' : 'transparent',
                }}>
                    <div style={{
                        fontSize: 13, fontWeight: 600,
                        color: isHoliday ? '#f5a623' : '#555',
                        display: 'flex', alignItems: 'center', gap: 6,
                        textShadow: isHoliday ? valueShadow : 'none',
                    }}>
                        <span style={{ fontSize: 18 }}>&#9992;</span>
                        {tr('em_holiday') || 'Urlaub'}
                        {isHoliday && (
                            <span style={{
                                fontSize: 11, padding: '2px 8px', borderRadius: 8,
                                background: '#fff3e0', color: '#f5a623', textShadow: 'none',
                            }}>
                                {holidayDaysRemain > 0
                                    ? `${holidayDaysRemain} ${tr('em_holiday_days_label') || 'Tage'}`
                                    : (tr('em_holiday_active') || 'aktiv')}
                            </span>
                        )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto' }}>
                        <span style={{ fontSize: 12, color: '#333' }}>
                            {tr('em_holiday_from') || 'Von'}
                        </span>
                        <input
                            type="date"
                            value={holidayFrom}
                            onChange={(e) => this.setVal('oid-holiday-from', e.target.value)}
                            style={{
                                padding: '4px 8px', fontSize: 13, border: '1px solid rgba(0,0,0,0.15)',
                                borderRadius: 6, background: 'transparent', color: '#111',
                            }}
                        />
                        <span style={{ fontSize: 12, color: '#333' }}>
                            {tr('em_holiday_to') || 'Bis'}
                        </span>
                        <input
                            type="date"
                            value={holidayTo}
                            onChange={(e) => this.setVal('oid-holiday-to', e.target.value)}
                            style={{
                                padding: '4px 8px', fontSize: 13, border: '1px solid rgba(0,0,0,0.15)',
                                borderRadius: 6, background: 'transparent', color: '#111',
                            }}
                        />
                    </div>
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
