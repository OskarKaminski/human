import {Router} from '@angular/router';
import {store} from '../store/store';
import {Subject} from 'rxjs';

export class AuthGuard {
    constructor (router) {
        this.router = router;
        this.currentUser = new Subject();
        store.subscribe(() => {
            const currentUserExist = !!store.getState().currentUser.id;
            if(currentUserExist){
                this.currentUser.next(currentUserExist);
            }
        })
    }

    canActivate () {
        return this.currentUser;
    }
}
AuthGuard.parameters = [
    [Router]
];
