const { deleteFoldersRecursive, buildReact, npmInstall, copyFiles } = require('@iobroker/build-tools');

function copyAllFiles() {
    copyFiles(
        ['src-widgets/build/**/*', '!src-widgets/build/index.html', '!src-widgets/build/mf-manifest.json'],
        'widgets/vis-2-widgets-brandmair/',
    );
    // www/ is needed for iobroker upload (uploads from www/ to file storage)
    copyFiles(
        ['src-widgets/build/**/*', '!src-widgets/build/index.html', '!src-widgets/build/mf-manifest.json'],
        'www/',
    );
}

if (process.argv.includes('--copy-files')) {
    copyAllFiles();
} else if (process.argv.includes('--build')) {
    buildReact(`${__dirname}/src-widgets`, { rootDir: __dirname, vite: true }).catch(() =>
        console.error('Error by build'),
    );
} else {
    deleteFoldersRecursive('src-widgets/build');
    deleteFoldersRecursive('widgets');
    deleteFoldersRecursive('www');
    npmInstall('src-widgets')
        .then(() => buildReact(`${__dirname}/src-widgets`, { rootDir: __dirname, vite: true }))
        .then(() => copyAllFiles());
}
