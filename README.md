# devtron

Devtron is a browser-based accessibility inspection and developer tool extension.  
It helps developers analyze web applications for accessibility issues and inspect DOM elements directly from structured accessibility reports.

The project is built with JavaScript and packaged as a browser extension.

---

## Features

- Accessibility inspection tools
- Element highlighting and DOM inspection
- Integration with accessibility reporting
- Browser extension packaging
- Automated test support
- CI configuration (Travis, AppVeyor)

---

## Tech Stack

- JavaScript
- Node.js
- Browser Extension APIs
- Accessibility Developer Tools (integration)
- Travis CI / AppVeyor

---

## Installation (Development)

Clone the repository:

```bash
git clone https://github.com/<your-username>/devtron.git
cd devtron
```

Install dependencies:

```bash
npm install
```

---

## Build

Build the project:

```bash
npm run build
```

The compiled output will typically be placed in the `out/` directory.

---

## Running as a Browser Extension

1. Build the project.
2. Open your browser’s extension management page.
3. Enable **Developer Mode**.
4. Load the extension from the `out/` directory.

---

## Testing

Run tests:

```bash
npm test
```

---

## Project Structure

- `lib/` – Core extension logic  
- `static/` – Static assets  
- `vendor/` – Third-party dependencies  
- `test/` – Test files  
- `manifest.json` – Extension configuration  
- `api.js` – Extension API logic  

---

## Requirements

- Node.js (version defined in `.node-version`)
- npm

---
