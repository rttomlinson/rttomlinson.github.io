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
                            src: dataObj.imageSource,
                            alt: "Image of the project"
                        });
                    $a.append($img);
                    $div.append($a);
                    $containerForProjects.prepend($div);
                    //append to .container-for=-projects

                    //Need to add remaining data to modals
                    var $modalFade = $("<div>").addClass("modal fade")
                        .attr({
                            id: `#myModal${index}`,
                            tabindex: "-1",
                            role: "dialog",
                            "aria-labelledby": "exampleModalLabel",
                            "aria-hidden": "true"
                        });
                    var $modalDialog = $("<div>").addClass("modal-dialog")
                        .attr({
                            role: "document"
                        });
                    var $modalContent = $("<div>").addClass("modal-content");
                    var $modalHeader = $("<div>").addClass("modal-header");
                    var $modalTitle = $("<h5>").addClass("modal-title")
                        .attr({
                            id: "exampleModalLabel"
                        })
                        .text(dataObj.name);
                    var $


                    // <!-- Modal -->
                    // <div class="modal fade" id="myModal{{@index}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    //   <div class="modal-dialog" role="document">
                    //     <div class="modal-content">
                    //       <div class="modal-header">
                    //         <h5 class="modal-title" id="exampleModalLabel">{{project.name}}</h5>
                    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    //             <span aria-hidden="true">&times;</span>
                    //           </button>
                    //       </div>
                    //       <div class="modal-body">
                    //         ...
                    //       </div>
                    //       <div class="modal-footer">
                    //         <button type="button" class="btn btn-primary">See it live</button>
                    //         <button type="button" class="btn btn-primary">See it on Github</button>
                    //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </div>
                    // <!-- End Modal------------------->

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
