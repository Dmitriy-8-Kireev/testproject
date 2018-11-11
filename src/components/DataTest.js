const data = [
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    salary: '$320,800',
    start_date: '2011/04/25',
    office: 'Edinburgh',
  },
  {
    name: 'Garrett Winters',
    position: 'Accountant',
    salary: '$170,750',
    start_date: '2011/07/25',
    office: 'Tokyo',
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    salary: '$86,000',
    start_date: '2009/01/12',
    office: 'San Francisco',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    start_date: '2012/03/29',
    office: 'Edinburgh',
  },
  {
    name: 'Airi Satou',
    position: 'Accountant',
    salary: '$162,700',
    start_date: '2008/11/28',
    office: 'Tokyo',
  },
  {
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    salary: '$372,000',
    start_date: '2012/12/02',
    office: 'New York',
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    salary: '$137,500',
    start_date: '2012/08/06',
    office: 'San Francisco',
  },
  {
    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    salary: '$327,900',
    start_date: '2010/10/14',
    office: 'Tokyo',
  },
  {
    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    salary: '$205,500',
    start_date: '2009/09/15',
    office: 'San Francisco',
  },
  {
    name: 'Sonya Frost',
    position: 'Software Engineer',
    salary: '$103,600',
    start_date: '2008/12/13',
    office: 'Edinburgh',
  },
  {
    name: 'Jena Gaines',
    position: 'Office Manager',
    salary: '$90,560',
    start_date: '2008/12/19',
    office: 'London',
  },
  {
    name: 'Quinn Flynn',
    position: 'Support Lead',
    salary: '$342,000',
    start_date: '2013/03/03',
    office: 'Edinburgh',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    salary: '$470,600',
    start_date: '2008/10/16',
    office: 'San Francisco',
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    salary: '$313,500',
    start_date: '2012/12/18',
    office: 'London',
  },
  {
    name: 'Tatyana Fitzpatrick',
    position: 'Regional Director',
    salary: '$385,750',
    start_date: '2010/03/17',
    office: 'London',
  },
  {
    name: 'Michael Silva',
    position: 'Marketing Designer',
    salary: '$198,500',
    start_date: '2012/11/27',
    office: 'London',
  },
  {
    name: 'Paul Byrd',
    position: 'Chief Financial',
    salary: '$725,000',
    start_date: '2010/06/09',
    office: 'New York',
  },
  {
    name: 'Gloria Little',
    position: 'Systems Administrator',
    salary: '$237,500',
    start_date: '2009/04/10',
    office: 'New York',
  },
  {
    name: 'Bradley Greer',
    position: 'Software Engineer',
    salary: '$132,000',
    start_date: '2012/10/13',
    office: 'London',
  },
  {
    name: 'Dai Rios',
    position: 'Personnel Lead',
    salary: '$217,500',
    start_date: '2012/09/26',
    office: 'Edinburgh',
  },
  {
    name: 'Jenette Caldwell',
    position: 'Development Lead',
    salary: '$345,000',
    start_date: '2011/09/03',
    office: 'New York',
  },
  {
    name: 'Yuri Berry',
    position: 'Chief Marketing',
    salary: '$675,000',
    start_date: '2009/06/25',
    office: 'New York',
  },
  {
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    salary: '$106,450',
    start_date: '2011/12/12',
    office: 'New York',
  },
  {
    name: 'Doris Wilder',
    position: 'Sales Assistant',
    salary: '$85,600',
    start_date: '2010/09/20',
    office: 'Sidney',
  },
  {
    name: 'Gavin Joyce',
    position: 'Developer',
    salary: '$92,575',
    start_date: '2010/12/22',
    office: 'Edinburgh',
  },
  {
    name: 'Jennifer Chang',
    position: 'Regional Director',
    salary: '$357,650',
    start_date: '2010/11/14',
    office: 'Singapore',
  },
  {
    name: 'Brenden Wagner',
    position: 'Software Engineer',
    salary: '$206,850',
    start_date: '2011/06/07',
    office: 'San Francisco',
  },
  {
    name: 'Fiona Green',
    position: 'Chief Operating',
    salary: '$850,000',
    start_date: '2010/03/11',
    office: 'San Francisco',
  },
  {
    name: 'Shou Itou',
    position: 'Regional Marketing',
    salary: '$163,000',
    start_date: '2011/08/14',
    office: 'Tokyo',
  },
  {
    name: 'Michelle House',
    position: 'Integration Specialist',
    salary: '$95,400',
    start_date: '2011/06/02',
    office: 'Sidney',
  },
  {
    name: 'Suki Burks',
    position: 'Developer',
    salary: '$114,500',
    start_date: '2009/10/22',
    office: 'London',
  },
  {
    name: 'Prescott Bartlett',
    position: 'Technical Author',
    salary: '$145,000',
    start_date: '2011/05/07',
    office: 'London',
  },
  {
    name: 'Gavin Cortez',
    position: 'Team Leader',
    salary: '$235,500',
    start_date: '2008/10/26',
    office: 'San Francisco',
  },
  {
    name: 'Martena Mccray',
    position: 'Post-Sales support',
    salary: '$324,050',
    start_date: '2011/03/09',
    office: 'Edinburgh',
  },
  {
    name: 'Unity Butler',
    position: 'Marketing Designer',
    salary: '$85,675',
    start_date: '2009/12/09',
    office: 'San Francisco',
  },
  {
    name: 'Howard Hatfield',
    position: 'Office Manager',
    salary: '$164,500',
    start_date: '2008/12/16',
    office: 'San Francisco',
  },
  {
    name: 'Hope Fuentes',
    position: 'Secretary',
    salary: '$109,850',
    start_date: '2010/02/12',
    office: 'San Francisco',
  },
  {
    name: 'Vivian Harrell',
    position: 'Financial Controller',
    salary: '$452,500',
    start_date: '2009/02/14',
    office: 'San Francisco',
  },
  {
    name: 'Timothy Mooney',
    position: 'Office Manager',
    salary: '$136,200',
    start_date: '2008/12/11',
    office: 'London',
  },
  {
    name: 'Jackson Bradshaw',
    position: 'Director',
    salary: '$645,750',
    start_date: '2008/09/26',
    office: 'New York',
  },
  {
    name: 'Olivia Liang',
    position: 'Support Engineer',
    salary: '$234,500',
    start_date: '2011/02/03',
    office: 'Singapore',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    salary: '$163,500',
    start_date: '2011/05/03',
    office: 'London',
  },
  {
    name: 'Sakura Yamamoto',
    position: 'Support Engineer',
    salary: '$139,575',
    start_date: '2009/08/19',
    office: 'Tokyo',
  },
  {
    name: 'Thor Walton',
    position: 'Developer',
    salary: '$98,540',
    start_date: '2013/08/11',
    office: 'New York',
  },
  {
    name: 'Finn Camacho',
    position: 'Support Engineer',
    salary: '$87,500',
    start_date: '2009/07/07',
    office: 'San Francisco',
  },
  {
    name: 'Serge Baldwin',
    position: 'Data Coordinator',
    salary: '$138,575',
    start_date: '2012/04/09',
    office: 'Singapore',
  },
  {
    name: 'Zenaida Frank',
    position: 'Software Engineer',
    salary: '$125,250',
    start_date: '2010/01/04',
    office: 'New York',
  },
  {
    name: 'Zorita Serrano',
    position: 'Software Engineer',
    salary: '$115,000',
    start_date: '2012/06/01',
    office: 'San Francisco',
  },
  {
    name: 'Jennifer Acosta',
    position: 'Junior Javascript Developer',
    salary: '$75,650',
    start_date: '2013/02/01',
    office: 'Edinburgh',
  },
  {
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    salary: '$145,600',
    start_date: '2011/12/06',
    office: 'New York',
  },
  {
    name: 'Hermione Butler',
    position: 'Regional Director',
    salary: '$356,250',
    start_date: '2011/03/21',
    office: 'London',
  },
  {
    name: 'Lael Greer',
    position: 'Systems Administrator',
    salary: '$103,500',
    start_date: '2009/02/27',
    office: 'London',
  },
  {
    name: 'Jonas Alexander',
    position: 'Developer',
    salary: '$86,500',
    start_date: '2010/07/14',
    office: 'San Francisco',
  },
  {
    name: 'Shad Decker',
    position: 'Regional Director',
    salary: '$183,000',
    start_date: '2008/11/13',
    office: 'Edinburgh',
  },
  {
    name: 'Michael Bruce',
    position: 'Javascript Developer',
    salary: '$183,000',
    start_date: '2011/06/27',
    office: 'Singapore',
  },
  {
    name: 'Donna Snider',
    position: 'Customer Support',
    salary: '$112,000',
    start_date: '2011/01/25',
    office: 'New York',
  },
];

export default data;
