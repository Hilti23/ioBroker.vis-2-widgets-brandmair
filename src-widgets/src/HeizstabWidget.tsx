import React from 'react';
import { Slider } from '@mui/material';
import type { RxRenderWidgetProps, RxWidgetInfo, VisRxWidgetState } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface HeizstabRxData {
    widgetTitle: string;
    'oid-leistung': string;
    'oid-zwang': string;
}

interface HeizstabState extends VisRxWidgetState {
    sliderWatt: number | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function heizstabColor(watt: number): string {
    const ratio = Math.max(0, Math.min(1, watt / 1500));
    const R = Math.round(26  + (220 - 26)  * ratio);
    const G = Math.round(127 - (127 - 50)  * ratio);
    const B = Math.round(212 - (212 - 30)  * ratio);
    return `rgb(${R},${G},${B})`;
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class HeizstabWidget extends Generic<HeizstabRxData, HeizstabState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state,
            sliderWatt: null,
        };
    }

    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplHeizstabWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'heizstab_widget',
            visName: 'HeizstabWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Heizstab' },
                        { name: 'oid-leistung', type: 'id', label: 'heizstab_leistung' },
                        { name: 'oid-zwang', type: 'id', label: 'heizstab_zwang' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 280,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: '',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return HeizstabWidget.getWidgetInfo();
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    private val(key: keyof HeizstabRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    private setVal(key: keyof HeizstabRxData, value: any): void {
        const oid = this.state.rxData[key];
        if (!oid) return;
        const values = JSON.parse(JSON.stringify(this.state.values));
        values[`${oid}.val`] = value;
        this.setState({ values } as any);
        this.props.context.setValue(oid, value);
    }

    // ── Render ────────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const title = this.state.rxData.widgetTitle || 'Heizstab';
        const watt = Math.max(0, Math.min(1500, parseFloat(this.val('oid-leistung')) || 0));
        const zwangRaw = this.val('oid-zwang');
        const zwang = zwangRaw === 1 || zwangRaw === true || zwangRaw === '1' || zwangRaw === 'true';

        const displayWatt = this.state.sliderWatt !== null ? this.state.sliderWatt : watt;
        const ratio = displayWatt / 1500;
        const color = heizstabColor(displayWatt);
        const bgColor = heizstabColor(displayWatt).replace('rgb(', 'rgba(').replace(')', ',0.12)');

        return (
            <div style={{
                display: 'flex', flexDirection: 'column', gap: 12,
                padding: '16px 20px', fontFamily: 'sans-serif',
                background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 12, height: '100%', boxSizing: 'border-box',
            }}>
                {/* Title */}
                <div style={{
                    fontSize: 13, fontWeight: 500, color: '#fff',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                    {title}
                </div>

                {/* Zwangsbetrieb toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                        {tr('heizstab_zwangsbetrieb') || 'Zwangsbetrieb'}
                    </span>
                    <div
                        onClick={() => this.setVal('oid-zwang', zwang ? 0 : 1)}
                        style={{
                            position: 'relative', width: 44, height: 24,
                            borderRadius: 24, cursor: 'pointer',
                            background: zwang ? '#cc0022' : 'rgba(255,255,255,0.2)',
                            transition: 'background 0.2s',
                        }}
                    >
                        <div style={{
                            position: 'absolute', width: 18, height: 18,
                            left: 3, bottom: 3, borderRadius: '50%',
                            background: 'white',
                            transform: zwang ? 'translateX(20px)' : 'translateX(0)',
                            transition: 'transform 0.2s',
                        }} />
                    </div>
                    <span style={{
                        fontSize: 12, fontWeight: 500, padding: '3px 10px',
                        borderRadius: 20, transition: 'all 0.2s',
                        background: zwang ? 'rgba(255,0,0,0.15)' : 'rgba(255,255,255,0.08)',
                        color: zwang ? '#ff4444' : 'rgba(255,255,255,0.4)',
                    }}>
                        {zwang ? 'EIN' : 'AUS'}
                    </span>
                </div>

                {/* Leistungsbalken */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Stecker */}
                    <div style={{
                        width: 22, height: 56, background: '#888',
                        borderRadius: '4px 0 0 4px', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <div style={{
                            width: 6, height: 6, borderRadius: '50%', background: '#bbb',
                        }} />
                    </div>
                    {/* Balken */}
                    <div style={{
                        flex: 1, height: 36, position: 'relative',
                        borderRadius: '0 6px 6px 0', overflow: 'hidden',
                        alignSelf: 'center',
                    }}>
                        <div style={{
                            width: '100%', height: '100%',
                            borderRadius: '0 6px 6px 0',
                            position: 'relative', overflow: 'hidden',
                            background: bgColor,
                        }}>
                            <div style={{
                                position: 'absolute', top: 0, left: 0, bottom: 0,
                                width: `${ratio * 100}%`,
                                background: color,
                                transition: 'width 0.6s ease, background 0.6s',
                            }} />
                            <div style={{
                                position: 'absolute', inset: 0,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 14, fontWeight: 500, color: '#fff',
                                zIndex: 1, pointerEvents: 'none',
                            }}>
                                <span>{Math.round(displayWatt)}</span>
                                &nbsp;
                                <span style={{ fontSize: 11, opacity: 0.7 }}>W / 1500 W</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sollleistung Slider */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Sollleistung</span>
                        <span style={{ fontSize: 13, fontWeight: 500, color: '#fff', minWidth: 60, textAlign: 'right' }}>
                            {Math.round(displayWatt)} W
                        </span>
                    </div>
                    <Slider
                        value={displayWatt}
                        min={0}
                        max={1500}
                        step={50}
                        onChange={(_e, v) => this.setState({ sliderWatt: v as number } as any)}
                        onChangeCommitted={(_e, v) => {
                            this.setState({ sliderWatt: null } as any);
                            this.setVal('oid-leistung', v as number);
                        }}
                        sx={{
                            color,
                            '& .MuiSlider-thumb': { width: 16, height: 16 },
                            '& .MuiSlider-rail': { opacity: 0.2 },
                        }}
                    />
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        fontSize: 11, color: 'rgba(255,255,255,0.4)',
                    }}>
                        <span>0 W</span>
                        <span>750 W</span>
                        <span>1500 W</span>
                    </div>
                </div>
            </div>
        );
    }
}
