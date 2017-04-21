var Rx = require('rxjs/Rx');

var s1 = new Rx.Subject();

var observable = s1.filter(x =>{
    return x !== 2;
})

var subscription = observable.subscribe({
    next: x => console.log(x),
    error : err => console.error('got an error: ' + err),
    complete : () => console.log('complete')
})

s1.next(1);
s1.next(2);
s1.next(3);

if(!subscription.closed){
    console.log("Calling unsubscribe");
    subscription.unsubscribe();
}