// @ts-expect-error no types
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import vitetsConfigPaths from 'vite-tsconfig-paths';
import { federation } from '@module-federation/vite';
import { moduleFederationShared } from '@iobroker/types-vis-2/modulefederation.vis.config';
import { readFileSync } from 'node:fs';
import topLevelAwait from 'vite-plugin-top-level-await';

const pack = JSON.parse(readFileSync('./package.json').toString());

const config = {
    plugins: [
        federation({
            manifest: true,
            name: 'vis2brandmairWidgets',
            filename: 'customWidgets.js',
            exposes: {
                './TrvzbThermostat': './src/TrvzbThermostat',
                './HeizstabWidget': './src/HeizstabWidget',
                './PvSpeicherWidget': './src/PvSpeicherWidget',
                './WarmwasserWidget': './src/WarmwasserWidget',
                './TimerWidget': './src/TimerWidget',
                './MuelltonnenWidget': './src/MuelltonnenWidget',
                './VerbrauchWidget': './src/VerbrauchWidget',
                './translations': './src/translations',
            },
            remotes: {},
            shared: moduleFederationShared(pack),
            dts: false,
        }),
        topLevelAwait({
            promiseExportName: '__tla',
            promiseImportName: (i: number): string => `__tla_${i}`,
        }),
        react(),
        vitetsConfigPaths(),
        commonjs(),
    ],
    server: {
        port: 3000,
        proxy: {
            '/_socket': 'http://localhost:8082',
            '/vis.0': 'http://localhost:8082',
            '/adapter': 'http://localhost:8082',
            '/widgets': 'http://localhost:8082/vis',
            '/web': 'http://localhost:8082',
            '/state': 'http://localhost:8082',
        },
    },
    base: './',
    build: {
        target: 'chrome81',
        outDir: './build',
        rollupOptions: {
            onwarn(warning: { code: string }, warn: (warning: { code: string }) => void): void {
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return;
                }
                warn(warning);
            },
        },
    },
};

export default config;
