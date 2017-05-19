$(document).ready(function() {
  var data = {}
  $inputControls = InputControls();
  $inputControls.on("Change", function(e, value){
    data.value = value;
  })

  $buttonControls = ButtonControls(data);
  $upButton = Button("+")
  $upButton.on("click", function(){
    $buttonControls.trigger("UP_NUMBER")
  })
  $downButton = Button("-")
  $downButton.on("click", function(){
    $buttonControls.trigger("DOWN_NUMBER")
  })
  $(document.body).html([$inputControls, $buttonControls, $downButton, $upButton])
});
