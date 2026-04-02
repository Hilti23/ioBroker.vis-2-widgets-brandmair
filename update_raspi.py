#!/usr/bin/env python3
import subprocess, sys, os

os.chdir("/opt/iobroker")

commands = [
    ["iobroker", "del", "vis-2-widgets-brandmair"],
    ["rm", "-rf", "node_modules/iobroker.vis-2-widgets-brandmair"],
    ["npm", "i", "iobroker.vis-2-widgets-brandmair"],
    ["iobroker", "add", "vis-2-widgets-brandmair"],
    ["iobroker", "upload", "vis-2"],
    ["iobroker", "restart", "vis-2"],
]

for cmd in commands:
    print(f"\n>>> {' '.join(cmd)}")
    result = subprocess.run(cmd)
    if result.returncode != 0 and cmd[0] != "iobroker":
        print(f"FEHLER bei: {' '.join(cmd)}")
        sys.exit(1)

print("\n=== Update fertig! Browser mit Ctrl+Shift+R neu laden. ===")
