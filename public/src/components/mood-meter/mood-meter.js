import template from './mood-meter.html';
import './mood-meter.scss';

export const moodMeter = ({
    template: template,
    controller: moodMeterCtrl,
    bindings: {
        current: '<',
        onChange: '&'
    }
});

function moodMeterCtrl() {

    this.emoji = {
        perfect: '😁',
        well: '🙂',
        sad: '😢',
        angry: '😤'
    };

    this.changeMood = (value) => {
        this.current = value;
        this.onChange({value})
    }
}