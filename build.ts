// Library files
await Bun.build({
    entrypoints: [
        './public/js/images.js',
        './public/js/bbcode.js',
        './public/js/history.js',
    ],
    outdir: './public/js/',
    naming: "[dir]/[name].min.[ext]",
    minify: true, // default false
})

// JS files
await Bun.build({
    entrypoints: [
        './public/js/search.js',
        './public/js/audio.js',
    ],
    outdir: './public/js/',
    naming: "[dir]/[name].min.[ext]",
    minify: {
        whitespace: true,
        identifiers: false,
        syntax: true,
    },
})

export { };
