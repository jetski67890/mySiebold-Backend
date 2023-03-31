const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());

// Routes
// Mock data for the appointments
app.get('/appointments', (req, res) => {
    const appointments = [
        {
            id: 1,
            title: "Parent-Teacher Conference",
            date: "2023-04-10",
            startTime: "16:00",
            endTime: "20:00",
            location: "School Auditorium",
            description: "Discuss your child's progress and address any concerns with their teachers.",
          },
          {
            id: 2,
            title: "School Board Meeting",
            date: "2023-04-15",
            startTime: "19:00",
            endTime: "21:00",
            location: "Conference Room A",
            description: "A regular meeting of the school board to discuss various school matters and policies.",
          },
          {
            id: 3,
            title: "Science Fair",
            date: "2023-04-22",
            startTime: "09:00",
            endTime: "15:00",
            location: "School Gymnasium",
            description: "Students showcase their science projects and compete for awards and recognition.",
          },
          {
            id: 4,
            title: "Spring Concert",
            date: "2023-05-06",
            startTime: "18:30",
            endTime: "20:30",
            location: "School Auditorium",
            description: "Enjoy a night of music performed by the school's talented orchestra and choir.",
          },
          {
            id: 5,
            title: "Sports Day",
            date: "2023-05-20",
            startTime: "09:00",
            endTime: "17:00",
            location: "School Sports Ground",
            description: "A day full of athletic competitions, games, and fun activities for students and families.",
          }
      ];
    res.json(appointments);
  });

  // Mock data for the substitution plans
app.get('/plan', (req, res) => {
    const plans = [
        {
            "2023-04-03": {
                "classes": [{
                        "class": 5,
                        "courses": [{
                                "courseNumber": 1,
                                "course": "Mathematics",
                                "teacher": "Mr. Brown",
                                "startTime": "08:00",
                                "endTime": "09:30",
                                "room": {
                                    "number": "101",
                                    "name": "Math Room"
                                }
                            },
                            {
                                "courseNumber": 2,
                                "course": "Science",
                                "teacher": "Ms. Johnson",
                                "startTime": "09:45",
                                "endTime": "11:15",
                                "room": {
                                    "number": "102",
                                    "name": "Science Lab"
                                }
                            },
                            {
                                "courseNumber": 3,
                                "course": "English",
                                "teacher": "Mr. Davis",
                                "startTime": "11:30",
                                "endTime": "13:00",
                                "room": {
                                    "number": "103",
                                    "name": "English Room"
                                }
                            }
                        ]
                    },
                    {
                        "class": 6,
                        "courses": [{
                                "courseNumber": 1,
                                "course": "Mathematics",
                                "teacher": "Ms. Lee",
                                "startTime": "08:00",
                                "endTime": "09:30",
                                "room": {
                                    "number": "201",
                                    "name": "Math Room"
                                }
                            },
                            {
                                "courseNumber": 2,
                                "course": "Science",
                                "teacher": "Mr. Wilson",
                                "startTime": "09:45",
                                "endTime": "11:15",
                                "room": {
                                    "number": "202",
                                    "name": "Science Lab"
                                }
                            },
                            {
                                "courseNumber": 3,
                                "course": "English",
                                "teacher": "Ms. Brown",
                                "startTime": "11:30",
                                "endTime": "13:00",
                                "room": {
                                    "number": "203",
                                    "name": "English Room"
                                }
                            }
                        ]
                    },
                    {
                        "class": 7,
                        "courses": [{
                                "courseNumber": 1,
                                "course": "Mathematics",
                                "teacher": "Mr. Chen",
                                "startTime": "08:00",
                                "endTime": "09:30",
                                "room": {
                                    "number": "301",
                                    "name": "Math Room"
                                }
                            },
                            {
                                "courseNumber": 2,
                                "course": "Science",
                                "teacher": "Ms. Wilson",
                                "startTime": "09:45",
                                "endTime": "11:15",
                                "room": {
                                    "number": "302",
                                    "name": "Science Lab"
                                }
                            },
                            {
                                "courseNumber": 3,
                                "course": "English",
                                "teacher": "Mr. Garcia",
                                "startTime": "11:30",
                                "endTime": "13:00",
                                "room": {
                                    "number": "303",
                                    "name": "English Room"
                                }
                            }
                        ]
                    },
                    {
                        "class": 8,
                        "courses": [{
                                "courseNumber": 1,
                                "course": "Mathematics",
                                "teacher": "Ms. Kim",
                                "startTime": "08:00",
                                "endTime": "09:30",
                                "room": {
                                    "number": "401",
                                    "name": "Math Room"
                                }
                            },
                            {
                                "courseNumber": 2,
                                "course": "Science",
                                "teacher": "Mr. Martinez",
                                "startTime": "09:45",
                                "endTime": "11:15",
                                "room": {
                                    "number": "402",
                                    "name": "Science Lab"
                                }
                            },
                            {
                                "courseNumber": 3,
                                "course": "English",
                                "teacher": "Ms. Johnson",
                                "startTime": "11:30",
                                "endTime": "13:00",
                                "room": {
                                    "number": "403",
                                    "name": "English Room"
                                }
                            }
                        ]
                    },
                    {
                        "class": 9,
                        "courses": [{
                                "courseNumber": 1,
                                "course": "Mathematics",
                                "teacher": "Mr. Rodriguez",
                                "startTime": "08:00",
                                "endTime": "09:30",
                                "room": {
                                    "number": "501",
                                    "name": "Math Room"
                                }
                            },
                            {
                                "courseNumber": 2,
                                "course": "Science",
                                "teacher": "Ms. Kim",
                                "startTime": "09:45",
                                "endTime": "11:15",
                                "room": {
                                    "number": "502",
                                    "name": "Science Lab"
                                }
                            },
                            {
                                "courseNumber": 3,
                                "course": "English",
                                "teacher": "Mr. Smith",
                                "startTime": "11:30",
                                "endTime": "13:00",
                                "room": {
                                    "number": "503",
                                    "name": "English Room"
                                }
                            }
                        ]
                    },
                    {
                        "class": 10,
                        "courses": [{
                                "courseNumber": 1,
                                "course": "Mathematics",
                                "teacher": "Ms. Garcia",
                                "startTime": "08:00",
                                "endTime": "09:30",
                                "room": {
                                    "number": "601",
                                    "name": "Math Room"
                                }
                            },
                            {
                                "courseNumber": 2,
                                "course": "Science",
                                "teacher": "Mr. Lee",
                                "startTime": "09:45",
                                "endTime": "11:15",
                                "room": {
                                    "number": "602",
                                    "name": "Science Lab"
                                }
                            },
                            {
                                "courseNumber": 3,
                                "course": "English",
                                "teacher": "Ms. Rodriguez",
                                "startTime": "11:30",
                                "endTime": "13:00",
                                "room": {
                                    "number": "603",
                                    "name": "English Room"
                                }
                            }
                        ]
                    }
                ]
            }
        }
      ];
    res.json(plans);
});

// Mock data for the menu plan
app.get('/menu', (req, res) => {
    const menu = [
        {
            "2023-04-03": {
              breakfast: {
                main: "Scrambled eggs",
                side: "Toast with butter",
                beverage: "Orange juice"
              },
              lunch: {
                main: "Grilled chicken sandwich",
                side: "Mixed green salad",
                dessert: "Apple slices",
                beverage: "Water"
              },
              snack: "Yogurt with granola"
            },
            "2023-04-04": {
              breakfast: {
                main: "Pancakes with syrup",
                side: "Fresh fruit",
                beverage: "Milk"
              },
              lunch: {
                main: "Spaghetti with marinara sauce",
                side: "Garlic bread",
                dessert: "Peach cup",
                beverage: "Water"
              },
              snack: "Cheese and crackers"
            },
            "2023-04-05": {
              breakfast: {
                main: "Oatmeal with raisins",
                side: "Toast with jam",
                beverage: "Apple juice"
              },
              lunch: {
                main: "Turkey and cheese wrap",
                side: "Carrot sticks",
                dessert: "Chocolate chip cookie",
                beverage: "Water"
              },
              snack: "Veggie sticks with hummus"
            },
            "2023-04-06": {
              breakfast: {
                main: "Breakfast burrito",
                side: "Fresh fruit",
                beverage: "Milk"
              },
              lunch: {
                main: "Cheese pizza",
                side: "Caesar salad",
                dessert: "Orange slices",
                beverage: "Water"
              },
              snack: "Pretzels with mustard"
            },
            "2023-04-07": {
              breakfast: {
                main: "Cereal with milk",
                side: "Banana",
                beverage: "Orange juice"
              },
              lunch: {
                main: "Fish sticks",
                side: "Steamed mixed vegetables",
                dessert: "Apple slices",
                beverage: "Water"
              },
              snack: "Popcorn"
            }
          }        
      ];
      res.json(menu);
});
  
app.listen(port, '192.168.2.132', () => {
    console.log(`Server running on port ${port}`);
});