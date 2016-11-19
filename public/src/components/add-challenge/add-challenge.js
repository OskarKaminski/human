import template from './add-challenge.html';
import './add-challenge.scss';

export const addChallenge = ({
    template: template,
    bindings: {
        onSubmit: '&',
        type: '<'
    }
});