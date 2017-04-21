var Rx = require('rxjs/Rx');

// A subject is a type of observable that lets you programatically emit events
var s1 = new Rx.Subject();

var subscription = s1
// .take(1)
.subscribe({
    next: x => console.log(x),
    error : err => console.error('got an error: ' + err),
    complete : () => console.log('complete')
})

s1.next(1);
s1.next(2);

if(!subscription.closed){
    console.log("Calling unsubscribe");
    subscription.unsubscribe();
}