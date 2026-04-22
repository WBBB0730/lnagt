#!/usr/bin/env node

import * as fs from 'node:fs'
import * as path from 'node:path'
import * as process from "node:process";

function main() {
  const cwd = process.cwd()
  const agentsDir = path.join(cwd, '.agents')
  const agentsSkillsDir = path.join(agentsDir, 'skills')
  const claudeDir = path.join(cwd, '.claude')
  const claudeSkillsDir = path.join(claudeDir, 'skills')
  const agentsMdPath = path.join(cwd, 'AGENTS.md')
  const claudeMdPath = path.join(cwd, 'CLAUDE.md')

  fs.mkdirSync(agentsDir, { recursive: true })
  fs.mkdirSync(claudeDir, { recursive: true })

  if (!fs.existsSync(agentsSkillsDir)) {
    if (fs.existsSync(claudeSkillsDir)) {
      fs.cpSync(claudeSkillsDir, agentsSkillsDir, { recursive: true, dereference: true })
    } else {
      fs.mkdirSync(agentsSkillsDir, { recursive: true })
    }
  }

  fs.rmSync(claudeSkillsDir, { force: true, recursive: true })
  fs.symlinkSync('../.agents/skills', claudeSkillsDir)

  if (!fs.existsSync(agentsMdPath)) {
    if (fs.existsSync(claudeMdPath)) {
      fs.cpSync(claudeMdPath, agentsMdPath)
    } else {
      fs.writeFileSync(agentsMdPath, '')
    }
  }

  fs.rmSync(claudeMdPath, { force: true })
  fs.symlinkSync('AGENTS.md', claudeMdPath)
}

if (require.main === module) {
  void main()
}
