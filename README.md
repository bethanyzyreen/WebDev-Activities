# WebDev-Activities

A collection of hands-on activities for Web Development course. Each activity lives in its own folder.

## Activities

| Folder | Activity | Status |
| --- | --- | --- |
| [`Activity1`](Activity1/) | Bento Layout, **Study Nook** dashboard | Done |
| [`Activity2`](Activity2/) | JSON, **Aethera Pastries** menu (`json.html`) | Done |
| [`Activity3`](Activity3/) | TBA | Coming soon |

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

## Author

Bethany Zyreen, [@bethanyzyreen](https://github.com/bethanyzyreen)