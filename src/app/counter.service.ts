import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    activeToInactiveCounter = 0;
    InactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('A to I: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.InactiveToActiveCounter++;
        console.log('I to A: ' + this.InactiveToActiveCounter);
    }
}
