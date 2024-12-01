//вспоминаем паттер Observer

interface IListener {
    next(message: string): void;
}

class Producer {
    private listener: IListener[] = [];

    public subscribe(listener: IListener) {
        const index = this.listener.push(listener);
        return {
            unsubscribe: () => {
                this.listener.splice(index-1, 1);
            }
        }
    }

    public notify(message: string) {
        this.listener.forEach((listener) => {
            listener.next(message)
        });
    }
}

const listener1 = {
    next(message: string) {
        console.log('listener1: ', message);
    }
}

const listener2 = {
    next(message: string) {
        console.log('listener2: ', message);
    }
}

const notifier = new Producer();

const sub1 = notifier.subscribe(listener1);
const sub2 = notifier.subscribe(listener2);

notifier.notify('Hi all RxJS is awesome');

sub1.unsubscribe();

setInterval(() => notifier.notify('After unsubscribe'), 5000);