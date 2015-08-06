window.dataFromServerToClient = md = {

  //defines basic information about the model
  modelInfo: {
    companyName: "Calc-Hub, LLC", //name of startup company
    userId: 0 //id of the user that owns the model
    //otherProperty: value, can add other properties as needed
  }, 

  //defines global settings for a model
  settings: {
    startingCash: 0, //amount of cash the company starts with at day 0
    //defines the cost for employee benefits
    benefits: [
      //benefit object
      //name => name of the benefit
      //dollarsPerMonth => cost in actual dollars per month per employee
      //percentageOfPay => cost as a percentage of the employees pay
      //increasePerYear => percentage the benefit increases per year
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
    //defines the cost for employee taxes
    //tax object
    //name => name of the tax
    //percentageOfPay => cost as a percentage of the employees pay
    //upTo => the amount of pay that the tax applies towards. any wages the employee makes above this value, does not get taxed
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

  //a collection of year objects
  years: [
    { year: 2015,
      //an object that holds the expenses: gAndA, employees, and startup costs
      expenses: {
        //a collection that holds catergory objects that fall under gAndA 
        gAndA: [
          {
            category: 'Marketing', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: [
              {
                itemId: 10302, //uniquely identifies the item
                name: 'Radio Ad', //name of the item, determined by the user
                description: 'We plan to purchase a radio ad to increase awareness',
                cost: 2000, //cost per month of the item
                money:
                  {
                    jan: 2000,
                    feb: 2000,
                    mar: 0, 
                    apr: 2000,
                    may: 0,
                    jun: 0,
                    jul: 2000,
                    aug: 2000,
                    sep: 2000,
                    oct: 0,
                    nov: 0,
                    dec: 0
                  }
              },
              {
                itemId: 10202, //uniquely identifies the item
                name: 'Branding design', //name of the item, determined by the user
                description: 'Payment for logo design',
                cost: 200, //cost per month of the item
                startMonth: 'aug',
                endMonth: null,
                money:
                  {
                    jan: 0,
                    feb: 0,
                    mar: 0, 
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 200,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                    dec: 0
                  }
              },
              {
                itemId: 10202, //uniquely identifies the item
                name: 'Trade Show', //name of the item, determined by the user
                description: 'Traveling to a trade show in Las Vegas',
                cost: 3000, //cost per month of the item
                startMonth: 'dec',
                endMonth: 'dec',
                money:
                  {
                    jan: 0,
                    feb: 0,
                    mar: 0, 
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                    dec: 3000
                  }
              }
            ]
          },
          {
            category: 'Facilities and Equipment', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: [
              {
                itemId: 10215, //uniquely identifies the item
                name: 'Cell Phones', //name of the item, determined by the user
                description: 'communication costs for the team',
                cost: 500, //cost per month of the item
                startMonth: 'apr',
                endMonth: null,
                money:
                  {
                    jan: 0,
                    feb: 0,
                    mar: 0, 
                    apr: 500,
                    may: 500,
                    jun: 500,
                    jul: 500,
                    aug: 500,
                    sep: 500,
                    oct: 500,
                    nov: 500,
                    dec: 500
                  }
              },
              {
                itemId: 10235, //uniquely identifies the item
                name: 'Rent', //name of the item, determined by the user
                description: 'Rent for office space',
                cost: 2500, //cost per month of the item
                startMonth: 'jan',
                endMonth: null,
                money:
                  {
                    jan: 2500,
                    feb: 2500,
                    mar: 2500, 
                    apr: 2500,
                    may: 2500,
                    jun: 2500,
                    jul: 2500,
                    aug: 2500,
                    sep: 2500,
                    oct: 2500,
                    nov: 2500,
                    dec: 2500
                  }
              },
              {
                itemId: 10335, //uniquely identifies the item
                name: 'Cleaning', //name of the item, determined by the user
                description: 'Cleaning service for the office space',
                cost: 300, //cost per month of the item
                startMonth: 'jan',
                endMonth: null,
                money:
                  {
                    jan: 300,
                    feb: 300,
                    mar: 300, 
                    apr: 300,
                    may: 300,
                    jun: 300,
                    jul: 300,
                    aug: 300,
                    sep: 300,
                    oct: 300,
                    nov: 300,
                    dec: 300
                  }
              }
            ]
          },
          {
            category: 'Maintenance and Repairs', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: []
          },
          {
            category: 'Utilities, Phone, Postage', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: []
          },
          {
            category: 'Insurance', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: [
              {
                itemId: 10402, //uniquely identifies the item
                name: 'General Liability', //name of the item, determined by the user
                description: 'General liability insurance',
                cost: 400, //cost per month of the item
                money:
                  {
                    jan: 400,
                    feb: 400,
                    mar: 400, 
                    apr: 400,
                    may: 400,
                    jun: 400,
                    jul: 400,
                    aug: 400,
                    sep: 400,
                    oct: 400,
                    nov: 400,
                    dec: 400
                  }
              },
              {
                itemId: 10502, //uniquely identifies the item
                name: 'Property insurance', //name of the item, determined by the user
                description: 'Property insurance',
                cost: 300, //cost per month of the item
                startMonth: 'jan',
                endMonth: null,
                money:
                  {
                    jan: 300,
                    feb: 300,
                    mar: 300, 
                    apr: 300,
                    may: 300,
                    jun: 300,
                    jul: 300,
                    aug: 300,
                    sep: 300,
                    oct: 300,
                    nov: 300,
                    dec: 300
                  }
              }
            ]
          },
          {
            category: 'Supplies', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: [
              {
                itemId: 10702, //uniquely identifies the item
                name: 'Computers', //name of the item, determined by the user
                description: 'Laptops for new employees',
                cost: 4000, //cost per month of the item
                startMonth: 'sep',
                endMonth: 'sep',
                money:
                  {
                    jan: 0,
                    feb: 0,
                    mar: 0, 
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 4000,
                    oct: 0,
                    nov: 0,
                    dec: 0
                  }
              },
              {
                itemId: 10702, //uniquely identifies the item
                name: 'Servers', //name of the item, determined by the user
                description: 'Server stack for deployment',
                cost: 3000, //cost per month of the item
                startMonth: 'dec',
                endMonth: 'dec',
                money:
                  {
                    jan: 0,
                    feb: 0,
                    mar: 0, 
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                    dec: 3000
                  }
              }
            ]
          },
          {
            category: 'Freight', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: []
          },
          {
            category: 'Auto, Travel, Entertainment', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: []
          },
          {
            category: 'Legal and Accounting', //name of the category, determined by the user
            //collection of items that fall under the Marketing category
            items: []
          }
        ],
        employees: [
          {
            title: 'CEO',
            yearlySalary: 150000,
            //raise: 0, //future feature 
            startDate: 'feb',
            endDate: null,
            wages: {
              jan: 10000,
              feb: 10000,
              mar: 10000,
              apr: 10000,
              may: 10000,
              jun: 10000,
              jul: 10000,
              aug: 10000,
              sep: 10000,
              oct: 10000,
              nov: 10000,
              dec: 10000,
              sum: 120000
            },
            benefits: {
              jan: 
              feb: 
              mar:
              apr:
              may:
              jun:
              jul:
              aug:
              sep:
              oct:
              nov:
              dec:
              sum:
            },
            taxes: {
              jan: 
              feb: 
              mar:
              apr:
              may:
              jun:
              jul:
              aug:
              sep:
              oct:
              nov:
              dec:
              sum:
            },
            total: {
              jan: 
              feb: 
              mar:
              apr:
              may:
              jun:
              jul:
              aug:
              sep:
              oct:
              nov:
              dec:
              sum:
            }
          }
        ],
        startupCosts: [
          {
            name: 'purchase equipment'
            cost: 10000
            month: 'feb'
          }
        ]
      },
      debtAndEquity: [
        {
          name: 'Loan 1',
          type: 'loan',
          principal: 160000,
          startMonth: 'jan',
          startYear: 2015,
          interest: .1,
          months: 48,
          payment: 4058,
          balance: {
            jan: 157275,
            feb: 154528,
            mar: 151758,
            apr: 148964,
            may: 146148,
            jun: 143308,
            jul: 140444,
            aug: 137556,
            sep: 134644,
            oct: 131708,
            nov: 128748,
            dec: 125763, 
          },
          interest: {
            jan: 1333,
            feb: 1311,
            mar: 1288,
            apr: 1265,
            may: 1241,
            jun: 1218,
            jul: 1194,
            aug: 1170,
            sep: 1146,
            oct: 1122,
            nov: 1098,
            dec: 1073,
            sum: 14459
          },
          payments: {
            jan: 4058,
            feb: 4058,
            mar: 4058,
            apr: 4058,
            may: 4058,
            jun: 4058,
            jul: 4058,
            aug: 4058,
            sep: 4058,
            oct: 4058,
            nov: 4058,
            dec: 4058,
            sum: 48696
          }  
        },
        {
          name: 'Seed Round',
          type: 'equity',
          principal: 400000,
          startMonth: 'may',
          endMonth: 'aug'
        }
      ],
      revenue: 

        //Expenses - General and Administrative - Marketing
        {
          category:   'GAndA',
          sscategory:  'Marketing',
          title:        'Radio Ad',
          description:  'We plan to run a radio add in April to boost sales.',
          money:        [ 0, 0, -1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        },
        {
          category:   'GAndA',
          sscategory:  'Cell Phones',
          title:        'Google Ad Campaign',
          description:  'We are running a google ad campaign, to boost page views.',
          money:        [ 0, 0, 0, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500 ] 
        },
        //Expenses - General and Administrative - Facilities and Equipment
        {
          category:   'GAndA',
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
    },
    { year: 2016,
    
    }
  ] //end of years
} //end of dataFromServerToClient