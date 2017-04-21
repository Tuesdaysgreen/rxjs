var Rx = require('rxjs/Rx');

var error = 'there was an error';

// delay() is used to mimic a HOT observable, which has a long-running stream.
var ob = Rx.Observable.zip(
    Rx.Observable.of(null),
    Rx.Observable.of(null))
.do(() => {
    console.log("in do")
})
.delay(1000)
// .share()
            
ob.subscribe(v => {
    console.log("in sub 1")
})


ob.subscribe(v => {
    console.log("in sub 2")
})
