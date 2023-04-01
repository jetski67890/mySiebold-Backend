const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());

// Routes
// Mock data for the appointments
app.get('/appointments', (req, res) => {
    const appointments = [{
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
        },
        {
            id: 6,
            title: "Book Fair",
            date: "2023-05-28",
            startTime: "08:00",
            endTime: "16:00",
            location: "School Library",
            description: "A week-long book fair where students can purchase books and other literary resources.",
        },
        {
            id: 7,
            title: "Field Trip to the Zoo",
            date: "2023-06-05",
            startTime: "09:00",
            endTime: "15:00",
            location: "City Zoo",
            description: "A fun and educational field trip for students to learn about different animals and their habitats.",
        },
        {
            id: 8,
            title: "Graduation Ceremony",
            date: "2023-06-15",
            startTime: "18:00",
            endTime: "20:00",
            location: "School Auditorium",
            description: "A formal ceremony to celebrate the graduation of the senior class.",
        },
        {
            id: 9,
            title: "Open House",
            date: "2023-08-15",
            startTime: "08:00",
            endTime: "12:00",
            location: "School Campus",
            description: "An event where prospective students and their families can tour the school campus and meet with faculty and staff.",
        },
        {
            id: 10,
            title: "Parent-Teacher Association Meeting",
            date: "2023-09-05",
            startTime: "19:00",
            endTime: "21:00",
            location: "School Conference Room",
            description: "A meeting for parents to discuss school policies, events, and fundraising activities with the PTA.",
        },
        {
            id: 11,
            title: "Halloween Costume Contest",
            date: "2023-10-31",
            startTime: "14:00",
            endTime: "16:00",
            location: "School Gymnasium",
            description: "A fun event for students to showcase their creative costumes and compete for prizes.",
        },
        {
            id: 12,
            title: "Thanksgiving Potluck",
            date: "2023-11-22",
            startTime: "12:00",
            endTime: "14:00",
            location: "School Cafeteria",
            description: "A potluck lunch for students and staff to celebrate Thanksgiving and share their favorite dishes.",
        },
        {
            id: 13,
            title: "Winter Break",
            date: "2023-12-22",
            startTime: "",
            endTime: "",
            location: "",
            description: "School will be closed for winter break from December 22, 2023 to January 2, 2024.",
        },
        {
            id: 14,
            title: "Winter Concert",
            date: "2024-01-12",
            startTime: "18:30",
            endTime: "20:30",
            location: "School Auditorium",
            description: "Enjoy a night of music performed by the school's talented orchestra and choir.",
        },
        {
            id: 15,
            title: "Math Competition",
            date: "2024-02-14",
            startTime: "09:00",
            endTime: "12:00",
            location: "School Classroom",
            description: "A competition for students to showcase their math skills and compete for prizes.",
        },
        {
            id: 16,
            title: "Career Day",
            date: "2024-03-05",
            startTime: "09:00",
            endTime: "12:00",
            location: "School Auditorium",
            description: "A day for students to learn about different careers and meet with professionals from various industries.",
        },
        {
            id: 17,
            title: "Spring Break",
            date: "2024-03-25",
            startTime: "",
            endTime: "",
            location: "",
            description: "School will be closed for spring break from March 25, 2024 to April 1, 2024.",
        },
        {
            id: 18,
            title: "Art Exhibition",
            date: "2024-04-18",
            startTime: "16:00",
            endTime: "19:00",
            location: "School Art Gallery",
            description: "An exhibition featuring artwork created by students in various art classes.",
        },
        {
            id: 19,
            title: "Drama Production",
            date: "2024-05-10",
            startTime: "18:30",
            endTime: "20:30",
            location: "School Auditorium",
            description: "A production of a popular play or musical performed by the school's drama department.",
        },
        {
            id: 20,
            title: "End of Year Picnic",
            date: "2024-06-07",
            startTime: "11:00",
            endTime: "14:00",
            location: "School Sports Ground",
            description: "A fun outdoor event for students and staff to celebrate the end of the school year with games, food, and music.",
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
            id: "1",
            date: "2023-04-01",
            breakfast: {
                main: "Scrambled Eggs",
                side: "Hash Browns",
                dessert: "Blueberry Muffin",
                beverage: "Orange Juice"
            },
            lunch: {
                main: "Grilled Chicken Sandwich",
                side: "Sweet Potato Fries",
                dessert: "Chocolate Chip Cookie",
                beverage: "Iced Tea"
            },
            snack: "Trail Mix"
        },
        {
            id: "2",
            date: "2023-04-02",
            breakfast: {
                main: "French Toast",
                side: "Sausage Links",
                dessert: "Banana",
                beverage: "Milk"
            },
            lunch: {
                main: "Chicken Nuggets",
                side: "Macaroni and Cheese",
                dessert: "Apple",
                beverage: "Milk"
            },
            snack: "Apple"
        },
        {
            id: "3",
            date: "2023-04-03",
            breakfast: {
              main: "Pancakes",
              side: "Bacon",
              dessert: "Strawberries",
              beverage: "Coffee"
            },
            lunch: {
              main: "Turkey Sandwich",
              side: "Chips",
              dessert: "Grapes",
              beverage: "Water"
            },
            snack: "Popcorn"
        },
        {
            id: "4",
            date: "2023-04-04",
            breakfast: {
                main: "Oatmeal",
                side: "Banana",
                dessert: "Apple",
                beverage: "Milk"
            },
            lunch: {
                main: "Pizza",
                side: "Carrots",
                dessert: "Chocolate Chip Cookie",
                beverage: "Water"
            },
            snack: "Fruit slices"
        },
        {
            id: "5",
            date: "2023-04-05",
            breakfast: {
                main: "Waffles",
                side: "Fries",
                dessert: "Ice cream",
                beverage: "Milk"
            },
            lunch: {
                main: "Mozzarella Sticks",
                side: "Tomato Soup",
                dessert: "Apple",
                beverage: "Water"
            },
            snack: "Apple"
        }
    ];
      res.json(menu);
});
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});