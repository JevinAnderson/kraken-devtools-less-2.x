# kraken devtools less 2.x

### Configuration

`less`, `sass`, `stylus`, `dustjs`, and a static `copier` plugin are available to use. To enable, set the `module` and `files` properties in your `config`, e.g.:

```json
{
  "less-2.x": {
    "module": "kraken-devtools-less-2.x",
    "files": "/css/**/*.css",
    "paths": ["./css", "../"],
    "ext": "less"
  }
}
```
