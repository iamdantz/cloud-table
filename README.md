# Cloud Table

A comprehensive comparison of available services on each provider (AWS, Azure, GCP) and their equivalent for various use cases.

## Disclaimer

AI generated content. Cloud services evolve rapidly. Always verify specific
capabilities in official documentation.

## Tech Stack

- **Framework**: [Astro](https://astro.build) (v5)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4) + [DaisyUI](https://daisyui.com) (v5)
- **Icons**: [Lucide](https://lucide.dev) via `astro-icon`
- **Data**: Content Collections (JSON)

## Project Structure

- `src/content/services/`: Service data grouped by category (e.g., `ai-ml.json`).
- `src/content/categories.json`: Category definitions and metadata.
- `src/pages/index.astro`: Main application logic.
- `src/components/`: Reusable UI components (`ServiceTable`, `Sidebar`).

## Collaboration

To add or update services:

1.  Navigate to `src/content/services/`.
2.  Open the relevant category file (e.g., `compute.json`).
3.  Add a new object to the `items` array:
    ```json
    {
      "feature": "Service Description",
      "aws": "AWS Service Name",
      "azure": "Azure Service Name",
      "gcp": "GCP Service Name",
      "formerly": { "azure": "Old Name" } // Optional
    }
    ```

## Setup Commands

### Prerequisites

- Node.js (v18+)

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```
