# Story Explorer

This is a browser-based tool for exploring generated story experiments.

## Features

- Browse through different story experiments
- View each generation of stories
- See the personalities used for generation
- View visualizations and analysis graphs for each experiment

## Using the Explorer

1. Open `index.html` in your browser
2. Select a story from the sidebar to view
3. Use the sidebar navigation to switch between story generations
4. Each generation shows the personality profile used and the resulting story

## GitHub Pages Deployment

This explorer is designed to work with GitHub Pages. To deploy:

1. Push this repository to GitHub
2. Enable GitHub Pages in your repository settings
3. Set the source to the branch containing these files

The explorer will work without a server, loading stories and visualizations directly from the static file structure.

## File Structure

```
/
├── index.html          # Main application file
├── README.md           # This documentation
└── experiments/        # Story experiments directory
    ├── StoryFolder1/   # Individual experiment folders
    │   ├── output0.json # Story data
    │   └── *.png       # Visualization images
    └── StoryFolder2/
        └── ...
```

## Local Development

For local testing, you can use any simple HTTP server:

```
npx http-server
```

or

```
python -m http.server
```

Then navigate to `http://localhost:8080` or the port shown in your terminal.
