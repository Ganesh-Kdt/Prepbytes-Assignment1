$(document).ready( function() {
$("button.additembtn").on("click",()=>{
    var a= $("<div></div>").addClass("addcontainer").append([$("<div></div>").addClass("addnewlist").text("Add New List"),
            $("<div></div>").addClass("insideaddcontainer"),$("<div></div>").addClass("btncontainer").
            append([$("<button></button>").addClass("addbtn").attr("id","id1").text("Add"),$("<button></button>").addClass("addbtn").attr("id","id2").text("Close")])]);
    $("div#tasklistid").after(a);  
    $("#id2").on("click",()=>{
        $(".addcontainer").remove();
    })
    $("#id1").on("click",()=>{
        var b=$("<div></div>").addClass("innerdiv");
        $(".maincontainer").append(b);
    })
});
});
