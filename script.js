
window.addEventListener("DOMContentLoaded", (event) => {
    const xhrTheScript = new XMLHttpRequest();
    const xhrTheTest = new XMLHttpRequest();
    xhrTheScript.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           document.querySelector("#theScript").innerText = this.responseText;
        }
    };
    xhrTheTest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           document.querySelector("#theTest").innerText = this.responseText;
        }
    };
    
    xhrTheScript.open("GET", "thescript.js", true);
    xhrTheScript.send();
    xhrTheScript.open("GET", "thescript.test.js", true);
    xhrTheScript.send();
    
});
