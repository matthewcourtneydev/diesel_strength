import agelessFive from "../assets/images/programs/ageless-5.png";
import blackBook from "../assets/images/programs/black-book.png";
import agelessFour from "../assets/images/programs/ageless-4.png";
import agelessFiveHero from "../assets/images/programs/ageless-5-hero.png";
import agelessFiveProduct from "../assets/images/programs/ageless-5-product.png";

export const programs = [
  {
    slug: "ageless-athlete-5",
    title: "Ageless Athlete 5.0",
    category: "Longevity",
    heroEyebrow: "Featured Training System",
    subtitle: "Joint-Friendly Strength Training For Lifelong Performance",
    description:
      "A complete training system designed to help athletes, lifters, and coaches build strength, improve movement quality, and train pain-free for the long term.",

    image: agelessFiveHero,
    heroImage: agelessFiveHero,
    productImage: agelessFiveProduct,

    price: "$97",
    primaryCta: "Get The System",
    purchaseLink: "#purchase",
    checkoutLink: "/checkout",

    highlights: [
      "One-Time Purchase",
      "Instant Access",
      "Lifetime Updates",
      "Coach Designed",
    ],

    overviewEyebrow: "Program Overview",
    overviewTitle: "Built For Lifters Who Want Strength Without Breakdown",
    overviewDescription:
      "A complete training system designed to help athletes, lifters, and coaches build strength, improve movement quality, and train pain-free for the long term.",

    overviewStats: [
      {
        label: "Format",
        value: "Digital System",
      },
      {
        label: "Training Length",
        value: "12 Weeks",
      },
      {
        label: "Skill Level",
        value: "Beginner → Advanced",
      },
    ],

    purchaseTag: "Most Popular",
    purchaseTitle: "Ageless Athlete 5.0",
    purchaseDescription:
      "Strength, movement quality, and sustainable training in one complete system.",
    purchaseButtonLabel: "Buy Now",

    purchaseFeatures: [
      "Full Training System",
      "Video Exercise Library",
      "Mobility & Recovery Protocols",
      "Instant Digital Access",
    ],
    benefitsEyebrow: "Why This System Works",

    benefitsTitle: "Built To Keep You Strong, Mobile & Training Consistently",

    benefitsDescription:
      "This system is designed around sustainable progression, better movement, smarter recovery, and long-term performance.",

    benefits: [
      {
        number: "01",
        title: "Build Strength Without Breaking Down",
        description:
          "Progressive training designed to build strength while respecting joint health, movement quality, and recovery.",
      },

      {
        number: "02",
        title: "Improve Movement Quality",
        description:
          "Warm-ups, mobility work, and exercise selections that help you move better before you load harder.",
      },

      {
        number: "03",
        title: "Train Around Limitations",
        description:
          "Smart exercise options and substitutions make the system adaptable to different bodies and training histories.",
      },

      {
        number: "04",
        title: "Stay Consistent Longer",
        description:
          "The best program is the one you can keep doing. This system is built for sustainable progress over time.",
      },
    ],
    includesEyebrow: "What’s Included",

    includesTitle: "Everything You Need To Follow The System",

    includesDescription:
      "Built to give you structure, clarity, and practical tools you can use immediately in training.",

    includedItems: [
      {
        icon: "▣",
        title: "Complete Training Plan",
        description: "A structured progression you can follow week by week.",
      },
      {
        icon: "▶",
        title: "Exercise Library",
        description:
          "Movement demos and coaching cues to help you execute with intent.",
      },
      {
        icon: "✚",
        title: "Mobility Protocols",
        description:
          "Warm-ups, resets, and mobility work designed to support better training.",
      },
      {
        icon: "↻",
        title: "Recovery Guidelines",
        description: "Simple strategies to manage fatigue and stay consistent.",
      },
      {
        icon: "⌁",
        title: "Exercise Substitutions",
        description:
          "Options for adapting the system to your equipment and training history.",
      },
      {
        icon: "▰",
        title: "Progress Tracking",
        description:
          "Guidance for tracking performance, consistency, and long-term progress.",
      },
    ],
    previewEyebrow: "Preview The System",
    previewTitle: "See How The Training Is Structured",
    previewDescription:
      "Get a look at how the system organizes training days, movement prep, strength work, recovery, and progression so you know exactly what to expect.",
    previewMeta: ["12 Week System", "4 Training Phases", "Recovery Integrated"],
    previewPrimaryCta: "View Sample Week",
    previewPrimaryLink: "#purchase",
    previewSecondaryCta: "View Training Flow",
    previewSecondaryLink: "#overview",
    previewPanels: [
      {
        label: "Week 01",
        title: "Foundation Strength",
        lines: ["long", "medium", "short"],
      },
      {
        label: "Day 02",
        title: "Mobility + Upper Body",
        lines: ["long", "medium"],
      },
      {
        label: "Recovery",
        title: "Reset Protocol",
        lines: ["medium", "short"],
      },
    ],
  },

  {
    slug: "diesel-black-book",
    title: "Diesel Black Book",
    category: "Strength",
    image: blackBook,
  },

  {
    slug: "ageless-athlete-4",
    title: "Ageless Athlete 4.0",
    category: "Performance",
    image: agelessFour,
  },
];
