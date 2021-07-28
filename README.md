# How to start
1. Clone this repo
2. Remove **.gitignore**, **README.md** and **.git**
3. Type `npm i` in console


## Features
1. File including. `@@include('FILE-NAME.html')`
* Note: in HTML `_` before file name is **required** `@@include('_FILE-NAME.html')`
2. Adaptive spoilers.

| Parent attributes | Attribute description |
| --- | --- |
| `data-spoilers` | Non-adaptive spoiler |
| `data-spoiler="992,max"` | Adaptive spoiler working only below 992px width |
| `data-spoiler="768,min"` | Adaptive spoiler working only above 768px width |
| `data-one-spoiler` | Accordion |

<br/>

| Child `button` attributes | Attribute description |
| --- | --- |
| `data-spoiler` | Makes the next sibling element a spoiler content |

3. Gh-pages. Type `npm run deploy` in console to create a **gh-pages** branch with all files from **dist** dir
