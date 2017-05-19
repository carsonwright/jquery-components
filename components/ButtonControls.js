function ButtonControls(data){
    var outerDiv, helloButton, moreText, aNumber;
    /*
     * SETUP
     */
    aNumber = 0
    var React = Component();
    /*
     * RENDER
     */
    outerDiv = React.createElement(
      "div",
      { ref: "test" },
      "Testing",
      React.createElement(
        "i",
        {ref: "moreText"},
        " "
      )
    );

    outerDiv.css({color: "#ff0000"})

    /*
     * HANDLERS
     */
    React.refs.test.on("click", function(){
      alert("Hello " + data.value);
    })
    outerDiv.on("UP_NUMBER", function(){
      console.log(React.refs.moreText)
      React.refs.moreText.html(aNumber += 1)
    })
    outerDiv.on("DOWN_NUMBER", function(){
      React.refs.moreText.html(aNumber -= 1)
    })

    console.log(React.refs)

    return outerDiv;
}