


import { Columns } from 'ngx-easy-table';

/* eslint-disable max-lines, id-blacklist */
export interface Company {}

export const columns: Columns[] = [
  { key: 'customerIp', title: 'Customer Ip' },
  { key: 'customerName', title: 'Customer Name' },
  { key: 'status', title: 'Status' },
  { key: 'joiningDate', title: 'Joining Date' },
  { key: 'actions', title: 'Actions' },
];

export const data = [
  {
    imgUrl:"./assets/images/faces/9.jpg",
    customerIp: '192.168.1.1',
    customerName: 'John Doe',
    status: 'Active',
    joiningDate: 'Jan 15, 2025',
    email:"john.doe@example.com"
  },
  {
    imgUrl:"./assets/images/faces/1.jpg",
    customerIp: '192.168.1.2',
    customerName: 'Jane Smith',
    status: 'Blocked',
    joiningDate: 'Feb 3, 2025',
    email:"jane.smith@example.com"
  },
  {
    imgUrl:"./assets/images/faces/10.jpg",
    customerIp: '192.168.1.3',
    customerName: 'Michael Brown',
    status: 'Active',
    joiningDate: 'Mar 10, 2025',
    email:"michael.brown@example.com"
  },
  {
    imgUrl:"./assets/images/faces/2.jpg",
    customerIp: '192.168.1.4',
    customerName: 'Emily White',
    status: 'Active',
    joiningDate: 'Mar 12, 2025',
    email:"emily.white@example.com"
  },
  {
    imgUrl:"./assets/images/faces/11.jpg",
    customerIp: '192.168.1.5',
    customerName: 'Chris Johnson',
    status: 'Active',
    joiningDate: 'Jan 25, 2025',
    email:"chris.johnson@example.com"
  },

  {
    imgUrl:"./assets/images/faces/3.jpg",
    customerIp: '192.168.1.6',
    customerName: 'Sarah Lee',
    status: 'Blocked',
    joiningDate: 'Feb 14, 2025',
    email:"sarah.lee@example.com"
  },
  {
    imgUrl:"./assets/images/faces/13.jpg",
    customerIp: '192.168.1.7',
    customerName: 'David Green',
    status: 'Active',
    joiningDate: 'Mar 17, 2025',
    email:"david.green@example.com"
  },
  {
    imgUrl:"./assets/images/faces/4.jpg",
    customerIp: '192.168.1.8',
    customerName: 'Olivia Davis',
    status: 'Active',
    joiningDate: 'Feb 22, 2025',
    email:"olivia.davis@example.com"
  },
  {
    imgUrl:"./assets/images/faces/14.jpg",
    customerIp: '192.168.1.9',
    customerName: 'James Wilson',
    status: 'Active',
    joiningDate: 'Mar 5, 2025',
    email:"james.wilson@example.com"
  },


  {
    imgUrl:"./assets/images/faces/5.jpg",
    customerIp: '192.168.1.10',
    customerName: 'Sophia Martinez',
    status: 'Blocked',
    joiningDate: 'Jan 30, 2025',
    email:"sophia.martinez@example.com"
  },

];



