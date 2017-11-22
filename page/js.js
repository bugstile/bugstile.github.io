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
    for (var i = 0; i <= totalPages; i++) {
        var x = $('#F' + i);
        pages.push(x);
    }
}

function handleDisplay(val, totalPages) {
    for (var i = 0; i <= totalPages; i++) {
        if (i != val) {
            hidePage(pages[i]);
        } else {
            showPage(pages[i]);
        }
    }
}

function buttonHandler(id) {
    var temp = currPage;
    if (id == "bk2lumby") {
        if (currPage != 1) {
            currPage--;
        }
    } else {
        if (currPage != totalPages) {
            currPage++;
        }
    }
    if (temp != currPage) {
        updateTracker(currPage);
        handleDisplay(currPage, totalPages);
    }
}

$(document).ready(function () {
    totalPages = $('.textContainer').length;

    $("button").click(function () {
        var id = $(this).attr('id');
        createArray(totalPages);
        buttonHandler(id);
    });
});
