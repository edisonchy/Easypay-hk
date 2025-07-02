# 🌐 EasypayHK Hosting Dashboard

A modern web dashboard built with [Next.js](https://nextjs.org/), styled using [Tailwind CSS](https://tailwindcss.com/), and deployed via [Netlify](https://www.netlify.com/). Includes i18n support and GitHub Actions workflows for CI tasks.

---

## 🚀 Features

- ⚡️ Fast, SEO-friendly Next.js architecture  
- 🎨 Tailwind CSS for styling  
- 🌍 Internationalization (i18n) via JSON-based language files  
- 🔁 GitHub Actions workflows for linting, testing, and formatting  
- 🌩️ One-click deployment to Netlify  
- 🧩 Modular, scalable project structure  

---

## 📦 Tech Stack

| Stack     | Tools                        |
|-----------|------------------------------|
| Frontend  | Next.js, Tailwind CSS        |
| CI/CD     | GitHub Actions               |
| Deployment| Netlify                      |
| i18n      | JSON message files (`/messages/`) |
| Env Mgmt  | `.env.local` configuration   |

---

## 🛠 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## 🧪 Testing & Linting

This project uses GitHub Actions for CI automation, including:

- ✅ ESLint
- 🎯 Prettier
- ⛑ TypeScript checking (if enabled)

Located in:

```
.github/workflows/
```

---

## 📁 Project Structure

```
.
├── app/                 # Next.js pages and routing
├── components/          # Reusable UI components
├── messages/            # i18n translations
├── public/              # Static assets
├── styles/              # Global styles
├── .github/workflows/   # CI/CD workflows
├── .env.local           # Local environment config (ignored)
└── README.md
```

---

## 🌍 Deployment on Netlify

### Netlify Settings:

- **Build command**: `npm run build`
- **Publish directory**: `.next`

### OR Use Netlify CLI:

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy
```

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to suggest changes or report bugs.
