$("button").click(function() {
    var username = $(".username").val();
    var fruit = $(".fruit").val();
    var week = $(".week").val();

    console.log(username);
    console.log(fruit);
    console.log(week);
    week = week * 1352;

    var total = week * 26 * 52;
    console.log(total);
    $("div").text("hello " + username + " By the year 2045, you will have eaten " + total + " " + fruit);
});