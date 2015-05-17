import 'angular'
import {defaults} from 'ng-decorate'

// Our one and only angular module.
export var app = angular.module('app', ['ng'])

// Use this module in all directive and service declarations.
defaults.module = app
