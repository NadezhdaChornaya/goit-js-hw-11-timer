
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.refs = {
            blockDays: this.selector.querySelector('span[data-value="days"]'),
            blockHours: this.selector.querySelector('span[data-value="hours"]'),
            blockMins: this.selector.querySelector('span[data-value="mins"]'),
            blockSecs: this.selector.querySelector('span[data-value="secs"]')
        };
    }


    timer = setInterval(() => {
        const currentDate = Date.now();
        const time = this.targetDate - currentDate;
        this.updateTimer(time);
    }, 1000);
    updateTimer(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.refs.blockDays.textContent = `${days}`;
        this.refs.blockHours.textContent = `${hours}`;
        this.refs.blockMins.textContent = `${mins}`;
        this.refs.blockSecs.textContent = `${secs}`;
    }
    pad(value) {
        return String(value).padStart(2, "0");
    }
}





new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 19, 2020'),
});

const a = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Dec 31, 2020'),
});



