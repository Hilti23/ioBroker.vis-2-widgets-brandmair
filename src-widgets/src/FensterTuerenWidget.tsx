import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FtRxData {
    widgetTitle: string;
    'oid-json': string;
}

interface SensorEntry {
    name: string;
    type: 'door' | 'window';
    open: boolean | null;
    battery: number | null;
    available: boolean;
    lastChanged: string | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatTimestamp(isoStr: string | null): string {
    if (!isoStr) return '-';
    try {
        const d = new Date(isoStr);
        const now = new Date();
        const diffMs = now.getTime() - d.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        const diffH = Math.floor(diffMs / 3600000);
        const diffD = Math.floor(diffMs / 86400000);

        let ago = '';
        if (diffMin < 1) ago = 'gerade';
        else if (diffMin < 60) ago = `${diffMin}min`;
        else if (diffH < 24) ago = `${diffH}h`;
        else ago = `${diffD}d`;

        const time = d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
        const date = d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
        return `${date} ${time} (${ago})`;
    } catch {
        return '-';
    }
}

function battColor(b: number | null): string {
    if (b === null) return '#999';
    if (b < 20) return '#e8622a';
    if (b < 50) return '#f5a623';
    return '#1a8a5a';
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class FensterTuerenWidget extends Generic<FtRxData> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplFensterTuerenWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'ft_widget',
            visName: 'FensterTuerenWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Fenster & Türen' },
                        { name: 'oid-json', type: 'id', label: 'ft_json_oid' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 500,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return FensterTuerenWidget.getWidgetInfo();
    }

    private val(key: keyof FtRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const title = this.state.rxData.widgetTitle || 'Fenster & Türen';
        const jsonStr: string = this.val('oid-json') || '[]';

        let sensors: SensorEntry[] = [];
        try {
            sensors = JSON.parse(jsonStr);
        } catch {
            // Invalid JSON
        }

        const openCount = sensors.filter((s) => s.open === true).length;
        const closedCount = sensors.filter((s) => s.open === false).length;

        // Offene zuerst, dann alphabetisch
        const sorted = [...sensors].sort((a, b) => {
            if (a.open && !b.open) return -1;
            if (!a.open && b.open) return 1;
            return a.name.localeCompare(b.name);
        });

        return (
            <div style={{
                width: '100%', height: '100%', fontFamily: 'sans-serif',
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                {/* Header */}
                <div style={{
                    padding: '8px 14px', display: 'flex',
                    alignItems: 'center', justifyContent: 'flex-end',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    flexShrink: 0,
                }}>
                    <div style={{ display: 'flex', gap: 10, fontSize: 12 }}>
                        {openCount > 0 && (
                            <span style={{
                                padding: '2px 10px', borderRadius: 10,
                                background: 'rgba(232,98,42,0.15)', color: '#e8622a',
                                fontWeight: 600,
                            }}>
                                {openCount} {tr('ft_open') || 'offen'}
                            </span>
                        )}
                        <span style={{
                            padding: '2px 10px', borderRadius: 10,
                            background: 'rgba(26,138,90,0.15)', color: '#1a8a5a',
                            fontWeight: 600,
                        }}>
                            {closedCount} {tr('ft_closed') || 'zu'}
                        </span>
                    </div>
                </div>

                {/* Sensor list */}
                <div style={{
                    flex: 1, overflow: 'auto', padding: '4px 0',
                }}>
                    {sorted.map((s, idx) => {
                        const isOpen = s.open === true;
                        const icon = s.type === 'door' ? '\uD83D\uDEAA' : '\uD83E\uDE9F';

                        return (
                            <div key={idx} style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '6px 14px',
                                borderBottom: '1px solid rgba(0,0,0,0.05)',
                                background: isOpen ? 'rgba(232,98,42,0.06)' : 'transparent',
                            }}>
                                {/* Status dot */}
                                <div style={{
                                    width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                                    background: s.open === null ? '#999'
                                        : isOpen ? '#e8622a' : '#1a8a5a',
                                    boxShadow: isOpen ? '0 0 6px rgba(232,98,42,0.4)' : 'none',
                                }} />

                                {/* Icon */}
                                <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>

                                {/* Name */}
                                <div style={{
                                    flex: 1, fontSize: 13, fontWeight: isOpen ? 600 : 400,
                                    color: isOpen ? '#e8622a' : '#111',
                                }}>
                                    {s.name}
                                </div>

                                {/* Status text */}
                                <div style={{
                                    fontSize: 11, fontWeight: 600, flexShrink: 0,
                                    color: isOpen ? '#e8622a' : '#1a8a5a',
                                }}>
                                    {s.open === null ? '-' : isOpen
                                        ? (tr('ft_open') || 'offen')
                                        : (tr('ft_closed') || 'zu')}
                                </div>

                                {/* Timestamp */}
                                <div style={{
                                    fontSize: 10, color: '#555', flexShrink: 0,
                                    minWidth: 110, textAlign: 'right',
                                }}>
                                    {formatTimestamp(s.lastChanged)}
                                </div>

                                {/* Battery */}
                                <div style={{
                                    fontSize: 10, color: battColor(s.battery), flexShrink: 0,
                                    minWidth: 30, textAlign: 'right', fontWeight: 600,
                                }}>
                                    {s.battery !== null ? `${s.battery}%` : '-'}
                                </div>
                            </div>
                        );
                    })}

                    {sensors.length === 0 && (
                        <div style={{
                            padding: 20, textAlign: 'center',
                            color: '#999', fontSize: 13,
                        }}>
                            {tr('ft_no_data') || 'Keine Daten'}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
