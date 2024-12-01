import { interval } from 'rxjs';

const sequence = interval(1000);

const sub1 = sequence.subscribe((v) => {
    console.log(v);
})

setTimeout(()=> {
    sequence.subscribe((v)=> {
        console.log(v);
    })
}, 5000)