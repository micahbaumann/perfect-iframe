# Perfect Iframe

## Why do you need it?
Making `<iframe>`s responsive is one of the hardest parts of makeing a responsive website. This is commonly done by using a CSS hack. The only problem is that you can't use the same class for every `<iframe>`. You have to have different classes for each aspect ratio. Perfect Iframe solves this problem. All you have to to is put the `width` and `height` attributes with the appropriate values and Perfect Iframe will do the rest!

## Features
 * One size fits all solution for making iframes responsive.
 * Add custom styles simply by putting `data-style="(your custom CSS)"` in the iframe's attributes.

## Requirements
In order for Perfect Iframe to work, you need to have [jQuery](https://jquery.com/) loaded in the page. If you do not already have jQuery in your project, you can include it by downloading it from [jquery.com/download](https://jquery.com/download "Download") or by using the CDN and linking it in your HTML file (see example).
### Downloaded:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="(PATH TO FILE)/jquery-3.5.1.min.js"></script>
  </head>
  <body>

  </body>
</html>
```
### CDN:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>

  </body>
</html>
```
#### OR:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
  </head>
  <body>

  </body>
</html>
```
#### OR:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  </head>
  <body>

  </body>
</html>
```
## Loading
To load Perfect Iframe download Perfect Iframe, unzip the folder, and insert `<script src="(PATH TO FOLDER)/perfect-iframe/perfectiframe.js"></script>` at the bottom of your code (see example).
### Load Perfect Iframe:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    [your code]...
    <script src="(PATH TO FOLDER)/perfect-iframe/perfectiframe.js"></script>
  </body>
</html>
```
