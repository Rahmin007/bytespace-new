# How it works

This is a walkthrough of the main decisions in the project, written so the reasoning behind each one is easy to explain.

## 1. From Figma to code

I exported the design as a PDF and read exact values from it:

- **Colours:** blue `#003BE2`, lime `#D4FB20`, the greys and so on. They live in `tailwind.config.js` as named tokens, so components use `bg-brand` or `text-ink-muted` instead of hex codes. If the brand colour changes, it changes in one place.
- **Sizes:** the frame is 1440px wide with 1200px of content, cards are 375×386 with 24px corners, buttons are 46px tall, and so on.
- **Assets:** the logo and icons were traced from the design's vector paths into React components (`Logo.jsx`, `icons.jsx`). The icons use `currentColor`, so a Tailwind text class sets their colour.

## 2. Component structure

The code is organised in four levels, from smallest to largest:

1. **`ui/`** holds small, reusable pieces with no page knowledge: `Button`, `CourseCard`, `AvatarStack`, `Rating`, `ProgressBar`, `TopicChip`, `SectionHeading`, `Shape`, `ScaledStage`.
2. **`sections/`** holds one component per landing page section, each built from `ui/` pieces.
3. **`pages/`** composes the sections. `HomePage` is basically a list of sections.
4. **`data/`** holds the content: courses, topics, testimonials and so on. The UI simply `map`s over arrays, so adding a course means adding one object, not new JSX.

Reuse examples:

- `CourseCard` appears in the course grid, the growth illustration and the auth illustration. A `metaSize` prop covers the two pill sizes used in the design.
- `HappyStudentsCard` appears in 4 places, and has a `variant="lime"` for the auth pages.

## 3. The layered illustrations (`ScaledStage`)

The hero, growth, creator, CTA and auth illustrations are collages of overlapping pieces: people, cards and 3D shapes. Recreating them with flexbox would be fragile. Instead:

- Each collage is a fixed-size "stage" (for example 1440×520), and every piece is positioned with the exact `left` and `top` values from Figma.
- `ScaledStage` measures the space available with the `useElementWidth` hook, which uses a `ResizeObserver`. It then applies `transform: scale(...)` so the whole collage shrinks proportionally on smaller screens.
- It also sets its own height to `height × scale`, so the content below it moves up correctly.

Result: the composition looks identical to Figma on desktop and never breaks on mobile.

## 4. Filtering and search state lives in the URL

`DiscoverCourses` reads `?topic=` and `?q=` with `useSearchParams` instead of `useState`:

- The category tiles and the hero search are just links (`/?topic=Marketing#courses`), so they don't need shared state or context.
- Filtered views can be shared or bookmarked.
- The filtering logic is a plain function (`utils/courses.js → getVisibleCourses`), which makes it easy to unit test.

`ScrollToTop` handles scrolling: it scrolls to `#courses` when a link includes that hash, and to the top when you move to a new page.

## 5. Forms

- **`utils/validation.js`** holds pure functions that return an error message or `''`. They're shared by all three forms and fully unit tested.
- **`hooks/useForm.js`** handles values, errors and "touched" state:
  - errors appear when you leave a field, or after you submit
  - they update as you type once shown
  - on submit, focus moves to the first invalid field
- **`TextField`** links its label and error to the input (`htmlFor`/`id`, `aria-invalid`, `aria-describedby`), so screen readers read errors out.
- **`useFakeSubmit`** simulates a request because there's no backend. Replacing it is the only change needed to connect a real API.

## 6. Accessibility checklist

- There's one `h1` per page, and the landmarks are `header`, `nav`, `main` and `footer`.
- Every input has a label. Icon-only buttons (menu, cart, social, show password) have an `aria-label`.
- Decorative images use `alt=""`, and the 3D shapes are also `aria-hidden`. The people photos have real alt text.
- There's a skip link, a visible focus ring, and `aria-expanded` / `aria-pressed` on toggles.
- ESLint's `jsx-a11y` plugin catches common mistakes automatically.

## 7. Testing strategy

- **Unit tests** check the logic: validation rules and course filtering.
- **Component tests** use Testing Library and check what a user sees and does. They query by role and label, not by class name, so they keep passing if the styling changes.
- **End-to-end tests** use Playwright and run against the production build. They check every page on desktop and mobile, confirm there's no horizontal scrolling from 320px to 1920px, confirm that all images load, and exercise the key user flows.
- **The mobile tests caught a real bug during development:** the course grid overflowed on phones because a CSS grid column without `minmax(0, 1fr)` grew to fit its content. Adding `grid-cols-1` fixed it.

## 8. What I would add with more time

- Real authentication through an API, plus protected routes.
- The remaining design pages: course list, course details and creator profile. Most of their pieces (`CourseCard`, `TopicChip`, the footer and so on) already exist.
- Visual regression tests that compare screenshots against the Figma frames automatically.
