import {Subject} from 'rxjs/Subject';

export class Splash {

    constructor() {
        this.splashO = new Subject();
    }

    show(data) {
        this.splashO.next(data);
    }
}
