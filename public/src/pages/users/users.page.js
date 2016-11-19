import template from './users.page.html';

export const users = ({
    template: template,
    controller: usersCtrl
});

function usersCtrl(users) {
    this.users = users.data;
}

usersCtrl.$inject = ['users'];