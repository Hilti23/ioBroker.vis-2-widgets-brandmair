import React from 'react';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import Generic from './Generic';
import { tr } from './tr';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface UrlaubRxData {
    widgetTitle: string;
    'oid-holiday-from': string;
    'oid-holiday-to': string;
    'oid-is-holiday': string;
    'oid-holiday-days-remain': string;
}

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------
export default class UrlaubWidget extends Generic<UrlaubRxData> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplUrlaubWidget',
            visSet: 'vis-2-widgets-brandmair',
            visWidgetLabel: 'urlaub_widget',
            visName: 'UrlaubWidget',
            visAttrs: [
                {
                    name: 'common',
                    label: 'group_display',
                    fields: [
                        { name: 'widgetTitle', label: 'widget_title', type: 'text', default: 'Urlaub' },
                        { name: 'oid-holiday-from', type: 'id', label: 'urlaub_from' },
                        { name: 'oid-holiday-to', type: 'id', label: 'urlaub_to' },
                        { name: 'oid-is-holiday', type: 'id', label: 'urlaub_active' },
                        { name: 'oid-holiday-days-remain', type: 'id', label: 'urlaub_days_remain' },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 80,
                position: 'relative',
            },
            visSetIcon: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
            visPrev: 'widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png',
        };
    }

    getWidgetInfo(): RxWidgetInfo {
        return UrlaubWidget.getWidgetInfo();
    }

    private val(key: keyof UrlaubRxData): any {
        const oid = this.state.rxData[key];
        if (!oid) return undefined;
        return this.state.values[`${oid}.val`];
    }

    private setVal(key: keyof UrlaubRxData, value: any): void {
        const oid = this.state.rxData[key];
        if (!oid) return;
        const values = JSON.parse(JSON.stringify(this.state.values));
        values[`${oid}.val`] = value;
        this.setState({ values } as any);
        this.props.context.setValue(oid, value);
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | null {
        super.renderWidgetBody(props);

        const title = this.state.rxData.widgetTitle || 'Urlaub';
        const holidayFrom: string = this.val('oid-holiday-from') || '';
        const holidayTo: string = this.val('oid-holiday-to') || '';
        const isHoliday = this.val('oid-is-holiday') === true || this.val('oid-is-holiday') === 'true';
        const daysRemain = Number(this.val('oid-holiday-days-remain')) || 0;

        const inputStyle: React.CSSProperties = {
            padding: '5px 10px', fontSize: 14, border: '1px solid rgba(0,0,0,0.15)',
            borderRadius: 6, background: 'transparent', color: '#111',
        };

        return (
            <div style={{
                width: '100%', height: '100%', fontFamily: 'sans-serif',
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '10px 16px', boxSizing: 'border-box',
            }}>
                {/* Icon + Title */}
                <div style={{
                    fontSize: 14, fontWeight: 600,
                    color: isHoliday ? '#f5a623' : '#333',
                    display: 'flex', alignItems: 'center', gap: 6,
                    textShadow: isHoliday ? '0 0 3px rgba(0,0,0,0.4)' : 'none',
                    flexShrink: 0,
                }}>
                    <span style={{ fontSize: 20 }}>&#9992;</span>
                    {title}
                </div>

                {/* Von */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 12, color: '#333' }}>
                        {tr('urlaub_von') || 'Von'}
                    </span>
                    <input
                        type="date"
                        value={holidayFrom}
                        onChange={(e) => this.setVal('oid-holiday-from', e.target.value)}
                        style={inputStyle}
                    />
                </div>

                {/* Bis */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 12, color: '#333' }}>
                        {tr('urlaub_bis') || 'Bis'}
                    </span>
                    <input
                        type="date"
                        value={holidayTo}
                        onChange={(e) => this.setVal('oid-holiday-to', e.target.value)}
                        style={inputStyle}
                    />
                </div>

                {/* Status badge */}
                {isHoliday && (
                    <span style={{
                        fontSize: 12, padding: '3px 10px', borderRadius: 10,
                        background: 'rgba(245,166,35,0.15)', color: '#f5a623',
                        fontWeight: 600, flexShrink: 0,
                    }}>
                        {daysRemain > 0
                            ? `${daysRemain} ${tr('urlaub_tage') || 'Tage'}`
                            : (tr('urlaub_aktiv') || 'aktiv')}
                    </span>
                )}
            </div>
        );
    }
}
