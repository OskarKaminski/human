import {Users} from './users';

export class Awards {
    constructor (_users) {
        this.users = _users;
    }

    award(userId, habitId){
        this.users.addPoint(userId, habitId);
    }
}

Awards.parameters = [
    [Users]
];
