// src/data/seedData.ts
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "../config/db";
import Experience from "../models/Experience";
import Promo from "../models/Promo";

const run = async () => {
  await connectDB();

  // remove old data
  await Experience.deleteMany({});
  await Promo.deleteMany({});

  const experiences = [
    {
      title: "Sunset Beach Walk",
      description: "Relaxing guided walk and bonfire by the sea.",
      location: "Goa",
      price: 1200,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      slots: [
        {
          date: "2025-11-10",
          times: [
            { time: "05:00 PM", seatsLeft: 10 },
            { time: "06:30 PM", seatsLeft: 8 },
          ],
        },
        {
          date: "2025-11-11",
          times: [
            { time: "05:00 PM", seatsLeft: 12 },
            { time: "06:30 PM", seatsLeft: 12 },
          ],
        },
      ],
    },
    {
      title: "Mountain Sunrise Trek",
      description: "Early morning trek with spectacular sunrise views.",
      location: "Coimbatore",
      price: 2000,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      slots: [
        { date: "2025-11-12", times: [{ time: "04:00 AM", seatsLeft: 6 }] },
        { date: "2025-11-13", times: [{ time: "04:00 AM", seatsLeft: 6 }] },
      ],
    },
    {
      title: "Backwater Kayaking Adventure",
      description: "Paddle through the calm backwaters surrounded by lush greenery.",
      location: "Alleppey",
      price: 1500,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3",
      slots: [
        { date: "2025-11-14", times: [{ time: "07:00 AM", seatsLeft: 10 }] },
        { date: "2025-11-15", times: [{ time: "09:00 AM", seatsLeft: 8 }] },
      ],
    },
    {
      title: "Desert Jeep Safari",
      description: "Thrilling off-road adventure across sand dunes with sunset views.",
      location: "Jaisalmer",
      price: 2500,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      slots: [
        { date: "2025-11-16", times: [{ time: "04:00 PM", seatsLeft: 12 }] },
        { date: "2025-11-17", times: [{ time: "05:30 PM", seatsLeft: 10 }] },
      ],
    },
    {
      title: "Coffee Estate Trail",
      description: "Walk through scenic coffee plantations and learn about coffee making.",
      location: "Chikmagalur",
      price: 1000,
      image: "https://images.unsplash.com/photo-1513639725746-c5d3e861f32a",
      slots: [
        { date: "2025-11-18", times: [{ time: "09:00 AM", seatsLeft: 8 }] },
        { date: "2025-11-19", times: [{ time: "11:00 AM", seatsLeft: 6 }] },
      ],
    },
    {
      title: "River Rafting Rush",
      description: "Feel the adrenaline as you raft down thrilling white-water rapids.",
      location: "Rishikesh",
      price: 2200,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      slots: [
        { date: "2025-11-20", times: [{ time: "08:00 AM", seatsLeft: 10 }] },
        { date: "2025-11-21", times: [{ time: "10:00 AM", seatsLeft: 12 }] },
      ],
    },
    {
      title: "Snow Camp Experience",
      description: "A cozy camping experience amidst the snow-capped mountains.",
      location: "Manali",
      price: 3000,
      image: "https://images.unsplash.com/photo-1601758064229-0c3f9f786cd3",
      slots: [
        { date: "2025-11-22", times: [{ time: "06:00 PM", seatsLeft: 8 }] },
        { date: "2025-11-23", times: [{ time: "06:00 PM", seatsLeft: 8 }] },
      ],
    },
    {
      title: "Cultural Heritage Walk",
      description: "Discover the timeless beauty and stories behind historic monuments.",
      location: "Jaipur",
      price: 900,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      slots: [
        { date: "2025-11-24", times: [{ time: "05:00 PM", seatsLeft: 15 }] },
        { date: "2025-11-25", times: [{ time: "10:00 AM", seatsLeft: 10 }] },
      ],
    },
  ];

  await Experience.insertMany(experiences);
  console.log("✅ Seeded experiences");

  await Promo.insertMany([
    { code: "SAVE10", type: "percent", value: 10, active: true },
    { code: "FLAT100", type: "flat", value: 100, active: true },
  ]);
  console.log("✅ Seeded promos");

  process.exit(0);
};

run().catch((err) => {
  console.error("❌ Error seeding data:", err);
  process.exit(1);
});
