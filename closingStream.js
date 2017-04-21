var Rx = require('rxjs/Rx');

// A subject is a type of observable that lets you programatically emit events
var s1 = new Rx.Subject();

var subscription = s1

// The subscriber can determine when to close the stream based on criteria.
// This is the recommended way to close a stream so that you don't accidentally
// forget to unsubscribe
.take(1)    
.subscribe({
    next: x => console.log(x),
    error : err => console.error('got an error: ' + err),
    complete : () => console.log('complete')
})

s1.next(1);
s1.next(2);
s1.next(3);

// The emitter can choose to end a stream.
// s1.complete();

if(!subscription.closed){
    
    // The subscriber can also unsubscribe manually
    console.log("Calling unsubscribe");
    subscription.unsubscribe();
}