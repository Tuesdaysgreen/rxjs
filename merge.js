var Rx = require('rxjs/Rx');

var s1 = new Rx.Subject();
var s2 = new Rx.Subject();

var obs = s1.merge(s2);

var subscription = obs.subscribe(
    function (x) {
        console.log(`${x}`);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

s1.next('a');
s1.next('b');

s2.next('x');

s1.next('c');
s2.next('y');

subscription.unsubscribe();