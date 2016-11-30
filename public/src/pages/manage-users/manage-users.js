import template from './manage-users.html';

export const manageUsers = ({
    template: template,
    controller: manageUsersCtrl
});

function manageUsersCtrl(users) {

    this.users = users.data;
    this.addUser = (username) => {
        this.users[username] = {username};
        this.users.$save();
    };
    this.removeUser = (item) => {
        delete this.users[item.username];
        this.users.$save();
    };

    this.headers = [
        'username',
        'actions'
    ];
}

manageUsersCtrl.$inject = ['users'];