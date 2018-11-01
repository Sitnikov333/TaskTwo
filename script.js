
$(function() {
    var block = $('.block');

    block.wrap('<div class="controls" />');
    $('<button class="down" >Вправо </button>').insertAfter(block);
    $('<button class="up" >Влево</button>').insertAfter(block);

    $('.up').click(function() {
        var currentBlock = $(this).parent();
        var prevBlock = currentBlock.prev();
        swap(currentBlock, prevBlock);
        return false;
    });

    $('.down').click(function() {
        var currentBlock = $(this).parent();
        var nextBlock = currentBlock.next();
        swap(nextBlock, currentBlock);
        return false;
    });
});

function swap(a, b) {
    if (a.size() > 0 && b.size() > 0) {
        a.insertBefore(b);
    }
}

$(document).ready(function(){
    $('.spoiler_links').click(function(){
        $(this).parent().children('.spoiler_body').toggle('normal');
        return false;
    });
});