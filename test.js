// alert('message')

console.log(Backbone.VERSION);

var object = {};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
    console.log("Triggered " + msg);
});

object.trigger("alert", "an event");

var dispatcher = _.clone(Backbone.Events);


var Sidebar = Backbone.Model.extend({
    promptColor: function() {
        // var cssColor = prompt("Please enter a CSS color:");
        var cssColor = 'red';
        this.set({
            color: cssColor
        });
    }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
    $('body').css({
        background: color
    });
});

sidebar.set({
    color: 'white'
});

sidebar.promptColor();



var Note = Backbone.Model.extend({

  initialize: function() { },

  author: function() { },

  coordinates: function() { },

  allowedToEdit: function(account) {
    return true;
  }

});

var PrivateNote = Note.extend({

  allowedToEdit: function(account) {
    return account.owns(this);
  }

});

var Note = Backbone.Model.extend({
  set: function(attributes, options) {
    Backbone.Model.prototype.set.apply(this, arguments);
  }
});