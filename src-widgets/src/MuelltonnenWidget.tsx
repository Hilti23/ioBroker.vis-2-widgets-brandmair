import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface MuelltonnenRxData {
    widgetTitle: string;
    'oid-base': string;
    'oid-next-type': string;
    'oid-next-days': string;
    'oid-nextafter-type': string;
    'oid-nextafter-days': string;
}

// ---------------------------------------------------------------------------
// Auto-fill mapping
// ---------------------------------------------------------------------------
const OID_MAP: Array<[string, string]> = [
    ['oid-next-type', 'next.typesText'],
    ['oid-next-days', 'next.daysLeft'],
    ['oid-nextafter-type', 'nextAfter.typesText'],
    ['oid-nextafter-days', 'nextAfter.daysLeft'],
];

// ---------------------------------------------------------------------------
// Trash type → color mapping
// ---------------------------------------------------------------------------
const TYPE_COLORS: Record<string, string> = {
    Biotonne: '#8B4513',
    Wertstofftonne: '#FFD700',
    'Restmüll': '#808080',
    Papiertonne: '#4169E1',
};

function typeColor(type: string): string {
    return TYPE_COLORS[type] || '#999';
}

// ---------------------------------------------------------------------------
// Inline SVG trash can
// ---------------------------------------------------------------------------
function TrashCan({ color, size = 120 }: { color: string; size?: number }) {
    const w = size;
    const h = size * 1.2;
    return (
        <svg width={w} height={h} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lid */}
            <rect x="15" y="8" width="70" height="10" rx="3" fill={color} />
            {/* Lid handle */}
            <rect x="38" y="2" width="24" height="10" rx="4" fill={color} />
            {/* Body */}
            <path d="M20 18 L15 108 Q15 115 22 115 L78 115 Q85 115 85 108 L80 18 Z" fill={color} />
            {/* Stripes */}
            <line x1="38" y1="30" x2="36" y2="105" stroke="rgba(0,0,0,0.15)" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="30" x2="50" y2="105" stroke="rgba(0,0,0,0.15)" strokeWidth="3" strokeLinecap="round" />
            <line x1="62" y1="30" x2="64" y2="105" stroke="rgba(0,0,0,0.15)" strokeWidth="3" strokeLinecap="round" />
            {/* Highlight */}
            <path d="M25 22 L22 105 Q22 110 27 110 L35 110 L38 22 Z" fill="rgba(255,255,255,0.12)" />
        </svg>
    );
}

// ---------------------------------------------------------------------------
// CSS keyframes (injected once)
// ---------------------------------------------------------------------------
const STYLE_ID = 'muell-pulse-style';

function ensurePulseStyle(): void {
    if (typeof document === 'undefined') return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
        @keyframes muellPulseColor {
            from { color: #000; }
            to   { color: #fff; }
        }
    `;
    document.head.appendChild(style);
}

// ---------------------------------------------------------------------------
// Single column component
// ---------------------------------------------------------------------------
function TrashColumn({ type, days }: { type: string; days: number }) {
    const color = typeColor(type);
    const isToday = days === 0;
    const isTomorrow = days === 1;

    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            position: 'relative',
        }}>
            {/* Trash can */}
            <TrashCan color={color} size={110} />

            {/* Pulsing number overlay */}
            {days >= 0 && (
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: 0,
                    right: 0,
                    height: 110,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    animation: 'muellPulseColor 10s infinite alternate',
                    pointerEvents: 'none',
                    textShadow: '0 0 8px rgba(0,0,0,0.3)',
                }}>
                    {days}
                </div>
            )}

            {/* Type name */}
            <div style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#fff',
                textAlign: 'center',
            }}>
                {type || '–'}
            </div>

            {/* Heute / Morgen label */}
            {isToday && (
                <div style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: 'red',
                    textAlign: 'center',
                }}>
                    {tr('muell_heute')}
                </div>
            )}
            {isTomorrow && (
                <div style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: 'red',
                    textAlign: 'center',
                }}>
                    {tr('muell_morgen')}
                </div>
            )}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class MuelltonnenWidget extends Generic<MuelltonnenRxData> {
    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplMuelltonnenWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'muell_widget',
            visName: 'MuelltonnenWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Müllabfuhr' },
                        {
                            name: 'oid-base',
                            type: 'text',
                            label: 'muell_base',
                            tooltip: 'muell_base_tooltip',
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
                    name: 'oids',
                    label: 'group_oids',
                    fields: [
                        { name: 'oid-next-type', type: 'id', label: 'muell_next_type' },
                        { name: 'oid-next-days', type: 'id', label: 'muell_next_days' },
                        { name: 'oid-nextafter-type', type: 'id', label: 'muell_nextafter_type' },
                        { name: 'oid-nextafter-days', type: 'id', label: 'muell_nextafter_days' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 340,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/prev_muell.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return MuelltonnenWidget.getWidgetInfo();
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    private val(key: keyof MuelltonnenRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    // ── Render ────────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);
        ensurePulseStyle();

        const nextType: string = this.val('oid-next-type') ?? '';
        const nextDays = parseInt(this.val('oid-next-days')) || 0;
        const afterType: string = this.val('oid-nextafter-type') ?? '';
        const afterDays = parseInt(this.val('oid-nextafter-days')) || 0;

        return (
            <div style={{
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 14,
                overflow: 'hidden',
                fontFamily: 'sans-serif',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Title */}
                <div style={{
                    padding: '8px 14px',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#fff',
                    textAlign: 'center',
                    flexShrink: 0,
                }}>
                    {this.state.rxData.widgetTitle || ''}
                </div>

                {/* Two columns */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    padding: '0 10px 10px',
                    gap: 10,
                }}>
                    <TrashColumn type={nextType} days={nextDays} />
                    <TrashColumn type={afterType} days={afterDays} />
                </div>
            </div>
        );
    }
}
