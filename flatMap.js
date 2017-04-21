var Rx = require('rxjs/Rx');

var s1 = new Rx.Subject();
var s2 = new Rx.Subject();

// flatMap merges two streams into one in a dependent order.  
// In this example, s2 must emit after s1 for there to be
// any output.  We often use it like a Q.then(), but don't
// let its similarity trick you.
var observable = s1.flatMap(x =>{
    return Rx.Observable.zip(Rx.Observable.of(x), s2);
})

var subscription = observable.subscribe({
    next: x => console.log(`s1: ${x[0]}, s2: ${x[1]}`),
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