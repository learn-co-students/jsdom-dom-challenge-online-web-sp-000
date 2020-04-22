use underscore to flag function as private
build a conditional that checks if the argument is an array

```js
function _toConsumableArray(a) {
```

build a conditional to check if argument(a) is an array

```js
  if (Array.isArray(a)) {
```

if true: 
build a for loop
the loop should return a copy of the argument array --why? I think this is a way of cleaning the data/confirming that what we have is an aray that js can handle/parse.

build functionality such that the `counter` will increase by 1 while the `counter` is less than the length of the argument (a)/array, which should be referenced using array constructor.

set the constructed array[counterValue] equal to argument[counterValue]

```js
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
```

`return the new constructed array made from argument(a)
```js
    return Array.from(a);
```


return the length of Array(argument(a))
```js
    return c;
  }
}
```
assign [playing] to the value !0 aka false

```js
var playing = !0,
```
// create timer function and have it return a 

create a function [timer] that will trigger [setInterval] which will return
a function that will increase the [counter] 
element once every second.
don't forget that you'll need to parse the data

note: setTimeout time is calculated in milliseconds
1e3 = 1000 ms = 1 second


```js
setInterval function
  timer = function () {
    return setInterval(function () {
      // inside the function hook (a) to GEBID "counter"
      var a = document.getElementById("counter"),
        //   hook (b) to parseInt method with an argument of a.innerText
        b = parseInt(a.innerText);
        a.innerText = b + 1;
  
    }, 1e3);
  },
  ```

hook variables to elements of the DOM node tree
I'm not sure why we use GEBID for all except for the last element which uses GEBTagName
maybe it's because the last one is a form.
```js
  interval = timer(),
  minus = document.getElementById("minus"),
  plus = document.getElementById("plus"),
  heart = document.getElementById("heart"),
  pause = document.getElementById("pause"),
  commentForm = document.getElementsByTagName("form")[0];
```

hook addEventListeners to each dom hooked [variables]
add the desired functionality for each [variable]/element

functionality: subtract
```js
  minus.addEventListener("click", function () {
      var a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b - 1;
}),
```

functionality: add
```js
  plus.addEventListener("click", function () {
    var a = document.getElementById("counter"),
      b = parseInt(a.innerText);
    a.innerText = b + 1;
  }),
```

functionality: heart/like
add eventlistener
connect variables for counter, counter innerText, likes, void 0
```js
  heart.addEventListener("click", function () {
    var a = document.getElementById("counter"),
      b = parseInt(a.innerText),
      c = document.querySelector(".likes"),
      d = void 0;
```

create a conditional that checks if the argument is an [array]
if true

```js
    if ([]
        .concat(_toConsumableArray(c.children))
****        .map(function (a) {
          return parseInt(a.dataset.num);
        })
        .includes(b)
    ) {
      d = document.querySelector('[data-num="' + b + '"]');
```

# PLACEHOLDER 1
```js
      var e = parseInt(d.children[0].innerText);
      d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else (d = document.createElement("li")).setAttribute("data-num", b), (d.innerHTML = b + " has been liked <span>1</span> time"), c.appendChild(d);
  }),

  ```
# PLACEHOLDER 2a
pause.addEventListener("click", function () {
  playing
    ? ((playing = !1), clearInterval(interval), (this.innerText = "resume"))
    : ((playing = !0), (interval = timer()), (this.innerText = "pause")),
    []
# PLACEHOLDER 2b
      .concat(_toConsumableArray(document.getElementsByTagName("button")))
      .forEach(function (a) {
        "pause" !== a.id && (a.disabled = !playing);
      });
});,

# PLACEHOLDER 3
  commentForm.addEventListener("submit", function (a) {
    a.preventDefault();
    var b = this.children[0],
      c = b.value;
    b.value = "";
    var d = document.querySelector(".comments"),
      e = document.createElement("p");
    (e.innerText = c), d.appendChild(e);
  });

