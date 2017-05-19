function ButtonControls(data){
    var outerDiv, helloButton, moreText, aNumber;
    /*
     * SETUP
     */
    aNumber = 0

    /*
     * RENDER
     */
    outerDiv = Div(
      [
        helloButton = Button("hello"), 
        "&nbsp;",
        "Click on Hello to See alert!",
        moreText = Div(aNumber)
      ]
    )
    outerDiv.css({color: "#ff0000"})

    /*
     * HANDLERS
     */
    helloButton.click(function(){
      alert("Hello " + data.value);
    })
    outerDiv.on("UP_NUMBER", function(){
      moreText.html(aNumber += 1)
    })
    outerDiv.on("DOWN_NUMBER", function(){
      moreText.html(aNumber -= 1)
    })

    return outerDiv;
}