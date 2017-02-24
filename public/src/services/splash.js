import {Subject} from 'rxjs';

export class Splash {

    constructor() {
        this.splashO = new Subject();
    }

    show(data) {
        this.splashO.next(data);
    }
}
