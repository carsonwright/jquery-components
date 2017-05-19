function InputControls(data){
    var $outerDiv, $input, message;

    /*
     * RENDER
     */
    $outerDiv = (
      Div(
        $input = Input()
      )
    )

    /*
     * HANDLERS
     */
    $input.on("change", function(e){
      message = e.target.value
      $outerDiv.trigger("Change", message);
    })

    return $outerDiv;
}