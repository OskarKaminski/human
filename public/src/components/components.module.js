import angular from 'angular';
import {okTable} from './ok-table/ok-table';
import {navbar} from './navbar/navbar.component';
import {addEntry} from './add-entry/add-entry';
import {addChallengeComponent} from './add-challenge/add-challenge.component';
import {marshallCircleComponent} from './marshall-circle/marshall-circle.component';
import {moodMeter} from './mood-meter/mood-meter.component';

angular.module('components', [])
    .component('okTable', okTable)
    .component('navbar', navbar)
    .component('addEntry', addEntry)
    .component('addChallenge', addChallengeComponent)
    .component('marshallCircle', marshallCircleComponent)
    .component('moodMeter', moodMeter);
