"use strict";

$(document).ready(function() {
    console.log("nice");
    $.ajax({
            url: "https://rttomlinson-public-projects.herokuapp.com/",
            beforeSend: function(xhr) {
                //xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        })
        .done(function(data) {
            if (console && console.log) {
                console.log("Sample of data:", data.slice(0, 100));
                let $containerForProjects = $(".container-for-projects");
                data.forEach(function(dataObj, index) {
                    //make project holder element
                    var $div = $("<div>").addClass("col-md-4 project-holder");
                    var $a = $("<a>").attr({
                        type: "button",
                        "data-toggle": "modal",
                        "data-target": `#myModal${index}`
                    });
                    var $img = $("<img>").addClass("img-responsive center-block highlightable")
                        .attr({
                            src: data.imageSource,
                            alt: "Image of the project"
                        });
                    $a.append($img);
                    $div.append($a);
                    $containerForProjects.prepend($div);
                    //append to .container-for=-projects

                    //Need to add remaining data to modals


                });


            }
        });
    //Get JSON from the heroku_projects pages

    //Target class .container-for-projects

    // <div class="col-md-4 project-holder">
    //   <a type="button" data-toggle="modal" data-target="#myModal{{@index}}">
    //     <img class="img-responsive center-block highlightable" src={{project.imageSource}} alt="Placeholder image">
    //   </a>
    // </div>
})
