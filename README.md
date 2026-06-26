# Playwright Test Suite — playwright_p1_1204

A Playwright + TypeScript test suite covering UI basics, selectors, assertions, login flows, and client authentication against multiple demo apps.

## Prerequisites

- Node.js 20.x, 22.x, or 24.x
- npm

## Installation

```bash
npm install
npx playwright install
```

## Environment Variables

Some tests read credentials from a `.env` file. Create one at the project root:

```env
RAHUL_USERNAME=your_username
RAHUL_PASSWORD=your_password
CLIENT_EMAIL=your_email
CLIENT_PASSWORD=your_password
```

> To activate `.env` loading, uncomment the `dotenv` lines at the top of `playwright.config.ts`.

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/login_demo.spec.ts

# Run in UI mode
npx playwright test --ui

# Run in debug mode
npx playwright test --debug

# View HTML report after a run
npx playwright show-report
```

## Configuration

Configured in [playwright.config.ts](playwright.config.ts):

| Setting | Value |
|---|---|
| Browser | Chromium (headless) |
| Parallel | Yes (fullyParallel) |
| Retries | 1 |
| Test timeout | 30s |
| Assertion timeout | 5s |
| Reporter | HTML |

Firefox, WebKit, and mobile viewports are available in the config but commented out.

## Test Files

| File | What it covers |
|---|---|
| `example.spec.ts` | Playwright basics — title check and navigation on playwright.dev |
| `myfirst.spec.ts` | First test — title assertion on playwright.dev |
| `assertions_demo.spec.ts` | Assertion types: `toHaveCount`, `toBeVisible`, `soft` assertions on playwright.dev |
| `selectors.spec.ts` | Selector strategies — ID, XPath, CSS, text on saucedemo.com |
| `UIBasics.spec.ts` | Browser context, login with env-var credentials, dropdown, radio buttons, checkboxes on rahulshettyacademy.com |
| `login_demo.spec.ts` | Login flows on Applitools demo, OrangeHRM, and Sauce Demo |
| `clientauth.spec.ts` | Client login with env-var credentials, product listing on rahulshettyacademy.com/client |
| `record_demo.spec.ts` | Recorded login/logout flow on saucedemo.com |
| `record_demo2.spec.ts` | Recorded Google search (launches Chromium directly, headless: false) |

## Project Structure

```
playwright_p1_1204/
├── tests/                  # All test files
├── playwright.config.ts    # Playwright configuration
├── .env                    # Local credentials (not committed)
├── .github/
│   ├── workflows/
│   │   └── playwright.yml  # CI pipeline
│   └── copilot-instructions.md
└── playwright-report/      # Generated HTML reports
```

## CI

GitHub Actions runs all tests on push/PR to `main` or `master` (Ubuntu, Node LTS). The HTML report is uploaded as an artifact and retained for 30 days.

## Learn More

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Assertions](https://playwright.dev/docs/test-assertions)
- [Locator Strategies](https://playwright.dev/docs/locators)
