import angular from 'angular';
import {marshallValues} from './marshall-values';

angular.module('filters', [])
    .filter('marshallValues', marshallValues);