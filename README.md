# Perfect Iframe

## Why do you need it?
Making `<iframe>`s responsive is one of the hardest parts of makeing a responsive website. This is commonly done by using a CSS hack. The only problem is that you can't use the same class for every `<iframe>`. You have to have different classes for each aspect ratio. Perfect Iframe solves this problem. All you have to to is put the `width` and `height` attributes with the appropriate values and Perfect Iframe will do the rest!

## Features
 * One size fits all solution for making iframes responsive.
 * Add custom styles simply by putting `data-style="(your custom CSS)"` in the iframe's attributes.

## Requirements
In order for Perfect Iframe to work, you need to have [jQuery](https://jquery.com/) loaded in the page. If you do not already have jQuery in your project, you can include it by downloading it from [jquery.com/download](https://jquery.com/download "Download") or by using the CDN and linking it in your HTML file (see example).

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="(path to file)/jquery-3.5.1.min.js"></script>
  </head>
  <body>

  </body>
</html>
```
