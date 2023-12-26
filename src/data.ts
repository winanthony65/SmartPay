export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Roles",
        url: "/roles",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Payment",
        url: "/payments",
        icon: "",
      },
      {
        id: 3,
        title: "RevenueType",
        url: "/revenue type",
        icon: "",
      },
      {
        id: 4,
        title: "RevenueFees",
        url: "/revenue fee",
        icon: "post2.svg",
      },
      {
        id: 5,
        title: "GPS Location",
        url: "/revenue fee",
        icon: "",
      },
      {
        id: 6,
        title: "DefaulterRed",
        url: "/revenue fee",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    uniqueID: "78625439073",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    uniqueID: "98635462789",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    uniqueID: "675645479809",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    uniqueID: "29087676798569",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    uniqueID: "398708956837",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    uniqueID: "0987237877635",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    uniqueID: "5987623828965",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Revenue",
  number: "11.238",
  dataKey: "revenue",
  percentage: 45,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Invoice",
  number: "238",
  dataKey: "invoice",
  percentage: 21,
  chartData: [
    { name: "Sun", invoice: 400 },
    { name: "Mon", invoice: 600 },
    { name: "Tue", invoice: 500 },
    { name: "Wed", invoice: 700 },
    { name: "Thu", invoice: 400 },
    { name: "Fri", invoice: 500 },
    { name: "Sat", invoice: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Payment",
  number: "$56.432",
  dataKey: "payment",
  percentage: -12,
  chartData: [
    { name: "Sun", payment: 400 },
    { name: "Mon", payment: 600 },
    { name: "Tue", payment: 500 },
    { name: "Wed", payment: 700 },
    { name: "Thu", payment: 400 },
    { name: "Fri", payment: 500 },
    { name: "Sat", payment: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Users",
  number: "2.6",
  dataKey: "user",
  percentage: 12,
  chartData: [
    { name: "Sun", user: 400 },
    { name: "Mon", user: 600 },
    { name: "Tue", user: 500 },
    { name: "Wed", user: 700 },
    { name: "Thu", user: 400 },
    { name: "Fri", user: 500 },
    { name: "Sat", user: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Total Revenue",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    role: "Admin",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    role: "Accountant",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    role: "Agent",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    role: "Enforcer",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    role: "Relationship Manager",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  // {
  //   id: 6,
  //   img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Sharp",
  //   firstName: "Jeremy",
  //   email: "vulca.eder@mail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  //   verified: true,
  // },
  // {
  //   id: 7,
  //   img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Lowe",
  //   firstName: "Christina",
  //   email: "reso.bilic@gmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 8,
  //   img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Dean",
  //   firstName: "Garrett",
  //   email: "codaic@mail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  //   verified: true,
  // },
  // {
  //   id: 9,
  //   img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Parsons",
  //   firstName: "Leah",
  //   email: "uzozor@gmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 10,
  //   img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Reid",
  //   firstName: "Elnora",
  //   email: "tuhkabapu@gmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  //   verified: true,
  // },
  // {
  //   id: 11,
  //   img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Dunn",
  //   firstName: "Gertrude",
  //   email: "gibo@gmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  //   verified: true,
  // },
  // {
  //   id: 12,
  //   img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Williams",
  //   firstName: "Mark",
  //   email: "tic.harvey@hotmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 13,
  //   img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Cruz",
  //   firstName: "Charlotte",
  //   email: "ceuc@gmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 14,
  //   img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   lastName: "Harper",
  //   firstName: "Sara",
  //   email: "bafuv@hotmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  // },
  // {
  //   id: 15,
  //   img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   lastName: "Griffin",
  //   firstName: "Eric",
  //   email: "ubi@gmail.com",
  //   phone: "123 456 789",
  //   createdAt: "01.02.2023",
  // },
];

export const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    title: "Griffin",
    color: "888809873634",
    producer: "07133532564",
    price: "NGN250.99",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Sara",
    color: "0008176434533",
    producer: "07045647356",
    price: "NGN499.99",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Harper",
    color: "21343554769",
    producer: "08076267763",
    price: "NGN999.49",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Eric",
    color: "000731763518",
    producer: "0901763897",
    price: "NGN799.49",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Charlott",
    color: "098267862676",
    producer: "0713746997",
    price: "NGN39.99",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Cruz",
    color: "0989382745637",
    producer: "08068987436",
    price: "NGN59.49",
    createdAt: "01.02.2023",
    verified: true,
   
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Mark",
    color: "68170182087",
    producer: "09183735626",
    price: "NGN119.49",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Peterson",
    color: "70989836387",
    producer: "0906863298",
    price: "NGN899.99",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Suzan",
    color: "89010156633",
    producer: "0816652582",
    price: "NGN970.49",
    createdAt: "01.02.2023",
    verified: true,
    
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Precious",
    color: "7989090901",
    producer: "0706308637",
    price: " NGN599.99",
    createdAt: "01.02.2023",
    verified: true,
   
  },
];



export const singleUser = {
  id: 1,
  title: "Onyekachukwu",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Onyekachukwu",
    fullname: "Onyekachukwu",
    email: "onyekachukwu@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "registrations", color: "#82ca9d" },
      { name: "invoice", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        registrations: 4000,
        invoice: 2400,
      },
      {
        name: "Mon",
        registrations: 3000,
         invoice: 1398,
      },
      {
        name: "Tue",
        registrations: 2000,
         invoice: 3800,
      },
      {
        name: "Wed",
        registrations: 2780,
        invoice: 3908,
      },
      {
        name: "Thu",
        registrations: 1890,
        invoice: 4800,
      },
      {
        name: "Fri",
        registrations: 2390,
        invoice: 3800,
      },
      {
        name: "Sat",
        registrations: 3490,
        invoice: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Created 10 Agents",
      time: "3 day ago",
    },
    {
      text: "Created 4 Enforcers",
      time: "1 week ago",
    },
    {
      text: "Created 2 Accountants",
      time: "2 weeks ago",
    },
    {
      text: "Created 3 Relationship Managers",
      time: "1 month ago",
    },
    // {
    //   text: "",
    //   time: "1 month ago",
    // },
    // {
    //   text: "",
    //   time: "2 months ago",
    // },
  ],
};

export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
