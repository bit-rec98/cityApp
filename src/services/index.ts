import {setTimeInstance} from './timer';
import {setDateInstance} from './timer';

export function displayTimeData(){    
    const clock:Element | null = document.querySelector('#clock-display');
    const actualTime:string = setTimeInstance();
    clock.innerHTML = `${actualTime}`; 
    return clock;
};

export function displayDateData(){
    const dateDisplay: Element | null = document.querySelector('#date-display');
    const actualDate:string = setDateInstance();
    dateDisplay.innerHTML = `${actualDate}`;
    return dateDisplay;
};
