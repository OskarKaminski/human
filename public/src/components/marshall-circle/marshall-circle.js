import template from './mashall-circle.html';
import './marshall-circle.scss';

export const marshallCircle = ({
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