import angular from 'angular';
import {okTable} from './ok-table/ok-table';
import {navbar} from './navbar/navbar';
import {addEntry} from './add-entry/add-entry';
import {addChallengeComponent} from './add-challenge/add-challenge.component';
import {marshallCircle} from './marshall-circle/marshall-circle';
import {moodMeter} from './mood-meter/mood-meter';

angular.module('components', [])
    .component('okTable', okTable)
    .component('navbar', navbar)
    .component('addEntry', addEntry)
    .component('addChallenge', addChallengeComponent)
    .component('marshallCircle', marshallCircle)
    .component('moodMeter', moodMeter);
