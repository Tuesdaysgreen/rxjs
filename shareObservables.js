var Rx = require('rxjs/Rx');

// delay() is used to mimic a long-running observable
var ob = Rx.Observable.of(null)
.do(() => {
    console.log("in do")
})
.delay(1000)
.share()
            
ob.subscribe(v => {
    console.log("in sub 1")
})

ob.subscribe(v => {
    console.log("in sub 2")
})
