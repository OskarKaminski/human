import template from './add-challenge.component.html';
import './add-challenge.component.scss';

export const addChallengeComponent = ({
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