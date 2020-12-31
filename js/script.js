$(function () {
    var params = new URLSearchParams(location.search.slice(1));
    var chord = params.has('chord') ? params.get('chord') : 'Cmaj7';
    $.getJSON('data/chords/' + chord + '.json', function (data) {
        $('#name').html(data.name);
        $('#read>span').html(data.read);
        data.circles.forEach(circle => {
            $('#circle-' + circle).show();
        });
        data.xes.forEach(x => {
            $('#x-' + x).show();
        });
        data.fingers.forEach(finger => {
            $('.finger-' + finger.index).show();
            $('.finger-' + finger.index).addClass('str-' + finger.str);
            $('.finger-' + finger.index).addClass('fret-' + finger.fret);
        });
    });
});