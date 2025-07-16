# Copilot Instructions for Crypto Dashboard

## Project Overview
This is a static, responsive cryptocurrency dashboard built with HTML, CSS, and JavaScript. It features a sidebar navigation, main dashboard cards, fast payment badges, investment and transaction sections, and a chart powered by Chart.js. The UI is styled for both desktop and tablet (iPad Pro) screens.

## Key Files & Structure
- `index.html`: Main dashboard layout and markup.
- `styles.css`: All global and responsive styles. Media queries for tablets are at the end of the file.
- `script.js`: Handles chart rendering (Chart.js) and sidebar toggle for responsive navigation.
- `img/`: Contains all icons and images used in the UI.
- `transaction/`, `wallet/`: Subpages with their own HTML and CSS.

## Architecture & Data Flow
- No backend: All data is static or hardcoded in JavaScript.
- Chart data is defined directly in `script.js` and rendered using Chart.js.
- Sidebar and navbar are always present; sidebar visibility is toggled on mobile/tablet via a hamburger menu and JavaScript.

## Responsive Design Patterns
- Uses CSS Grid for desktop layout: `body` is a 3-column grid (sidebar, main, right section).
- For tablets (`max-width: 1024px`), layout switches to single-column, sidebar becomes overlay, and hamburger menu appears.
- Sidebar is hidden by default on tablet/mobile and shown by toggling a `.show` class.
- All card and section layouts adapt using media queries at the end of `styles.css`.

## Developer Workflows
- No build step: Open `index.html` directly in a browser to view the dashboard.
- To add a new chart, update the `datasets` in `script.js` and ensure the canvas with `id="chart"` exists in the HTML.
- To add a new page, create a new HTML file and link it in the sidebar.
- For new images/icons, add to `img/` and reference with relative paths.

## Project-Specific Conventions
- Uses Unicons for all icons via CDN in the HTML `<head>`.
- CSS variables (in `:root`) define all theme colors and spacing.
- All layout and component classes use BEM-like naming (e.g., `.card_header-left`).
- Sidebar navigation uses `<menu>` and `<a>` tags for each section.
- Hamburger menu button: `.nav_menu_btn` (visible on tablet/mobile only).

## Integration Points
- Chart.js is loaded via CDN in `index.html`.
- No external data sources or APIs are used.

## Example Patterns
- Sidebar toggle:
  ```js
  const menuBtn = document.querySelector('.nav_menu_btn');
  const sidebar = document.querySelector('.sidebar');
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
  ```
- Responsive sidebar CSS:
  ```css
  @media screen and (max-width: 1024px) {
    .sidebar { display: none; }
    .sidebar.show { display: flex; }
  }
  ```

## Key Files to Reference
- `index.html`, `styles.css`, `script.js`, `img/`

---
If you add new features, follow the existing structure and responsive patterns. For questions, check the end of `styles.css` for responsive rules and `script.js` for UI logic.
