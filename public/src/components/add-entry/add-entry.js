import template from './add-entry.html';

export const addEntry = ({
    template: template,
    transclude: true,
    bindings: {
        onSubmit: '&',
        label: '@'
    }
});