# Playwright Test Project

This is a Playwright test project set up with TypeScript.

## Getting Started

### Prerequisites

- Node.js (latest 20.x, 22.x or 24.x)
- npm or yarn or pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in UI mode:
```bash
npx playwright test --ui
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

Run tests for a specific browser:
```bash
npx playwright test --project=chromium
```

### Generating Tests

Use Codegen to auto-generate tests:
```bash
npx playwright codegen
```

### Reports

View HTML test reports:
```bash
npx playwright show-report
```

## Project Structure

- `tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `.github/workflows/playwright.yml` - CI workflow

## Learn More

Visit [Playwright Documentation](https://playwright.dev/docs/intro) for more information.