var Rx = require('rxjs/Rx');
var subject = new Rx.Subject();

subject
.flatMap(function (value) {
    console.log(`In flatMap1: '${value}'`);
    if (value === 2) {
        throw "Error";
    } else {
        return Rx.Observable.of(value);
    }
})
.catch(function (value) {
    console.log(`In catch1: '${value}'`);
    throw value;
})
.flatMap(function (value) {
    console.log(`In flatMap2: '${value}'`);
    return Rx.Observable.of(value);
})
.map(function (value) {
    console.log(`In map: '${value}'`);
    return value;
})
.catch(function (e) {
    console.log(`In catch2: '${e}'`);
    return Rx.Observable.of(e);
})
// .do(null, e =>{
//     console.log(`In do failure: '${e}'`);
// })
// .retry()
.subscribe(function (value) {
    console.log(`In subscribe success: '${value}'`);
}, function (e) {
    console.log(`In subscribe failure: '${e}'`);
});

subject.next(1);
subject.next(2);
subject.next(3);