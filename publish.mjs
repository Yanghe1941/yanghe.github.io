import { cpSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const buildDirectory = 'dist';

cpSync(join(buildDirectory, 'assets'), 'assets', { recursive: true });

for (const entry of readdirSync(buildDirectory, { withFileTypes: true })) {
  if (entry.name !== 'assets') {
    cpSync(join(buildDirectory, entry.name), entry.name, { recursive: entry.isDirectory() });
  }
}

console.log('Published build output to the repository root.');
