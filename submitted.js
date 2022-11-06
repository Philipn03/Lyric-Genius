
let serverUrl = "http://127.0.0.1:5000/"
function load() {
    const urlParams = new URLSearchParams(window.location.search);
    const count = urlParams.get('count');
    const total = urlParams.get('total');
    document.getElementById('correct').innerHTML = count;
    document.getElementById('totalNum').innerHTML = total;
    document.getElementById('percentage').innerHTML = (100*count)/total;
}
