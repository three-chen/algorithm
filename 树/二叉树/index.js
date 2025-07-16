let timer = null
const printContent = (str) => {
    console.log(str)
}
const sleep = (time, light) => {
    return new Promise((resolve, reject) => {
        printContent(light)
        clearInterval(timer)
        timer = setInterval(() => {
            printContent(light)
        }, 1000)
        setTimeout(resolve, time)
    })
}

const main = async () => {
    while (true) {
        await sleep(5000, '红灯')
        await sleep(2000, '黄灯')
        await sleep(3000, '绿灯')
    }
}

main()