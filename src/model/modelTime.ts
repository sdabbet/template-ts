class TimeModel {
    private hours: number;
    private minutes: number;

    constructor() {
        this.hours = 0;
        this.minutes = 0;
    }

    incrementMinutes() {
        this.minutes++;
    }

    incrementHours() {
        this.hours++;
    }

}