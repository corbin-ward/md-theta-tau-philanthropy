export interface RuleSection {
  title: string;
  rules: string[];
}

export interface EventButton {
  text: string;
  link: string;
  isDialog?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  headerColor: string;
  buttons: EventButton[];
  ruleSections?: RuleSection[];
}

export const eventData: Event[] = [
  {
    id: "1",
    title: "Monday Afternoon: Bowser Jr.'s Bingo",
    description: "Complete dares posted on Instagram for points! Purchase a whole row for bonus points.",
    date: "March 17, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Instagram",
    headerColor: "bg-theta-monday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
      { text: "Submit Donation", link: "https://docs.google.com/forms/d/e/1FAIpQLSeiiVhX4lbyOpxQxnj1lc3ftz37omRJqu5A89shdSxZa7bmbQ/viewform?usp=dialog" },
    ],
    ruleSections: [
      {
        title: "Bingo Structure",
        rules: [
          "Bingo cards posted on Instagram with dares",
          "Organization members purchase dares to complete",
          "Completed dares will be documented and posted",
          "Brothers determine which dares go on cards"
        ]
      },
      {
        title: "Purchasing & Points",
        rules: [
          "Each dare costs minimum $5 to purchase",
          "Points: 150 points per $1 spent on individual dares",
          "Double points (300 per $1) if a whole row (not column) is purchased at once",
          "Each dare can only be completed once",
          "All dare purchases are final",
          "Venmo and Zelle payments accepted"
        ]
      },
      {
        title: "Documentation Requirements",
        rules: [
          "Video/photo evidence of completed dares",
          "Will be posted by 6:00 PM Friday",
          "Organization will be clearly identified in posts",
        ]
      }
    ]
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
      { text: "Event Info", link: "#", isDialog: true },
    ],
    ruleSections: [
      {
        title: "Team Composition",
        rules: [
          "No cap on participants per organization",
          "Coaches are encouraged to participate",
          "All team members must be registered members of the organization",
        ]
      },
      {
        title: "Materials & Building Rules",
        rules: [
          "Each team receives equal amounts of spaghetti and marshmallows",
          "No outside materials or tools permitted",
          "45 minutes to build the tallest free-standing structure",
          "Structure must stand on its own for 30 seconds to qualify",
          "No adhesives or fasteners allowed",
          "No support from walls, ceiling, or furniture"
        ]
      },
      {
        title: "Judging & Points",
        rules: [
          "Height measured from table surface to highest point",
          "Measurements taken by designated judges only",
          "In case of tie, stability test will determine winner",
          "5,000 points for 1st place",
          "3,500 points for 2nd place",
          "1,500 points for 3rd place",
          "500 participation points for all other teams"
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Tuesday Morning: Bowser's Balloon Bonanza + Peach's Pie Party",
    description: "Throw balloons and pies at brothers! 5 balloons for $3, 2 balloons for $1. Special offer: 2 pies for $5! Purchase a Toad plush for extra points!",
    date: "March 18, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Scholar's Lane",
    headerColor: "bg-theta-tuesday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
    ],
    ruleSections: [
      {
        title: "Balloon Bonanza Rules",
        rules: [
          "Pricing: 5 balloons for $3, 2 balloons for $1",
          "Each organization member may purchase a maximum of 50 balloons total",
          "Points awarded at time of purchase",
          "50 points per balloon without Toad",
          "100 points per balloon with Toad",
          "Balloons must be purchased by a member with a visible Toad to get double points",
          "Balloons may only be thrown at individuals who volunteer",
          "Organization members who throw balloons at non-volunteers will be asked to leave",
          "No reserving balloons; first come, first served",
          "All balloon purchases final (no refunds)"
        ]
      },
      {
        title: "Pie Party Rules",
        rules: [
          "Pricing: 2 pies for $5, 1 pie for $3",
          "Each organization member may purchase a maximum of 20 pies total",
          "300 points per pie without Toad",
          "600 points per pie with Toad",
          "Pies must be purchased by a member with a visible Toad to get double points",
          "Pies may only be thrown at individuals who volunteer",
          "Organization members who throw pies at non-volunteers will be asked to leave",
          "No reserving pies; first come, first served",
          "All pie sales are final (no refunds)"
        ]
      },
      {
        title: "Toad Plush Rules",
        rules: [
          "Toad plushes cost $8 each",
          "500 Points per Toad purchased",
          "Each organization member may purchase only ONE Toad",
          "No sharing or transferring of Toads between members",
          "Toads must be visibly worn/carried during events to receive double points",
          "Cash, Venmo, and Zelle payments accepted"
        ]
      },
      {
        title: "General Information",
        rules: [
          "Cash, Venmo, and Zelle payments accepted",
          "No saving spots in line",
          "Maximum of 10 balloon/pie purchases per transaction",
          "All proceeds go directly to Habitat for Humanity"
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Tuesday Evening: Smash & Dash",
    description: "Compete in a duos Super Smash Bros Tournament and Mario Kart games!",
    date: "March 18, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "SSB 130",
    headerColor: "bg-theta-tuesday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
      { text: "Register Team", link: "https://docs.google.com/forms/d/e/1FAIpQLSdlOEEfIAaBkwDv8USz7B4KNK-45BouhEuv2ylqGQEzEccB4w/viewform?usp=dialog" },
    ],
    ruleSections: [
      {
        title: "Tournament Structure",
        rules: [
          "Each organization may enter up to 2 teams",
          "2-4 players per team (duos format)",
          "Super Smash Bros Ultimate: Single elimination bracket tournament",
          "Mario Kart 8: Single elimination bracket tournament",
        ]
      },
      {
        title: "Super Smash Bros Rules",
        rules: [
          "Standard tournament rules apply",
          "3 stock, 8-minute time limit",
          "No items",
          "Stage selection from tournament-legal stages only",
          "No character locking (can change between matches)",
          "Best 2 out of 3 matches to advance"
        ]
      },
      {
        title: "Mario Kart Rules",
        rules: [
          "2 teams (4 players) per race",
          "4 races per round (Luigi Circuit, Rainbow Road, Bowser's Castle, Mario Circuit)",
          "Points accumulated across all races determine standings",
          "Standard items enabled",
          "No intentional disconnects",
          "Controllers provided (may bring your own)"
        ]
      },
      {
        title: "Points System",
        rules: [
          "15,000 points for 1st place overall",
          "10,000 points for 2nd place overall",
          "5,000 points for 3rd place overall",
          "1,500 points for all other participating teams",
          "Overall standing determined by combined performance in both games",
          "Unsportsmanlike conduct results in disqualification"
        ]
      }
    ]
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
      { text: "Event Info", link: "#", isDialog: true },
    ],
    ruleSections: [
      {
        title: "Kapture the Koopa Rules",
        rules: [
          "Traditional capture the flag with Mario-themed elements",
          "5 players per team required",
          "Maximum of 3 games per organization",
          "Two designated zones with a 'Koopa flag' in each",
          "Players who's flags are pulled in opposing territory must return to their side",
          "First team to capture the opposing Koopa flag and return to their side 3 times wins",
          "2,500 points per game won",
          "5,000 points if entire team has Toads (must be visible during game)"
        ]
      },
      {
        title: "Toad Talks Rules",
        rules: [
          "Up to 3 members from one organization can speak to 1 brother at a time",
          "Each organization member may speak to each brother only ONCE per day",
          "Minimum conversation length: 2 minutes to qualify for points",
          "Maximum conversation length: 15 minutes per brother interaction",
          "300 points per verified talk without Toad",
          "600 points per verified talk with Toad",
          "Organization members must record brother names to verify points"
        ]
      },
    ]
  },
  {
    id: "6",
    title: "Wednesday Evening: Minigame Mashup",
    description: "Choose up to 7 representatives to compete in randomly selected Mario Party minigames! Only one rep per minigame.",
    date: "March 19, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "COB 105",
    headerColor: "bg-theta-wednesday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
    ],
    ruleSections: [
      {
        title: "Team Structure",
        rules: [
          "Each organization selects up to 7 representatives",
          "Only one representative participates in each minigame",
          "Representatives must be designated before event begins",
          "No substitutions once event begins",
          "Coaches may play as a representative",
          "All representatives must sign a waiver"
        ]
      },
      {
        title: "Minigame Selection & Gameplay",
        rules: [
          "21 possible minigames based on Mario Party",
          "Each organization participates in at least 7 minigames",
          "Minigames will be explained before each round",
          "1-5 minutes per minigame",
          "Winners determined by highest score or fastest time"
        ]
      },
      {
        title: "Points",
        rules: [
          "5,000 points per game won",
          "5,000 bonus points for organization with most wins",
          "If tie for most wins, bonus points awarded to both organizations",
          "Participation points: 1,000 points per organization",
          "Fair play rules enforced; cheating results in disqualification"
        ]
      }
    ]
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
      { text: "Event Info", link: "#", isDialog: true },
    ],
    ruleSections: [
      {
        title: "Scavenger Hunt Structure",
        rules: [
          "Each organization receives a unique starting clue",
          "Hunt contains 6 possible charms to collect",
          "All charms must be attached to provided necklace to be collected",
          "Completed necklace must be brought to canopy to finish",
          "Time limit: 1.5 hours"
        ]
      },
      {
        title: "Hunt Rules",
        rules: [
          "No sharing clues or locations with other organizations",
          "Brothers will verify necklace before giving charms",
          "Each charm location has a specific challenge that must be completed",
          "Using transportation other than walking results in disqualification",
          "No interfering with other teams",
          "No assistance from non-team members"
        ]
      },
      {
        title: "Scoring",
        rules: [
          "500 points per charm collected without Toad",
          "1,000 points per charm collected with Toad (member with Toad must be present)",
          "Completion bonus: 10,000 points for 1st place",
          "7,500 points for 2nd place",
          "5,000 points for 3rd place",
          "Rankings based on completion time and number of charms"
        ]
      }
    ]
  },
  {
    id: "8",
    title: "Thursday Evening: Daisy's Dance Off",
    description: "Prepare a 1-4 minute dance performance featuring Mario game music!",
    date: "March 20, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "COB 105",
    headerColor: "bg-theta-thursday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
      { text: "Submit Music", link: "https://docs.google.com/forms/d/e/1FAIpQLSdAs_Ylhe7OiJJuvuiXK9wzc64KjY6fd5xAapt5tXcj7k8dAg/viewform?usp=dialog" },
    ],
    ruleSections: [
      {
        title: "Performance Requirements",
        rules: [
          "1-4 minute dance routine",
          "Must include at least one song or remix from a Mario game",
          "Minimum of 4, maximum of 15 performers per organization",
        ]
      },
      {
        title: "Technical Rules",
        rules: [
          "Performance area: 10' x 20' space",
          "Props allowed",
          "Setup/teardown limited to 2 minutes each",
          "Content must adhere to university standards",
          "No dangerous stunts or lifts without prior approval",
          "Music must be clean/radio edit versions",
          "Costumes must meet university dress code"
        ]
      },
      {
        title: "Judging Criteria",
        rules: [
          "Creativity/Originality (25%)",
          "Choreography/Execution (25%)",
          "Audience Engagement (25%)",
          "Jacqueminot Involvement (15%)",
          "Mario Theme Integration (10%)",
          "Judges include faculty, staff, and Greek council representatives"
        ]
      },
      {
        title: "Points",
        rules: [
          "20,000 points for 1st place",
          "15,000 points for 2nd place",
          "10,000 points for 3rd place",
          "5,000 participation points for all other teams"
        ]
      }
    ]
  },
  {
    id: "9",
    title: "Friday Morning: Toad's Trading Post + Toad Talks",
    description: "Outdoor market with popup vendors for drinks, clothing, handmade goods, and more. Bring your Toad plush for double points and participate in Toad Talks!",
    date: "March 21, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "University Plaza",
    headerColor: "bg-theta-friday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
    ],
    ruleSections: [
      {
        title: "Toad Talks Rules",
        rules: [
          "Up to 3 members from one organization can speak to 1 brother at a time",
          "Each organization member may speak to each brother only ONCE per day",
          "Minimum conversation length: 2 minutes to qualify for points",
          "Maximum conversation length: 15 minutes per brother interaction",
          "400 points per verified talk without Toad",
          "800 points per verified talk with Toad",
          "Organization members must record brother names to verify points"
        ]
      },
      {
        title: "Vendor Information",
        rules: [
          "Organizations must respect vendor spaces",
          "No loitering that blocks vendor access",
          "Vendors operate independently from the philanthropy event",
          "Drinks and merchandise available for purchase from vendors"
        ]
      }
    ]
  },
  {
    id: "10",
    title: "Saturday Afternoon: Hoops for Homes",
    description: "5v5 basketball tournament with 5-minute halves. Tournament style bracket based on org type.",
    date: "March 22, 2025",
    time: "12:00 PM - 4:00 PM",
    location: "Joseph Edward Gallo Recreation and Wellness Center",
    headerColor: "bg-theta-saturday",
    buttons: [
      { text: "Event Info", link: "#", isDialog: true },
      { text: "Register Team", link: "https://docs.google.com/forms/d/e/1FAIpQLSdOLd2pOPIAleJEgDJPWSISQXwUplmo2CzPTI4XXvi7ZCRGSQ/viewform?usp=dialog" },
    ],
    ruleSections: [
      {
        title: "Tournament Structure",
        rules: [
          "5v5 basketball tournament",
          "Organizations compete against others of same type",
          "Single elimination bracket",
          "Games consist of two 5-minute halves",
          "Tie games go to 2-minute overtime"
        ]
      },
      {
        title: "Game Rules",
        rules: [
          "Standard basketball rules apply with modifications",
          "Shooting fouls result in free throws",
          "All other fouls result in change of possession",
          "No full-court press allowed",
          "Substitutions only during dead ball situations"
        ]
      },
      {
        title: "Team Requirements",
        rules: [
          "Roster of 5 players per organization",
          "Teams are recommended to wear matching colored shirts",
          "At least 5 players must be present to avoid forfeit",
          "Coaches may play if teams have fewer than 5 players",
          "If one coach plays, the opposing team's coach may also play",
          "Maximum of one team per organization",
          "Players must fill out waiver to participate"
        ]
      },
      {
        title: "Points & Final Ceremony",
        rules: [
          "30,000 points for 1st place",
          "20,000 points for 2nd place",
          "10,000 points for 3rd place",
          "5,000 participation points for all teams",
          "Winners of philanthropy announced in each category",
          "Bonus stars announced for special achievements",
          "Jacqueminot candidates recognized",
          "Total funds raised announced",
          "Gift baskets presented to Jacqueminots"
        ]
      }
    ]
  },
];