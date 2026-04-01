#!/bin/bash
# Deploy vis-2-widgets-brandmair to Raspi5
# Usage: bash deploy.sh
set -e

ADAPTER="vis-2-widgets-brandmair"
VERSION=$(node -p "require('./package.json').version")
TGZ="iobroker.${ADAPTER}-${VERSION}.tgz"
RASPI="raspi5@raspi5"

echo "=== Building ==="
rm -rf widgets/ src-widgets/build/
node tasks

echo "=== Packing ==="
rm -f iobroker.${ADAPTER}-*.tgz
npm pack --quiet

echo "=== Uploading to Raspi ==="
scp "${TGZ}" "${RASPI}:/tmp/"

echo "=== Installing on Raspi ==="
ssh "${RASPI}" "cd /opt/iobroker && iobroker url /tmp/${TGZ} && iobroker upload ${ADAPTER}"

echo "=== Done! Reload VIS2 in browser (F5) ==="
