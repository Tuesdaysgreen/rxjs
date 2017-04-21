var Rx = require('rxjs/Rx');

// Emit increasing integer every sec
var interval = Rx.Observable.interval(1000);

//throttle for 2 seconds, emit latest value
var observable = interval.throttleTime(2000).take(3);

var subscription = observable.subscribe({
    next: x => console.log(x),
    error : err => console.error('got an error: ' + err),
    complete : () => console.log('complete')
})