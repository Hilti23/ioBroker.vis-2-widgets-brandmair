import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface VerbrauchRxData {
    widgetTitle: string;
    'oid-base': string;
    'oid-json': string;
    view: string;
    limit: number;
    colorFrom: string;
    colorTo: string;
}

interface DataEntry {
    label: string;
    value: number;
}

interface JsonSummary {
    unit: string;
    years: DataEntry[];
    months: DataEntry[];
    weeks: DataEntry[];
    days: DataEntry[];
}

// ---------------------------------------------------------------------------
// Auto-fill mapping
// ---------------------------------------------------------------------------
const OID_MAP: Array<[string, string]> = [
    ['oid-json', 'json_summary'],
];

// ---------------------------------------------------------------------------
// Bar row component
// ---------------------------------------------------------------------------
function BarRow({ label, value, max, unit, colorFrom, colorTo }: { label: string; value: number; max: number; unit: string; colorFrom: string; colorTo: string }) {
    const pct = max > 0 ? (value / max) * 100 : 0;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '3px 0',
        }}>
            {/* Label */}
            <div style={{
                width: 70,
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                textAlign: 'right',
                flexShrink: 0,
                whiteSpace: 'nowrap',
            }}>
                {label}
            </div>

            {/* Bar */}
            <div style={{
                flex: 1,
                height: 22,
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
            }}>
                <div style={{
                    width: `${pct}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
                    borderRadius: 4,
                    transition: 'width 0.5s ease',
                }} />
            </div>

            {/* Value */}
            <div style={{
                minWidth: 80,
                fontSize: 13,
                fontWeight: 600,
                color: '#fff',
                textAlign: 'right',
                flexShrink: 0,
                whiteSpace: 'nowrap',
            }}>
                {value} {unit}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class VerbrauchWidget extends Generic<VerbrauchRxData> {
    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplVerbrauchWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'verbrauch_widget',
            visName: 'VerbrauchWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Verbrauch' },
                        {
                            name: 'oid-base',
                            type: 'text',
                            label: 'verbrauch_base',
                            tooltip: 'verbrauch_base_tooltip',
                            onChange: async (_field: any, data: any, changeData: any) => {
                                const base = data['oid-base'];
                                if (!base) return;
                                for (const [field, prop] of OID_MAP) {
                                    data[field] = `${base}.${prop}`;
                                }
                                changeData(data);
                            },
                        },
                        {
                            name: 'limit',
                            label: 'verbrauch_limit',
                            type: 'number',
                            default: 0,
                            tooltip: 'verbrauch_limit_tooltip',
                            noBinding: true,
                        },
                        {
                            name: 'view',
                            label: 'verbrauch_view',
                            type: 'select',
                            options: [
                                { value: 'years', label: 'verbrauch_years' },
                                { value: 'months', label: 'verbrauch_months' },
                                { value: 'weeks', label: 'verbrauch_weeks' },
                                { value: 'days', label: 'verbrauch_days' },
                            ],
                            default: 'months',
                        },
                        {
                            name: 'colorFrom',
                            label: 'verbrauch_color_from',
                            type: 'color',
                            default: '#4a9edd',
                        },
                        {
                            name: 'colorTo',
                            label: 'verbrauch_color_to',
                            type: 'color',
                            default: '#2ec27e',
                        },
                    ],
                },
                {
                    name: 'oids',
                    label: 'group_oids',
                    fields: [
                        { name: 'oid-json', type: 'id', label: 'verbrauch_json' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 300,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/prev_verbrauch.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return VerbrauchWidget.getWidgetInfo();
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    private val(key: keyof VerbrauchRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    // ── Render ────────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const jsonStr: string = this.val('oid-json') || '';
        const view = this.state.rxData.view || 'months';
        const title = this.state.rxData.widgetTitle || '';
        const limit = Number(this.state.rxData.limit) || 0;
        const colorFrom = this.state.rxData.colorFrom || '#4a9edd';
        const colorTo = this.state.rxData.colorTo || '#2ec27e';

        let data: DataEntry[] = [];
        let unit = '';

        try {
            const parsed: JsonSummary = JSON.parse(jsonStr);
            unit = parsed.unit || '';
            data = parsed[view as keyof Pick<JsonSummary, 'years' | 'months' | 'weeks' | 'days'>] || [];
        } catch {
            // JSON nicht gültig
        }

        // Neueste Einträge zuerst
        data = [...data].reverse();

        // Limit: nur die ersten N Einträge anzeigen (nach Sortierung = neueste)
        if (limit > 0 && data.length > limit) {
            data = data.slice(0, limit);
        }

        const max = data.reduce((m, d) => Math.max(m, d.value), 0);

        return (
            <div style={{
                width: '100%',
                height: '100%',
                fontFamily: 'sans-serif',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}>
                {/* Title */}
                {title && (
                    <div style={{
                        padding: '6px 10px 2px',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#fff',
                        flexShrink: 0,
                    }}>
                        {title}
                    </div>
                )}

                {/* Bars */}
                <div style={{
                    flex: 1,
                    padding: '4px 10px 8px',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: data.length <= 7 ? 'space-evenly' : 'flex-start',
                }}>
                    {data.length === 0 && (
                        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, textAlign: 'center' }}>
                            –
                        </div>
                    )}
                    {data.map((entry) => (
                        <BarRow
                            key={entry.label}
                            label={entry.label}
                            value={entry.value}
                            max={max}
                            unit={unit}
                            colorFrom={colorFrom}
                            colorTo={colorTo}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
