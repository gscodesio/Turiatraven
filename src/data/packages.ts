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
  exclusions?: string[];
  flights?: string[];
  pricingDetails?: {
    bookingAmount: string;
    doubleShare: string;
    tripleShare: string;
    child6to12: string;
    child2to6: string;
  };
  availableDates?: string[];
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
    image: "/kazakhstan.png",
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
    image: "/Azerbaijan.png", 
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
    image: "/southafrica.png",
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
  },
  {
    id: "kashi-yatra",
    title: "Kashi Yatra",
    category: "Pilgrimage",
    filters: ["All", "Domestic"],
    duration: "4 Nights / 5 Days",
    desc: "Embark on a spiritual journey to the holy cities of Varanasi (Kashi), Prayagraj, and Ayodhya. Experience the divine Ganga Aarti and seek blessings.",
    highlights: [
      "Kashi Vishwanath Temple Darshan & Ganga Aarti",
      "Holy Bath at Triveni Sangam, Prayagraj",
      "Visit Ram Janmabhoomi & Kanak Bhawan in Ayodhya"
    ],
    inclusions: [
      "4 Nights stay in comfortable hotels",
      "Daily Breakfast & Dinner",
      "All sightseeing & transfers by AC vehicle",
      "Boat ride on the Ganges in Varanasi",
      "Local tour guide assistance"
    ],
    price: "Price on Request",
    image: "/kashiyatra.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Varanasi & Ganga Aarti",
        description: "Arrive in Varanasi. In the evening, witness the spectacular and spiritual Ganga Aarti ceremony at Dashashwamedh Ghat."
      },
      {
        day: "2",
        title: "Kashi Vishwanath Darshan & Sarnath",
        description: "Early morning visit to Kashi Vishwanath Temple, Annapurna Temple, and Vishalakshi Temple. Later, visit Sarnath where Lord Buddha preached his first sermon."
      },
      {
        day: "3",
        title: "Varanasi to Prayagraj",
        description: "Drive to Prayagraj. Visit Triveni Sangam (confluence of Ganges, Yamuna, and mythical Saraswati) for a holy bath, Anand Bhawan, and Hanuman Temple."
      },
      {
        day: "4",
        title: "Prayagraj to Ayodhya",
        description: "Drive to the holy city of Ayodhya. Visit Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and take a stroll along the Sarayu River ghats."
      },
      {
        day: "5",
        title: "Ayodhya to Varanasi & Departure",
        description: "Return to Varanasi and transfer to the airport/railway station for your onward journey."
      }
    ]
  },
  {
    id: "kashmir-special",
    title: "Kashmir Special Package",
    category: "Hills & Valleys",
    filters: ["All", "Domestic"],
    duration: "4 Nights / 5 Days",
    desc: "Explore the paradise on Earth. Relax in a traditional houseboat, ride the Gulmarg gondola, and stroll through the stunning Mughal Gardens.",
    highlights: [
      "Stay in a luxury Houseboat on Dal Lake",
      "Shikara Ride & Floating Market Experience",
      "Gondola Ride in Gulmarg (Phase 1 & 2)"
    ],
    inclusions: [
      "3 Nights in Srinagar & 1 Night in Houseboat",
      "Daily Breakfast & Dinner",
      "Private AC sedan for all transfers & tours",
      "1-hour Shikara ride on Dal Lake",
      "Toll, parking, and driver allowance"
    ],
    price: "Price on Request",
    image: "/kashmirspecialpackage.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Srinagar & Shikara Ride",
        description: "Arrive in Srinagar. Transfer to your Dal Lake houseboat. Enjoy a peaceful Shikara ride in the evening."
      },
      {
        day: "2",
        title: "Srinagar Local Sightseeing",
        description: "Visit the famous Shalimar Bagh, Nishat Bagh (Mughal Gardens), and the historical Shankaracharya Temple."
      },
      {
        day: "3",
        title: "Gulmarg Day Excursion",
        description: "Drive to Gulmarg. Experience the spectacular Gondola ride offering breathtaking views of snow-capped mountains."
      },
      {
        day: "4",
        title: "Pahalgam Valley Tour",
        description: "Travel to Pahalgam. Explore the saffron fields, Avantipura ruins, and the scenic Betaab Valley."
      },
      {
        day: "5",
        title: "Srinagar Departure",
        description: "Return to Srinagar and transfer to the airport for your flight back home."
      }
    ]
  },
  {
    id: "south-india-temple",
    title: "South India Temple Circuit",
    category: "Pilgrimage",
    filters: ["All", "Domestic"],
    duration: "6 Nights / 7 Days",
    desc: "A divine journey through the architectural wonders of South Indian temples. Explore Madurai, Rameshwaram, and Kanyakumari.",
    highlights: [
      "Meenakshi Amman Temple Darshan in Madurai",
      "Ramanathaswamy Temple & Holy Bath in Rameshwaram",
      "Vivekananda Rock Memorial in Kanyakumari"
    ],
    inclusions: [
      "6 Nights stay in premium hotels",
      "Daily breakfast at all hotels",
      "All sightseeing and transfers by private vehicle",
      "Ferry ticket to Vivekananda Rock Memorial",
      "Professional English/Hindi speaking driver guide"
    ],
    price: "Price on Request",
    image: "/South India Temple Circuit.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Madurai",
        description: "Arrive in Madurai. Check-in to your hotel and visit the magnificent Meenakshi Amman Temple in the evening."
      },
      {
        day: "2",
        title: "Madurai to Rameshwaram",
        description: "Drive to Rameshwaram via the scenic Pamban Bridge. Visit the Ramanathaswamy Temple and take a holy dip in the 22 wells."
      },
      {
        day: "3",
        title: "Dhanushkodi Exploration",
        description: "Visit Dhanushkodi, the ghost town at the southern tip of India, and enjoy views of the Indian Ocean and Bay of Bengal."
      },
      {
        day: "4",
        title: "Rameshwaram to Kanyakumari",
        description: "Drive to Kanyakumari. In the evening, witness the breathtaking sunset at the confluence of three oceans."
      },
      {
        day: "5",
        title: "Kanyakumari Sightseeing",
        description: "Visit the Vivekananda Rock Memorial, Thiruvalluvar Statue, and the Suchindram Temple."
      },
      {
        day: "6",
        title: "Kanyakumari to Trivandrum",
        description: "Drive to Trivandrum. Visit the historic Padmanabhaswamy Temple, the richest temple in the world."
      },
      {
        day: "7",
        title: "Departure",
        description: "Transfer to Trivandrum airport/railway station for your onward journey."
      }
    ]
  },
  {
    id: "sikkim-darjeeling-special",
    title: "Sikkim & Darjeeling - Pure Veg Janmashtami Special",
    category: "Himalayas",
    filters: ["All", "Domestic"],
    duration: "6 Nights / 7 Days",
    desc: "Celebrate Janmashtami in the serene hills of Northeast India. A fully curated, pure vegetarian tour covering Gangtok, Pelling, and Darjeeling.",
    highlights: [
      "100% Pure Vegetarian Meals Included",
      "Sunrise over Mt. Kanchenjunga from Tiger Hill",
      "Visit Tsomgo Lake & Baba Mandir in Gangtok"
    ],
    inclusions: [
      "6 Nights stay in premium veg-friendly hotels",
      "All Pure Veg meals (Breakfast, Lunch, Dinner)",
      "Private SUV (Xylo/Innova) for all transfers & tours",
      "Permits for Tsomgo Lake & Baba Mandir",
      "Local sightseeing in Gangtok, Pelling, and Darjeeling"
    ],
    price: "Price on Request",
    image: "/Sikkim & Darjeeling-Pure Veg Janmashtami Special.webp",
    itinerary: [
      {
        day: "1",
        title: "Bagdogra to Gangtok",
        description: "Arrive at Bagdogra Airport / NJP Railway Station. Enjoy a scenic drive to Gangtok. Check-in and relax."
      },
      {
        day: "2",
        title: "Tsomgo Lake & Baba Mandir Excursion",
        description: "Visit the high-altitude Tsomgo Lake (12,400 ft) and the sacred Baba Harbhajan Singh Mandir."
      },
      {
        day: "3",
        title: "Gangtok to Pelling",
        description: "Drive to Pelling, passing through the beautiful tea gardens and Ravangla Buddha Park."
      },
      {
        day: "4",
        title: "Pelling Sightseeing",
        description: "Visit the Skywalk, Khecheopalri Lake, Rimbi Waterfalls, and the historic Pemayangtse Monastery."
      },
      {
        day: "5",
        title: "Pelling to Darjeeling",
        description: "Drive to Darjeeling, the Queen of Hills. Evening free for shopping at Chowrasta Mall."
      },
      {
        day: "6",
        title: "Darjeeling Tiger Hill Sunrise & Town Tour",
        description: "Wake up at 4:00 AM to witness the golden sunrise over Mt. Kanchenjunga from Tiger Hill. Later, visit Ghoom Monastery, Batasia Loop, and a tea estate."
      },
      {
        day: "7",
        title: "Departure to Bagdogra",
        description: "Transfer back to Bagdogra Airport / NJP for your return journey."
      }
    ]
  },
  {
    id: "georgia-tbilisi",
    title: "Discover Georgia Tbilisi",
    category: "CIS",
    filters: ["All", "International"],
    duration: "4 Nights / 5 Days",
    desc: "Experience the charm of Georgia. Explore the historic streets of Tbilisi, taste Georgian cuisine, and visit the stunning Caucasus mountains.",
    highlights: [
      "Narikhala Fortress & Cable Car in Tbilisi",
      "Scenic Drive along the Georgian Military Highway",
      "Explore the Kazbegi Mountains & Gergeti Trinity Church"
    ],
    inclusions: [
      "4 Nights stay in a centrally located 4-star hotel",
      "Daily Breakfast & local dinners",
      "All transfers and tours in a private vehicle",
      "English-speaking local guide",
      "Georgia tourist visa assistance"
    ],
    price: "Price on Request",
    image: "/Discover Georgia Tbilisi.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Tbilisi",
        description: "Arrive at Tbilisi International Airport. Meet and transfer to your hotel. Enjoy an evening walk in Old Tbilisi."
      },
      {
        day: "2",
        title: "Tbilisi City Tour",
        description: "Explore Metekhi Church, Narikala Fortress (via cable car), Shardeni Street, and the famous sulfur baths."
      },
      {
        day: "3",
        title: "Ananuri & Kazbegi Mountain Tour",
        description: "Drive up the Military Highway. Visit Ananuri Fort and Gudauri Friendship Monument. Take a 4x4 ride to Gergeti Trinity Church in Kazbegi."
      },
      {
        day: "4",
        title: "Kakheti Wine Region",
        description: "Visit the Kakheti region, known for its vineyards. Explore the romantic town of Sighnaghi (City of Love) and Bodbe Monastery."
      },
      {
        day: "5",
        title: "Departure",
        description: "Relaxed morning before transferring to the airport for your flight back home."
      }
    ]
  },
  {
    id: "vietnam-all-inclusive",
    title: "Vietnam All Inclusive with Phu Quoc Island",
    category: "South East Asia",
    filters: ["All", "International"],
    duration: "8 Nights / 9 Days",
    desc: "An all-inclusive luxurious escape to Vietnam. Discover the history of Hanoi, the beautiful beaches of Phu Quoc, and the vibrant life of Da Nang.",
    highlights: [
      "All Internal Flights Included",
      "Relax on the pristine beaches of Phu Quoc Island",
      "Visit Ba Na Hills & Golden Bridge in Da Nang"
    ],
    inclusions: [
      "8 Nights in luxury 4 & 5-star hotels",
      "All internal flights & airport transfers",
      "Daily breakfast, lunch, and dinner",
      "Guided tours in Hanoi, Da Nang, and Phu Quoc",
      "Vietnam e-visa approval letter"
    ],
    price: "Price on Request",
    image: "/Vietnam All Inclusive with Phu Quoc Island.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Hanoi",
        description: "Arrive in Hanoi, the historic capital. Transfer to your hotel. Evening walking tour of the Old Quarter."
      },
      {
        day: "2",
        title: "Hanoi City Tour & Fly to Da Nang",
        description: "Visit Ho Chi Minh Mausoleum and Temple of Literature. Fly to Da Nang in the afternoon."
      },
      {
        day: "3",
        title: "Ba Na Hills & Golden Bridge",
        description: "Take the cable car to Ba Na Hills. Walk on the iconic Golden Bridge held by giant hands and enjoy Fantasy Park."
      },
      {
        day: "4",
        title: "Hoi An Ancient Town",
        description: "Spend the day exploring the UNESCO-listed Hoi An Ancient Town with its lanterns and historic assembly halls."
      },
      {
        day: "5",
        title: "Fly to Phu Quoc Island",
        description: "Transfer to airport and fly to the tropical paradise of Phu Quoc. Check-in to your beach resort."
      },
      {
        day: "6",
        title: "Phu Quoc Island Safari & Grand World",
        description: "Visit the Vinpearl Safari and explore the vibrant Grand World entertainment complex."
      },
      {
        day: "7",
        title: "Phu Quoc Cable Car & 3 Island Tour",
        description: "Ride the world's longest over-sea cable car to Hon Thom. Enjoy snorkeling and beach relaxation."
      },
      {
        day: "8",
        title: "Phu Quoc Leisure",
        description: "A free day to relax on the white sands of Khem Beach or explore the local night market."
      },
      {
        day: "9",
        title: "Departure",
        description: "Transfer to the airport for your return flight."
      }
    ]
  },
  {
    id: "almaty-dussehra",
    title: "Almaty Dussehra Special",
    category: "CIS",
    filters: ["All", "International"],
    duration: "5 Nights / 6 Days",
    desc: "Celebrate Dussehra in Almaty. Experience the snow-covered peaks of Shymbulak, stunning lakes, and Central Asian cultural hospitality.",
    highlights: [
      "Dussehra Special Celebrations in Almaty",
      "Scenic Cable Car to Shymbulak Ski Resort",
      "Visit the breathtaking Charyn Canyon"
    ],
    inclusions: [
      "5 Nights in a premium 4-star hotel in Almaty",
      "Daily breakfast & gala dinners",
      "All airport and sightseeing transfers in AC coach",
      "Charyn Canyon & Kolsay Lakes full-day tour",
      "Kazakhstan e-visa assistance"
    ],
    price: "Price on Request",
    image: "/Almaty Dussehra Special.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Almaty",
        description: "Arrive in Almaty. Check-in to your hotel. Evening walk down the lively Arbat street."
      },
      {
        day: "2",
        title: "Almaty City Tour",
        description: "Explore Panfilov Park, Zenkov Cathedral (wooden church), and Green Bazaar."
      },
      {
        day: "3",
        title: "Medeu & Shymbulak resort",
        description: "Ride the gondola from Medeu to Shymbulak Ski Resort. Enjoy panoramic mountain views."
      },
      {
        day: "4",
        title: "Charyn Canyon & Kolsay Lake",
        description: "Travel to Charyn Canyon, also known as the Valley of Castles. Later, visit the serene Kolsay Lake."
      },
      {
        day: "5",
        title: "Shopping & Kok Tobe Hill",
        description: "Take a cable car to Kok Tobe Hill. Enjoy panoramic views of the city. Later, shop at Mega Mall."
      },
      {
        day: "6",
        title: "Departure",
        description: "Transfer to the airport for your flight back home."
      }
    ]
  },
  {
    id: "kashmir-delight",
    title: "Kashmir Delight Package",
    category: "Hills & Valleys",
    filters: ["All", "Domestic"],
    duration: "6 Nights / 7 Days",
    desc: "An extended, leisurely tour of Kashmir. Stay in Srinagar, Pahalgam, and Gulmarg, soaking in the beautiful lakes, gardens, and valleys.",
    highlights: [
      "Stay in Srinagar, Pahalgam, and Gulmarg",
      "Scenic Shikara Ride on Dal Lake",
      "Explore Betaab Valley & Aru Valley"
    ],
    inclusions: [
      "6 Nights stay in selected deluxe hotels",
      "Daily Breakfast & Dinner",
      "Private sedan for all transportation",
      "Local sightseeing in Srinagar, Gulmarg, and Pahalgam",
      "Driver allowances, toll, and parking fees"
    ],
    price: "Price on Request",
    image: "/Kashmir Delight Package.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Srinagar",
        description: "Arrive in Srinagar. Transfer to hotel/houseboat. Spend the evening relaxing."
      },
      {
        day: "2",
        title: "Srinagar Mughal Gardens",
        description: "Visit Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Enjoy a Shikara ride."
      },
      {
        day: "3",
        title: "Srinagar to Gulmarg",
        description: "Drive to Gulmarg. Check-in at your hotel and spend the day exploring the meadows."
      },
      {
        day: "4",
        title: "Gulmarg Gondola & Activity Day",
        description: "Take the Gulmarg Gondola ride. Enjoy pony rides or snow activities."
      },
      {
        day: "5",
        title: "Gulmarg to Pahalgam",
        description: "Drive to Pahalgam. Pass by the beautiful saffron fields. Evening check-in."
      },
      {
        day: "6",
        title: "Pahalgam Valley Tour",
        description: "Visit the local valleys - Aru Valley, Betaab Valley, and Chandanwari."
      },
      {
        day: "7",
        title: "Pahalgam to Srinagar & Departure",
        description: "Return to Srinagar and transfer to the airport for departure."
      }
    ]
  },
  {
    id: "hong-kong-disneyland",
    title: "Hong Kong Discovery Package",
    category: "East Asia",
    filters: ["All", "International"],
    duration: "4 Nights / 5 Days",
    desc: "An exciting family holiday in Hong Kong. Visit Disneyland, explore Ocean Park, and see the giant Tian Tan Buddha.",
    highlights: [
      "Full Day Ticket to Hong Kong Disneyland",
      "Visit Ocean Park Hong Kong",
      "Ngong Ping 360 Cable Car & Big Buddha"
    ],
    inclusions: [
      "4 Nights stay in a premium hotel",
      "Daily breakfast at the hotel",
      "Return airport transfers by coach",
      "Disneyland & Ocean Park admission tickets",
      "Half-day Hong Kong city tour"
    ],
    price: "Price on Request",
    image: "/Hong Kong Discovery Package – 4 Nights.webp",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Hong Kong",
        description: "Arrive in Hong Kong. Transfer to your hotel. Evening at leisure."
      },
      {
        day: "2",
        title: "Hong Kong City Tour",
        description: "Visit Victoria Peak, Aberdeen Fishing Village, Repulse Bay, and Stanley Market."
      },
      {
        day: "3",
        title: "Hong Kong Disneyland",
        description: "Spend a magical day at Disneyland, experiencing all the themed lands and evening fireworks."
      },
      {
        day: "4",
        title: "Ocean Park Excursion",
        description: "Explore Ocean Park, featuring animal exhibits, roller coasters, and marine shows."
      },
      {
        day: "5",
        title: "Ngong Ping 360 & Departure",
        description: "Ride the cable car to Ngong Ping village, see the Big Buddha, and transfer to airport."
      }
    ]
  },
  {
    id: "china-fixed-departure",
    title: "CHINA Fixed Departure - 10 DAYS JOURNEY",
    category: "East Asia",
    filters: ["All", "International"],
    duration: "8 Nights / 10 Days",
    desc: "Experience the ultimate 11-day journey through China's most iconic cities: Shanghai, Beijing, Xi'an, Chongqing, and Chengdu. Travel via high-speed bullet trains and witness historical wonders, futuristic skylines, and pandas.",
    highlights: [
      "High-Speed Bullet Train experience across multiple cities",
      "Forbidden City & Great Wall of China (Juyong Pass) in Beijing",
      "Huangpu River Cruise & Jade Buddha Temple in Shanghai",
      "World-famous Terracotta Warriors Museum in Xi'an",
      "Hongya Cave & Liziba Light Rail in mountain city Chongqing",
      "Giant Panda Breeding Base & Jinli Ancient Street in Chengdu"
    ],
    inclusions: [
      "Return Airfare (Kolkata - Kunming, Kunming - Shanghai, Chengdu - Kunming, Kunming - Kolkata)",
      "High Speed Bullet trains (Shanghai - Beijing, Beijing - Xi'an, Xi'an - Chongqing, Chongqing - Chengdu)",
      "08 night's accommodation as per the itinerary based on standard rooms on a B&B basis",
      "Meals: 08 dinners, 08 Breakfasts as indicated in the itinerary",
      "Drinking Water - 1 litre per person per day",
      "Coach tours, transfers, entrance fees, sightseeing, and surface transportation mentioned in itinerary",
      "Services of Tour Manager"
    ],
    exclusions: [
      "Visa Not Included (China Visa Single Entry fees and procedures: INR 6500 per person)",
      "Insurance Not Included",
      "TCS - 2% on the total tour price",
      "Rate of Exchange for USD = 96.00 (The rate of exchange as of the date of final payment will be applicable)",
      "Visa requirements: Passport should be valid for 6 months from the date of travel",
      "Personal expenses like Laundry, wines, telephone charges, Mini-bar at hotel",
      "Any increase in the airfare, fuel surcharge, and taxes charged by airlines",
      "Any changes in the currency rate leading to a change in the land arrangements cost",
      "Any increase in the rate of exchange leading to an increase in land arrangements cost prior to departure",
      "Cost of extension of the validity or deviation from the route of your air ticket",
      "Tips: 10 USD per person per day",
      "Early check-in or late check-out"
    ],
    flights: [
      "MU556 | KOLKATA → KUNMING | 01:10 – 06:20",
      "MU5823 | KUNMING → SHANGHAI | 10:45 – 13:45",
      "MU5854 | CHENGDU → KUNMING | 18:35 – 19:55",
      "MU555 | KUNMING → KOLKATA | 23:35 – 00:10 [NEXT DAY]"
    ],
    price: "Starting from ₹199,000",
    image: "/CHINA Fixed Departure - 10 DAYS JOURNEY.png",
    pricingDetails: {
      bookingAmount: "₹50,000",
      doubleShare: "₹199,000",
      tripleShare: "₹149,000",
      child6to12: "₹149,000",
      child2to6: "₹149,000"
    },
    availableDates: ["26 Oct 2026"],
    itinerary: [
      {
        day: "1",
        title: "Departure from Kolkata",
        description: "Assemble at Netaji Subhas Chandra Bose International Airport, Kolkata at 22:00 hrs. Complete check-in, immigration and security formalities before boarding China Eastern Airlines Flight MU556 departing at 01:10 hrs (early hours of 27 October) for Kunming. Overnight onboard."
      },
      {
        day: "2",
        title: "Kolkata - Kunming - Shanghai",
        description: "Arrive in Kunming at 06:20 hrs and connect to China Eastern Airlines Flight MU5823 departing at 10:45 hrs for Shanghai, arriving at 13:45 hrs. Upon arrival, transfer to Crowne Plaza Shanghai Nanjing Road for check-in. Evening at leisure to explore the nearby shopping district. Dinner & Overnight stay at Crowne Plaza Shanghai Nanjing Road."
      },
      {
        day: "3",
        title: "Shanghai City Tour",
        description: "After breakfast, enjoy a full-day city tour covering the Jade Buddha Temple, the classical Yu Garden, and the 88th Floor Observation Deck of Jin Mao Tower for spectacular skyline views. Stroll along The Bund before ending the day with a scenic Huangpu River Cruise, showcasing Shanghai's dazzling illuminated skyline. Dinner & Overnight stay at Crowne Plaza Shanghai Nanjing Road."
      },
      {
        day: "4",
        title: "Shanghai - Beijing (Bullet Train)",
        description: "After breakfast, board China's world-famous High-Speed Bullet Train to Beijing. Visit the iconic Tiananmen Square followed by the magnificent Forbidden City (Palace Museum), the former imperial palace of the Ming and Qing Dynasties. Transfer to Crowne Plaza Beijing Lido Hotel for check-in. Dinner & Overnight stay at Crowne Plaza Beijing Lido Hotel."
      },
      {
        day: "5",
        title: "Beijing City Tour",
        description: "Visit the legendary Great Wall of China (Juyong Pass) and enjoy breathtaking mountain views. Stop for photographs at the iconic Bird's Nest Olympic Stadium before exploring the magnificent Summer Palace, renowned for its beautiful gardens, Kunming Lake and imperial architecture. Dinner & Overnight stay at Crowne Plaza Beijing Lido Hotel."
      },
      {
        day: "6",
        title: "Beijing - Xi'an (Bullet Train)",
        description: "Board the High-Speed Bullet Train to Xi'an. In the evening, visit the famous Giant Wild Goose Pagoda Square (outside view) and enjoy the spectacular Musical Fountain Show before checking in at Crowne Plaza Xi'an Weiyang. Dinner & Overnight stay at Crowne Plaza Xi'an Weiyang."
      },
      {
        day: "7",
        title: "Xi'an - Chongqing",
        description: "After breakfast, visit the world-famous Terracotta Warriors & Horses Museum, one of China's greatest archaeological treasures and a UNESCO World Heritage Site. Later, board the High-Speed Bullet Train to Chongqing and transfer to JW Marriott Hotel Chongqing. Dinner & Overnight stay at JW Marriott Hotel Chongqing."
      },
      {
        day: "8",
        title: "Chongqing City Tour",
        description: "Explore the fascinating mountain city of Chongqing, visiting Ciqikou Ancient Town, the unique Liziba Light Rail Station, Jiefangbei Pedestrian Street, and the spectacular Hongya Cave, famous for its illuminated riverside architecture and panoramic night views. Dinner & Overnight stay at JW Marriott Hotel Chongqing."
      },
      {
        day: "9",
        title: "Chongqing - Chengdu (Bullet Train)",
        description: "Travel by High-Speed Bullet Train to Chengdu. Visit the renowned Chengdu Research Base of Giant Panda Breeding, followed by the historic Jinli Ancient Street and the bustling Chunxi Road & IFS Mall, famous for its giant panda sculpture. Dinner & Overnight stay at Crowne Plaza Chengdu City Center by IHG."
      },
      {
        day: "10",
        title: "Chengdu - Kunming - Kolkata",
        description: "After breakfast, enjoy free time until your transfer to the airport. Board China Eastern Airlines Flight MU5854 departing 18:35 hrs for Kunming, arriving at 19:55 hrs. Connect with China Eastern Airlines Flight MU555 departing at 23:35 hrs for Kolkata. Overnight onboard."
      },
      {
        day: "11",
        title: "Arrival in Kolkata",
        description: "Arrive at Netaji Subhas Chandra Bose International Airport, Kolkata at 00:10 hrs with unforgettable memories of China's magnificent heritage, iconic landmarks, high-speed rail journeys, vibrant cities and rich cultural experiences. Tour Ends Here!"
      }
    ]
  }
];
