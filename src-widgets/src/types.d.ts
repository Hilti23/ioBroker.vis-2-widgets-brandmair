declare module '@iobroker/types-vis-2/visRxWidget' {
    import type React from 'react';

    interface VisRxWidgetStateValues {
        [key: string]: any;
    }

    interface VisRxWidgetState {
        values: VisRxWidgetStateValues;
        rxData: Record<string, any>;
        rxStyle: Record<string, any>;
    }

    export default class VisRxWidget<
        TRxData extends Record<string, any> = Record<string, any>,
        TState extends Partial<VisRxWidgetState> = VisRxWidgetState,
    > extends React.Component<
        { context: { setValue: (id: string, value: any) => void; socket: any }; editMode?: boolean },
        TState & { values: VisRxWidgetStateValues; rxData: TRxData; rxStyle: Record<string, any> }
    > {
        static t(key: string, ...args: any[]): string;
        static getI18nPrefix(): string;
        static getWidgetInfo(): any;
        getWidgetInfo(): any;
        renderWidgetBody(props: any): React.JSX.Element | null;
    }
}
