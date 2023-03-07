// Callback 
function longtask(callback) {
    setTimeout(callback, 5000);
}

function callback() {
    console.log("Callback function");
}

longtask(callback);