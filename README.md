# lnagt

A tiny CLI that creates symlinks between different agents.

## Usage

```shell
npx lnagt
```

## What It Does

- Creates `AGENTS.md` and `.agents/skills` if they don't exist (copying from `CLAUDE.md` and `.claude/skills` when available).
- Recreates `CLAUDE.md` and `.claude/skills` as symlinks to `AGENTS.md` and `.agents/skills`.
