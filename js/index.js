setInterval(() => {
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('am-pm')
    
    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')
    
    let hr_dots = document.querySelector('.hr_dot')
    let min_dots = document.querySelector('.min_dot')
    let sec_dots = document.querySelector('.sec_dot')
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = h >= 12 ? 'PM' : 'AM'
    if (h > 12) {
        h = h - 12
    }
    hours.innerHTML =h+ '<br><span>Hours</span>'
    minutes.innerHTML =m+'<br><span>Minutes</span>'
    seconds.innerHTML =s+ '<br><span>Seconds</span>'
    ampm.innerHTML = am
    
    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60
    
    hr_dots.style.transform = `rotate(${h * 30}deg)`
    min_dots.style.transform = `rotate(${m * 6}deg)`
    sec_dots.style.transform=`rotate(${s * 6}deg)`

})