var Rx = require('rxjs/Rx');

var s1 = new Rx.Subject();
var s2 = new Rx.Subject();

// merges two streams into one and outputs as they occur
var observable = s1.merge(s2);

var subscription = observable.subscribe({
    next: x => console.log(x),
    error : err => console.error('got an error: ' + err),
    complete : () => console.log('complete')
})

// [a, b,....c,..]
// [..... x,....y]

s1.next('a');
s1.next('b');

s2.next('x');

s1.next('c');
s2.next('y');

if(!subscription.closed){
    console.log("Calling unsubscribe");
    subscription.unsubscribe();
}