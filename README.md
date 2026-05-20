# 🖥️ Terminal Portfolio – Navaneeth M S

Welcome to my terminal-inspired portfolio website! This project is a fully interactive, terminal-style personal site built using modern web technologies. It mimics the experience of using a real command-line interface (CLI) directly in the browser.

---

## 🚀 Features

- Terminal-style UI with real command input
- Custom commands:
  - `about` — Learn about me
  - `projects` — View my projects and work
  - `contact` — How to get in touch
  - `help` — List all available commands
  - `clear` — Clear the terminal screen
  - `skills` — View categorized technical skills
  - `themes` — Switch between 7 custom terminal themes
  - `shortcuts` — View built-in keyboard hotkeys
  - `time` — Show current date, time, and timezone
- ASCII art welcome screen
- Responsive and keyboard-friendly design
- Built with React and TypeScript

---

## 🧠 Tech Stack

- **React** + **TypeScript** for UI and logic
- **Styled-components** for styling
- Custom command parser and terminal emulation
- Deployment-ready for platforms like GitHub Pages, Vercel, or Netlify

---

## 📁 Project Structure

```
src/
├── components/          # Custom components
│   ├── commands/          # Command components (About, Help, Projects, etc.)
│   ├── Terminal.tsx       # Terminal UI, keyboard events and input handling
│   └── Welcome.tsx        # Welcome screen with ASCII art
├── styles/                # Styled-components and global styles
├── App.tsx                # Root app component
└── main.tsx               # Entry point
```

---

## 📦 Getting Started

### Prerequisites
Make sure you have **Node.js** (version 18+ recommended) and **npm** installed on your system.

### Installation
1. Install dependencies inside the project folder:
   ```bash
   npm install
   ```

2. Start the local Vite development server:
   ```bash
   npm run dev
   ```

3. Open your browser at **`http://localhost:5173/terminal-portfolio/`** (or the port shown by Vite).

---

## 🌐 Deploying to GitHub Pages (Automated Setup)

This repository is configured with an automated CI/CD pipeline inside `.github/workflows/deploy.yml` to deploy seamlessly to GitHub Pages.

To launch your site live:
1. Commit and push the files to your repository on the `main` branch:
   ```bash
   git add .
   git commit -m "Configure modern React Vite setup"
   git push origin main
   ```
2. Go to your repository settings on GitHub.
3. Click on **Pages** in the left sidebar.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu.
5. The GitHub Action will automatically run, build, and deploy your terminal portfolio to your public GitHub pages domain!

---

## 🌐 Live Demo

[click this link](https://navnee1h.github.io/terminal-portfolio/)

---

## 🙋‍♂️ About Me

Hi! I’m **Navaneeth M S**, a cyber forensics student and tech enthusiast passionate about building cool and secure software projects. This terminal portfolio is my way of showcasing my skills in a fun, interactive way!

---

## 📫 Contact

- Email: [navaneethms182@gmail.com](mailto:navaneethms182@gmail.com)  
- LinkedIn: [linkedin.com/in/navnee1h](https://linkedin.com/in/navnee1h)  
- GitHub: [github.com/navnee1h](https://github.com/navnee1h)

---

## 🎨 Screenshot

![Portfolio Screenshot](./screenshot.png)

---
Special credits to [parsherr](https://github.com/parsherr) for creating the original Ubuntu version of this project.
---
> Built with ❤️ by Navaneeth M S
