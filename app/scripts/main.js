/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'backbone-nested-model': {
            deps: [
                'jquery',
                'underscore',
                'backbone'
            ],
            exports: 'Backbone.NestedModel'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        'backbone-nested-model': '../bower_components/backbone-nested-model/backbone-nested',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
    'backbone',
    'backbone-nested-model'
], function (Backbone) {

    var Person = Backbone.NestedModel.extend({
        defaults: {
            name:  {
                first: 'firstName',
                last: 'lastName'
            }
        },
        fullName: function() {
            return this.get('name.first') + ' ' + this.get('name.last');
        }
    });

    var alice = new Person({
        name: {
            first: 'Alice',
            last: 'Cooper'
        }
    });

    console.log(alice.fullName());
    $('.hero-unit').html('<h1>' + alice.fullName() + '</h1>');
});
