//body loaded
        function go() {
            //store men or not
            var men = false;
            //document loaded
            $(document).ready(function() {
                //window resized
                function resize() {
                    //if mobile viewport size
                    if (document.body.parentNode.clientWidth+17 <= 550) {
                        if (!men) {
                            //menu type
                            men = true;
                            //hide menu
                            $("#menu").hide();
                            //display button
                            $("#pull").css("display","block");
                        }
                    } else {    //larger viewport
                        //non-collapsible
                        men = false;
                        //show the menu
                        $("#menu").show();
                        //hide the button
                        $("#pull").css("display","none");
                    }
                }
                
                //window resized
                $(window).resize(resize);
                //initialize
                resize();
                
                //drawer clicked
                $("#pull").click(function() {
                    //toggle menu
                    $("#menu").toggle(500);
                });
            }) 
        }