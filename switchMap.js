var Rx = require('rxjs/Rx');

var s1 = new Rx.Subject();
var s2 = new Rx.Subject();

// switchMap is similar to flatMap except that if the input changes, it will
// cancel previous input values in the stream that haven't completed yet
var observable = s1.switchMap(x =>{
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