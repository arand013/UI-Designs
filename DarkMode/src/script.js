
   
var modeswitch = document.getElementById("modeswitch");
// var theme = document.querySelector("link");
var isWhite = true;


modeswitch.addEventListener('click', function() {
    if (isWhite == true) {
        // document.getElementById("#stylesheet").href = "style2.css"
        // stylesheet.setAttribute('href', 'style2.css')
        document.querySelector("link[href='style.css']").href = "style2.css";
        isWhite = false;
        modeswitch.textContent = "Go Light"
    } else {
        // document.getElementById("#stylesheet").href = "style.css"
        // stylesheet.setAttribute('href', 'style.css')
        document.querySelector("link[href='style2.css']").href = "style.css";
        // isWhite = false
        isWhite = true
        modeswitch.textContent = "Go Dark"
    }
})

modeswitch.addEventListener('click', function() {

    var theme = document.getElementById("#theme");

    if (isWhite == true) {
        theme.setAttribute('href', 'style2.css');
        isWhite = false;
    } else {
        theme.setAttribute('href', 'style.css');
    }
})

modeswitch.addEventListener('click', function() {
        // document.querySelector("link").setAttribute('href', "style2.css");
        console.log("hey");
        document.querySelector("link[href='style.css']").href = "style2.css";
        isWhite = false
    })
modeswitch.addEventListener("click", function() {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "style.css") {
        theme.href = "style2.css";
    } else {
        theme.href = "style.css";
    }
});
