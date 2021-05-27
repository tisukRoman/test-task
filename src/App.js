import React from 'react'
import { concat, interval, Observable, Subject, of, timer } from 'rxjs';
import { startWith, scan, takeWhile, repeatWhen, filter, takeUntil, map, retryWhen, tap, delayWhen } from 'rxjs/operators';
import './App.css'

const action = new Subject(); // actions
const start = action.pipe(filter(a => a === 'start'));
const stop = action.pipe(filter(a => a === 'stop'));

const secObserv = interval(200).pipe( // counts till one minute
  map(sec => {
    if (sec > 59) {
      throw sec;
    }
    return sec + 1;
  }),
  retryWhen(errors =>
    errors.pipe(
      tap(sec => console.log(`one minute!`)),
    )
  )
);

const minObserv = interval(12000).pipe( // counts till one hour
  tap(min => console.log(min)),
  map(min => {
    if (min > 59) {
      throw min;
    }
    return min + 1;
  }),
  retryWhen(errors =>
    errors.pipe(
      tap(min => console.log(`one hour!`)),
    )
  )
);

const hourObserv = interval(720000).pipe( // counts till 24 hours
  map(hour => {
    if (hour > 59) {
      throw hour;
    }
    return hour + 1;
  }),
  retryWhen(errors =>
    errors.pipe(
      tap(min => console.log(`24 hours!`)),
    )
  )
);



const counterStop = concat(secObserv, of(0)).pipe(
  repeatWhen(() => start)
)
const observable = concat(counterStop.pipe(
  takeUntil(stop)), of(0)
)


export default React.memo(function App() {

  const [work, setWork] = React.useState(false);

  const [seconds, incSecond] = React.useState(0);
  const [minutes, incMinutes] = React.useState(0);
  const [hours, incHours] = React.useState(0);

 

  React.useEffect(() => {
    console.log(work)

    if (work) {
      secObserv.subscribe(incSecond);
      minObserv.subscribe(incMinutes);
      hourObserv.subscribe(incHours);
    }
    if (!work) {
      secObserv.subscribe(incSecond).unsubscribe();
      minObserv.subscribe(incMinutes).unsubscribe();
      hourObserv.subscribe(incHours).unsubscribe();
    }

  }, [work])


  return (
    <div className="wrapper">
      <div className="clock">
        <div> {hours} h </div>
        <div> : </div>
        <div> {minutes} m </div>
        <div> : </div>
        <div> {seconds} s </div>
      </div>

      <div className="buttons">
        <button onClick={() => setWork(true)}> START</button>
        <button onClick={() => setWork(false)}>STOP</button>
      </div>

    </div>
  );
})

