import React from 'react';
import {
    Slider,
    Select,
    MenuItem,
    type SelectChangeEvent,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import type { RxRenderWidgetProps, RxWidgetInfo, VisRxWidgetState } from '@iobroker/types-vis-2';
import Generic from './Generic';
import ScheduleModal from './ScheduleModal';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface TrvzbRxData {
    widgetTitle: string;
    'oid-temp-actual': string;
    'oid-temp-set': string;
    'oid-mode': string;
    'oid-run': string;
    'oid-batt': string;
    'oid-avail': string;
    'oid-child': string;
    'oid-window': string;
    'oid-sched': string;
}

interface TrvzbState extends VisRxWidgetState {
    showSchedule: boolean;
    sliderTemp: number | null; // local slider value while dragging
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function tempColor(t: number): string {
    if (isNaN(t)) return 'rgba(255,255,255,0.4)';
    if (t <= 16) return '#4a9edd';
    if (t <= 19) return '#2ec27e';
    if (t <= 22) return '#f5a623';
    return '#e8622a';
}

function modeColor(m: string): string {
    if (m === 'heat') return '#e8622a';
    if (m === 'auto') return '#4a9edd';
    return 'rgba(255,255,255,0.15)';
}

// ---------------------------------------------------------------------------
// Toggle component (reusable)
// ---------------------------------------------------------------------------
function Toggle(props: { on: boolean; label: string; onClick: () => void }) {
    const { on, label, onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                fontSize: 11, color: 'rgba(255,255,255,0.5)', userSelect: 'none',
            }}
        >
            <div style={{
                width: 36, height: 20, borderRadius: 10, position: 'relative',
                background: on ? 'rgba(232,98,42,0.7)' : 'rgba(255,255,255,0.1)',
                border: `1px solid ${on ? '#e8622a' : 'rgba(255,255,255,0.15)'}`,
                transition: 'all 0.2s',
            }}>
                <div style={{
                    width: 14, height: 14, borderRadius: '50%', position: 'absolute',
                    top: 2, left: 2, transition: 'all 0.2s',
                    transform: on ? 'translateX(14px)' : 'translateX(0)',
                    background: on ? '#ffffff' : 'rgba(255,255,255,0.4)',
                }} />
            </div>
            <span>{label}</span>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class TrvzbThermostat extends Generic<TrvzbRxData, TrvzbState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state,
            showSchedule: false,
            sliderTemp: null,
        };
    }

    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplTrvzbThermostat',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'thermostat_trvzb',
            visName: 'TrvzbThermostat',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Thermostat' },
                    ],
                },
                {
                    name: 'oids',
                    label: 'group_oids',
                    fields: [
                        { name: 'oid-temp-actual', type: 'id', label: 'temperature_actual' },
                        { name: 'oid-temp-set', type: 'id', label: 'temperature_set' },
                        { name: 'oid-mode', type: 'id', label: 'mode' },
                        { name: 'oid-run', type: 'id', label: 'running_state' },
                        { name: 'oid-batt', type: 'id', label: 'battery' },
                        { name: 'oid-avail', type: 'id', label: 'available' },
                        { name: 'oid-child', type: 'id', label: 'child_lock' },
                        { name: 'oid-window', type: 'id', label: 'open_window' },
                        { name: 'oid-sched', type: 'id', label: 'weekly_schedule' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 340,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/prev_thermostat.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return TrvzbThermostat.getWidgetInfo();
    }

    // ── Helpers ──────────────────────────────────────────────────────────
    private val(key: keyof TrvzbRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    private setVal(key: keyof TrvzbRxData, value: any): void {
        const oid = this.state.rxData[key];
        if (!oid) return;
        // instant local UI update
        const values = JSON.parse(JSON.stringify(this.state.values));
        values[`${oid}.val`] = value;
        this.setState({ values } as any);
        // write to ioBroker
        this.props.context.setValue(oid, value);
    }

    // ── Render ───────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const ist = parseFloat(this.val('oid-temp-actual'));
        const sollRaw = parseFloat(this.val('oid-temp-set'));
        const soll = this.state.sliderTemp ?? sollRaw;
        const mode: string = this.val('oid-mode') ?? '';
        const run: string = this.val('oid-run') ?? '';
        const batt = this.val('oid-batt');
        const avail = this.val('oid-avail');
        const child = this.val('oid-child');
        const win = this.val('oid-window');
        const title = this.state.rxData.widgetTitle || '';

        const isOffline = avail === false || avail === 'false' || avail === '0';
        const isChildOn = child === true || child === 'true' || child === '1' || child === 'LOCK';
        const isWinOn = win === true || win === 'true' || win === '1';
        const isHeating = run === 'heat';
        const istColor = tempColor(ist);

        return (
            <div style={{
                width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 14, overflow: 'hidden', position: 'relative',
                fontFamily: 'sans-serif', opacity: isOffline ? 0.5 : 1,
                display: 'flex', flexDirection: 'column',
            }}>
                {/* Mode stripe */}
                <div style={{ height: 4, background: modeColor(mode), flexShrink: 0 }} />

                {/* Battery top-left */}
                {batt !== undefined && batt !== null && (
                    <div style={{
                        position: 'absolute', top: 8, left: 8, fontSize: 10,
                        color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', zIndex: 1,
                    }}>
                        {batt}%
                    </div>
                )}

                {/* Calendar icon top-right */}
                <div
                    onClick={() => this.setState({ showSchedule: true } as any)}
                    style={{
                        position: 'absolute', top: 8, right: 8, width: 32, height: 32,
                        borderRadius: 8, background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        cursor: 'pointer', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', zIndex: 1,
                    }}
                >
                    <CalendarMonthIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }} />
                </div>

                {/* Main content */}
                <div style={{
                    padding: '14px 14px 10px', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 10, flex: 1,
                }}>
                    {/* Temperature circle */}
                    <div style={{
                        width: 100, height: 100, borderRadius: '50%',
                        border: `3px solid ${isNaN(ist) ? 'rgba(255,255,255,0.15)' : istColor}`,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                    }}>
                        <span style={{
                            fontSize: 28, fontWeight: 700, color: istColor,
                            lineHeight: 1,
                        }}>
                            {isNaN(ist) ? '–' : `${ist.toFixed(1)}°`}
                        </span>
                    </div>

                    {/* Soll + Slider */}
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <div style={{
                            fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 4,
                        }}>
                            {isNaN(soll) ? '–' : `${soll.toFixed(1)}°`}
                        </div>
                        <Slider
                            size="small"
                            min={5}
                            max={35}
                            step={0.5}
                            value={isNaN(soll) ? 20 : soll}
                            onChange={(_e, v) => this.setState({ sliderTemp: v as number } as any)}
                            onChangeCommitted={(_e, v) => {
                                this.setState({ sliderTemp: null } as any);
                                this.setVal('oid-temp-set', v as number);
                            }}
                            sx={{
                                color: '#e8622a',
                                '& .MuiSlider-thumb': { width: 16, height: 16 },
                                '& .MuiSlider-rail': { opacity: 0.2 },
                            }}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '0 14px 10px', display: 'flex', flexDirection: 'column', gap: 8,
                    flexShrink: 0,
                }}>
                    {/* Name + Badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{title}</span>
                        <span style={{
                            fontSize: 10, padding: '2px 8px', borderRadius: 6,
                            background: isHeating ? 'rgba(232,98,42,0.25)' : 'rgba(255,255,255,0.08)',
                            color: isHeating ? '#ffb89a' : 'rgba(255,255,255,0.4)',
                        }}>
                            {isHeating ? tr('heating') : tr('ready')}
                        </span>
                    </div>

                    {/* Mode dropdown */}
                    <Select
                        size="small"
                        value={mode || 'off'}
                        onChange={(e: SelectChangeEvent) => this.setVal('oid-mode', e.target.value)}
                        sx={{
                            fontSize: 12, color: '#fff', height: 32,
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255,255,255,0.15)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255,255,255,0.3)',
                            },
                            '.MuiSvgIcon-root': { color: 'rgba(255,255,255,0.4)' },
                        }}
                    >
                        <MenuItem value="off">{tr('mode_off')}</MenuItem>
                        <MenuItem value="heat">{tr('mode_heat')}</MenuItem>
                        <MenuItem value="auto">{tr('mode_auto')}</MenuItem>
                    </Select>

                    {/* Toggles row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Toggle
                            on={isChildOn}
                            label={tr('child_lock')}
                            onClick={() => this.setVal('oid-child', !isChildOn)}
                        />
                        <Toggle
                            on={isWinOn}
                            label={tr('open_window')}
                            onClick={() => this.setVal('oid-window', !isWinOn)}
                        />
                    </div>
                </div>

                {/* Offline overlay */}
                {isOffline && (
                    <div style={{
                        position: 'absolute', inset: 0, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0,0,0,0.6)', borderRadius: 14, zIndex: 10,
                        color: 'rgba(255,255,255,0.5)', fontSize: 18, fontWeight: 700,
                    }}>
                        {tr('offline')}
                    </div>
                )}

                {/* Schedule modal */}
                {this.state.showSchedule && (
                    <ScheduleModal
                        title={title}
                        scheduleRaw={this.val('oid-sched')}
                        onSave={(json: string) => {
                            this.setVal('oid-sched', json);
                            this.setState({ showSchedule: false } as any);
                        }}
                        onClose={() => this.setState({ showSchedule: false } as any)}
                    />
                )}
            </div>
        );
    }
}
