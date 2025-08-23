## Portfolio

A modern personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Smooth scrolling navigation, responsive sections, and a clean, customizable design.

### Tech Stack
- **Vite** (React + TypeScript)
- **Tailwind CSS**
- **shadcn/ui** + **Radix UI**
- **Lucide Icons**

### Getting Started
1. Install Node.js (LTS recommended).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:8080` in your browser.

### Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run build:dev`: Development-mode build
- `npm run preview`: Preview the built app
- `npm run lint`: Run ESLint

### Project Structure (high level)
```text
public/
  favicon.svg
  cv.pdf            # Place your CV here
src/
  components/
    Navigation.tsx
    Hero.tsx
    Skills.tsx
    Projects.tsx
    Education.tsx
    Achievements.tsx
    Contact.tsx
  pages/
    Index.tsx
index.html
```

### Customization
- **Site title and meta**: edit `index.html` (`<title>portfolio</title>` and meta tags).
- **Favicon**: replace `public/favicon.svg` with your own (or use `public/favicon.ico`).
- **Navigation & sections**: the site scrolls to section IDs:
  - `#about` (in `Hero.tsx`)
  - `#skills` (in `Skills.tsx`)
  - `#projects` (in `Projects.tsx`)
  - `#education` (in `Education.tsx`)
  - `#achievements` (in `Achievements.tsx`)
  - `#contact` (in `Contact.tsx`)
- **Download CV/Resume**:
  - Place your file at `public/cv.pdf`.
  - Buttons are wired in `src/components/Navigation.tsx` and `src/components/Hero.tsx` using the `asChild` prop; update the `download` filename if desired.
- **Skills**: edit lists in `src/components/Skills.tsx` (programming languages, technologies, tools, soft skills). Boxes have consistent sizing and a hover backlight effect.
- **Achievements**: update the list in `src/components/Achievements.tsx`.

### Build & Deploy
1. Build:
   ```bash
   npm run build
   ```
2. Preview locally:
   ```bash
   npm run preview
   ```
3. Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Notes
- Dev server runs on port `8080` and listens on all interfaces.
- Smooth scrolling uses section IDs and `scrollIntoView`.

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b3f12ccf-c33c-4918-9c37-2af3c269e447

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b3f12ccf-c33c-4918-9c37-2af3c269e447) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b3f12ccf-c33c-4918-9c37-2af3c269e447) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
