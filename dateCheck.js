$(document).ready(function() {
    // 获取当前日期
    var currentDate = new Date();

    // 定义多个时间段
    var dateRanges = [
        { start: new Date(currentDate.getFullYear(), 11, 9), end: new Date(currentDate.getFullYear(), 11, 11) },
        { start: new Date(currentDate.getFullYear(), 11, 13), end: new Date(currentDate.getFullYear(), 11, 13) },
        // 添加更多时间段...
    ];

    // 检查当前日期是否在任何一个时间段内
    var isInAnyRange = dateRanges.some(function(range) {
        return currentDate >= range.start && currentDate <= range.end;
    });

    // 根据检查结果添加或删除黑白效果的CSS类
    if (isInAnyRange) {
        $('body').addClass('grayscale');
    } else {
        $('body').removeClass('grayscale');
    }
});
