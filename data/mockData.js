window.mockData = md = {

  modelInfo: {
    companyName: "Calc-Hub, LLC",
  }, 

  years: [
    { year: 2015
    },
    { year: 2016
    }
  ], 

  settings: {
    startingYear: 2015,
    startingCash: 0,
    benefits: [
      { name:           'healthCare',
        dollarsPerMonth:  -200,
        increasePerYear:  .12
      },
      { name:             'dental',
        dollarsPerMonth:  -25,
        increasePerYear:  .03
      },
      { name:             'shortTermDisability',
        percentageOfPay:  .014,
        increasePerYear:  .03
      },
      { name:             'longTermDisability',
        percentageOfPay:  .009,
        increasePerYear:  .03
      },
      { name:             'lifeInsurance',
        percentageOfPay:  .005,
        increasePerYear:  .03
      }
    ],
    taxes: [
      { name:             'stateUnemploymentIns',
        percentageOfPay:  .002,
        upTo:             14400
      },
      { name:             'employerFICA',
        percentageOfPay:  .062,
        upTo:             100000
      },
      { name:             'medicare',
        percentageOfPay:  .0145,
        upTo:             999999
      },
      { name:             'federalUnemploymentIns',
        percentageOfPay:  .008,
        upTo:             7400
      },
      { name:             'workersComp',
        percentageOfPay:  .0032,
        upTo:             999999
      }
    ]
  },

  items: [
    //Expenses - General and Administrative - Marketing
    {
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Marketing',
      title:        'Radio Ad',
      description:  'We plan to run a radio add in April to boost sales.',
      money:        [ 0, 0, -1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    },
    {
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Cell Phones',
      title:        'Google Ad Campaign',
      description:  'We are running a google ad campaign, to boost page views.',
      money:        [ 0, 0, 0, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500 ] 
    },
    //Expenses - General and Administrative - Facilities and Equipment
    {
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Rent',
      title:        'Rent',
      description:  'Rent and utilites for office space.',
      money:        [ -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500 ]
    },
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Facilities and Equipment',
      title:        'Cell Phone',
      description:  'Cell phone policy for employees.',
      money:        [ 0, 0, 0, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500 ]
    },
    //Expenses - General and Administrative - Insurance
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Legal Fees',
      title:        'General Liability',
      description:  'Cell phone policy for employees.',
      money:        [ 0, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700, -700 ]
    },
    //Expenses - General and Administrative - Supplies
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'SEO Optimization',
      title:        'General Liability',
      description:  'Cell phone policy for employees.',
      money:        [ -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, -600, 0, 0, 0, 0, 0, 0, 0, 0 ]
    },
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Computers',
      title:        'Office Furniture',
      description:  'Purchasing desks and chairs for employees.',
      money:        [ -3000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    },
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Printer',
      title:        'Printer',
      description:  'Purchasing desks and chairs for employees.',
      money:        [ 0, 0, 0, 0, 0, 0, -1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    },
    //Expenses - General and Administrative - Legal
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Accounting Fees',
      title:        'Organisation Docs',
      description:  'Create the legal docmentation for the company.',
      money:        [ 0, 0, 0, 0, 0, 0, -1000, -1000, -1000, -1000, -1000, -1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    },
    { 
      category:    'expenses',
      scategory:   'GAndA',
      sscategory:  'Entertainment',
      title:        'Legal Fees',
      description:  'Legal Consulation.',
      money:        [ -1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    },
    //Expenses - Employees
    { 
      category:    'expenses',
      scategory:   'Employees',
      sscategory:  'CEO',
      title:        null,
      description:  'Fearless leader of Calc-Hub.',
      salary:       42000,
      raise:        0,
      taxes:        [ -314, -314, -345, -345, -367, -367, -367, -367, -367, -367, -367, -367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      benefits:     [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      money:        [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500]
    },
    { 
      category:    'expenses',
      scategory:   'Employees',
      sscategory:  'CTO',
      title:        null,
      description:  'Knows the tech.',
      salary:       42000,
      raise:        0,
      taxes:        [ -314, -314, -345, -345, -367, -367, -367, -367, -367, -367, -367, -367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      benefits:     [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      money:        [ -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000, -3000 ]
    },
    { 
      category:    'expenses',
      scategory:   'Employees',
      sscategory:  'Frontend Developer',
      title:        null,
      description:  'Really good at making things look pretty.',
      salary:       42000,
      raise:        0,
      taxes:        [ -314, -314, -345, -345, -367, -367, -367, -367, -367, -367, -367, -367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      benefits:     [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      money:        [ 0, 0, 0, 0, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500, -2500 ]
    },
    { 
      category:    'expenses',
      scategory:   'Employees',
      sscategory:  'Backend Developer',
      title:        null,
      description:  'The reason everything works.',
      salary:       42000,
      raise:        0,
      taxes:        [ -314, -314, -345, -345, -367, -367, -367, -367, -367, -367, -367, -367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      benefits:     [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      money:        [ 0, 0, 0, 0, 0, 0, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400, -2400 ]
    },
    { 
      category:    'expenses',
      scategory:   'Employees',
      sscategory:  'VP Marketing',
      title:        null,
      description:  'Knows how people think.',
      salary:       42000,
      raise:        0,
      taxes:        [ -314, -314, -345, -345, -367, -367, -367, -367, -367, -367, -367, -367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      benefits:     [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      money:        [ 0, 0, 0, 0, 0, 0, 0, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000 ]
    },
    { 
      category:    'expenses',
      scategory:   'Employees',
      sscategory:  'VP Sales',
      title:        null,
      description:  'Could sell a cow to a vegan.',
      salary:       42000,
      raise:        0,
      taxes:        [ -314, -314, -345, -345, -367, -367, -367, -367, -367, -367, -367, -367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      benefits:     [ -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      money:        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500, -3500 ]
    },
  ],
}