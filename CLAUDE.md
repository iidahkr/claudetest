# CLAUDE.md - AI Assistant Guide

This file provides context and guidelines for AI assistants working with this codebase.

## Repository Overview

**Repository**: `iidahkr/claudetest`
**Status**: New repository (initial setup)

## Project Structure

```
claudetest/
├── CLAUDE.md          # AI assistant guidelines (this file)
└── .git/              # Git repository
```

*Note: This structure will be updated as the project grows.*

## Development Workflow

### Branch Strategy

- **Main branch**: Primary stable branch
- **Feature branches**: Use descriptive names (e.g., `feature/add-user-auth`, `fix/login-bug`)
- **Claude branches**: AI-assisted development uses `claude/` prefix

### Git Commands

```bash
# Create and switch to a new branch
git checkout -b feature/my-feature

# Stage changes
git add <specific-files>

# Commit with descriptive message
git commit -m "feat: add feature description"

# Push to remote
git push -u origin <branch-name>
```

### Commit Message Convention

Follow conventional commits format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Code Style Guidelines

*To be defined based on project language and framework choices.*

### General Principles

1. **Readability**: Write clear, self-documenting code
2. **Simplicity**: Avoid over-engineering; solve the current problem
3. **Consistency**: Follow established patterns in the codebase
4. **Security**: Never commit secrets, credentials, or sensitive data

## Testing

*Testing framework and conventions to be defined.*

### Running Tests

```bash
# Commands will be added when testing is configured
```

## Build & Deployment

*Build and deployment processes to be defined.*

## AI Assistant Guidelines

### Do's

- Read existing code before suggesting modifications
- Use specific file paths when referencing code
- Follow existing patterns and conventions in the codebase
- Keep changes focused and minimal
- Verify changes don't break existing functionality
- Use the project's established tooling and frameworks

### Don'ts

- Don't add features beyond what's requested
- Don't refactor code unnecessarily
- Don't add comments to unchanged code
- Don't create new files unless absolutely necessary
- Don't commit sensitive information (API keys, passwords, etc.)
- Don't make assumptions about code you haven't read

### File Operations

- Prefer editing existing files over creating new ones
- Use specific, targeted edits rather than rewriting entire files
- Always verify file paths before making changes

### Error Handling

- When encountering errors, investigate the root cause
- Provide clear explanations of issues found
- Suggest specific, actionable solutions

## Key Files Reference

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI assistant guidelines |

*This table will be expanded as the project grows.*

## Environment Setup

*Setup instructions to be added when dependencies are defined.*

```bash
# Installation steps will be documented here
```

## Common Tasks

### Adding a New Feature

1. Create a feature branch
2. Implement changes with tests
3. Ensure all tests pass
4. Create pull request with clear description

### Fixing a Bug

1. Reproduce the issue
2. Identify root cause
3. Implement fix
4. Add regression test
5. Submit pull request

## Troubleshooting

*Common issues and solutions will be documented here.*

---

*Last updated: 2026-02-04*
*This document should be updated as the project evolves.*
