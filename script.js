// Work toggling

// const workElem = document.querySelector('#main2');
// const actualWord = workElem.innerHTML
// let arrayOfWords = actualWord.split('')
// let i = arrayOfWords.length - 1

// function removeWord() {
//     let intervalFun = setInterval(() => {
//         if (i >= 0) {
//             // Remove characters one  by one:
//             arrayOfWords.splice(i, 1)
//             let filtredArray = arrayOfWords.filter((char, index) => index !== i)
//             let modifiedWord = filtredArray.join('')
//             console.log(modifiedWord)
//             i--;
//             workElem.innerHTML = `${modifiedWord}|`;
//         }
//         else {
//             // clearInterval(intervalFun)
//             writeWord();
//         }
//     }, 100);
// }

// setInterval(() => {
//     removeWord()
//     console.log('hello')
// }, 2000);

// function writeWord() {
//     if (workElem.innerHTML === "|") {
//         let j = 0;
//         let writeFunc = setInterval(() => {
//             let charArray = ['P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'E', 'R'];
//             if (j < charArray.length) {
//                 workElem.innerHTML = `${charArray.slice(0, j + 1).join('')}|`;
//                 j++;
//             } else {
//                 clearInterval(writeFunc);
//             }
//         }, 70);
//     }
// }


// const element = document.querySelector('#main2')
// const textLoad = () =>{
//     setTimeout(()=>{
//         element.textContent = 'FREELANCER'
//         console.log('Yes')
//     }, 0)
//     setTimeout(()=>{
//         element.textContent = 'PHOTOGRAPHER'
//         console.log('Yes')
//     }, 3000)
//     setTimeout(()=>{
//         element.textContent = 'PROGRAMMER'
//         console.log('Yes')
//     }, 4000)
// }
// textLoad();


const myArray = [ 'PROGRAMMER', 'PHOTOGRAPHER']; 
let index = 0;
const element = document.querySelector('#main2')
setInterval(() => {
    console.log(myArray[index]);
    element.textContent = myArray[index]
    index = (index + 1) % myArray.length;

}, 4000);

// On scroll animation 
// let section = document.querySelectorAll('#porfolioHeading');

// window.onscroll = () =>{
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;

//         if(top <= offset){
//             sec.classList.add('headings')
//         }
//         else{
//             sec.classList.remove('headings')
//         }
//     });
// }





// circle progress:
function progress(circleProgress, numberProgress, value) {
    let circularProgress = document.querySelector(circleProgress);
    let progressNumber = document.querySelector(numberProgress);

    let progressStart = 0;
    let progressEnd = value;

    let progressFun = setInterval(() => {
        progressStart++;

        circularProgress.style.background = `conic-gradient(red ${progressStart * 3.6}deg, rgb(54, 53, 53) 0deg)`;
        progressNumber.textContent = `${progressStart}.0%`

        if (progressStart == progressEnd) {
            clearInterval(progressFun);
        }
    }, 20)
}
progress('#HTMLcircle', '.HTMLprogressNumber', 90);
progress('#CSScircle', '.CSSprogressNumber', 80);
progress('#JScircle', '.JSprogressNumber', 70);
progress('#bootstrapCircle', '.bootstrapprogressNumber', 80);

// number figure progress:
function numberFigureProgress(actualElem, limit) {
    const targetEmlem = document.querySelector(actualElem)

    let progressStart = 0;
    const progressEnd = limit;

    const progFun = setInterval(() => {
        progressStart++;
        targetEmlem.innerHTML = `${progressStart} /-`;

        if (progressStart === progressEnd) {
            clearInterval(progFun);
        }
    }, 20);
}
numberFigureProgress('#workHours', 124)
numberFigureProgress('#projectDone', 36)
numberFigureProgress('#cutomerSatisfation', 99)
numberFigureProgress('#awardWins', 27)

// close navbar after clicking on any link:
document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('#navbarSupportedContent a')
    const navbar = document.querySelector('#navbarSupportedContent')

    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove("show")
        })
    })
})

