# Week 2 - Day 2

### Session 2

**SUBMISSION:**

- Download this file
- Fill the answers
- Place the file into the location `~/repos/cohort_3/submissions/<your_folder>/week_02/day_2/session_2` 
- Push the file  back to the online repo

<u>Don't use the web browser or any online tool to answer these questions. Only refer to the notes and apply the basic concepts</u>

Sample Submission

1. Property
```css
value
```
2. Elements
```css
div
.class1
#id1
color
```

The CSS for each problem is mentioned above the HTML Code 



### FSD.CSS.5.1

Split the below mentioned properties into inherited and non-inherited

`color` `font-size` `padding` `margin` `background-color` `border` `display` `float` `text-align` `font-weight` `display` `height` `width` `overflow`  `visiblity` `word-wrap` `z-index` `position` `overflow` `clear`

1. Inherited
```
font-size
color
text-align
font-weight
visibility
word-wrap

```
2. Non-Inherited
```
padding
margin
background-color
border
display
float
padding
height
width
z-index
position
overflow
```



### FSD.CSS.5.2

```css
li:first_child {
    color: red;
}
li:nth-child(6) {
    color: orange;
}
li:nth-child(2n) {
    color: blue;
}
li:nth-child(4n+3) {
    color: purple;
}
li:last_child {
    color: green;
}
```

```html
<ul>
    <li id="id1">1</li>
    <li id="id2">2</li>
    <li id="id3">3</li>
    <li id="id4">4</li>
    <li id="id5">5</li>
    <li id="id6">6</li>
    <li id="id7">7</li>
    <li id="id8">8</li>
    <li id="id9">9</li>
    <li id="id10">10</li>
    <li id="id11">11</li>
    <li id="id12">12</li>
    <li id="id13">13</li>
    <li id="id14">14</li>
    <li id="id15">15</li>
</ul>
```

Fill the colour of all the elements

1. #id1
```
black
```
2. #id2
```
blue
```
3. #id3
```
purple
```
4. #id4
```
blue
```
5. #id5
```
black
```
6. #id6
```
blue
```
7. #id7
```
purple
```
8. #id8
```
blue
```
9. #id9
```
black
```
10. #id10
```
blue
```
11. #id11
```
purple
```
12. #id12
```
blue
```
13. #id13
```
black
```
14. #id14
```
blue
```
15. #id15
```
purple
```



### FSD.CSS.5.3

Fill the specificity score for the selectors

1. `div`
```
0001
```
2. `p + div`
```
0102
```
3. `.class1 + p`
```
0011
```
4. `#id1 > div + p`
```
0102
```
5. `#id1 ~ .class1 > li > a[title]`
```
0122
```
6. `nav > a:hover::before`
```
0013
```
7. `ul#primary-nav li.active`
```
0112
```
8. `li:first-child h2 .title`
```
0022
```
9. `#nav .selected > a:hover`
```
0121
```
10. `#heading nav ul li.disabled`
```
0123
```