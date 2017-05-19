Input = function(...innerHTML){
  var $div = $('<input />')
  $div.html(innerHTML);
  return $div;
}

Div = function(...innerHTML){
  var $div = $('<div />')
  $div.html(innerHTML);
  return $div;
}

Button = function(...innerHTML){
  var $button = $("<button />");
  $button.html(innerHTML);
  return $button;
}

Component = function(){
  return {
    refs: {},
    createElement: function(){
      var attrs = arguments;
      var item = $("<" + attrs[0] + " />");
      if(attrs[1]){
        if(attrs[1].ref){
          this.refs[attrs[1].ref] = item
          delete attrs[1].ref
        }
        Object.keys(attrs[1]).forEach(function(key){
          item[key](attrs[1][key])
        })
        if(attrs[2]){
          attrs = Array.apply(null, arguments)
          delete attrs[0];
          delete attrs[1];
          item.html(attrs)
        }
      }
      return item;
    }
  }
}