var Rx = require('rxjs/Rx');

var error = 'there was an error';

var subject = new Rx.Subject();

function getObservable() {
    return Rx.Observable.of(null);
}


var ob = Rx.Observable.zip(getObservable(), getObservable())
.do(_ => {
    console.log("in do")
})

// Sharing a "HOT" observable means that it will only execute once.
// Delay() is necessary here because it mimics a HOT observable.
// Without it, the "do" operator would still execute 3 times.

// var ob = Rx.Observable.zip(getObservable(), getObservable())
// .do(_ => {
//     console.log("in do")
// })
// .delay(5000)
// .share()
            
ob.subscribe(v => {
    console.log("in sub 1")
})


ob.subscribe(v => {
    console.log("in sub 2")
})

setTimeout(function() {
    ob.subscribe(v => {
    console.log("in sub 3")
})
}, 3000);

// subject
//      .flatMap(function (value) {
//          if (value === 3) {
//             return Rx.Observable.create(function (observer) {
//                 observer.error(error);
//             })
//             // .catch(function(err) {
//             //     return Rx.Observable.of(err + " HANDLED");
//             // });
//          } else {
//              return Rx.Observable.of(value);
//          }
//      })
//      .catch(function (value) {
//          console.log("in first catch with " + value);
//          console.log("throwing")
//          throw value;
//     })
//     .catch(function(value) {
//         console.log("in second catch with " + value);
//         console.log("handling");
//         return Rx.Observable.of(value + " " + "HANDLED");
//     })
//     .flatMap(function (value) {
//         console.log("in flatMap: " + value);
//         return Rx.Observable.of(value);
//     })
//     .map(function (value) {
//         console.log("In map got: '" + value + "'");
//         return value;
//     })
//     .catch(function (e) {
//         console.log("in third catch " + e);
//         return Rx.Observable.of(e);
//     })
//     .onErrorResumeNext(function(value){
//         console.log("onErrorResumeNext");
//     })
//     .subscribe(function (anotherValue) {
//         console.log("In sub got: '" + anotherValue + "'");
//     }, function (e) {
//         console.log("in sub error: " + e);
//     });


// subject.next(2);
// subject.next(3);
// subject.next(4);