export let statCards = [
  {
    title: 'Total Revenue',
    value: '$46,658',
    change: '0.45%',
    changeType: 'up',
    changeNote: 'this month',
    color: 'primary',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"></path></g></svg>`
  },
  {
    title: 'Refund Requests',
    value: '4,654',
    change: '4.43%',
    changeType: 'up',
    changeNote: 'this month',
    color: 'secondary',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></svg>`
  },
  {
    title: 'Total Orders',
    value: '25,853',
    change: '1.25%',
    changeType: 'up',
    changeNote: 'this month',
    color: 'warning',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>`
  },
  {
    title: 'Total Visitors',
    value: '63,744',
    change: '2.97%',
    changeType: 'down',
    changeNote: 'this month',
    color: 'success',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z" fill-rule="evenodd"></path></g><g><circle cx="9" cy="8" fill-rule="evenodd" r="4"></circle></g><g><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" fill-rule="evenodd"></path></g><g><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" fill-rule="evenodd"></path></g></g></g></svg>`
  },
];
export let products = [
  {
    imageUrl: './assets/images/ecommerce/png/11.png',
    title: 'TaoTronics Wall Clock',
    price: '$699',
    status: 'In Stock',
    sales: '1000'
  },
  {
    imageUrl: './assets/images/ecommerce/png/12.png',
    title: 'Club Fleece Hoodie',
    price: '$55',
    status: 'In Stock',
    sales: '3,100'
  },
  {
    imageUrl: './assets/images/ecommerce/png/14.png',
    title: 'SmartGizmo Pro Headset',
    price: '$199',
    status: 'In Stock',
    sales: '1,250'
  },
  {
    imageUrl: './assets/images/ecommerce/png/16.png',
    title: 'TaoTronics Cattle',
    price: '$699',
    status: 'Out Of Stock',
    sales: '1,000'
  },
  {
    imageUrl: './assets/images/ecommerce/png/13.png',
    title: 'UltraMaze Ladies Bag',
    price: '$89',
    status: 'In Stock',
    sales: '2,150'
  }
];
export let activities = [
  {
    date: '24,Nov',
    time: '08:45 AM',
    description: 'John Doe placed an order for',
    secondaryText: ' 5x Apple iPhone 14',
    secondaryClass: 'fw-medium text-primary'
  },
  {
    date: '24,Nov',
    time: '09:15 AM',
    description: 'Payment of $1,250.00 received from Alice Smith for',
    secondaryText: ' Order #1020',
    secondaryClass: 'fw-medium text-warning'
  },
  {
    date: '24,Nov',
    time: '10:00 AM',
    description: 'David Brown requested a refund for ',
    secondaryText: '1x Samsung Galaxy S22',
    secondaryClass: 'fw-medium text-info'
  },
  {
    date: '24,Nov',
    time: '10:45 AM',
    description: 'Product ID: 5409 ',
    secondaryText: '(Sony WH-1000XM5) stock dropped below threshold.',
    primaryClass: 'fw-medium text-success',
    secondaryClass: ''
  },
  {
    date: '24,Nov',
    time: '11:30 AM',
    description: 'Emma Johnson left a 5-star review on ',
    additionalInfo: ' (Dell XPS 13).',
    secondaryText: 'Product ID: 7312',
    primaryClass: '',
    secondaryClass: 'fw-medium text-orange'
  }
];

export let customers = [
  {
    initials: 'JS',
    name: 'Jane Smith',
    email: 'janesmith215@gmail.com',
    spent: '$23,755',
    avatarColor: 'primary',
    spentColorClass: 'text-primary'
  },
  {
    initials: 'JD',
    name: 'Jhon Doe',
    email: 'jhondoe431@gmail.com',
    spent: '$14,563',
    avatarColor: 'secondary',
    spentColorClass: 'text-secondary'
  },
  {
    initials: 'AK',
    name: 'Alicia Keys',
    email: 'aliciakeys986@gmail.com',
    spent: '$12,075',
    avatarColor: 'warning',
    spentColorClass: 'text-warning'
  },
  {
    initials: 'LP',
    name: 'Leo Phillip',
    email: 'leophillip77@gmail.com',
    spent: '$10,485',
    avatarColor: 'info',
    spentColorClass: 'text-info'
  },
  {
    initials: 'BS',
    name: 'Brenda Simpson',
    email: 'brendasimpson075@gmail.com',
    spent: '$8,533',
    avatarColor: 'success',
    spentColorClass: 'text-success'
  }
];

export let channels = [
  {
    logo: './assets/images/company-logos/1.png',
    name: 'CloudComm',
    category: 'Digital Communication',
    percentageChange: '2.98%',
    total: '3,765',
    progressValue: 75,
    progressColor: 'bg-primary',
    changeType: 'up',
  },
  {
    logo: './assets/images/company-logos/2.png',
    name: 'BuzzWave',
    category: 'Social Media',
    percentageChange: '6.45%',
    total: '2,855',
    progressValue: 45,
    progressColor: 'bg-secondary',
    changeType: 'down',
  },
  {
    logo: './assets/images/company-logos/3.png',
    name: 'NexusNet',
    category: 'Networking',
    percentageChange: '1.95%',
    total: '2,384',
    progressValue: 81,
    progressColor: 'bg-warning',
    changeType: 'up',
  },
  {
    logo: './assets/images/company-logos/4.png',
    name: 'FlashConnect',
    category: 'Direct Marketing',
    percentageChange: '5.91%',
    total: '1,755',
    progressValue: 60,
    progressColor: 'bg-info',
    changeType: 'down',
  },
  {
    logo: './assets/images/company-logos/5.png',
    name: 'EchoLink',
    category: 'Feedback & Surveys',
    percentageChange: '3.75%',
    total: '1,525',
    progressValue: 53,
    progressColor: 'bg-success',
    changeType: 'up',
  },
  {
    logo: './assets/images/company-logos/6.png',
    name: 'VibeStream',
    category: 'Content Distribution',
    percentageChange: '0.95%',
    total: '1,345',
    progressValue: 37,
    progressColor: 'bg-danger',
    changeType: 'up',
  },
];

export let salesData: any = {
  series: [{
      name: "Total Orders",
      type: 'bar',
      data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29]
  },
  {
      name: "Total Sales",
      type: 'bar',
      data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46]
  },
  {
      name: "Revenue",
      type: 'line',
      data: [26, 45, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23]
  }],
  chart: {
      toolbar: {
          show: false
      },
      type: 'line',
      height: 351,
      // stacked: true,
      zoom:{
          enabled:false
      }
  },
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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: "smooth",
      width: [5, 5, 2.5],
      lineCap: "round"
  },
  legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      markers: {
          size: 4,
          strokeWidth: 0,
      },
  },
  yaxis: {
      axisBorder: {
          show: false,
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
      title: {
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
      labels: {
          show: false,
          // formatter: function (y) {
          //     return y.toFixed(0) + "";
          // }
      }
  },
  xaxis: {
      type: 'month',
      axisBorder: {
          show: true,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
      },
      title: {
          style: {
              color: '#adb5be',
              fontSize: '5px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
  },
  plotOptions: {
      bar: {
          columnWidth: "70%",
          borderRadius: 2
      }
  },

  colors: ["var(--primary-color)", 'rgb(255, 73, 205)', "rgb(50, 212, 132)"],
}

export let DeviceData: any = {
  series: [{
    name: 'Desktop',
    data: [80, 50, 100, 30, 40, 20, 40],
}, {
    name: 'Mobile',
    data: [20, 30, 40, 80, 20, 90, 35],
}, {
    name: 'Others',
    data: [40, 76, 28, 16, 8, 10, 80],
}],
chart: {
  height: 300,
  type: "radar",
  toolbar: {
    show: false,
  },
},
colors: ["var(--primary-color)", "rgb(50, 212, 132)", "rgb(253, 175, 34)"],
stroke: {
  width: 1,
},
fill: {
  opacity: 0.1,
},
markers: {
  size: 0,
},
legend: {
  show: true,
  position: "bottom",
  markers: {
    size: 4,
    strokeWidth: 0,
  },
},
plotOptions: {
  radar: {
    size: 100,
    polygons: {
      fill: {
        colors: ['var(--primary005)', 'var(--primary005)']
      },

    }
  }
},
labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
xaxis: {
  axisBorder: { show: false },
  labels: {
    offsetX: 1,
    style: {
      fontSize: '9px',
    }
  }
},
yaxis: {
  axisBorder: { show: false },
  tickAmount: 5,
},
}

export let salesHeader = [
  {header:'ID'},
  {header:'Customer'},
  {header:'Ordered Date'},
  {header:'Items'},
  {header:'Price'},
  {header:'Status'},
  {header:'Actions'},
]

export let orders = [
  {
    id: '#SPK231',
    customerInitials: 'JS',
    customerName: 'Jane Smith',
    customerEmail: 'janesmith213@gmail.com',
    orderDate: '27,Aug 2024',
    orderTime: '12:45PM',
    items: [
      './assets/images/ecommerce/jpg/3.jpg',
      './assets/images/ecommerce/jpg/4.jpg',
      './assets/images/ecommerce/jpg/5.jpg',
    ],
    totalAmount: '$1,249',
    status: 'Paid',
    checked:true,
    color:"primary"
  },
  {
    id: '#SPK421',
    customerInitials: 'JD',
    customerName: 'Jhon Doe',
    customerEmail: 'jhondoe865@gmail.com',
    orderDate: '16,Sep 2024',
    orderTime: '11:15AM',
    items: [
      './assets/images/ecommerce/jpg/1.jpg',
      './assets/images/ecommerce/jpg/2.jpg',
    ],
    totalAmount: '$3,299',
    status: 'Pending',
    checked:true,
    color:"secondary"

  },
  {
    id: '#SPK175',
    customerInitials: 'ED',
    customerName: 'Emiley Davis',
    customerEmail: 'emileydavis234@gmail.com',
    orderDate: '15,Sep 2024',
    orderTime: '04:45PM',
    items: [
      './assets/images/ecommerce/jpg/5.jpg',
      './assets/images/ecommerce/jpg/6.jpg',
    ],
    totalAmount: '$4,799',
    status: 'Overdue',
    checked:false,
    color:"warning"

  },
  {
    id: '#SPK145',
    customerInitials: 'LP',
    customerName: 'Leo Phillip',
    customerEmail: 'leophillip423@gmail.com',
    orderDate: '21,Sep 2024',
    orderTime: '02:18PM',
    items: ['./assets/images/ecommerce/jpg/3.jpg'],
    totalAmount: '$2,499',
    status: 'Paid',
    checked:true,
    color:"info"

  },
  {
    id: '#SPK426',
    customerInitials: 'SL',
    customerName: 'Sara Lee',
    customerEmail: 'saralee765@gmail.com',
    orderDate: '19,Oct 2024',
    orderTime: '03:52PM',
    items: [
      './assets/images/ecommerce/jpg/4.jpg',
      './assets/images/ecommerce/jpg/1.jpg',
    ],
    totalAmount: '$3,999',
    status: 'Paid',
    checked:false,
    color:"success"

  },
];

export let TransactionsHeader = [
  {header:'Order'},
  {header:'Price'},
  {header:'Products',tableHeadColumn:"text-end"},
]
export let orderstransaction = [
  {
    orderId: '#SPK1234',
    itemsCount: 4,
    status: 'Paid',
    totalAmount: '$150.00',
    orderDate: '2024-08-27',
    orderTime: '12:45PM',
    customerName: 'Jane Smith',
    customerEmail: 'janesmith213@gmail.com',
    itemImages: [
      './assets/images/ecommerce/jpg/1.jpg',
      './assets/images/ecommerce/jpg/2.jpg',
    ],
  },
  {
    orderId: '#SPK7432',
    itemsCount: 2,
    status: 'Pending',
    totalAmount: '$75.00',
    orderDate: '2024-08-26',
    orderTime: '11:15AM',
    customerName: 'Jhon Doe',
    customerEmail: 'jhondoe865@gmail.com',
    itemImages: [
      './assets/images/ecommerce/jpg/3.jpg',
      './assets/images/ecommerce/jpg/4.jpg',
      './assets/images/ecommerce/jpg/5.jpg',
    ],
  },
  {
    orderId: '#SPK3422',
    itemsCount: 2,
    status: 'Paid',
    totalAmount: '$200.00',
    orderDate: '2024-08-25',
    orderTime: '04:45PM',
    customerName: 'Emiley Davis',
    customerEmail: 'emileydavis234@gmail.com',
    itemImages: [
      './assets/images/ecommerce/jpg/5.jpg',
      './assets/images/ecommerce/jpg/6.jpg',
    ],
  },
  {
    orderId: '#SPK1578',
    itemsCount: 1,
    status: 'Paid',
    totalAmount: '$120.00',
    orderDate: '2024-08-24',
    orderTime: '02:18PM',
    customerName: 'Leo Phillip',
    customerEmail: 'leophillip423@gmail.com',
    itemImages: [
      './assets/images/ecommerce/jpg/5.jpg',
    ],
  },
  {
    orderId: '#SPK2355',
    itemsCount: 5,
    status: 'Failed',
    totalAmount: '$90.00',
    orderDate: '2024-08-23',
    orderTime: '03:52PM',
    customerName: 'Sara Lee',
    customerEmail: 'saralee765@gmail.com',
    itemImages: [
      './assets/images/ecommerce/jpg/1.jpg',
      './assets/images/ecommerce/jpg/2.jpg',
    ],
  },
  {
    orderId: '#SPK1643',
    itemsCount: 1,
    status: 'Paid',
    totalAmount: '$249.00',
    orderDate: '2024-08-16',
    orderTime: '03:52PM',
    customerName: 'Brenda Simpson',
    customerEmail: 'brendasimpson123@gmail.com',
    itemImages: [
      './assets/images/ecommerce/jpg/2.jpg',
      './assets/images/ecommerce/jpg/6.jpg',
    ],
  },
];
