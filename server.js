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
    const plans = [{
            id: "1",
            class: "5A",
            date: "2023-04-03",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Mathematics",
            teacher: "Ms. Jones",
            room: {
                number: "101",
                name: "Math Classroom"
            },
            info: "Chapter 7: Fractions"
        },
        {
            id: "2",
            class: "6A",
            date: "2023-04-03",
            startTime: "09:45",
            endTime: "11:15",
            subject: "English",
            teacher: "Mr. Smith",
            room: {
                number: "102",
                name: "English Classroom"
            },
            info: "Essay Writing"
        },
        {
            id: "3",
            class: "7A",
            date: "2023-04-03",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Science",
            teacher: "Ms. Patel",
            room: {
                number: "103",
                name: "Science Classroom"
            },
            info: "Chemical Reactions"
        },
        {
            id: "4",
            class: "5A",
            date: "2023-04-04",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Geography",
            teacher: "Ms. Williams",
            room: {
                number: "104",
                name: "Geography Classroom"
            },
            info: "Continents and Oceans"
        },
        {
            id: "5",
            class: "6A",
            date: "2023-04-04",
            startTime: "09:45",
            endTime: "11:15",
            subject: "History",
            teacher: "Mr. Brown",
            room: {
                number: "105",
                name: "History Classroom"
            },
            info: "World War II"
        },
        {
            id: "6",
            class: "7A",
            date: "2023-04-04",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Art",
            teacher: "Ms. Lee",
            room: {
                number: "106",
                name: "Art Classroom"
            },
            info: "Painting Techniques"
        },
        {
            id: "7",
            class: "5A",
            date: "2023-04-05",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Music",
            teacher: "Ms. Jackson",
            room: {
                number: "107",
                name: "Music Classroom"
            },
            info: "Piano Basics"
        },
        {
            id: "8",
            class: "6A",
            date: "2023-04-05",
            startTime: "09:45",
            endTime: "11:15",
            subject: "Physical Education",
            teacher: "Mr. Garcia",
            room: {
                number: "108",
                name: "Gymnasium"
            },
            info: "Basketball Practice"
        },
        {
            id: "9",
            class: "7A",
            date: "2023-04-05",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Technology",
            teacher: "Mr. Kim",
            room: {
                number: "109",
                name: "Computer Lab"
            },
            info: "Introduction to Coding"
        },
        {
            id: "10",
            class: "5A",
            date: "2023-04-06",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Social Studies",
            teacher: "Ms. Rodriguez",
            room: {
                number: "110",
                name: "Social Studies Classroom"
            },
            info: "The American Revolution"
        },
        {
            id: "11",
            class: "6A",
            date: "2023-04-06",
            startTime: "09:45",
            endTime: "11:15",
            subject: "Language",
            teacher: "Ms. Chen",
            room: {
                number: "111",
                name: "Language Classroom"
            },
            info: "Grammar Review"
        },
        {
            id: "12",
            class: "7A",
            date: "2023-04-06",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Religion",
            teacher: "Father Johnson",
            room: {
                number: "112",
                name: "Chapel"
            },
            info: "The Bible and Christianity"
        },
        {
            id: "13",
            class: "5A",
            date: "2023-04-07",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Mathematics",
            teacher: "Mr. Davis",
            room: {
                number: "113",
                name: "Math Classroom"
            },
            info: "Chapter 8: Decimals"
        },
        {
            id: "14",
            class: "6A",
            date: "2023-04-07",
            startTime: "09:45",
            endTime: "11:15",
            subject: "English",
            teacher: "Ms. Clark",
            room: {
                number: "114",
                name: "English Classroom"
            },
            info: "Poetry Analysis"
        },
        {
            id: "15",
            class: "7A",
            date: "2023-04-07",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Science",
            teacher: "Ms. Johnson",
            room: {
                number: "115",
                name: "Science Classroom"
            },
            info: "Physics: Motion"
        },
        {
            id: "16",
            class: "5A",
            date: "2023-04-08",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Physical Education",
            teacher: "Mr. Thompson",
            room: {
                number: "108",
                name: "Gymnasium"
            },
            info: "Soccer Practice"
        },
        {
            id: "17",
            class: "6A",
            date: "2023-04-08",
            startTime: "09:45",
            endTime: "11:15",
            subject: "Art",
            teacher: "Ms. Kim",
            room: {
                number: "106",
                name: "Art Classroom"
            },
            info: "Sculpting Techniques"
        },
        {
            id: "18",
            class: "7A",
            date: "2023-04-08",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Music",
            teacher: "Ms. Thompson",
            room: {
                number: "107",
                name: "Music Classroom"
            },
            info: "Choir Practice"
        },
        {
            id: "19",
            class: "5A",
            date: "2023-04-09",
            startTime: "08:00",
            endTime: "09:30",
            subject: "History",
            teacher: "Ms. Hernandez",
            room: {
                number: "105",
                name: "History Classroom"
            },
            info: "Ancient Civilizations"
        },
        {
            id: "20",
            class: "6A",
            date: "2023-04-09",
            startTime: "09:45",
            endTime: "11:15",
            subject: "Mathematics",
            teacher: "Ms. Kim",
            room: {
                number: "101",
                name: "Math Classroom"
            },
            info: "Chapter 9: Ratios and Proportions"
        },
        {
            id: "21",
            class: "7A",
            date: "2023-04-09",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Physical Education",
            teacher: "Mr. Johnson",
            room: {
                number: "108",
                name: "Gymnasium"
            },
            info: "Volleyball Practice"
        },
        {
            id: "22",
            class: "5A",
            date: "2023-04-10",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Language",
            teacher: "Ms. Patel",
            room: {
                number: "111",
                name: "Language Classroom"
            },
            info: "Creative Writing"
        },
        {
            id: "23",
            class: "6A",
            date: "2023-04-10",
            startTime: "09:45",
            endTime: "11:15",
            subject: "Science",
            teacher: "Mr. Davis",
            room: {
                number: "103",
                name: "Science Classroom"
            },
            info: "Biology: Cells"
        },
        {
            id: "24",
            class: "7A",
            date: "2023-04-10",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Religion",
            teacher: "Father Hernandez",
            room: {
                number: "112",
                name: "Chapel"
            },
            info: "The Ten Commandments"
        },
        {
            id: "25",
            class: "5A",
            date: "2023-04-11",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Social Studies",
            teacher: "Ms. Lee",
            room: {
                number: "110",
                name: "Social Studies Classroom"
            },
            info: "The Civil Rights Movement"
        },
        {
            id: "26",
            class: "6A",
            date: "2023-04-11",
            startTime: "09:45",
            endTime: "11:15",
            subject: "English",
            teacher: "Ms. Kim",
            room: {
                number: "102",
                name: "English Classroom"
            },
            info: "Literary Devices"
        },
        {
            id: "27",
            class: "7A",
            date: "2023-04-11",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Technology",
            teacher: "Ms. Davis",
            room: {
                number: "109",
                name: "Computer Lab"
            },
            info: "Web Design"
        },
        {
            id: "28",
            class: "5A",
            date: "2023-04-12",
            startTime: "08:00",
            endTime: "09:30",
            subject: "Science",
            teacher: "Ms. Hernandez",
            room: {
                number: "103",
                name: "Science Classroom"
            },
            info: "Chemistry: Elements and Compounds"
        },
        {
            id: "29",
            class: "6A",
            date: "2023-04-12",
            startTime: "09:45",
            endTime: "11:15",
            subject: "Mathematics",
            teacher: "Mr. Thompson",
            room: {
                number: "101",
                name: "Math Classroom"
            },
            info: "Chapter 10: Geometry"
        },
        {
            id: "30",
            class: "7A",
            date: "2023-04-12",
            startTime: "11:30",
            endTime: "13:00",
            subject: "Art",
            teacher: "Ms. Jackson",
            room: {
                number: "106",
                name: "Art Classroom"
            },
            info: "Drawing Techniques"
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
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});