// $(document).ready(function(){
//     $('.spoiler_links').click(function(){
//         $(this).parent().children('div.spoiler_body').toggle('normal');
//         return false;
//     });
// });
$(document).ready(function(){
    $('.spoiler_links').click(function(){
        $(this).parent().children('div.spoiler_body').toggle('normal');
        return false;
    });
});

// $(function() {
//     var block = $('.block');
//     block.wrap('<div class="controls" />');
//     $('<a class="down" href="#">Вниз</a>').insertAfter(block);
//     $('<a class="up" href="#">Вверх</a>').insertAfter(block);
//
//     $('.up').click(function() {
//         var currentBlock = $(this).parent();
//         var prevBlock = currentBlock.prev();
//         swap(currentBlock, prevBlock);
//         return false;
//     });
//
//     $('.down').click(function() {
//         var currentBlock = $(this).parent();
//         var nextBlock = currentBlock.next();
//         swap(nextBlock, currentBlock);
//         return false;
//     });
// });
//
// function swap(a, b) {
//     if (a.size() > 0 && b.size() > 0) {
//         a.insertBefore(b);
//     }
// }

jQuery.fn.swap = function(b){
    // method from: http://blog.pengoworks.com/index.cfm/2008/9/24/A-quick-and-dirty-swap-method-for-jQuery
    b = jQuery(b)[0];
    var a = this[0];
    var t = a.parentNode.insertBefore(document.createTextNode(''), a);
    b.parentNode.insertBefore(a, b);
    t.parentNode.insertBefore(b, t);
    t.parentNode.removeChild(t);
    return this;
};


$( ".block" ).draggable({ revert: true, helper: "clone" });

$( ".block" ).droppable({
    accept: ".block",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {

        var draggable = ui.draggable, droppable = $(this),
            dragPos = draggable.position(), dropPos = droppable.position();

        draggable.css({
            left: dropPos.left+'px',
            top: dropPos.top+'px'
        });

        droppable.css({
            left: dragPos.left+'px',
            top: dragPos.top+'px'
        });
        draggable.swap(droppable);
    }
});