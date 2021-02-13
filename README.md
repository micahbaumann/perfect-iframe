# Perfect Iframe - The one size fits all solution for making responsive iframes

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
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    [your code]...
    <script src="(PATH TO FOLDER)/perfect-iframe-main/perfectiframe.js"></script>
  </body>
</html>
```
## Examples
### Simple Example
Here is a simple example using Perfect Iframe for a YouTube video:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Perfect Iframe Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <iframe width="900" height="506" src="https://www.youtube.com/embed/ScMzIvxBSi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <script src="(PATH TO FOLDER)/perfect-iframe-main/perfectiframe.js"></script>
  </body>
</html>
```
#### Output
![Output](https://github.com/micahbaumann/perfect-iframe/blob/main/examples/images/VID_20210212_231459.gif?raw=true)

### Another Simple Example
Here is a another simple example using Perfect Iframe for a regular website `<iframe>`:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Perfect Iframe Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <iframe width="900" height="506" src="(WEBSITE URL)"></iframe>
    <script src="(PATH TO FOLDER)/perfect-iframe-main/perfectiframe.js"></script>
  </body>
</html>
```
#### Output
![Output](https://github.com/micahbaumann/perfect-iframe/blob/main/examples/images/VID_20210212_234257.gif?raw=true)
## License
This software is distributed under the LGPL 3.0 license. For more information, read the [LICENSE](https://github.com/micahbaumann/perfect-iframe/blob/main/LICENSE) file. In other words, you may use this as you want, just please be respectful and give credit where it is due (this is not legal advice).
## Contributing
Currently, Perfect Iframe is a privately maintained project. If you find any bugs or have any suggestions, please submit them to the [issue tracker](https://github.com/micahbaumann/perfect-iframe/issues).
## Issues
If you find any bugs, please report them to the [issue tracker](https://github.com/micahbaumann/perfect-iframe/issues). If you find a major security vulnerability, please **DO NOT** use the issue tracker. See the [SECURITY](https://github.com/micahbaumann/perfect-iframe/blob/main/SECURITY.md) file for more information.
