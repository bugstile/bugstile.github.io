var currPage = 1;
var pages = [];
var totalPages;

function updateTracker(val) {
    $('#tracker').text(val);
}

function showPage(val) {
    val.addClass('display').removeClass('hidden');
}

function hidePage(val) {
    val.addClass('hidden').removeClass('display');
}

function createArray(totalPages) {
    for (var i = 1; i <= totalPages; i++) {
        pages.push('#F' + i);
    }
}

function handleDisplay(val, totalPages, oldPage) {
    hidePage($('#F'+oldPage+''));
    showPage($('#F'+val+'')); 
}

function buttonHandler(id) {
    var oldPage = currPage;
    if (id == "bk2lumby") {
        if (currPage != 1) {
            currPage--;
        }
    } else {
        if (currPage != totalPages) {
            currPage++;
        }
    }
    if (oldPage != currPage) {
        updateTracker(currPage);
        handleDisplay(currPage, totalPages, oldPage);
    }
}

$(document).ready(function () {
    totalPages = $('.textContainer').length;
    createArray(totalPages);

    $("button").click(function () {
        var id = $(this).attr('id');
        buttonHandler(id);
    });
});
