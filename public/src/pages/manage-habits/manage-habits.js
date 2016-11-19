import template from './manage-habits.html';

export const manageHabits = ({
    template: template,
    controller: manageHabitsCtrl
});

function manageHabitsCtrl(habits) {

    this.habits = habits.data;
    this.addHabit = habits.add.bind(habits);
    this.removeHabit = habits.remove.bind(habits);

    this.headers = [
        'name',
        'actions'
    ];
}

manageHabits.$inject = ['habits'];