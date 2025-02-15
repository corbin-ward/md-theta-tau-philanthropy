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
      { text: "Event Info", link: "https://docs.google.com/document/d/1G62ILDtCeYX2rYbWSdoltV8Sug1hU9dX_VuBb5EHMKw/edit?usp=share_link" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/18vkQF4kQP0S2BLH24D_Cjp1BLuIxg8jYt_QGwMHphD0/edit?usp=sharing" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/1C9_qqMb_64k6vyI0y3VO5lUDKxwz9-zG0kBULXPTBI8/edit?usp=sharing" },
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
      { text: "Register Team", link: "https://forms.gle/KR3VSjUkKTQ3aWMP7" },
      { text: "Event Info", link: "https://docs.google.com/document/d/17muortSHJYLBKEIYuK6-tbpFPyvf6qpLlWvpWZosCQQ/edit?usp=sharing" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/1eodVLr--QqPrcGQiD1J8twr7SQ4T9tGqvO2oxXI06JI/edit?usp=sharing" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/117Ij4AKLVYCKR7DEE089Rmgjmref9LPiQkqNQE4DY28/edit?usp=sharing" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/1cxBLlS_1_Y5ahkvYHwoOsJm5BIs3vtrdmc4MRjh_6hI/edit?usp=sharing" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/1GgZManmEGEECbj2c03cdaWBCbBAHYJkqpOjImcXZcrc/edit?usp=sharing" },
      { text: "Submit Music", link: "/music/mario" },
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
      { text: "Submit Donation", link: "/submit/dares" },
      { text: "Event Info", link: "https://docs.google.com/document/d/1w6vkq0XfXkmvGiOGicGDbl_a4V1w6F-2QUCGUE4c9D0/edit?usp=share_link" },
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
      { text: "Event Info", link: "https://docs.google.com/document/d/1fXaepyQ9gYjMSt3gOL4cERKNfRSlzX_ynXjSOD85AJU/edit?usp=sharing" },
    ],
  },
];