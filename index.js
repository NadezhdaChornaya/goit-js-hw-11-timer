this.refs = {
    blockDays: this.selector.querySelector('span[data-value="days"]'),
    blockHours: this.selector.querySelector('span[data-value="hours"]'),
    blockMins: this.selector.querySelector('span[data-value="mins"]'),
    blockSecs: this.selector.querySelector('span[data-value="secs"]')
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    updateTimer(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }
    pad(value) {
        return String(value).padStart(2, "0");
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 19, 2020'),
});



// const timer = () => {
//     const startTime = Date.now();
// setInterval(() => {
//     const currentTime = Date.now();
//     const deltaTime = currentTime - startTime;
// },1000)
//    

// }


// const pad = (value) => {
//     return String(value).padStart(2, "0");
// }
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);