export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export type Package = {
  id: string;
  title: string;
  category: string; // Used as the small tag e.g. "CIS", "Southern Africa"
  filters: string[];
  duration: string;
  desc: string;
  highlights: string[];
  inclusions: string[];
  price: string;
  image: string;
  itinerary: ItineraryDay[];
};

export const packagesData: Package[] = [
  {
    id: "kazakhstan",
    title: "Kazakhstan",
    category: "CIS",
    filters: ["All", "International"],
    duration: "5 Nights / 6 Days",
    desc: "Almaty mountains & vast steppe landscapes. Experience Central Asia's most modern city.",
    highlights: ["Medeu Skating Rink", "Big Almaty Lake", "Tian Shan Mountain Views"],
    inclusions: [
      "4-star hotel in Almaty",
      "Mountain excursions (Medeu & Big Almaty Lake)",
      "All airport transfers",
      "City & cultural tours",
      "Kazakhstan e-visa assistance",
      "24/7 concierge support",
    ],
    price: "Price on Request",
    image: "/hero.jpg", // Almaty placeholder
    itinerary: [
      {
        day: "1-2",
        title: "Almaty Arrival",
        description: "Arrive in Almaty. Enjoy a guided city tour covering Panfilov Park, Zenkov Cathedral, and the bustling Green Bazaar.",
      },
      {
        day: "3",
        title: "Medeu & Shymbulak",
        description: "Visit the famous Medeu skating rink and take a scenic cable car ride to the beautiful Shymbulak ski resort.",
      },
      {
        day: "4",
        title: "Big Almaty Lake",
        description: "Embark on a scenic mountain drive to Big Almaty Lake, enjoying breathtaking views of the majestic Tian Shan mountain range.",
      },
      {
        day: "5",
        title: "Almaty Leisure",
        description: "Enjoy a free day at your own pace. Perfect for exploring local cafes, shopping for souvenirs, or booking optional experiences.",
      },
      {
        day: "6",
        title: "Departure",
        description: "Transfer to the airport for your onward departure, carrying unforgettable memories of Kazakhstan.",
      },
    ],
  },
  {
    id: "azerbaijan",
    title: "Azerbaijan",
    category: "CIS",
    filters: ["All", "International", "Women's Special"],
    duration: "4 Nights / 5 Days",
    desc: "The Land of Fire. Explore the perfect blend of ancient heritage and futuristic architecture in Baku.",
    highlights: ["Flame Towers", "Old City (Icherisheher)", "Gobustan Rock Art"],
    inclusions: [
      "Premium boutique hotel stays",
      "Guided Old City walking tour",
      "Mud Volcanoes & Gobustan tour",
      "Airport transfers",
      "Daily gourmet breakfast",
      "Visa processing assistance",
    ],
    price: "Price on Request",
    image: "/kenya.jpg", // Baku placeholder
    itinerary: [
      {
        day: "1",
        title: "Welcome to Baku",
        description: "Arrive in the glittering capital of Azerbaijan. Transfer to your luxury hotel and enjoy a panoramic evening view of the Flame Towers.",
      },
      {
        day: "2",
        title: "Old & New City Tour",
        description: "Stroll through the UNESCO-listed Old City, visit the Maiden Tower, and later marvel at the modern Heydar Aliyev Center architecture.",
      },
      {
        day: "3",
        title: "Gobustan & Mud Volcanoes",
        description: "Head out of the city to see ancient petroglyphs at Gobustan National Park and witness the bizarre, bubbling mud volcanoes.",
      },
      {
        day: "4",
        title: "Absheron Peninsula",
        description: "Visit the Ateshgah Fire Temple and Yanar Dag (the burning mountain) before an afternoon of luxury shopping and local tea ceremonies.",
      },
      {
        day: "5",
        title: "Farewell Azerbaijan",
        description: "Enjoy a relaxed breakfast before your private transfer to the airport for your flight home.",
      },
    ],
  },
  {
    id: "south-africa",
    title: "South Africa",
    category: "Southern Africa",
    filters: ["All", "International", "Safari"],
    duration: "7 Nights / 8 Days",
    desc: "From the vibrant streets of Cape Town to thrilling Big Five safaris in Kruger National Park.",
    highlights: ["Big Five Safari", "Table Mountain Cable Car", "Cape Winelands Tasting"],
    inclusions: [
      "Luxury safari lodge & boutique city hotel",
      "Daily safari game drives",
      "Cape Peninsula tour",
      "Internal flights",
      "Selected premium meals",
      "Expert ranger guides",
    ],
    price: "Price on Request",
    image: "/bali.jpg", // Safari placeholder
    itinerary: [
      {
        day: "1-2",
        title: "Cape Town Discovery",
        description: "Arrive in Cape Town. Take the cable car up Table Mountain and explore the bustling V&A Waterfront.",
      },
      {
        day: "3",
        title: "Cape Peninsula & Penguins",
        description: "Drive along the spectacular Chapman's Peak, visit the Cape of Good Hope, and see the adorable penguin colony at Boulders Beach.",
      },
      {
        day: "4",
        title: "Cape Winelands",
        description: "A day dedicated to luxury wine tasting and gourmet dining in the beautiful valleys of Stellenbosch and Franschhoek.",
      },
      {
        day: "5-7",
        title: "Kruger National Park Safari",
        description: "Fly to Kruger. Spend three days at a luxury safari lodge with morning and evening game drives searching for the Big Five.",
      },
      {
        day: "8",
        title: "Departure",
        description: "Final morning game drive before transferring to the airport for your journey home.",
      },
    ],
  },
  {
    id: "sri-lanka",
    title: "Sri Lanka",
    category: "South Asia",
    filters: ["All", "International"],
    duration: "6 Nights / 7 Days",
    desc: "A tapestry of lush tea gardens, ancient temples, and pristine golden beaches.",
    highlights: ["Sigiriya Rock Fortress", "Scenic Train to Ella", "Galle Fort"],
    inclusions: [
      "4 & 5-star heritage hotels",
      "Private air-conditioned transport",
      "Reserved seats on scenic train",
      "Temple of the Tooth entry",
      "Daily breakfast & dinner",
      "English-speaking chauffeur guide",
    ],
    price: "Price on Request",
    image: "/srilanka.jpg", // Sri lanka placeholder
    itinerary: [
      {
        day: "1",
        title: "Arrival in Colombo",
        description: "Arrive in Colombo and transfer to your coastal hotel. Relax and recover from your flight with a beautiful sunset dinner.",
      },
      {
        day: "2",
        title: "Sigiriya Rock Fortress",
        description: "Travel to the Cultural Triangle and climb the ancient rock fortress of Sigiriya, a masterpiece of ancient engineering and art.",
      },
      {
        day: "3",
        title: "Kandy & Sacred Temple",
        description: "Visit the Dambulla Cave Temple en route to Kandy. In the evening, witness a cultural show and visit the Temple of the Sacred Tooth Relic.",
      },
      {
        day: "4-5",
        title: "Nuwara Eliya & Ella Train Ride",
        description: "Drive into the cool, misty tea country. Board the world-famous blue train for a breathtaking journey through the mountains to Ella.",
      },
      {
        day: "6",
        title: "Galle Heritage",
        description: "Descend to the southern coast to explore the Dutch colonial Galle Fort, walking its historic ramparts and boutique-lined streets.",
      },
      {
        day: "7",
        title: "Departure",
        description: "Transfer to Bandaranaike International Airport for your departure flight.",
      },
    ],
  },
  {
    id: "bali-escapade",
    title: "Bali Escapade",
    category: "South East Asia",
    filters: ["All", "International", "Women's Special"],
    duration: "5 Nights / 6 Days",
    desc: "Experience the spiritual heart, terraced rice paddies, and stunning beaches of the Island of the Gods.",
    highlights: ["Ubud Swing & Rice Terraces", "Beach Club Access", "Balinese Spa Treatment"],
    inclusions: [
      "Luxury villa with private pool",
      "Ubud cultural tour",
      "Nusa Penida island trip",
      "Welcome Balinese massage",
      "Floating breakfast experience",
      "Private airport transfers",
    ],
    price: "Price on Request",
    image: "/bali.jpg",
    itinerary: [
      {
        day: "1",
        title: "Welcome to Bali",
        description: "Arrive at Ngurah Rai International Airport. Private transfer to your luxury pool villa in Seminyak. Evening at leisure.",
      },
      {
        day: "2",
        title: "Ubud Culture & Nature",
        description: "Full day tour of Ubud. Visit the Sacred Monkey Forest, Tegalalang Rice Terraces, and take an iconic photo on the Bali Swing.",
      },
      {
        day: "3",
        title: "Nusa Penida Excursion",
        description: "Take a fast boat to Nusa Penida. Marvel at the T-Rex shape of Kelingking Beach and swim in the crystal waters of Crystal Bay.",
      },
      {
        day: "4",
        title: "Wellness & Sunset Temples",
        description: "Enjoy a rejuvenating Balinese spa treatment in the morning. Later, visit the spectacular Uluwatu cliff temple for sunset and the Kecak fire dance.",
      },
      {
        day: "5",
        title: "Beach Clubs & Shopping",
        description: "A free day to relax at premium beach clubs like Potato Head or Finns, or shop for boutique fashion and homewares in Canggu.",
      },
      {
        day: "6",
        title: "Farewell",
        description: "Enjoy your final floating breakfast before checking out and transferring to the airport.",
      },
    ],
  },
  {
    id: "kenya-safari",
    title: "Kenya Wildlife Safari",
    category: "East Africa",
    filters: ["All", "International", "Safari"],
    duration: "6 Nights / 7 Days",
    desc: "Witness the Great Migration and majestic wildlife in the iconic Masai Mara and Amboseli reserves.",
    highlights: ["Masai Mara Game Drives", "Views of Mt. Kilimanjaro", "Maasai Village Visit"],
    inclusions: [
      "Premium tented camps & lodges",
      "4x4 customized safari cruisers",
      "All park entry fees",
      "Professional safari guide",
      "Full board meals on safari",
      "Flying Doctors emergency cover",
    ],
    price: "Price on Request",
    image: "/kenya.jpg",
    itinerary: [
      {
        day: "1",
        title: "Nairobi Arrival",
        description: "Arrive in Nairobi, East Africa's bustling hub. Transfer to your luxury boutique hotel. Optional visit to the Giraffe Centre.",
      },
      {
        day: "2-3",
        title: "Amboseli National Park",
        description: "Travel to Amboseli, famous for its large elephant herds and breathtaking views of Mount Kilimanjaro. Enjoy extensive morning and afternoon game drives.",
      },
      {
        day: "4",
        title: "Lake Nakuru",
        description: "Drive to the Great Rift Valley to visit Lake Nakuru, renowned for its rhinos and vibrant birdlife, including flamingos.",
      },
      {
        day: "5-6",
        title: "Masai Mara Reserve",
        description: "Enter the world-famous Masai Mara. Spend two days tracking lions, leopards, cheetahs, and witnessing the incredible drama of the wild.",
      },
      {
        day: "7",
        title: "Return to Nairobi & Departure",
        description: "A final early morning game drive before driving back to Nairobi for your outbound evening flight.",
      },
    ],
  },
  {
    id: "nepal-highlights",
    title: "Nepal Highlights",
    category: "South Asia",
    filters: ["All", "International"],
    duration: "6 Nights / 7 Days",
    desc: "Spiritual, Nature, and Wildlife. Experience the perfect blend of spirituality, nature, culture & adventure across Nepal.",
    highlights: [
      "Experience spiritual Aarati at the sacred Pashupatinath Temple",
      "Visit major UNESCO heritage sites including Boudhanath Stupa & Swayambhunath Stupa",
      "Explore the iconic Sleeping Vishnu at Budhanilkantha Temple",
      "Scenic drive from Kathmandu to Pokhara via Prithvi Highway",
      "Witness stunning Himalayan sunrise from Sarangkot",
      "Enjoy boating on Phewa Lake with visit to Tal Barahi Temple",
      "Visit Manakamana Temple via thrilling cable car ride",
      "Experience wildlife adventure with jeep safari in Chitwan",
      "Enjoy Tharu cultural dance performance in Chitwan"
    ],
    inclusions: [
      "Accommodation",
      "Daily breakfast",
      "Sightseeing and transfers",
      "Jungle Safari in Chitwan",
      "Manakamana Cable Car tickets"
    ],
    price: "Price on Request",
    image: "/nepal1.jpg",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Kathmandu",
        description: "Arrival in Kathmandu & Evening Aarati at Pashupatinath."
      },
      {
        day: "2",
        title: "Kathmandu Full-Day Tour",
        description: "Visit major UNESCO heritage sites including Boudhanath Stupa & Swayambhunath Stupa."
      },
      {
        day: "3",
        title: "Kathmandu to Pokhara",
        description: "Distance: 210 km / 6-7 hrs. Scenic drive from Kathmandu to Pokhara via Prithvi Highway."
      },
      {
        day: "4",
        title: "Pokhara Sightseeing",
        description: "Witness stunning Himalayan sunrise from Sarangkot, boating on Phewa Lake with visit to Tal Barahi Temple."
      },
      {
        day: "5",
        title: "Pokhara to Chitwan via Manakamana",
        description: "Distance: 170 km / 5.5-6 hrs. Including Manakamana stop via thrilling cable car ride."
      },
      {
        day: "6",
        title: "Chitwan to Kathmandu",
        description: "Distance: 170 km / 6-7 hrs. Experience wildlife adventure with jeep safari and enjoy Tharu cultural dance performance."
      },
      {
        day: "7",
        title: "Kathmandu Departure",
        description: "Departure from Kathmandu."
      }
    ]
  },
  {
    id: "enchanting-nepal",
    title: "Enchanting Nepal",
    category: "South Asia",
    filters: ["All", "International"],
    duration: "7 Nights / 8 Days",
    desc: "Heritage, Nature & Safari. Start/End: KTM Airport. Valid till Aug 2026.",
    highlights: [
      "Cultural exploration of UNESCO heritage",
      "World Famous cable car rides",
      "Exciting Jungle safari experience",
      "Natural beauty & adventure in Pokhara",
      "Sunrise views from Nagarkot",
      "Mt Everest Flight from Kathmandu"
    ],
    inclusions: [
      "Accommodation",
      "Sightseeing and transfers",
      "Jungle safari",
      "Cable car rides",
      "Mt Everest Flight"
    ],
    price: "Price on Request",
    image: "/nepal2.jpg",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Kathmandu",
        description: "Arrival in Kathmandu - stay."
      },
      {
        day: "2",
        title: "Kathmandu Day Sightseeing",
        description: "Kathmandu Day Sightseeing."
      },
      {
        day: "3",
        title: "Chandragiri Hills Experience",
        description: "Chandragiri Hills Experience."
      },
      {
        day: "4",
        title: "Manakamana & Chitwan",
        description: "Manakamana Cable Car & Drive to Chitwan (5-6 hrs)."
      },
      {
        day: "5",
        title: "Jungle Safari & Pokhara",
        description: "Jungle Safari & Drive to Pokhara (4-5 hrs)."
      },
      {
        day: "6",
        title: "Pokhara day Sightseeing",
        description: "Pokhara day Sightseeing."
      },
      {
        day: "7",
        title: "Fly to KTM & Nagarkot",
        description: "Fly to KTM (30 Min) - Bhaktapur & Nagarkot sunset."
      },
      {
        day: "8",
        title: "Sunrise & Departure",
        description: "Sunrise & Departure (2 hrs)."
      }
    ]
  }
];
