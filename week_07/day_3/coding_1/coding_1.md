#### Coding Session 1

```
Submit to respective folders
```

**Complete the questions by hand and submit your answers in the space provided**

**_You cannot and should not use any JavaScript compliers! Any use of online or offline compliers is considered cheating!_**

#### FSD.JS.16.1

######

1. What is the value of arr. If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [55, 200, 215, 230, 280];
arr.map(a => a * 10);
```

Answer

```
[550,2000,2150,2300,2800]
```

2. What is the value of b?

```javascript
const func = a => (a === 1 ? 1 : a * func(a - 1));
b = func(5);
```

Answer

```
120
```

3. What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [55, 200, 215, 230, 280];
arr.map(a => a % 10);
```

Answer

```
[5,0,5,0,0]
```

4. What is the value of `z`?

```javascript
var x = 110;
const y = x => x++;
x++;
z = y(101);
```

Answer

```
101
```

5.  What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [220, 200, 215, 205, 280];
arr.filter(a => a > 220);
```

Answer

```
[280]
```

6.  What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [55, 200, 215, 230, 280];
arr.filter(a => a > 200);
```

Answer

```
[215,230,280]
```

7. What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [55, 200, 300, 230, 280];
arr.reduce((a, b) => (a > b ? a : b));
```

Answer

```
300
```

8.  What is the value of `arr`? If the answer is in an array please use [num1,num2,num3] format

```javascript
arr = [55, 200, 300, 230, 280];
arr.reduce((a, b) => (a > b ? a + 100 : b));
```

Answer

```
500
```

9. What is the value of `x` and `y` ?

```javascript
var x = 110;
const z = a => {
  var x = 100;
  const y = a + 10;
  return y;
};
y = z(90);
```

Answer

```
x = 110, y = 100
```
