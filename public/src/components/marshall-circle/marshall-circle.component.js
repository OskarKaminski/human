import template from './mashall-circle.component.html';
import './marshall-circle.component.scss';

export const marshallCircleComponent = ({
    template: template,
    controller: marshallCircleCtrl,
    bindings: {
        onClick: '&'
    }
});

function marshallCircleCtrl() {

    this.clicked = (type) => {
        this.type = type;
        this.onClick({type: type});
    }
}