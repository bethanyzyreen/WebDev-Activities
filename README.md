# WebDev-Activities

A collection of hands-on activities and the midterm project for the Web Development course. Each one lives in its own folder.

## Activities

| Folder | Activity | Status |
| --- | --- | --- |
| [`Activity1`](Activity1/) | Bento Layout, **Study Nook** dashboard | Done |
| [`Activity2`](Activity2/) | JSON, **Aethera Pastries** menu (`json.html`) | Done |
| [`midterm_project`](midterm_project/) | Midterm Project, **NARUTOVERSE** character guide (`index.html`) | Done |

## Activity 1: Study Nook (Bento Layout)

A single-page student dashboard built with a bento-style card layout. Open `Activity1/bento.html` in a browser to view it.

### Features

- **Class schedule:** weekly timetable (Mon–Fri) that highlights today's classes, with a live date and time clock.
- **To Do List:** add tasks by subject, tick them off, or delete them.
- **Finished Tasks:** ticked tasks move here automatically; unticking moves them back.
- **Tasks per subject:** bar graph showing done vs. total tasks for each subject. Dark bars mean more tasks are pending, light bars mean mostly done.
- **Motivational quotes:** rotating carousel with a button for the next quote.
- **Saved tasks:** your tasks are stored in the browser (`localStorage`), so they are still there after a refresh.

### Built with

- HTML, with most of the layout done through Bootstrap classes
- [Bootstrap 5.3.8](https://getbootstrap.com/) (loaded from CDN)
- Custom CSS (container queries, CSS variables) for the schedule, chart, and chibi card
- Vanilla JavaScript for saving tasks, the chart, and the clock
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) font from Google Fonts

### Color palette

| Name | Hex |
| --- | --- |
| Lavender 1 | `#EEE8FA` |
| Lavender 2 | `#DDD2F2` |
| Lavender 5 | `#9983C8` |
| Lavender 6 | `#6F58A8` |
| Ink | `#34294F` |
| Ink soft | `#5B4F7D` |
| Page background | `#F4F0FC` |

### Folder structure

```
Activity1/
├── bento.html
└── assets/
    └── img
```

## Activity 2: Aethera Pastries (JSON)

A responsive pastry menu page where every product card is generated from a JSON-style data array. Open `Activity2/json.html` in a browser to view it.

### Features

- **JSON menu data:** the menu is an array of categories (Classic, Sweet, Savory, Spicy), each with its products (name, price, image, info, and an optional `bestSeller` flag). The cards are built from this data, so adding a pastry only needs a new entry.
- **Live search:** filters the cards by name or description as you type, and shows a "Nothing matches" message when there are no results.
- **Category filter:** All, Classic, Sweet, Savory, and Spicy buttons.
- **Price sort:** one button that cycles through A–Z (default), price low to high, and price high to low.
- **Badges:** each card shows its category, and best sellers get a "Best seller" badge.
- **Accessible updates:** a hidden live region announces how many items are shown after each search or filter.

### Built with

- HTML, with most of the layout done through Bootstrap classes
- [Bootstrap 5.3.8](https://getbootstrap.com/) (loaded from CDN)
- Custom CSS (CSS variables) for the colors, buttons, and card text alignment
- Vanilla JavaScript for rendering the JSON data, search, filters, and sorting
- Georgia (system serif) font

### Color palette

| Name | Hex |
| --- | --- |
| Espresso | `#4B3327` |
| Caramel | `#C98B45` |
| Wheat | `#E8C49A` |
| Cream | `#FFF9EF` |
| Peach (page background) | `#F5DCC0` |
| Berry (prices) | `#B5364A` |
| Muted (card text) | `#6B5444` |
| Classic tag | `#8A6D3B` |
| Spicy tag | `#B5481C` |
| Best seller tag | `#07268C` |

### Folder structure

```
Activity2/
├── json.html
└── assets/
    └── img
```

## Midterm Project: NARUTOVERSE

A fan-made Naruto character guide with a glassmorphism and bento-grid design. Open `midterm_project/index.html` in a browser to view it. It needs an internet connection because the characters come from the [Dattebayo API](https://dattebayo-api.onrender.com/characters), which is on a free host and can take a moment to wake up.

### Features

- **Character list:** 12 cards per page, each with the character's picture, ID, name, and a chakra nature badge colored by type.
- **Search:** find a character by name or ID (for example `Naruto` or `30`). Clearing the search returns you to the page you were on.
- **Clan / organization filter:** one dropdown grouped into Clans and Organizations & Villages, with Uchiha and Akatsuki listed first and a count beside each option.
- **Sort:** default (ID), name A–Z, or name Z–A.
- **Pagination and count:** Previous / Next buttons and a "Showing 1–12 of N characters" label.
- **Character details (`view.html`):** a portrait with a Younger / Older appearance switch, chakra nature badge, clan and affiliation, and the Japanese and English voice actors. Sections with no data are hidden.
- **Back to list:** returns to the same page, search, filter, and sort you left, because they are kept in the URL.
- **Smooth loading:** a loading screen fades out once the data and images are ready, and the character list is cached for the session.
- **Hero slideshow:** pictures fade one after another at the top of the list page.
- **Responsive:** 2, 3, or 4 cards per row depending on screen width.

### Built with

- HTML, with most of the layout done through Bootstrap classes
- [Bootstrap 5.3.8](https://getbootstrap.com/) (loaded from CDN)
- Custom CSS (glass panels with a soft liquid-glass sheen, CSS variables) in `assets/css/style.css`
- Vanilla JavaScript: shared helpers in `assets/js/common.js`, plus a script inside each page for the list and the details
- [Dattebayo API](https://dattebayo-api.onrender.com/characters) for the character data
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) font from Google Fonts

### Color palette

| Name | Hex |
| --- | --- |
| Ink (page background) | `#0A0E17` |
| Navy | `#172338` |
| Orange (accent) | `#F08A24` |
| Orange light (hover) | `#F7A445` |
| Red | `#C23B32` |
| Blue (focus ring) | `#6FA8DC` |
| Earth (scrollbar) | `#7A5A3C` |

### Folder structure

```
midterm_project/
├── index.html
├── view.html
└── assets/
    ├── css/
    ├── js/
    └── img
```

## Author

Bethany Zyreen, [@bethanyzyreen](https://github.com/bethanyzyreen)