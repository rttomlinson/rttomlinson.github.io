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
