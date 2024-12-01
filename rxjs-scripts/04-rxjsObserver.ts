import { Observable } from 'rxjs';

// ленивая коллекция, потому что при запуске ничего не будет происходить без подписки
const sequence$ = new Observable((subscriber) => {
    let count = 1;
    const interval = setInterval(() => {
        subscriber.next(count++);
        if (count % 5 === 0) {
            clearInterval(interval);
            subscriber.complete();
            return;
        }
    }, 1000);
})

sequence$.subscribe((value) => {
        console.log(value);
    },
    () => {
    },
    () => {
        console.log('completed');
    });