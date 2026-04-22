#!/usr/bin/env node

import * as fs from 'node:fs'
import * as path from 'node:path'
import * as process from "node:process";

function main() {
  if (fs.existsSync(path.join(process.cwd(), '.agents', 'skills'))) {
    fs.mkdirSync(path.join(process.cwd(), '.claude'), { recursive: true })
    fs.rmSync(path.join(process.cwd(), '.claude', 'skills'), { force: true, recursive: true })
    fs.symlinkSync('../.agents/skills', path.join(process.cwd(), '.claude', 'skills'))
  }

  if (fs.existsSync(path.join(process.cwd(), 'AGENTS.md'))) {
    fs.rmSync(path.join(process.cwd(), 'CLAUDE.md'), { force: true })
    fs.symlinkSync('AGENTS.md', path.join(process.cwd(), 'CLAUDE.md'))
  }
}

if (require.main === module) {
  void main()
}
