let dataLoad = () => {
    return new Promise((resolve, reject) => {
        var verify = true;
        if(verify) {
            setTimeout(()=>{
                resolve("Promise fulfilled")
            }, 5000)
        } else {
            reject("Promise broken")
        }
    })
}

dataLoad().then((message) => {
    console.log("Successfull: ", message);
}).catch((err)=>{
    console.log("Excecution failed: ", err);
});

console.log("continue process")