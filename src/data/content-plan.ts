export type ChannelDeliverable = {
  channel: string;
  idea: string;
  details: string;
};

export type WeeklyContentPlan = {
  week: number;
  timeframe: string;
  theme: string;
  objective: string;
  heroContent: ChannelDeliverable;
  supportingContent: ChannelDeliverable[];
  engagementBoosters: string[];
  metricsFocus: string;
};

export const brandSnapshot = {
  name: "Sherohomefoods",
  positioning:
    "Chef-crafted, homestyle Indian meals and condiments that make wholesome eating effortless without sacrificing authenticity.",
  differentiation: [
    "Recipes sourced from regional home chefs to preserve culinary heritage.",
    "Small-batch production with no artificial preservatives.",
    "Ready-to-serve formats designed for busy professionals and families.",
  ],
  valueProposition:
    "Enjoy the comfort of home-cooked Indian meals in minutes, curated by real home chefs and delivered with consistent quality.",
};

export const audienceProfiles = [
  {
    name: "Time-pressed professionals",
    needs: [
      "Quick meal solutions that do not compromise on taste or nutrition.",
      "Transparent ingredient sourcing and clear nutritional labelling.",
      "Meal planning help to reduce weekday decision fatigue.",
    ],
    keyMessaging:
      "Sherohomefoods keeps your weekdays nourished with handcrafted meals that heat and eat in minutes.",
  },
  {
    name: "Young families",
    needs: [
      "Balanced meals that appeal to kids and adults alike.",
      "Trusted quality and hygienic preparation.",
      "Batch ordering and subscription-friendly offerings.",
    ],
    keyMessaging:
      "Share heritage-rich comfort food that is clean, reliable, and easy to serve on a busy family schedule.",
  },
  {
    name: "Indian diaspora & food explorers",
    needs: [
      "Authentic regional flavours that are hard to find locally.",
      "Cultural storytelling that connects them to their roots.",
      "Gifting options and festive bundles.",
    ],
    keyMessaging:
      "Explore India’s regional kitchens through stories, chef-led recipes, and curated tasting boxes.",
  },
];

export const contentPillars = [
  {
    title: "Heritage & Provenance",
    description:
      "Highlight the origin stories of dishes, regional nuances, and the home chefs behind each recipe.",
  },
  {
    title: "Ease & Everyday Utility",
    description:
      "Demonstrate how Sherohomefoods simplifies meal times with quick prep, storage tips, and pairing ideas.",
  },
  {
    title: "Nutrition & Trust",
    description:
      "Show ingredient integrity, clean-label transparency, and balanced meal planning guidance.",
  },
  {
    title: "Community & Celebration",
    description:
      "Encourage user-generated stories, festivities, gifting ideas, and collaborations with creators.",
  },
];

export const channelMix = [
  {
    channel: "Website / Blog",
    role: "Evergreen SEO content, hero storytelling, and downloadable resources that nurture purchase intent.",
    cadence: "1 long-form post per week anchored to the weekly theme.",
  },
  {
    channel: "Instagram & Facebook",
    role: "Visual storytelling, reels demonstrating quick prep, community spotlights, and paid boost testing.",
    cadence: "4-5 posts per week including 2 reels, 1 carousel, 1 story series.",
  },
  {
    channel: "YouTube Shorts",
    role: "Bite-sized kitchen tips, chef introductions, and product reveals optimised for discovery.",
    cadence: "1-2 shorts per week repurposed from hero video shoots.",
  },
  {
    channel: "Email Newsletter",
    role: "Conversion nurture with curated menus, bundle offers, and behind-the-scenes stories.",
    cadence: "1 campaign per week plus automated flows for new subscribers.",
  },
  {
    channel: "Influencer & Community",
    role: "Monthly anchor collaborations with regional food bloggers and micro-creators who host tasting sessions.",
    cadence: "1 macro collaboration + 2 micro spotlights per month.",
  },
];

export const campaignPhases = [
  {
    phase: "Weeks 1-4 · Awareness Sprint",
    focus:
      "Introduce Sherohomefoods’ origin story, build trust with chef spotlights, and seed high-performing reels for paid amplification.",
    kpis: ["Reach growth", "Website sessions", "Follower growth on Instagram"],
  },
  {
    phase: "Weeks 5-8 · Consideration & Community",
    focus:
      "Deepen storytelling around product versatility, encourage UGC through challenges, and capture emails with lead magnets.",
    kpis: ["Email subscriber growth", "UGC submissions", "Add-to-cart rate"],
  },
  {
    phase: "Weeks 9-13 · Conversion & Retention",
    focus:
      "Push bundle offers, festival gifting ideas, and loyalty incentives while nurturing repeat purchase behaviour.",
    kpis: ["Repeat order rate", "Bundle revenue", "Email CTA click-through"],
  },
];

export const weeklyPlan: WeeklyContentPlan[] = [
  {
    week: 1,
    timeframe: "Days 1 – 7",
    theme: "Brand Origin & Chef Stories",
    objective:
      "Launch campaign by spotlighting the founders and home chefs to build trust and curiosity.",
    heroContent: {
      channel: "Blog",
      idea: "Meet the Sherohomefoods Collective",
      details:
        "Long-form piece introducing the founding story, mission, and key home chefs with photography and pull quotes.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "60-second kitchen walk-through with a featured home chef",
        details:
          "Showcase cooking process, ingredient sourcing, and packaging with captions emphasising freshness.",
      },
      {
        channel: "Email",
        idea: "Welcome to the Sherohomefoods kitchen",
        details:
          "Founder letter, link to blog hero piece, and 10% launch offer for first-time orders.",
      },
      {
        channel: "YouTube Short",
        idea: "Before & after plating sequence",
        details:
          "Quick transformation clip demonstrating ready-to-eat packaging turning into a plated meal in under 2 minutes.",
      },
    ],
    engagementBoosters: [
      "Instagram story poll: “Which regional cuisine should we spotlight next?”",
      "Pinned comment asking followers to tag someone who misses home food.",
    ],
    metricsFocus: "Profile visits, video completion rate, launch offer redemptions.",
  },
  {
    week: 2,
    timeframe: "Days 8 – 14",
    theme: "Product Deep Dive: Signature Thalis",
    objective:
      "Educate audiences on flagship SKUs with clear serving suggestions and storage instructions.",
    heroContent: {
      channel: "Blog",
      idea: "How to Build a Balanced Midweek Thali in 12 Minutes",
      details:
        "Step-by-step guide featuring nutritional breakdown, pairing ideas, and downloadable serving planner.",
    },
    supportingContent: [
      {
        channel: "Instagram Carousel",
        idea: "Ingredient spotlight for each thali component",
        details:
          "Slide-by-slide ingredient story with sourcing notes and health benefits.",
      },
      {
        channel: "Email",
        idea: "Thali of the Week menu planner",
        details:
          "Showcase two bundle combinations with add-on desserts and cross-sell pantry condiments.",
      },
      {
        channel: "YouTube Short",
        idea: "Thali plating hack",
        details:
          "Demonstrate plating tips with voiceover from in-house nutritionist.",
      },
    ],
    engagementBoosters: [
      "CTA for customers to share their plated thali for a chance to win a free dessert add-on.",
    ],
    metricsFocus: "Add-to-cart rate on thali SKUs, email CTR, carousel saves.",
  },
  {
    week: 3,
    timeframe: "Days 15 – 21",
    theme: "Meal Prep & Storage Confidence",
    objective:
      "Address hesitations around shelf life, storage, and weekday prep with practical tips.",
    heroContent: {
      channel: "Blog",
      idea: "Smart Storage Guide for Ready-to-Eat Indian Meals",
      details:
        "Infographic-led article with fridge/freezer timelines, reheating methods, and portioning advice.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "Fridge organisation with Sherohomefoods boxes",
        details:
          "30-second time-lapse showing how a week’s meals fit neatly with reheating instructions overlay.",
      },
      {
        channel: "Email",
        idea: "Prep once, eat thrice",
        details:
          "Highlight top three dishes that stay fresh longest, include discount on bulk orders.",
      },
      {
        channel: "Blog Download",
        idea: "Printable freezer inventory checklist",
        details:
          "Lead magnet to drive email sign-ups from organic traffic.",
      },
    ],
    engagementBoosters: [
      "Story Q&A with nutritionist tackling safety concerns.",
      "Pinterest pin campaign featuring storage infographics.",
    ],
    metricsFocus: "Lead magnet downloads, reel shares, bulk order conversions.",
  },
  {
    week: 4,
    timeframe: "Days 22 – 28",
    theme: "Regional Spotlight: Coastal Karnataka",
    objective:
      "Create excitement around regional limited-edition menu and push pre-orders.",
    heroContent: {
      channel: "Blog",
      idea: "Coastal Karnataka: Flavours from the Western Ghats",
      details:
        "Storytelling piece with chef interview, spice trail map, and product listing for limited edition dishes.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "Behind-the-scenes spice roasting",
        details:
          "Showcase aromas and textures while overlaying limited window pre-order CTA.",
      },
      {
        channel: "Email",
        idea: "Limited drop announcement",
        details:
          "Early access for subscribers with bundle pricing and shipping timeline.",
      },
      {
        channel: "Influencer Collaboration",
        idea: "Regional food blogger taste test",
        details:
          "Host Instagram Live featuring tasting notes and pairing suggestions.",
      },
    ],
    engagementBoosters: [
      "Geo-targeted ads for Bengaluru, Chennai, Mumbai.",
      "Countdown stickers on stories leading to launch.",
    ],
    metricsFocus: "Pre-order conversions, live session attendance, regional traffic.",
  },
  {
    week: 5,
    timeframe: "Days 29 – 35",
    theme: "Customer Stories & Social Proof",
    objective:
      "Leverage early adopters to build community proof and encourage reviews.",
    heroContent: {
      channel: "Blog",
      idea: "How Our Customers Host Effortless Dinner Parties",
      details:
        "Feature three customers with photos, menu breakdowns, and testimonial pull quotes.",
    },
    supportingContent: [
      {
        channel: "Instagram Carousel",
        idea: "Swipeable customer testimonials",
        details:
          "Incorporate UGC photos, rating snippets, and CTA to leave a review.",
      },
      {
        channel: "Email",
        idea: "Refer-a-friend launch",
        details:
          "Introduce double-sided referral incentive with simple explainer graphic.",
      },
      {
        channel: "YouTube Short",
        idea: "Customer hosting tips",
        details:
          "Montage of user-submitted clips holding Sherohomefoods dishes.",
      },
    ],
    engagementBoosters: [
      "Incentivise Google review submissions with weekly giveaway.",
      "Feature top community posts in Sunday stories.",
    ],
    metricsFocus: "Referral sign-ups, UGC submissions, review volume.",
  },
  {
    week: 6,
    timeframe: "Days 36 – 42",
    theme: "Nutrition & Wellness",
    objective:
      "Reinforce clean-label credibility and nutritional balance to appeal to health-conscious buyers.",
    heroContent: {
      channel: "Blog",
      idea: "Inside the Sherohomefoods Nutrition Playbook",
      details:
        "Interview with consulting nutritionist covering ingredient sourcing, macros, and kid-friendly swaps.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "Micronutrient spotlight",
        details:
          "Animated overlay showing key nutrients in top-selling dishes.",
      },
      {
        channel: "Email",
        idea: "7-day balanced lunch planner",
        details:
          "Downloadable PDF with meal rotation and snack add-ons.",
      },
      {
        channel: "LinkedIn Post",
        idea: "Thought leadership on ready-to-eat nutrition",
        details:
          "Founder-authored article to reach corporate catering decision-makers.",
      },
    ],
    engagementBoosters: [
      "Host Instagram Live with nutritionist for AMA session.",
    ],
    metricsFocus: "Download completions, live attendance, LinkedIn engagement.",
  },
  {
    week: 7,
    timeframe: "Days 43 – 49",
    theme: "Lunchbox & Office Solutions",
    objective:
      "Position products as the go-to solution for office-goers and co-working pantry programs.",
    heroContent: {
      channel: "Blog",
      idea: "Office Lunches Reinvented: Sherohomefoods Corporate Bundles",
      details:
        "Detail B2B-friendly packs, pricing tiers, and testimonials from pilot corporate clients.",
    },
    supportingContent: [
      {
        channel: "Instagram Carousel",
        idea: "Five-minute office lunch pairings",
        details:
          "Showcase quick reheats, beverage pairings, and eco-friendly packaging.",
      },
      {
        channel: "Email",
        idea: "Corporate outreach sequence",
        details:
          "Segmented list email with case study download CTA.",
      },
      {
        channel: "YouTube Short",
        idea: "Desk-to-dining transformation",
        details:
          "POV video of heating meal in office pantry with tips overlay.",
      },
    ],
    engagementBoosters: [
      "Launch LinkedIn lead gen form for corporate tastings.",
    ],
    metricsFocus: "Corporate inquiry form fills, carousel shares, email replies.",
  },
  {
    week: 8,
    timeframe: "Days 50 – 56",
    theme: "Festive Moments & Mini-Celebrations",
    objective:
      "Build excitement around gifting bundles and limited seasonal desserts.",
    heroContent: {
      channel: "Blog",
      idea: "Celebrate Small Wins with Sherohomefoods",
      details:
        "Guide to curating celebration menus for office milestones, family gatherings, and gifting.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "Unboxing festive dessert add-ons",
        details:
          "Slow-motion unboxing with music, spotlight on packaging and hand-written notes.",
      },
      {
        channel: "Email",
        idea: "Limited edition dessert pre-orders",
        details:
          "Early bird pricing and bundling suggestions with savoury dishes.",
      },
      {
        channel: "Influencer Collaboration",
        idea: "Micro-celebration table styling tutorial",
        details:
          "Partner with tablescape stylist to create IGTV/live session.",
      },
    ],
    engagementBoosters: [
      "Encourage hashtag #SheroCelebrates with giveaway for best table setup.",
    ],
    metricsFocus: "Bundle sales, UGC hashtag usage, reel reach.",
  },
  {
    week: 9,
    timeframe: "Days 57 – 63",
    theme: "Retention & Loyalty",
    objective:
      "Introduce loyalty program elements and highlight benefits for repeat customers.",
    heroContent: {
      channel: "Blog",
      idea: "Unlock More from Your Sherohomefoods Subscription",
      details:
        "Explain tiers, rewards, and exclusive menu previews for loyalists.",
    },
    supportingContent: [
      {
        channel: "Instagram Carousel",
        idea: "Loyalty perks explainer",
        details:
          "Visual breakdown of tiers, points, and redemption ideas.",
      },
      {
        channel: "Email",
        idea: "Subscriber-only menu drop",
        details:
          "Tease upcoming menu with RSVP button for tasting webinar.",
      },
      {
        channel: "Blog Download",
        idea: "Monthly meal budgeting worksheet",
        details:
          "Exclusive resource for subscribers to encourage repeat orders.",
      },
    ],
    engagementBoosters: [
      "Offer bonus points for social shares using loyalty referral code.",
    ],
    metricsFocus: "Subscription upgrades, email CTR, worksheet downloads.",
  },
  {
    week: 10,
    timeframe: "Days 64 – 70",
    theme: "Sourcing Transparency & Sustainability",
    objective:
      "Reassure customers about sourcing ethics, packaging sustainability, and community impact.",
    heroContent: {
      channel: "Blog",
      idea: "From Farm to Tiffin: Our Responsible Supply Chain",
      details:
        "Detailed article with supplier interviews, sustainability commitments, and impact metrics.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "Farmer spotlight mini-doc",
        details:
          "On-location footage with subtitles emphasising fair trade pricing.",
      },
      {
        channel: "Email",
        idea: "Sustainability report snapshot",
        details:
          "Infographic of waste reduction, packaging recycling, and community initiatives.",
      },
      {
        channel: "LinkedIn Post",
        idea: "ESG update for partners",
        details:
          "Share commitment to sustainable sourcing to appeal to corporate procurement.",
      },
    ],
    engagementBoosters: [
      "Launch ‘return your packaging’ incentive for local customers.",
    ],
    metricsFocus: "Email forwards, reel watch time, packaging return sign-ups.",
  },
  {
    week: 11,
    timeframe: "Days 71 – 77",
    theme: "Upsell Pantry Staples & Condiments",
    objective:
      "Introduce complementary pantry products and drive basket size growth.",
    heroContent: {
      channel: "Blog",
      idea: "Pantry Staples to Elevate Your Sherohomefoods Meals",
      details:
        "Feature house-made chutneys, spice mixes, and combos with pairing charts.",
    },
    supportingContent: [
      {
        channel: "Instagram Carousel",
        idea: "Mix-and-match pantry combos",
        details:
          "Highlight bundle pricing and shelf life tips.",
      },
      {
        channel: "Email",
        idea: "Pantry bundle launch offer",
        details:
          "Limited-time add-on discount with recommended meal pairings.",
      },
      {
        channel: "YouTube Short",
        idea: "3 ways to use our tamarind chutney",
        details:
          "Recipe-style video emphasising versatility.",
      },
    ],
    engagementBoosters: [
      "Cross-promote with local artisanal bread/condiment brand for giveaway.",
    ],
    metricsFocus: "Average order value, bundle attachment rate, video saves.",
  },
  {
    week: 12,
    timeframe: "Days 78 – 84",
    theme: "Chef Masterclass & Skill-Building",
    objective:
      "Deepen connection with home chefs through educational content and live experiences.",
    heroContent: {
      channel: "Blog",
      idea: "Cook Along with Chef Seema: The Art of Slow-Cooked Dal",
      details:
        "Recipe breakdown with video embeds, spice sourcing tips, and RSVP link to live Zoom cook-along.",
    },
    supportingContent: [
      {
        channel: "Instagram Live",
        idea: "Saturday cook-along teaser",
        details:
          "Countdown and ingredient list to drive attendance.",
      },
      {
        channel: "Email",
        idea: "Workshop invitation + limited kit offer",
        details:
          "Upsell cooking kit that ships with ingredients and dishware.",
      },
      {
        channel: "Post-event Reel",
        idea: "Highlights from the cook-along",
        details:
          "Include attendee testimonials and CTA to join next session.",
      },
    ],
    engagementBoosters: [
      "Collect user questions pre-event to personalise the session.",
    ],
    metricsFocus: "Workshop sign-ups, kit sales, live retention rate.",
  },
  {
    week: 13,
    timeframe: "Days 85 – 90",
    theme: "Quarter Wrap & Future Tease",
    objective:
      "Summarise wins, showcase customer love, and tease upcoming seasonal menu.",
    heroContent: {
      channel: "Blog",
      idea: "90 Days with Sherohomefoods: Impact & What’s Next",
      details:
        "Quarterly recap with key metrics, top dishes, testimonials, and teaser for new seasonal menu.",
    },
    supportingContent: [
      {
        channel: "Instagram Reel",
        idea: "Quarter-in-review highlights",
        details:
          "Montage of best footage, milestones, and community shout-outs.",
      },
      {
        channel: "Email",
        idea: "Thank-you note + waitlist CTA",
        details:
          "Invite audience to join VIP waitlist for next seasonal drop with loyalty bonus.",
      },
      {
        channel: "Survey",
        idea: "Customer feedback pulse",
        details:
          "Short Typeform linked in email and social bios to collect input on menu preferences.",
      },
    ],
    engagementBoosters: [
      "Offer loyalty points for completing survey.",
      "Share UGC collage in stories tagging contributors.",
    ],
    metricsFocus: "Survey completion rate, waitlist sign-ups, returning customer percentage.",
  },
];
