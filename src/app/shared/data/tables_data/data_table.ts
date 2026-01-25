


import { Columns } from 'ngx-easy-table';

/* eslint-disable max-lines, id-blacklist */
export interface Company {}

export const columns: Columns[] = [
  { key: 'orderID', title: 'Order ID' },
  { key: 'customerName', title: 'Customer' },
  { key: 'price', title: 'Price' },
  { key: 'delivery', title: 'Delivery Status', },
  { key: 'payment', title: 'Payment Method', },
  { key: 'status', title: 'Payment Status', },
  { key: 'ordereddate', title: 'Ordered Date' },
  { key: 'actions', title: 'Actions' },
];

export const data = [
  {orderID:'#SPK001', customerName:'John Doe',imgUrl: './assets/images/faces/9.jpg', price:'$699.99', delivery:'Pending', status:'Pending', payment:'Visa Card', ordereddate:'Jan 15, 2025, 09:45 AM', email:'john.doe@example.com'},
  {orderID:'#SPK002', customerName:'Jane Smith',imgUrl: './assets/images/faces/1.jpg', price:'$89.99', delivery:'Shipped', status:'Completed', payment:'MasterCard',ordereddate: 'Feb 3, 2025, 02:30 PM', email:'jane.smith@example.com'},
  {orderID:'#SPK003', customerName:'Michael Brown',imgUrl: './assets/images/faces/10.jpg',price: '$399.99', delivery:'Delivered', status:'Failed', payment:'PayPal',ordereddate: 'Mar 10, 2025, 11:15 AM', email:'michael.brown@example.com'},
  {orderID:'#SPK004', customerName:'Emily White',imgUrl: './assets/images/faces/2.jpg', price:'$129.99', delivery:'Cancelled', status:'Refunded', payment:'Apple Pay', ordereddate:'Apr 5, 2025, 04:00 PM', email:'emily.white@example.com'},
  {orderID:'#SPK005', customerName:'Chris Johnson',imgUrl: './assets/images/faces/11.jpg',price: '$199.99', delivery:'Shipped', status:'Cancelled', payment:'COD',ordereddate: 'May 1, 2025, 10:30 AM', email:'chris.johnson@example.com'},
  {orderID:'#SPK006', customerName:'Sarah Lee',imgUrl: './assets/images/faces/3.jpg', price:'$149.99', delivery:'Delivered', status:'Refunded', payment:'MasterCard', ordereddate:'Jun 10, 2025, 03:45 PM', email:'sarah.lee@example.com'},
  {orderID:'#SPK007', customerName:'David Green',imgUrl: './assets/images/faces/13.jpg', price:'$79.99', delivery:'Delivered', status:'Completed', payment:'PayPal',ordereddate: 'Jul 18, 2025, 01:00 PM',email: 'david.green@example.com'},
  {orderID:'#SPK008', customerName:'Olivia Davis',imgUrl: './assets/images/faces/4.jpg', price:'$59.99', delivery:'Pending', status:'Pending', payment:'American Express',ordereddate: 'Aug 25, 2025, 12:30 PM',email: 'olivia.davis@example.com'},
  {orderID:'#SPK009', customerName:'James Wilson',imgUrl: './assets/images/faces/14.jpg', price:'$59.99', delivery:'Cancelled',status: 'Completed', payment:'Visa Card',ordereddate: 'Sep 5, 2025, 06:00 PM', email:'james.wilson@example.com'},
  {orderID:'#SPK010', customerName:'Sophia Martinez',imgUrl: './assets/images/faces/5.jpg',price: '$39.99', delivery:'Shipped', status:'Failed', payment:'COD', ordereddate:'Oct 12, 2025, 08:15 AM', email:'sophia.martinez@example.com'}
];


