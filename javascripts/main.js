"use strict";

$(document).ready(function() {
    console.log("nice");
    $.ajax({
            url: "https://personal-projects-rttomlinson.c9users.io/projects/?count=3",
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
                    $containerForProjects.append($div);
                    //append to .container-for=-projects

                    //Need to add remaining data to modals
                    var $modalFade = $("<div>").addClass("modal fade")
                        .attr({
                            id: `myModal${index}`,
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
                    var $button = $("<button>").addClass("close")
                        .attr({
                            type: "button",
                            "data-dismiss": "modal",
                            "aria-label": "Close"
                        });
                    var $span = $("<span>").attr({
                        "aria-hidden": "true"
                    });

                    var $modalBody = $("<div>").addClass("modal-body").text(dataObj.description);

                    var $modalFooter = $("<div>").addClass("modal-footer");
                    var $modalButtonWeb = $("<a>").attr({
                        href: dataObj.url
                    }).append($("<button>").addClass("btn btn-primary").attr({
                        type: "button"
                    }).text("See it live"));
                    var $modalButtonGit = $("<a>").attr({
                        href: dataObj.github
                    }).append($("<button>").addClass("btn btn-primary").attr({
                        type: "button"
                    }).text("See it on Github"));
                    var $modalButtonClose = $("<button>").addClass("btn btn-secondary").attr({
                        type: "button",
                        "data-dismiss": "modal"
                    }).text("Close");
                    $modalFooter.append($modalButtonWeb, $modalButtonGit, $modalButtonClose);
                    // attach buttons to footer
                    //add span to button
                    $button.append($span);
                    //add title to header then button
                    $modalHeader.append($modalTitle, $button);
                    //Add to modalContent -> modalHeader, modalBody, modalFooter
                    $modalContent.append($modalHeader, $modalBody, $modalFooter);
                    //Add content to dialog
                    $modalDialog.append($modalContent);
                    //Add to modalFade
                    $modalFade.append($modalDialog);
                    //Add to modal-holder div
                    $("footer").after($modalFade);

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
