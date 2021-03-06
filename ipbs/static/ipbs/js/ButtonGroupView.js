;(function(define){
'use strict';
 /**
  * The browser-side counterpart to Panel
  *
  * @author Nicholas Bollweg
  * @copyright Nicholas Bollweg 2014
  * @version 0.1.0
  * @license BSD
  */
define([
  'widgets/js/manager',
  'widgets/js/widget',
  'widgets/js/widget_box',
  'jquery',
  'underscore',
  './mixins/Classy'
],
function(manager, widget, box, $, _, Classy){
  var classy = Classy(box.BoxView, [
    {prefix: "btn-group-", field: "size"},
    // missing hyphen not a typo!
    {prefix: "btn-group",  field: "orientation"},
    {prefix: "btn-group-", field: "justification"}
  ]);
  
  var ButtonGroupView = classy.extend({
    tagName: 'div',
    className: 'ipbs ButtonGroupView'
  }); // /extend

  // Register the PanelView with the widget manager.
  manager.WidgetManager.register_widget_view(
    'ipbs/ButtonGroupView',
    ButtonGroupView
  );
  
  // Eventually, requirejs will be used directly: be ready.
  return {
    'ipbs/ButtonGroupView': ButtonGroupView
  };
});
}).call(this, this.define);