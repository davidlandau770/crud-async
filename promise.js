import { log } from "console";
import { randomInt } from "crypto";
import fs from "fs";
// import { setTimeout } from "timers/promises";

// שאלה 1
// function delayedGreet(name, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello " + name);
//         }, delay);
//     })
// }

// delayedGreet("David", 2000).then(res => console.log(res)).catch((err) => console.log(err))

// שאלה 2
// const path = "./db.txtt"
// function readFileContent(path) {
//     return new Promise((res, rej) => {
//         fs.readFile(path, "utf-8", (err, data) => {
//             if (err) return rej("ERROR readFileContent: " + err.message);
//             res(data + "\nThis is my file content.");
//         })
//     })
// }

// readFileContent(path).then((res) => console.log(res)).catch((err) => console.log(err));

// שאלה 3
// function randomOperation() {
//     return new Promise((res, rej) => {
//         const num = randomInt(0, 2);
//         if (num)
//             res("Success!");
//         else {
//             rej("Failure!")
//         }
//     })
// }
// randomOperation().then((res) => console.log(res)).catch((err) => console.log(err));

// שאלה 4
// function raceTimers() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Timer A finished!");
//         }, 2000)
//         setTimeout(() => {
//             res("Timer B finished!");
//         }, 3000)
//     })
// }
// raceTimers().then((res) => console.log(res)).catch((err) => console.log(err));

// שאלה 5
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// function fetchData(url) {
//     return new Promise((res, rej) => {
//         fetch(url).then(x => res(x.json()))
//     })
// }
// console.log(`Received data from ${url}:`);
// fetchData(url).then((res) => console.log(res)).catch((err) => console.log(err));

// שאלה 6
// function waitAll() {
//     const res1 = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("First");
//         }, 1000);
//     })
//     const res2 = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Second");
//         }, 2000);
//     })
//     const res3 = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Third");
//         }, 3000);
//     })
//     return Promise.all([res1, res2, res3]);
// }
// waitAll().then((res) => console.log(res)).catch((err) => console.log(err));

// שאלה 7
// function checkFileExists(path) {
//     const isExists = fs.existsSync(path)
//     return new Promise((res, rej) => {
//         if (isExists) {
//             return res(true)
//         } else {
//             return rej(false)
//         }
//     })
// }
// checkFileExists("./file.txt").then((res) => console.log(res)).catch((err) => console.log(err));

// שאלה 8
function chainedGreetings() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Hi!");
        }, 1000)
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("How are you?");
            }, 2000)
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res("goodbye");
                }, 1000)
            })
        })
    })
}
chainedGreetings().then((res1) => console.log(res1)).catch((err1) => console.log(err1)).then((res2) => console.log(res2)).catch((err2) => console.log(err2)).then((res3) => console.log(res3)).catch((err3) => console.log(err3));




