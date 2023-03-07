
// Clouser
function outer() {
    var i = 0;
    function inner() {
        var data = "Database"
        console.log("inner ", i)
    }
    return inner
}
outer()