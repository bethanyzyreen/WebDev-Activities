# WebDev-Activities

A collection of hands-on activities for Web Development course. Each activity lives in its own folder.

## Activities

| Folder | Activity | Status |
| --- | --- | --- |
| [`Activity1`](Activity1/) | Bento Layout, **Study Nook** dashboard | Done |
| [`Activity2`](Activity2/) | JSON (`json.html`) | In progress |
| [`Activity3`](Activity3/) | TBA | Not started |

## Activity 1: Study Nook (Bento Layout)

A single-page student dashboard built with a bento-style card layout. Open `Activity1/bento.html` in a browser to view it.

### Features

- **Class schedule:** weekly timetable (Mon–Fri) that highlights today's classes, with a live date and time clock.
- **To Do List:** add tasks by subject, tick them off, or delete them.
- **Finished Tasks:** ticked tasks move here automatically; unticking moves them back.
- **Tasks per subject:** bar graph showing done vs. total tasks for each subject. Dark bars mean more tasks are pending, light bars mean mostly done.
- **Motivational quotes:** rotating carousel with a button for the next quote.
- **Saved tasks:** your tasks are stored in the browser (`localStorage`), so they are still there after a refresh.
- **Responsive:** the cards rearrange for phones, tablets, and desktop. On large screens everything fits in one screen without page scroll.

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
    └── img/
        ├── Group13.svg   (favicon)
        ├── Group20.svg
        └── chibi.jpeg
```

## How to run

No install or build step is needed.

1. Clone the repo:
   ```bash
   git clone https://github.com/bethanyzyreen/WebDev-Activities.git
   ```
2. Open the activity's HTML file (for example `Activity1/bento.html`) in any modern browser.
3. An internet connection is needed for the Bootstrap and Google Fonts CDN links.

## Author

Bethany Zyreen, [@bethanyzyreen](https://github.com/bethanyzyreen)
