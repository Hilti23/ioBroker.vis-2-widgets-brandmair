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
    'oid-bio-days': string;
    'oid-papier-days': string;
    'oid-restmuell-days': string;
    'oid-wertstoff-days': string;
}

// ---------------------------------------------------------------------------
// Auto-fill mapping
// ---------------------------------------------------------------------------
const OID_MAP: Array<[string, string]> = [
    ['oid-bio-days', 'type.biotonne.daysLeft'],
    ['oid-papier-days', 'type.papiertonne.daysLeft'],
    ['oid-restmuell-days', 'type.restmüll.daysLeft'],
    ['oid-wertstoff-days', 'type.wertstofftonne.daysLeft'],
];

// ---------------------------------------------------------------------------
// Fixed trash types
// ---------------------------------------------------------------------------
const TRASH_TYPES: Array<{ key: keyof MuelltonnenRxData; name: string; color: string }> = [
    { key: 'oid-bio-days', name: 'Biotonne', color: '#c78300' },
    { key: 'oid-papier-days', name: 'Papiertonne', color: '#4169E1' },
    { key: 'oid-restmuell-days', name: 'Restmüll', color: '#808080' },
    { key: 'oid-wertstoff-days', name: 'Wertstofftonne', color: '#FFD700' },
];

// ---------------------------------------------------------------------------
// Inline SVG trash can
// ---------------------------------------------------------------------------
function TrashCan({ color, size = 80 }: { color: string; size?: number }) {
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
function TrashColumn({ name, color, days }: { name: string; color: string; days: number }) {
    const isToday = days === 0;
    const isTomorrow = days === 1;

    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            position: 'relative',
            minWidth: 0,
        }}>
            {/* Trash can */}
            <div style={{ position: 'relative' }}>
                <TrashCan color={color} size={80} />

                {/* Pulsing number overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    animation: 'muellPulseColor 10s infinite alternate',
                    pointerEvents: 'none',
                    textShadow: '0 0 8px rgba(0,0,0,0.3)',
                }}>
                    {days}
                </div>
            </div>

            {/* Type name */}
            <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#fff',
                textAlign: 'center',
                lineHeight: 1.2,
            }}>
                {name}
            </div>

            {/* Heute / Morgen label */}
            {(isToday || isTomorrow) && (
                <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'red',
                    textAlign: 'center',
                }}>
                    {isToday ? tr('muell_heute') : tr('muell_morgen')}
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
                        { name: 'oid-bio-days', type: 'id', label: 'muell_bio' },
                        { name: 'oid-papier-days', type: 'id', label: 'muell_papier' },
                        { name: 'oid-restmuell-days', type: 'id', label: 'muell_restmuell' },
                        { name: 'oid-wertstoff-days', type: 'id', label: 'muell_wertstoff' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 300,
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

        // Build array of all 4 types with their days, then sort by daysLeft
        const items = TRASH_TYPES.map(t => ({
            name: t.name,
            color: t.color,
            days: parseInt(this.val(t.key)) || 0,
        })).sort((a, b) => a.days - b.days);

        return (
            <div style={{
                width: '100%',
                height: '100%',
                fontFamily: 'sans-serif',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Four columns sorted by pickup date */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    padding: '5px 5px',
                    gap: 4,
                    alignItems: 'flex-start',
                }}>
                    {items.map(item => (
                        <TrashColumn
                            key={item.name}
                            name={item.name}
                            color={item.color}
                            days={item.days}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
