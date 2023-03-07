const inp = document.getElementById("search");

inp.addEventListener('input', (e) => {
    let val = e.target.value;
    processChange(val)
})

const cb = (val) => {
    document.querySelector('.debounce').textContent = val;
}

function debounce(cb, delay = 1000) {
    let timer;
    console.log(args);
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            cb.apply(this, args);
        }, delay);
    }
}

const processChange = debounce((val) => cb(val));