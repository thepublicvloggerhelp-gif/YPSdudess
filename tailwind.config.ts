# YPSdudes — JEE & NEET Community

Welcome to the **YPSdudes** project! This is a private community web application built for Class 12 JEE and NEET aspirants of Yugantar Public School, Rajnandgaon.

This directory contains the complete and clean source code of the website, ready to be uploaded to your GitHub repository and published.

## 🚀 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS & Framer Motion (for smooth animations)
- **Database & Auth:** Supabase (PostgreSQL database, storage, and authentication)
- **Icons:** Lucide React

---

## 📂 Project Structure
This directory includes only the essential source code. Heavy folders (`node_modules/`, `.next/`) and sensitive local secrets (`.env.local`) have been intentionally omitted.

- `app/` — All Next.js pages, layouts, and API routes.
- `components/` — Reusable React UI components (chat, forums, tests, dashboard).
- `lib/` — Supabase clients, database functions, and general utility helpers.
- `types/` — TypeScript interfaces/types matching the database schema.
- `supabase/` — Supabase SQL scripts and configurations.
- `package.json` — Node dependencies and scripts.
- `.gitignore` — Instructs Git to ignore local cache and secret files.
- `next.config.js` / `tailwind.config.ts` / `tsconfig.json` — Project configuration files.

---

## 🛠️ Local Development

To run the project locally, follow these steps:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   - Rename `.env.local.example` to `.env.local`.
   - Open `.env.local` and paste your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
     ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📤 How to Upload to GitHub

Follow these steps to upload this folder to your GitHub repository:

1. **Initialize Git Repository:**
   Open your terminal in this folder (`ypsdudes-github`) and run:
   ```bash
   git init
   ```

2. **Stage files and commit:**
   ```bash
   git add .
   git commit -m "Initial commit of YPSdudes source code"
   ```

3. **Set the default branch to main:**
   ```bash
   git branch -M main
   ```

4. **Link to your GitHub Repository:**
   - Go to [GitHub](https://github.com/) and create a new repository (do not initialize it with a README, `.gitignore`, or license).
   - Copy the repository URL (it looks like `https://github.com/your-username/your-repo-name.git`).
   - Run the following command (replace the URL with your actual repository URL):
     ```bash
     git remote add origin https://github.com/your-username/your-repo-name.git
     ```

5. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

---

## 🌐 Deploying / Publishing the Site
Once your code is pushed to GitHub, you can publish the website to a hosting platform. We recommend **Vercel** or **Netlify**:

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your GitHub repository (`your-repo-name`).
4. Under **Environment Variables**, add the environment variables from your `.env.local` file:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**. Vercel will automatically build and publish your site!
