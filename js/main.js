$(document).ready(function(){
    var popup = '<div class="pop"></div>';
    var menu = $(".menu-hover");
    // slide left menu button burger
    $(".button-click").click(function(){
        $(".slide-left").css({"left":"0"});
        $("body").append(popup);
        $(".x-man").css({"left":"0"})
    });
    $("body").on("click",".pop", function(){
        $(".slide-left").css({"left":"-100%"});
        $(".x-man").css({"left":"-200px"})
        $(this).remove();
    });
    $(".x-man").click(function(){
        $(".slide-left").css({"left":"-100%"});
        $(".pop").remove();
        $(".x-man").css({"left":"-200px"})
    })


// drop down user
    $(".col-12").on("click",".nav-menu .fa-user",function(){
        $(".drop-down").css({"top":"0px"});
  })    
    $(".drop-down").on("click", "ul .fa-xmark",function(){
        $(".drop-down").css({"top":"-300px"});
});
// view list
// $(".bar-menu ul li").hover(function(){
//     var eThis =$(this);
//     eThis.val();
//     if(eThis.val()==0){
//         $(".menu-hover").show(function(){
//             $(this).mouseenter();
//         },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//         $(".menu-hover").mouseleave(function(){
//             $(this).hide();
//         }
//         ));
//     }else if(eThis.val()==1){
//         $(".menu-hover1").toggle();
//         $(".parent-menu:nth-child(3)").empty();
//     }else if(eThis.val()==2){
//         alert("working");
//     }
//     else if(eThis.val()==3){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }
//     else if(eThis.val()==2){
//         alert("tongneath");
//     }

// });


// $(".bar-menu ul li").hover(function(){
//     $(".menu-hover").show(function(){
//         $(this).mouseenter();
//     });
// },$(".menu-hover").mouseleave(function(){
//     $(this).hide();
// }));


// $(".bar-menu ul li").hover(function(){
//     var ethis =$(this).val();
//     if(ethis==0){
//         $(".menu-hover").show(function(){
//             $(this).mouseenter();
//         });
//         $(".menu-hover").mouseleave(function(){
//             $(this).hide();
//         });
//     }
//     else if(ethis==1){
//         $(".menu-hover1").show(function(){
//             $(this).mouseenter();
//         })
//         $(".menu-hover1").mouseleave(function(){
//             $(this).hide();
//         })
//     }
//     else if(ethis==2){
//         $(".menu-hover").show(function(){
//             $(this).mouseenter();
//         })
//         $(".menu-hover").mouseleave(function(){
//             $(this).hide();
//         })

//     }
    
// });
// $(".bar-menu ul li").hover(function(){
//     var ethis =$(this);
//     ethis.val();
//     if(ethis.val()==0){
//       $(".menu-hover").show(function(){
//         $(this).mouseenter();
//       });
//       $(".menu-hover").hover(function(){
//         $(this).hide();
//       });
//     } 
// });


$(".bar-menu ul li").click(function(){
    var ethis=$(this).val();
    if(ethis==0){
        $(".menu-hover").toggle();
        $(".menu-hover1").hide();
    }else if(ethis==1){
        $(".menu-hover1").toggle();
        $(".menu-hover").hide();
    }
})




// menu list
// var mylist ={
//     "Sale":"1",
//     "New":"2",
//     "Clothing":"3",
//     "Dress":"4",
//     "Shoes":"5",
//     "Gifting":"6",
//     "Sportwear":"7",
//     "Accessories":"8",
//     "Winter":"9",
//     "Topshop":"10",
//     "Face+Body":"11",
//     "Brand":"12",
//     "Outlet":"13",
//     "Marketplace":"14",
// }   
// myMenu();
// function myMenu(){
//     var txt= " ";
//    for(i in mylist){
//     txt +="<li><a>"+i+"</a></li>";
//    }
//    $(".boss").find(".bar-menu ul").html(txt);
        
// }
// slide menu

var slideMenu ={
    "New In Date":"1",
    "Brand":"1",
    "Discount":"1",
    "Sale/New Season":"1",
    "Activity":"1",
    "Category":"1",
    "Product Type":"1",
    "Style":"1",
    "Colour":"1",
    "Bodyfit":"1",
    "Size":"1",
    "Price Range":"1",
}
slide();
function slide(){
    var txt='';
    for (e in slideMenu){
        txt += "<li><a>"+e+"</a></li>";
    }
    $(".sort-and-by").find(".offcanvas-body ul").html(txt);
}
// animation
var opt=0;
$(".ting").click(function(){
    if(opt==0){
        $(".text-pano").css({"height":"100px"});
        opt=1;
    }else{
        $(".text-pano").css({"height":"152.59px"});
        opt=0;
    }
});
 


});
// javascript

const spider = document.querySelector(".spider");
const pop3 = document.querySelector(".popup3");
const pop2 = document.querySelector(".popup2");
const xmark = document.querySelector(".kvaeng");

// even
spider.addEventListener("click", function(){
    pop3.classList.add("active");
    pop2.classList.add("active");
});

xmark.addEventListener("click", function(){
    pop3.classList.remove("active");
    pop2.classList.remove("active");
});


