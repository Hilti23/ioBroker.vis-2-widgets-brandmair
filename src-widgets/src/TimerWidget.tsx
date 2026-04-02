import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface TimerRxData {
    widgetTitle: string;
    'oid-html': string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function pad(n: number): string {
    return n < 10 ? '0' + n : String(n);
}

function formatRest(ms: number): string {
    if (ms <= 0) return '00:00';
    const s = Math.floor(ms / 1000);
    if (ms >= 3600000) {
        const h = Math.floor(s / 3600);
        const m = Math.floor((s % 3600) / 60);
        const r = s % 60;
        return `${pad(h)}:${pad(m)}:${pad(r)}`;
    }
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${pad(m)}:${pad(r)}`;
}

function tickContainer(container: HTMLElement): void {
    const now = Date.now();
    container.querySelectorAll('.timer-card').forEach((card) => {
        const el = card as HTMLElement;
        const trigger = parseInt(el.getAttribute('data-trigger') || '0');
        const rest = trigger - now;
        const warn = rest < 60000;

        const display = el.querySelector('.timer-display') as HTMLElement | null;
        if (display) {
            display.textContent = formatRest(rest);
            display.style.color = warn ? 'red' : (el.getAttribute('data-accent') || '#333');
        }
        el.style.background = warn ? '#ffdddd' : (el.getAttribute('data-bg') || '#f0f0f0');
        el.style.borderLeftColor = warn ? 'red' : (el.getAttribute('data-accent') || '#333');
    });
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class TimerWidget extends Generic<TimerRxData> {
    private _intervalId: number = 0;

    // ── Widget metadata ──────────────────────────────────────────────────
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplTimerWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'timer_widget',
            visName: 'TimerWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Timer' },
                        { name: 'oid-html', type: 'id', label: 'timer_html' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 300,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/prev_timer.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return TimerWidget.getWidgetInfo();
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    private val(key: keyof TimerRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    // ── Render ────────────────────────────────────────────────────────────
    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const html = this.val('oid-html') || '';

        return (
            <div
                ref={(el: HTMLDivElement | null) => {
                    if (el) {
                        // Start interval once
                        if (!this._intervalId) {
                            this._intervalId = window.setInterval(() => tickContainer(el), 1000);
                        }
                        // Tick immediately on render
                        tickContainer(el);
                    } else if (this._intervalId) {
                        // Cleanup when unmounted
                        window.clearInterval(this._intervalId);
                        this._intervalId = 0;
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                }}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }
}
