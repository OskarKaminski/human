import {Users} from './users';

export class Awards {
    constructor (_users) {
        this.users = _users;
    }

    award(userId, habitId){
        this.users.newAwardO.next({userId, habitId});
    }
}

Awards.parameters = [
    [Users]
];
