import template from './add-challenge.html';
import './add-challenge.scss';

export const addChallenge = ({
    template: template,
    controller: addChallengeCtrl,
    bindings: {
        onSubmit: '&',
        type: '<'
    }
});

function addChallengeCtrl() {

    this.send = (description) => {
        this.value = '';
        this.onSubmit({description})
    }
}