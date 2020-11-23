const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
    timer: document.getElementById("timer-1")
};



class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.targetDate = targetDate;
        this.selector = selector;
        
    }

    intervalId = setInterval(() => {
        const currentDate = Date.now();
        const timeToEnd = this.targetDate - currentDate;
        this.components(timeToEnd);
        this.endOfCountdown(timeToEnd);
    }, 1000);
    

    components(timeToEnd) {
    const days = this.pad(Math.floor(timeToEnd / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((timeToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((timeToEnd % (1000 * 60)) / 1000));
    
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;
    }

    pad(value) { 
        return String(value).padStart(2, '0');
    }; 

    endOfCountdown(timeToEnd) {
        if (timeToEnd === 0) {
            clearInterval(this.intervalId);
        }
    }
 };


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 05, 2021'),
});

