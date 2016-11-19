import angular from 'angular';
import {okTable} from './ok-table/ok-table';
import {navbar} from './navbar/navbar';
import {addEntry} from './add-entry/add-entry';

angular.module('components', [])
    .component('okTable', okTable)
    .component('navbar', navbar)
    .component('addEntry', addEntry);
