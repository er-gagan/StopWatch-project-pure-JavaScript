let count = seconds = minutes = hours = 0
let watch = document.getElementById("stopwatch")
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let flagBtn = document.getElementById("flag")
let timeoutID = null
stopBtn.hidden = true
flagBtn.hidden = true

let startInterval = () => {
    startBtn.hidden = true
    stopBtn.hidden = false
    flagBtn.hidden = false
    timeoutID = setInterval(() => {
        count += 1
        if (count % 100 == 0) {
            seconds += count / 100
            count = 0
        }
        if (seconds % 60 == 0) {
            minutes += seconds / 60
            seconds = 0
        }
        if (minutes % 60 == 0) {
            hours += minutes / 60
            minutes = 0
        }
        H = String(hours)
        M = String(minutes)
        S = String(seconds)
        MS = String(count)

        H = H.length == 1 ? "0" + H : H
        M = M.length == 1 ? "0" + M : M
        S = S.length == 1 ? "0" + S : S
        MS = MS.length == 1 ? "0" + MS : MS

        watch.innerHTML = H + ":" + M + ":" + S + ":" + MS
    }, 10);
}
startBtn.addEventListener("click", () => startInterval())

stopBtn.addEventListener("click", () => {
    clearInterval(timeoutID)
    startBtn.hidden = false
    flagBtn.hidden = false
    stopBtn.hidden = true
})
flagBtn.addEventListener("click", () => {
    let el = document.createElement("h2")
    el.innerText = watch.innerText
    el.style.margin = "0px";
    document.getElementById("listData").appendChild(el)

})