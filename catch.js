var Rx = require('rxjs/Rx');
var subject = new Rx.Subject();

var subscription = subject
.flatMap(x => {
    console.log(`flatMap: '${x}'`);
    if (x === 2) {
        throw "Error, x is 2";
    }

    return Rx.Observable.of(x);

})
.catch(err => {
    console.log(`In catch: '${err}'`);
    // throw err;
    return Rx.Observable.of(err);
})
.subscribe(x => {
    console.log(`Success: '${x}'`);
}, function (err) {
    console.log(`Failure: '${err}'`);
});

subject.next(1);
subject.next(2);
subject.next(3);

if(!subscription.closed){
    console.log("Calling unsubscribe");
    subscription.unsubscribe();
}