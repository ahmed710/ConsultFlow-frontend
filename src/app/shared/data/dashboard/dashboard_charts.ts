

export let SessionDeviceData: any = {
    series: [1754, 1234, 878],
    labels: ["Mobile", "Tablet", "Desktop"],
    chart: {
        height: 260,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        fontFamily: "Montserrat, sans-serif",
                        offsetY: -5
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        color: undefined,
                        offsetY: 5,
                        fontWeight: 600,
                        fontFamily: "Montserrat, sans-serif",
                        formatter: function (val:any) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total Audience',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    colors: ["var(--primary-color)","rgb(255, 73, 205)","rgb( 253, 175, 34)"],
}

export let MetricsData: any = {
    series: [
        {
            name: 'Views',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
        },
        {
            name: 'Followers',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
        },
    ],
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        type: 'line',
        height: 330,
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1.1],
        curve: ['straight', 'smooth'],
        dashArray: [0,2]
    },
    legend: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            color: '#e9e9e9',
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "30%",
            borderRadius: 2
        }
    },
}
function generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y,
        });
        i++;
    }
    return series;
}
export let WeekData: any = {
    series: [
        {
            name: "1Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "4Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "8Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "12Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "3Pm",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "7Pm",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "12Pm",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
    ],
    chart: {
        height: 262,
        type: "heatmap",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#32d484"],
    grid: {
        borderColor: "#f2f5f7",
    },
    xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
}
export let AverageData: any = {
    chart: {
        type: 'bar',
        height: 285,
        toolbar: {
            show: false,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        dashArray: [0],
    },
    series: [{
        name: 'Value',
        data: [65, 38, 56, 22, 65, 96, 53]
    }],
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top: 2,
            right: 2,
            bottom: 2,
            left: 2
        },
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisBorder: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 2,
            columnWidth: "30%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["var(--primary-color)"],
    tooltip: {
        enabled: false,
    }
}

export let statisticsData: any = {
    series: [{
        name: 'Profit',
        data: [99, 15, 36, 63, 42, 120, 78, 51, 32, 62, 76, 32],
        type: 'bar',
    }, {
        name: 'Sales',
        data: [136, 150, 158, 115, 102, 156, 135, 151, 125, 68, 164, 163],
        type: 'area',
    }, {
        name: 'Revenue',
        data: [128, 148, 39, 152, 169, 129, 112, 148, 150, 117, 198, 120],
        type: 'line',
    }],
    chart: {
        height: 320,
        type: 'line',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        background: 'none',
        fill: "#fff",
    },
    plotOptions: {
        bar: {
            borderRadius: 2,
            columnWidth: '30%',
        }
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    colors: ["var(--primary-color)", "rgb(255, 73, 205)", "var(--primary03)"],
    background: 'transparent',
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [2, 1.5, 2],
        dashArray: [0, 0, 6]
    },
    legend: {
        show: true,
        position: 'top',
        markers: {
            width: 8,
            height: 8,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        show: false,
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90,
        }
    },
    fill: {
        type: ['solid', 'gradient', 'solid'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(255, 73, 205, 0.1)",
                        opacity: 0.1
                    },
                    {
                        offset: 75,
                        color: "rgba(255, 73, 205, 0.1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(255, 73, 205, 0.2)',
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: 'var(--primary03)',
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: 'var(--primary03)',
                        opacity: 0.1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary03)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
    yaxis: {
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
}

export let TopCategoriesData: any = {
    series: [46000, 28500, 24500, 19600],
    labels: ["Mobile", "Desktop", "Tablet", "Others"],
    chart: {
        height: 255,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 3,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -30
                    },
                    value: {
                        show: true,
                        fontSize: '15px',
                        color: undefined,
                        offsetY: -25,
                        formatter: function (val:any) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    grid: {
        padding: {
            bottom: -100
        }
    },
    colors: ["var(--primary-color)", "rgb(255, 73, 205)", "rgb(50, 212, 132)", "rgb(253, 175, 34)"],
}

export let SchoolRevenue: any = {
    series: [{
        name: 'This Year',
        type: "column",
        data: [44, 30, 57, 80, 90, 55, 70, 43, 23, 54, 77, 34]
    }, {
        name: 'Last Year',
        type: "area",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    chart: {
        height: 320,
        type: 'line',
        stacked: !1,
        toolbar: {
            show: !1
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 0,
            blur: 0,
            color: 'var(--primary-color)',
            opacity: 0.05
        },
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'top',
         show: true,
    },
    colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
    fill: {
        type: ['solid', 'gradient'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(255, 73, 205, 0.1)",
                        opacity: 0.1
                    },
                    {
                        offset: 75,
                        color: "rgba(255, 73, 205, 0.1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(255, 73, 205, 0.2)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
    stroke: {
        width: [1.5, 1.5],
        curve: "smooth",
        dashArray: [0, 4]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    plotOptions: {
        bar: {
            columnWidth: "25%",
            borderRadius: 2
        }
    },
    tooltip: {
        enabled: true,
        theme: "dark",
    }
}

export let studentsData: any = {
    series: [6560, 3354],
    chart: {
        height: 227,
        type: 'donut',
    },
    colors: ["var(--primary-color)", "rgba(255, 73, 205, 1)"],
    labels: ["Boys", "Girls"],
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -5
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        color: undefined,
                        offsetY: 5,
                        fontWeight: 600,
                        formatter: function (val:any) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total Students',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    stroke: {
        width: 0
    },
    dataLabels: {
        enabled: false,
        dropShadow: {
            enabled: false,
        },
    },
}

export let AttendanceData : any = {
    series: [
        {
            name: "Girls",
            data: [44, 42, 57, 86, 58, 55, 45],
        },
        {
            name: "Boys",
            data: [-34, -22, -37, -56, -21, -35, -34],
        },
    ],
    chart: {
        stacked: true,
        type: "bar",
        height: 366,
        toolbar: {
            show: false,
        },
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(253, 175, 34, 1) "],
    plotOptions: {
        bar: {
            borderRadius: 2,
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "all",
            columnWidth: "25%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        fontFamily: "Mulish",
        markers: {
            width: 10,
            height: 10,
        },
    },
    yaxis: {
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    xaxis: {
        type: "month",
        categories: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            rotate: -90,
        },
    },
}

export let ProfileData : any = {
    series: [
        {
            name: "Facebook",
            data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 20],
        },
        {
            name: "Instagram",
            data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 36],
        },
        {
            name: "Twitter",
            data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 68],
        }
    ],
    chart: {
        type: "line",
        height: 320,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: '#000',
            opacity: 0.1
        },
        toolbar: {
            show: false,
        }
    },
    grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true, // Ensure y-axis grids are shown
            },
        },
    },
    colors: [
        "var(--primary-color)",
        "rgba(255, 73, 205, 1)",
        "rgba(50, 212, 132, 1)",
    ],
    stroke: {
        curve: ["smooth", "smooth", "smooth"],
        width: [2, 2, 2],
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        markers: {
            size: 5
        }
    },
    yaxis: {
        title: {
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        // labels: {
        //     formatter: function (y) {
        //         return y.toFixed(0) + "k";
        //     },
        // },
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    },
    tooltip: {
        theme: "dark",
    }
}

export let AudienceData : any = {
    series: [{
        name: 'Male',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Female',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chart: {
        height: 280,
        type: 'radar',
        toolbar: {
            show: false,
        }
    },
    title: {
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ["var(--primary02)", "rgba(255, 73, 205, 0.2)"],
    stroke: {
        width: 1.5,
        colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
    },
    fill: {
        opacity: 0.1
    },
    legend: {
        show: true,
        fontSize: "12px",
        position: 'top',
        horizontalAlign: 'center',
        fontFamily: "Montserrat",
        fontWeight: 500,
        offsetX: 0,
        offsetY: -8,
        height: 50,
        labels: {
            colors: '#9ba5b7',
        },
        markers: {
            size: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 7,
            offsetX: 0,
            offsetY: 0
        },
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
        axisBorder: { show: false },
    },
    yaxis: {
        tickAmount: 5,
        labels: {
            formatter: function (val:any, i:any) {
                if (i % 5 === 0) {
                    return val
                }
            }
        }
    }
}

export let AudienceMetricsData : any = {
    series: [{
        data: [462, 451, 350, 530, 470, 500, 485],
        name: 'Total Audience',
    }],
    chart: {
        type: 'bar',
        height: 375,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            barHeight: '40%',
            borderRadius: 2,
            horizontal: true,
            distributed: true,
        }
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: '#ffffff',
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    colors: ["var(--primary-color)"],
    xaxis: {
        categories: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80'],
        axisBorder: {
            show: true,
            color: '#c7cacd',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#c7cacd',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    },
    tooltip: {
        theme: "dark",
    }
}

function generateData1(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y,
        });
        i++;
    }
    return series;
}

export let EngagementData : any = {
    series: [
        {
            name: "1Am",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "4Am",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "8Am",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "12Am",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "3Pm",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "7Pm",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "12Pm",
            data: generateData1(7, {
                min: 0,
                max: 90,
            }),
        },
    ],
    chart: {
        height: 200,
        type: "heatmap",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#735dff"],
    grid: {
        borderColor: "#f2f5f7",
    },
    xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
}
