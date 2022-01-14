"use strict";
var App = /** @class */ (function () {
    function App() {
        var main = document.querySelector(".main");
        var template = document.createElement("template");
        template.innerHTML = "<ul class=\"page\"></ul>";
        var container = template.content.firstElementChild;
        var li = document.createElement("template");
        li.innerHTML = "<li>hi</li>";
        console.log(template.content);
        console.log(li);
        container.appendChild(li.content.firstElementChild);
        main.appendChild(container);
    }
    return App;
}());
new App();
