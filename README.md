# VC Scout 🚀

A lightweight **venture capital sourcing tool** built with Next.js and Tailwind CSS.
VC Scout helps investors quickly discover, filter, and evaluate startups with an explainable match score and clean discovery workflow.

> ⚠️ Note: This project is currently hosted via GitHub only (no live deployment yet).

---

## ✨ Features

### 🔍 Company Discovery

* Fast search with keyboard shortcut (`/`)
* Sector-based filtering
* Pagination for scalable browsing
* Clean, premium table UI

### 🧠 Explainable Match Score

* Visual progress bar
* High / Medium / Low fit labeling
* Transparent scoring UX

### 💾 Saved Searches

* Save search queries
* Persistent local storage
* Quick access to previous research

### 📋 List Management

* Create and manage lists
* Save companies to lists
* Lightweight portfolio tracking

### ⚡ Enrichment API

* Server route using Cheerio
* Extracts and enriches company data
* Node runtime compatible

### 🎨 UX Polish

* Empty states
* Loading skeletons
* Sticky table headers
* Responsive layout
* Sidebar navigation

---

## 🧱 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Data Enrichment:** Cheerio
* **State:** React hooks + localStorage
* **Deployment:** GitHub (Vercel-ready)

---

## 📂 Project Structure

```
vc-scout/
├─ app/
│  ├─ api/enrich/route.ts
│  ├─ companies/
│  ├─ lists/
│  └─ saved/
├─ components/
├─ lib/
├─ public/
└─ README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SaloniSsSaini/vc-scout.git
cd vc-scout
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🔌 Environment Variables

No environment variables are required for the current version.

---

## 🧪 Key UX Shortcuts

| Action       | Shortcut     |
| ------------ | ------------ |
| Focus search | `/`          |
| Pagination   | Buttons      |
| Save search  | Button click |

---

## 🛠️ Build for Production

```bash
npm run build
npm start
```

---

## 📌 Known Limitations

* Uses mock company data
* Enrichment is demo-level scraping
* Lists stored in localStorage only
* No authentication layer

---

## 🚀 Future Improvements

* Multi-list modal workflow
* Real VC thesis scoring engine
* API caching layer
* Authentication & persistence
* Live deployment on Vercel

---

## 👩‍💻 Author

**Saloni Saini**
GitHub: https://github.com/SaloniSsSaini

---

## 📄 License

This project is for educational and evaluation purposes.
