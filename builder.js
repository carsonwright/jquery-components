function Builder() {
  var bd = {
    element: function (){
      var tag = arguments[0];
      var args = arguments[1];

      var item = $('<' + tag + '/>');

      if(typeof args[0] == "function"){
        var cb = args[0];
        delete args[0];
        
        cb.apply(item);
      }

      if(args.length != 0){
        var args = Array.apply(null, args);
        item.html(args);
      }

      return item;
    },
    input: function(){
      return this.element("input", arguments);
    },
    div: function(){
      return this.element("div", arguments);
    },
    button: function(){
      return this.element("button", arguments);
    },
    br: function(){
      return this.element("br", arguments)
    }
  }

  var $component = bd.div();
  Object.keys(bd).forEach(function(key){
    $component[key] = bd[key]
  })
  $component.$state = $({});
  
  return $component;
}
Components = {};
Component = function(name, cb){
  var com = Builder();
  
  cb = cb.bind(com);
  Components[name] = cb;
  return cb;
}