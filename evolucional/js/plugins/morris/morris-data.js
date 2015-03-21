// Morris.js Charts sample data for SB Admin template

$(function() {

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Avançado",
            value: 12
        }, {
            label: "Proficiente",
            value: 30
        }, {
            label: "Básico",
            value: 20
        }, {
            label: "Insuficiente",
            value: 20
        }],
        colors: ['#33CC33', '#CCFF66', '#FFCC66', '#FF6600'],
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart-1',
        data: [{
            label: "Avançado",
            value: 12
        }, {
            label: "Proficiente",
            value: 30
        }, {
            label: "Básico",
            value: 20
        }, {
            label: "Insuficiente",
            value: 20
        }],
        colors: ['#33CC33', '#CCFF66', '#FFCC66', '#FF6600'],
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart-2',
        data: [{
            label: "Avançado",
            value: 12
        }, {
            label: "Proficiente",
            value: 30
        }, {
            label: "Básico",
            value: 20
        }, {
            label: "Insuficiente",
            value: 20
        }],
        colors: ['#33CC33', '#CCFF66', '#FFCC66', '#FF6600'],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            Saeb: 02,
            KA: 35
        }, {
            d: '2012-10-02',
            Saeb: 83,
            KA: 34
        }, {
            d: '2012-10-03',
            Saeb: 20,
            KA: 35
        }, {
            d: '2012-10-04',
            Saeb: 39,
            KA: 35
        }, {
            d: '2012-10-05',
            Saeb: 92,
            KA: 28
        }, {
            d: '2012-10-06',
            Saeb: 59,
            KA: 35
        }, {
            d: '2012-10-07',
            Saeb: 90,
            KA: 27
        }, {
            d: '2012-10-08',
            Saeb: 80,
            KA: 35
        }, {
            d: '2012-10-09',
            Saeb: 92,
            KA: 35
        }, {
            d: '2012-10-10',
            Saeb: 20,
            KA: 65
        }, {
            d: '2012-10-11',
            Saeb: 82,
            KA: 35
        }, {
            d: '2012-10-12',
            Saeb: 89,
            KA: 27
        }, {
            d: '2012-10-13',
            Saeb: 19,
            KA: 31
        }, {
            d: '2012-10-14',
            Saeb: 49,
            KA: 21
        }, {
            d: '2012-10-15',
            Saeb: 70,
            KA: 35
        }, {
            d: '2012-10-16',
            Saeb: 63,
            KA: 35
        }, {
            d: '2012-10-17',
            Saeb: 92,
            KA: 16
        }, {
            d: '2012-10-18',
            Saeb: 24,
            KA: 14
        }, {
            d: '2012-10-19',
            Saeb: 29,
            KA: 87
        }, {
            d: '2012-10-20',
            Saeb: 29,
            KA: 35
        }, {
            d: '2012-10-21',
            Saeb: 39,
            KA: 34
        }, {
            d: '2012-10-22',
            Saeb: 90,
            KA: 35
        }, {
            d: '2012-10-23',
            Saeb: 12,
            KA: 18
        }, {
            d: '2012-10-24',
            Saeb: 93,
            KA: 12
        }, {
            d: '2012-10-25',
            Saeb: 83,
            KA: 10
        }, {
            d: '2012-10-26',
            Saeb: 48,
            KA: 27
        }, {
            d: '2012-10-27',
            Saeb: 23,
            KA: 35
        }, {
            d: '2012-10-28',
            Saeb: 90,
            KA: 35
        }, {
            d: '2012-10-29',
            Saeb: 20,
            KA: 35
        }, {
            d: '2012-10-30',
            Saeb: 29,
            KA: 47
        }, {
            d: '2012-10-31',
            Saeb: 100,
            KA: 34
        }, ],
        // The name of the data record attribute that contains x-Saebs.
        xkey: 'd',
        // A list of names of data record attributes that contain y-Saebs.
        ykeys: ['Saeb', 'KA'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Sistema de Avaliação Educação Básica', 'Khan Academy'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'iPhone',
            geekbench: 136
        }, {
            device: 'iPhone 3G',
            geekbench: 137
        }, {
            device: 'iPhone 3GS',
            geekbench: 275
        }, {
            device: 'iPhone 4',
            geekbench: 380
        }, {
            device: 'iPhone 4S',
            geekbench: 655
        }, {
            device: 'iPhone 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
