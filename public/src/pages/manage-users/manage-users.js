import template from './manage-users.html';

export const manageUsers = ({
    template: template,
    controller: manageUsersCtrl
});

function manageUsersCtrl(users) {

    this.users = users.data;
    this.addUser = (user) => {
        this.users[user.uid] = {
            id: user.uid,
            email: user.email
        };
        this.users.$save();
    };
    this.removeUser = (item) => {
        delete this.users[item.username];
        this.users.$save();
    };

    this.headers = [
        {
            label: 'username',
            prop: 'email'
        }
    ];
}

manageUsersCtrl.$inject = ['users'];