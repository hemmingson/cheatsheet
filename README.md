![](assets/favicon.ico)

cheatsheet

`priority` 🔴 🟠 🟡 🔵

---

## Table of Contents

- [resource](#resource)

- [tech stack](#tech-stack)

- [commit message](#commit-message)

- [create row](#create-row)

- [responsive layout](#responsive-layout)

- [performance optimize](#performance-optimize)

## resource

- doc & tutorial

1. [TC39](https://tc39.es/)
1. [MDN](https://developer.mozilla.org/en-US/)
1. [Javascript Info](https://javascript.info/)
1. [HTML Standard](https://html.spec.whatwg.org/)

- book & course

1. [MostlyAdequate](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/)
1. [Harvard CS50](https://online-learning.harvard.edu/course/cs50s-web-programming-python-and-javascript?delta=0)
1. [MIT Online Course](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)

- repo

1. [getify](https://github.com/getify/You-Dont-Know-JS)
1. [33 concepts](https://github.com/leonardomso/33-js-concepts)
1. [clean code](https://github.com/ryanmcdermott/clean-code-javascript)

- blog

1. [Dr. Axel Rauschmayer](https://2ality.com/)
1. [Addy Osmani](https://addyosmani.com/blog/)

- tool

1. [CDN](https://cdnjs.com/)
1. [Can I use](https://caniuse.com/)
1. [Pika](https://www.pika.dev/)
1. [BundlePhobia](https://bundlephobia.com/)

## tech stack

| type     | link                                                |
| -------- | --------------------------------------------------- |
| style    | [styled-components](https://styled-components.com/) |
| bundler  | [parcel](https://parceljs.org/)                     |
| scaffold | [yeoman](https://yeoman.io/)                        |
| command  | [ink](https://github.com/vadimdemedes/ink/)         |

## commit message

1. `feat` new feature

1. `fix` bug fix

1. `docs` documentation changes

1. `style` changes do not affect the meaning of the code

1. `refactor` refactoring

1. `perf` improve performance

1. `test` testing

1. `chore` regular code maintenance

## create row

1. carbon

   1. `theme` one light
   1. `opacity` 0
   1. `window controls` false
   1. `padding` 0
   1. `drop shadow` false
   1. `font` fira code
   1. `export` size 1x svg

1. excalidraw

   1. `export` svg

## responsive layout

1. media queries

   1. `extra small devices` phones, 600px and down
   1. `small devices` portrait tablets and large phones, 600px and up
   1. `medium devices` landscape tablets, 768px and up
   1. `large devices` laptops and desktops, 992px and up
   1. `extra large devices` large laptops and desktops, 1200px and up

1. best practices

   1. design mobile first
   1. decrease call to actions
   1. design without the need to zoom in
   1. fluid web design layout
   1. compress and resize images
   1. use hamburger style navigation header
   1. disable popups

## performance optimize

1. browser
   1. html
      1. avoid inline or embedded code
      1. styles up top, scripts down bottom
      1. try out async attribute
   1. css
      1. minify stylesheets
      1. combine multiple css files
      1. prefer \<link> over @import
   1. javascript
      1. load third party content asynchronously
      1. cache array length
      1. avoid using document.write
      1. minimize repaints and reflows
      1. avoid unnecessary dom manipulation
      1. minify script
      1. combine multiple files into one
   1. image
      1. use css sprites
      1. data uri
      1. don't rescale image in markup
      1. optimize image by lossless, lossy, progressive jpegs, etc.
