# Submission guide: GitHub → Pull Request → Vercel → Portal

Type every command in the VS Code terminal, **inside the `bytespace` folder** (the one containing `package.json`).

## 1. Check the project (2 minutes)

```bash
npm install
npm run check
```

`npm run check` must end with **62 passed** and **built in …**. If it does, the project is ready.

## 2. Install Git (one time)

1. Type `git --version`. If it prints a version, skip to step 3.
2. Otherwise, download Git from **git-scm.com** and install it with all the default options.
3. Close and reopen VS Code, then set your name and email once. Use your GitHub email:

```bash
git config --global user.name "Rahmin Amer Zaman"
git config --global user.email "rahmin.raieef@gmail.com"
```

## 3. Create the empty repository on GitHub

1. Sign in at **github.com**, click **+** (top right), then **New repository**.
2. Repository name: `bytespace-new`
3. Select **Public**.
4. Do **not** tick "Add a README", ".gitignore" or "license". The repo must be empty.
5. Click **Create repository**. Keep that page open; you'll need its URL.

## 4. Push the project with a proper branch

In the commands below, replace `Rahmin007` with your GitHub username if it's different.

**4a. The `main` branch gets only the project setup:**

```bash
git init -b main
git add package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js eslint.config.js .prettierrc .prettierignore .gitignore vercel.json index.html public
git commit -m "chore: set up Vite, React, Tailwind, ESLint and Prettier"
git remote add origin https://github.com/Rahmin007/bytespace-new.git
git push -u origin main
```

The first push opens a browser window asking you to sign in to GitHub. Click **Sign in with your browser**, then **Authorize**.

**4b. All the real work goes on a feature branch:**

```bash
git checkout -b feature/landing-page

git add src/assets src/styles src/utils src/hooks src/data src/components/ui
git commit -m "feat: add design tokens, assets and reusable UI components"

git add src/components/layout src/components/sections src/pages/HomePage.jsx src/pages/NotFoundPage.jsx src/App.jsx src/main.jsx
git commit -m "feat: build the landing page and 404 page from the Figma design"

git add src/components/auth src/pages/SignInPage.jsx src/pages/SignUpPage.jsx
git commit -m "feat: add sign in and sign up pages with form validation"

git add -A
git commit -m "test: add unit, component and Playwright tests; docs"

git push -u origin feature/landing-page
```

Refresh the GitHub page. You should see the files, and a yellow **"Compare & pull request"** banner.

## 5. Deploy to Vercel

Vercel is a free host for websites like this one. You send it your project, it runs `npm run build` on its own servers and gives you a public link. It's free for personal use and needs no credit card.

**5a. Create an account:** go to **vercel.com**, click **Sign Up**, choose **Hobby**, enter your name, then click **Continue with GitHub** and approve.

**5b. Deploy from the VS Code terminal.** Stay on the `feature/landing-page` branch.

```bash
npx vercel login
```

- If it asks to install `vercel`, type `y` and press Enter.
- It then opens your browser to confirm the login. Approve it and return to VS Code.

```bash
npx vercel --prod
```

It asks a few questions. Answer like this:

| Question                                      | Answer                      |
| --------------------------------------------- | --------------------------- |
| Set up and deploy?                            | `y`                         |
| Which scope?                                  | press Enter (your account)  |
| Link to existing project?                     | `n`                         |
| Project name?                                 | `bytespace-new`, then Enter |
| In which directory is your code located?      | press Enter (`./`)          |
| Auto-detected **Vite** settings. Modify them? | `n`                         |
| Connect it to your Git repository? (if asked) | `y`                         |

The build runs for about 30 to 60 seconds. At the end it prints a **Production** URL.

**5c. Get the right link and test it:**

1. Open **vercel.com/dashboard** and click the `bytespace-new` project.
2. Under **Domains**, copy the short address, like `https://bytespace-new.vercel.app`. **This is the link you submit.** The long address with random letters may ask visitors to log in, so don't use that one.
3. Open the short link in a **private / incognito window**. It must open without any login.
4. Also try `/signin`, `/signup` and `/anything` on that link. All three should work.

**If you change code later**, redeploy with `npx vercel --prod`, then push to GitHub with `git add -A`, `git commit -m "…"` and `git push`.

## 6. Add the live link to the README

Open `README.md`, replace _"add your Vercel URL here"_ with your link, save, then:

```bash
git add README.md
git commit -m "docs: add live demo link"
git push
```

## 7. Open the Pull Request

1. On your GitHub repo, click **Compare & pull request**. If the banner is gone, go to **Pull requests → New pull request**, set base `main` and compare `feature/landing-page`.
2. **Title:** `feat: ByteSpace landing page + sign in / sign up`
3. **Description** (paste, then fill in your link):

```markdown
## What's included

- Full landing page built from the Figma design (all sections)
- Bonus: Sign In and Sign Up pages with validation, plus the design's 404 page
- Responsive from 320px to 1920px

## Live demo

https://YOUR-LINK.vercel.app

## Highlights

- Design tokens from Figma in `tailwind.config.js`; logo, icons and images exported from the design file
- Reusable components (`Button`, `CourseCard`, `SectionHeading`, `ScaledStage`, `TextField`, …)
- Working topic filter, category shortcuts and hero search (state kept in the URL)
- Accessible forms: labels, inline errors, focus management, show/hide password

## Testing

- `npm run check`: ESLint, Prettier, 62 Vitest tests, production build
- `npm run test:e2e`: Playwright on desktop + mobile (page loads, no horizontal scroll at 8 widths, forms, filters, navigation)
- `npm audit`: 0 vulnerabilities

## Notes

- No backend was provided, so form submission is simulated (`useFakeSubmit`)
- See `docs/HOW-IT-WORKS.md` for implementation details
```

4. Click **Create pull request**. **Do not merge it.** Reviewers look at the open PR.

## 8. Submit in the portal

- **Submission Link:** your short Vercel link.
- **Submission Details:**

```
GitHub repository: https://github.com/Rahmin007/bytespace-new
Pull request: https://github.com/Rahmin007/bytespace-new/pull/1

Built the full landing page plus the bonus Sign In and Sign Up pages (and the 404 page from the design) with React, Vite and Tailwind CSS.
- Matched to the Figma file and responsive from 320px to 1920px
- Reusable components, working course filters/search, and validated, accessible forms
- 62 unit/component tests (Vitest) and Playwright end-to-end tests on desktop and mobile; 0 npm audit vulnerabilities
- README and docs/HOW-IT-WORKS.md explain the structure and decisions
```

## Final checklist

- [ ] Repo is **public**: open it in an incognito window to confirm
- [ ] `main` has only the setup commit; the work is on `feature/landing-page`
- [ ] Pull Request is **open** (not merged)
- [ ] Short Vercel link opens in incognito, including `/signin` and `/signup`
- [ ] README has the live link
- [ ] Portal: Vercel link in "Submission Link", repo + PR links in "Submission Details"
