import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface WarmwasserRxData {
    widgetTitle: string;
    'oid-temp1': string;
    'oid-temp2': string;
    'oid-heater': string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function calcColor(val: number, min: number, max: number): string {
    const n = Math.max(0, Math.min(1, (val - min) / (max - min)));
    // cold=#0066ff, warm=#ffcc00, hot=#ff3300
    const cold = { r: 0, g: 102, b: 255 };
    const warm = { r: 255, g: 204, b: 0 };
    const hot = { r: 255, g: 51, b: 0 };

    let r: number, g: number, b: number;
    if (n < 0.5) {
        const f = n * 2;
        r = Math.round(cold.r + (warm.r - cold.r) * f);
        g = Math.round(cold.g + (warm.g - cold.g) * f);
        b = Math.round(cold.b + (warm.b - cold.b) * f);
    } else {
        const f = (n - 0.5) * 2;
        r = Math.round(warm.r + (hot.r - warm.r) * f);
        g = Math.round(warm.g + (hot.g - warm.g) * f);
        b = Math.round(warm.b + (hot.b - warm.b) * f);
    }
    return `rgb(${r},${g},${b})`;
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class WarmwasserWidget extends Generic<WarmwasserRxData> {
    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplWarmwasserWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'warmwasser_widget',
            visName: 'WarmwasserWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Warmwasserspeicher' },
                        { name: 'oid-temp1', type: 'id', label: 'warmwasser_temp1' },
                        { name: 'oid-temp2', type: 'id', label: 'warmwasser_temp2' },
                        { name: 'oid-heater', type: 'id', label: 'warmwasser_heater' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: 280,
                height: 400,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/prev_warmwasser.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return WarmwasserWidget.getWidgetInfo();
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    private val(key: keyof WarmwasserRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    // ── Render ────────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const temp1 = parseFloat(this.val('oid-temp1')) || 0;
        const temp2 = parseFloat(this.val('oid-temp2')) || 0;
        const heaterPower = parseFloat(this.val('oid-heater')) || 0;

        const color1 = calcColor(temp1, 10, 80);
        const color2 = calcColor(temp2, 10, 80);
        const heaterColor = calcColor(heaterPower, 0, 3);

        // Unique gradient ID per widget instance
        const gradId = `waterGradient_${this.props.id}`;

        return (
            <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Arial, sans-serif',
            }}>
                <svg viewBox="0 0 280 340" style={{ width: '100%', height: '100%', maxHeight: 400 }}>
                    <defs>
                        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={color2} stopOpacity={0.9} />
                            <stop offset="100%" stopColor={color1} stopOpacity={0.9} />
                        </linearGradient>
                    </defs>

                    {/* Tank body */}
                    <rect x="80" y="20" width="110" height="292" rx="10" fill="#aaa" stroke="#666" strokeWidth="3" />

                    {/* Water fill with gradient */}
                    <rect x="88" y="28" width="94" height="276" rx="6" fill={`url(#${gradId})`} />

                    {/* Top cap */}
                    <ellipse cx="135" cy="20" rx="55" ry="12" fill="#bbb" stroke="#666" strokeWidth="2" />

                    {/* Bottom cap */}
                    <ellipse cx="135" cy="312" rx="55" ry="12" fill="#aaa" stroke="#666" strokeWidth="2" />

                    {/* WW - Hot water outlet (outgoing →) */}
                    <rect x="190" y="27" width="25" height="10" fill="#ff4444" stroke="#cc2222" strokeWidth="1" />
                    <path d="M 220 32 l -8 -8 M 220 32 l -8 8" fill="none" stroke="#cc2222" strokeWidth="2" />

                    {/* HZ-W - Warm water FROM heating (incoming ←) */}
                    <rect x="198" y="171" width="17" height="10" fill="#ff8844" stroke="#cc6622" strokeWidth="1" />
                    <path d="M 190 176 l 8 -8 M 190 176 l 8 8" fill="none" stroke="#cc6622" strokeWidth="2" />

                    {/* KW-H - Cold water return from radiators (incoming ←) */}
                    <rect x="198" y="213" width="17" height="10" fill="#6688cc" stroke="#446699" strokeWidth="1" />
                    <path d="M 190 218 l 8 -8 M 190 218 l 8 8" fill="none" stroke="#446699" strokeWidth="2" />

                    {/* HZ-K - Cold water TO heating (outgoing →) */}
                    <rect x="190" y="253" width="25" height="10" fill="#66aa66" stroke="#448844" strokeWidth="1" />
                    <path d="M 220 258 l -8 -8 M 220 258 l -8 8" fill="none" stroke="#448844" strokeWidth="2" />

                    {/* KW - Cold water from street (incoming ←) */}
                    <rect x="198" y="289" width="17" height="10" fill="#4488ff" stroke="#336699" strokeWidth="1" />
                    <path d="M 190 294 l 8 -8 M 190 294 l 8 8" fill="none" stroke="#336699" strokeWidth="2" />

                    {/* Heater element housing */}
                    <rect x="60" y="236" width="20" height="18" rx="2" fill="#444" stroke="#333" strokeWidth="1" />
                    <circle cx="68" cy="233" r="3" fill="#222" />
                    <circle cx="72" cy="233" r="3" fill="#222" />
                    <rect x="78" y="240" width="90" height="10" rx="2" fill="#555" stroke="#333" strokeWidth="1" />
                    <rect x="80" y="242" width="86" height="6" rx="1" fill={heaterColor} opacity={0.9} />

                    {/* Heater power text */}
                    <text x="135" y="234" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle"
                          stroke="#000" strokeWidth="2" paintOrder="stroke">{heaterPower.toFixed(1)}</text>

                    {/* Pipe labels */}
                    <text x="225" y="36" fill="#fff" fontSize="9">WW</text>
                    <text x="225" y="180" fill="#fff" fontSize="9">HZ-W</text>
                    <text x="225" y="222" fill="#fff" fontSize="9">KW-H</text>
                    <text x="225" y="262" fill="#fff" fontSize="9">HZ-K</text>
                    <text x="225" y="298" fill="#fff" fontSize="9">KW</text>

                    {/* Temperature displays */}
                    <text x="135" y="85" fill="#fff" fontSize="48" fontWeight="bold" textAnchor="middle"
                          stroke="#000" strokeWidth="3" paintOrder="stroke">{Math.floor(temp2)}</text>
                    <text x="135" y="295" fill="#fff" fontSize="48" fontWeight="bold" textAnchor="middle"
                          stroke="#000" strokeWidth="3" paintOrder="stroke">{Math.floor(temp1)}</text>
                </svg>
            </div>
        );
    }
}
