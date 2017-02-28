import {Pipe} from '@angular/core';
import _ from 'lodash/lodash.min';

export class KeysPipe {
    transform (object) {
        if (object) {
            return _.toArray(object)
        }
    }
}

KeysPipe.annotations = [
    new Pipe({
        name: 'keys'
    })
]
