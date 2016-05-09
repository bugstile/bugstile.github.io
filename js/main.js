function BrowserAdjust(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    if(y>500){
        $("#header").css("height",y);
        $("#contentContainer").css("margin-top",y);
    }
}

BrowserAdjust();
$(window).resize(function(){
    BrowserAdjust();
});

