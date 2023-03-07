//Taking 5 sec to exec
let dataLoad = async (cb) => {
    await setTimeout(() => {
        cb(true, "received successful")
    }, 5000)
}

//callback function
const cb = (flag, message) => {
    if (flag) {
        console.log("Data", message);
    } else {
        console.log("Somethin went wrong!!")
    }
}

//service call
dataLoad(cb);
console.log("Continue excecution")