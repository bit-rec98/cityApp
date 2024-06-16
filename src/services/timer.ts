class GetTime{
    hours: number;
    minutes: number;
    seconds: number;
    
    constructor(hours: number, minutes: number, seconds: number){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    };
    formatTime(){
        const formattedHours = this.hours.toString().padStart(2, '0');
        const formattedMinutes = this.minutes.toString().padStart(2, '0');
        const formattedSeconds = this.seconds.toString().padStart(2, '0');

        const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        return formattedTime;
    };
};

class GetDate{
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    };
    
    formatDate(){
        return `${this.day}/${this.month}/${this.year}`;
    };
};

export function setTimeInstance():string{
    const time:Date = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const currentTime = new GetTime(hours, minutes, seconds);
    return currentTime.formatTime();
};

export function setDateInstance():string{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    const currentDate = new GetDate(year, month, day);
    return currentDate.formatDate();
};