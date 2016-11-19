import template from './manage-users.html';

export const manageUsers = ({
    template: template,
    controller: manageUsersCtrl
});

function manageUsersCtrl(users) {

    this.users = users.data;
    this.addUser = users.add.bind(users);
    this.removeUser = users.remove.bind(users);

    this.headers = [
        'name',
        'actions'
    ];
}

manageUsersCtrl.$inject = ['users'];