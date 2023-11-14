let scrol = window.scrollY
let c = 0
let ScrollTime = setInterval(() => {
    if (window.scrollY >= 80) {
        let s = window.scrollY
        if (s > scrol) {
            if (c > -50) {
                c -= 1
            }
            
            document.querySelector('header').style.top = `${c}px`
            scrol = s - 10
        } else {
            if (c < 0) {
                c += 30
            }
            if (c>= 0) {
                c = 0
            }
            document.querySelector('header').style.top = `${c}px`
            scrol = s
        }
    } else {
        document.querySelector('header').style.top = `0px`
    }
}, 5)
export {ScrollTime,c,scrol}