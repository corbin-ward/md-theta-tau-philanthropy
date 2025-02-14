export interface EventButton {
  text: string
  link: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  headerColor: string
  buttons: EventButton[]
}

export const eventData: Event[] = [
  {
    id: "1",
    title: "Monday Morning: Toad's Trading Post + Toad Talks",
    description: "Outdoor market with popup vendors for food, face paint, clothing and more. Get your Toad plush for double points and participate in Toad Talks!",
    date: "March 17, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "University Plaza",
    headerColor: "bg-theta-monday",
    buttons: [
      { text: "Buy Toad Plush", link: "/shop/toad-plush" },
      { text: "Toad Talk Schedule", link: "/events/toad-talks" },
    ],
  },
  {
    id: "2",
    title: "Monday Evening: Super Mario Makers",
    description: "Build the tallest pasta tower using spaghetti and marshmallows in 45 minutes. No outside tools permitted.",
    date: "March 17, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "COB 105",
    headerColor: "bg-theta-monday",
    buttons: [
      { text: "Register Team", link: "/events/mario-makers" },
      { text: "View Rules", link: "/rules/mario-makers" },
    ],
  },
  {
    id: "3",
    title: "Tuesday Morning: Bowser's Balloon Bonanza + Peach's Pie Party",
    description: "Get your balloons and pies! 5 balloons for $3, 2 balloons for $1. Special offer: 2 pies for $5!",
    date: "March 18, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Scholar's Lane",
    headerColor: "bg-theta-tuesday",
    buttons: [
      { text: "Pre-order Pies", link: "/shop/pies" },
      { text: "Reserve Balloons", link: "/shop/balloons" },
    ],
  },
  {
    id: "4",
    title: "Tuesday Evening: Smash & Dash",
    description: "Compete in a duos Super Smash Bros Tournament and Mario Kart games. Bracket-style tournament for Smash, all teams race in Mario Kart!",
    date: "March 18, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "SSB 130",
    headerColor: "bg-theta-tuesday",
    buttons: [
      { text: "Register Team", link: "/events/smash-dash" },
      { text: "Tournament Bracket", link: "/bracket/smash-dash" },
    ],
  },
  {
    id: "5",
    title: "Wednesday Morning: Kapture the Koopa + Toad Talks",
    description: "Play capture the flag with your org! 5 players per team, max 3 games per org. Don't forget to participate in Toad Talks!",
    date: "March 19, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Scholar's Lane + CTK Quad",
    headerColor: "bg-theta-wednesday",
    buttons: [
      { text: "Register Team", link: "/events/capture-koopa" },
      { text: "View Schedule", link: "/schedule/koopa" },
    ],
  },
  {
    id: "6",
    title: "Wednesday Evening: Minigame Mashup",
    description: "Choose 4 representatives to compete in randomly selected Mario Party minigames! Only one rep per minigame.",
    date: "March 19, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "COB 105",
    headerColor: "bg-theta-wednesday",
    buttons: [
      { text: "Register Players", link: "/events/minigame-mashup" },
      { text: "Game List", link: "/games/minigames" },
    ],
  },
  {
    id: "7",
    title: "Thursday Afternoon: Toad's Treasure Tracker",
    description: "Scavenger hunt around campus based on Mario games and trivia. Collect charms for your necklace!",
    date: "March 20, 2025",
    time: "12:00 PM - 2:00 PM",
    location: "Academic Walk",
    headerColor: "bg-theta-thursday",
    buttons: [
      { text: "Start Hunt", link: "/events/treasure-tracker" },
      { text: "View Clues", link: "/clues/treasure" },
    ],
  },
  {
    id: "8",
    title: "Thursday Evening: Daisy's Dance Off",
    description: "Prepare a 1-4 minute dance performance featuring Mario game music. Must include Jacqueminot candidates!",
    date: "March 20, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "COB 105",
    headerColor: "bg-theta-thursday",
    buttons: [
      { text: "Register Performance", link: "/events/dance-off" },
      { text: "Music Selection", link: "/music/mario" },
    ],
  },
  {
    id: "9",
    title: "Friday Afternoon: Bowser Jr.'s Bingo",
    description: "Complete dares posted on Instagram for points! Purchase a whole row for bonus points.",
    date: "March 21, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Instagram",
    headerColor: "bg-theta-friday",
    buttons: [
      { text: "View Bingo Card", link: "/events/bingo" },
      { text: "Submit Dares", link: "/submit/dares" },
    ],
  },
  {
    id: "10",
    title: "Saturday Afternoon: Mario Hoops",
    description: "5v5 basketball tournament with 5-minute halves. Tournament style bracket based on org type.",
    date: "March 22, 2025",
    time: "12:00 PM - 4:00 PM",
    location: "Joseph Edward Gallo Recreation and Wellness Center",
    headerColor: "bg-theta-saturday",
    buttons: [
      { text: "Register Team", link: "/events/mario-hoops" },
      { text: "Tournament Rules", link: "/rules/hoops" },
    ],
  },
];