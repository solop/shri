$(document).ready(function () {
    if ($.browser.msie && $.browser.version == 6) {
        $("body").empty();
        $("body").append("<div style='padding: 20px;text-align: center;font-size: 20pt;color: gray;'>Уважаемый пользователь, Вы пользуетесь устаревшей версией интернет обозравателя (Internet Explorer 6.0) для корректной работы АРМа обновите версию браузера, или используйте алтернативные интернет обозреватели</div>")
    } else {
        $(window).resize();
        $(".query h3").click(function (e) {
            var el=$(this).parent();
            if ($(el).hasClass("hideAnswerIcon")) {
                $(el).removeClass("hideAnswerIcon");
                $(el).addClass("showAnswerIcon");
                $(el).find(".answer").show(100);
            } else {
                $(el).removeClass("showAnswerIcon");
                $(el).addClass("hideAnswerIcon");
                $(el).find(".answer").hide(100);
            }
        });
    }
});
$(window).resize(function () {
    $("#content").css("minHeight", $(window).height() + 'px');
    $("#body").css("minHeight", ($(window).height() - $("#header").outerHeight() - $("#footer").outerHeight()) + 'px');
});

function v_1() {
    $("#v1_l").attr('src', '../image/active_left.gif');
    $($("#v1_l").parents()[0]).next().attr('class', 'selected');
    $("#v1_r").attr('src', '../image/active_right.gif');

    $("#v2_l").attr('src', '../image/inactive_left.gif');
    $($("#v2_l").parents()[0]).next().attr('class', 'unselected');
    $("#v2_r").attr('src', '../image/inactive_right.gif');

    $("#v3_l").attr('src', '../image/inactive_left.gif');
    $($("#v3_l").parents()[0]).next().attr('class', 'unselected');
    $("#v3_r").attr('src', '../image/inactive_right.gif');


    var baseInfo = $("#baseInfo");
    var development = $("#development");
    var statementOfWork = $("#statementOfWork");

    development.hide();
    statementOfWork.hide();
    baseInfo.show();

}
function v_2() {
    $("#v1_l").attr('src', '../image/inactive_left.gif');
    $($("#v1_l").parents()[0]).next().attr('class', 'unselected');
    $("#v1_r").attr('src', '../image/inactive_right.gif');

    $("#v2_l").attr('src', '../image/active_left.gif');
    $($("#v2_l").parents()[0]).next().attr('class', 'selected');
    $("#v2_r").attr('src', '../image/active_right.gif');

    $("#v3_l").attr('src', '../image/inactive_left.gif');
    $($("#v3_l").parents()[0]).next().attr('class', 'unselected');
    $("#v3_r").attr('src', '../image/inactive_right.gif');

    var baseInfo = $("#baseInfo");
    var development = $("#development");
    var statementOfWork = $("#statementOfWork");

    baseInfo.hide();
    statementOfWork.hide();
    development.show();
}
function v_3() {

    $("#v1_l").attr('src', '../image/inactive_left.gif');
    $($("#v1_l").parents()[0]).next().attr('class', 'unselected');
    $("#v1_r").attr('src', '../image/inactive_right.gif');

    $("#v2_l").attr('src', '../image/inactive_left.gif');
    $($("#v2_l").parents()[0]).next().attr('class', 'unselected');
    $("#v2_r").attr('src', '../image/inactive_right.gif');

    $("#v3_l").attr('src', '../image/active_left.gif');
    $($("#v3_l").parents()[0]).next().attr('class', 'selected');
    $("#v3_r").attr('src', '../image/active_right.gif');

    var baseInfo = $("#baseInfo");
    var development = $("#development");
    var statementOfWork = $("#statementOfWork");

    baseInfo.hide();
    development.hide();
    statementOfWork.show();

}

function vv_1() {
    $("#vv1_l").attr('src', '../image/active_left.gif');
    $($("#vv1_l").parents()[0]).next().attr('class', 'selected');
    $("#vv1_r").attr('src', '../image/active_right.gif');

    $("#vv2_l").attr('src', '../image/inactive_left.gif');
    $($("#vv2_l").parents()[0]).next().attr('class', 'unselected');
    $("#vv2_r").attr('src', '../image/inactive_right.gif');

    $("#vv3_l").attr('src', '../image/inactive_left.gif');
    $($("#vv3_l").parents()[0]).next().attr('class', 'unselected');
    $("#vv3_r").attr('src', '../image/inactive_right.gif');

    var bach = $("#bash");
    var python = $("#python");
    var perl = $("#perl");

    perl.hide();
    python.hide();
    bach.show();

}
function vv_2() {
    $("#vv1_l").attr('src', '../image/inactive_left.gif');
    $($("#vv1_l").parents()[0]).next().attr('class', 'unselected');
    $("#vv1_r").attr('src', '../image/inactive_right.gif');

    $("#vv2_l").attr('src', '../image/active_left.gif');
    $($("#vv2_l").parents()[0]).next().attr('class', 'selected');
    $("#vv2_r").attr('src', '../image/active_right.gif');

    $("#vv3_l").attr('src', '../image/inactive_left.gif');
    $($("#vv3_l").parents()[0]).next().attr('class', 'unselected');
    $("#vv3_r").attr('src', '../image/inactive_right.gif');

    var bach = $("#bash");
    var python = $("#python");
    var perl = $("#perl");

    bach.hide();
    perl.hide();
    python.show();
}
function vv_3() {

    $("#vv1_l").attr('src', '../image/inactive_left.gif');
    $($("#vv1_l").parents()[0]).next().attr('class', 'unselected');
    $("#vv1_r").attr('src', '../image/inactive_right.gif');

    $("#vv2_l").attr('src', '../image/inactive_left.gif');
    $($("#vv2_l").parents()[0]).next().attr('class', 'unselected');
    $("#vv2_r").attr('src', '../image/inactive_right.gif');

    $("#vv3_l").attr('src', '../image/active_left.gif');
    $($("#vv3_l").parents()[0]).next().attr('class', 'selected');
    $("#vv3_r").attr('src', '../image/active_right.gif');

    var bach = $("#bash");
    var python = $("#python");
    var perl = $("#perl");

    bach.hide();
    python.hide();
    perl.show();

}