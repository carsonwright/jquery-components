Component("Greeter", function(data){
    /*
     * Handlers
     */
    var com = this
    this.inputHandler = function(){
        this.on("keydown", function(e){
            var value = e.target.value
            com.$state.value = value;
            com.$state.trigger("UPDATE_VALUE");
        })
    }
    this.buttonHandler = function(){
        this.on("click", function(){
            alert("Hello " + com.$state.value)
        })
    }
    this.displayName = function(){
        com.$state.on("UPDATE_VALUE", function(e, value){
            this.html(com.$state.value)
        }.bind(this))

        com.$state.trigger("change")
    }

    /*
     * RENDER
     */
    with(this){
        html(
            div(
                "Type Your Name",
                input(inputHandler),
                br(),
                div("Hello"), " ", div(displayName)
            )
        )
    }
    
    return this;
})