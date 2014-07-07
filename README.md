# Clean Dust

This module solves problem with globally shared namespace for templates and helpers in `dustjs-linkedin` by cleaning node.js require cache before each require of dust (so each time you call this module, you will get totally fresh instance of dust). Useful for having more templates (or helpers) with the same name in different places of app.

## Usage

```
npm install clean-dust
```

```javascript
var cleanDust = require('clean-dust')

// replace yours
var dust = require('dustjs-linkedin')
// with
var dust = cleanDust()
```

## License

MIT
