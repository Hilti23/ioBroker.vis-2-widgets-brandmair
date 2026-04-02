import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface PvSpeicherRxData {
    widgetTitle: string;
    'oid-soc': string;
    'oid-power': string;
    'oid-status': string;
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class PvSpeicherWidget extends Generic<PvSpeicherRxData> {
    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplPvSpeicherWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'pvspeicher_widget',
            visName: 'PvSpeicherWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'RCT Batterie' },
                        { name: 'oid-soc', type: 'id', label: 'pvspeicher_soc' },
                        { name: 'oid-power', type: 'id', label: 'pvspeicher_power' },
                        { name: 'oid-status', type: 'id', label: 'pvspeicher_status' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: 220,
                height: 400,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/prev_pvspeicher.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return PvSpeicherWidget.getWidgetInfo();
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    private val(key: keyof PvSpeicherRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    // ── Render ────────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const title = this.state.rxData.widgetTitle || 'RCT Batterie';
        const soc = Math.max(0, Math.min(100, parseFloat(this.val('oid-soc')) || 0));
        const power = parseFloat(this.val('oid-power')) || 0;
        const status = parseInt(this.val('oid-status')) || 0;

        const isCalib = status === 2048;
        const absPower = Math.abs(power);

        // Fill height (0–250px within battery)
        const fillH = (soc / 100) * 250;
        const fillY = 55 + 250 - fillH;
        const fillColor = soc < 20 ? '#ef4444' : soc < 40 ? '#f59e0b' : '#22c55e';

        // Power display
        let powerText: string;
        let powerUnit: string;
        if (absPower >= 1000) {
            powerText = (absPower / 1000).toFixed(1);
            powerUnit = 'kW';
        } else {
            powerText = String(Math.round(absPower));
            powerUnit = 'W';
        }

        // Status & arrows
        let statusText: string;
        let statusColor: string;
        let showCharge = false;
        let showDischarge = false;

        if (isCalib) {
            statusColor = '#f59e0b';
            if (power > 50) {
                statusText = `${tr('pvspeicher_calibrating')} ${tr('pvspeicher_discharging')}`;
                showDischarge = true;
            } else if (power < -50) {
                statusText = `${tr('pvspeicher_calibrating')} ${tr('pvspeicher_charging')}`;
                showCharge = true;
            } else {
                statusText = tr('pvspeicher_calibrating');
            }
        } else if (power > 50) {
            statusText = tr('pvspeicher_discharging');
            statusColor = '#ef4444';
            showDischarge = true;
        } else if (power < -50) {
            statusText = tr('pvspeicher_charging');
            statusColor = '#22c55e';
            showCharge = true;
        } else {
            statusText = tr('pvspeicher_ready');
            statusColor = '#888888';
        }

        return (
            <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Arial, sans-serif',
            }}>
                {/* Title */}
                <div style={{
                    fontSize: 13, fontWeight: 500, color: '#fff',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    marginBottom: 4,
                }}>
                    {title}
                </div>

                <svg viewBox="0 0 200 350" style={{ width: '100%', height: '100%', maxHeight: 400 }}>
                    {/* Battery housing */}
                    <rect x="30" y="40" width="140" height="280" rx="8" fill="#2d2d2d" stroke="#1a1a1a" strokeWidth="3" />
                    <rect x="70" y="25" width="60" height="20" rx="4" fill="#444" stroke="#333" strokeWidth="2" />

                    {/* Fill level */}
                    <rect x="45" y={fillY} width="110" height={fillH} rx="3" fill={fillColor} />

                    {/* Charge arrow (down = loading) */}
                    <g opacity={showCharge ? 1 : 0} transform="translate(100, 90) scale(2)">
                        <polygon points="0,-20 15,5 8,5 8,20 -8,20 -8,5 -15,5" fill="#22c55e" stroke="#000" strokeWidth="1" />
                    </g>

                    {/* Discharge arrow (up = unloading) */}
                    <g opacity={showDischarge ? 1 : 0} transform="translate(100, 90) scale(2)">
                        <polygon points="0,20 15,-5 8,-5 8,-20 -8,-20 -8,-5 -15,-5" fill="#ef4444" stroke="#000" strokeWidth="1" />
                    </g>

                    {/* SOC text */}
                    <text x="100" y="180" fill="#fff" fontSize="48" fontWeight="bold" textAnchor="middle"
                          stroke="#000" strokeWidth="3" paintOrder="stroke">{Math.round(soc)}</text>
                    <text x="100" y="210" fill="#888" fontSize="16" textAnchor="middle"
                          stroke="#000" strokeWidth="2" paintOrder="stroke">%</text>

                    {/* Power text */}
                    <text x="100" y="280" fill="#fff" fontSize="20" fontWeight="bold" textAnchor="middle"
                          stroke="#000" strokeWidth="2" paintOrder="stroke">{powerText}</text>
                    <text x="100" y="295" fill="#888" fontSize="12" textAnchor="middle"
                          stroke="#000" strokeWidth="1.5" paintOrder="stroke">{powerUnit}</text>

                    {/* Status text */}
                    <text x="100" y="340" fill={statusColor} fontSize="14" fontWeight="bold" textAnchor="middle"
                          stroke="#000" strokeWidth="2" paintOrder="stroke">{statusText}</text>
                </svg>
            </div>
        );
    }
}
