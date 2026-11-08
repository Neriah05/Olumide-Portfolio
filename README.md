# Olumide Ayeromara — Portfolio

React + Vite + Tailwind CSS v4. One page, no backend.

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Edit content
Everything (name, intro, experience, projects, skills, links) lives in **`src/data.js`**.

- **Photo:** add `public/profile.png` (transparent background, portrait). Initials show until then.
- **Project screenshots:** add images to `public/projects/` and set each project's `image`, e.g. `'projects/abwel.png'`.
- **CV:** replace `public/Olumide_Ayeromara_CV.pdf` with your latest CV (keep the name, or update `resume` in data.js).
- **LinkedIn:** set `socials.linkedin` in data.js.

## Deploy (Vercel, free)
1. Push this folder to a new GitHub repo.
2. vercel.com → Add New → Project → import the repo.
3. Vercel detects Vite automatically → Deploy. You get `your-name.vercel.app`.
Every push to `main` redeploys.
