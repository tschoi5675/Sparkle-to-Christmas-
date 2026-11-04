const CHRISTMAS_WISHES: string[] = [
  "May your heart glow like rose-gold fairy lights all season long! ✨💖",
  "Wishing you cocoa, cozy blankets, and endless pink sparkles! ❄️🎀",
  "Hope every day feels like opening a glittery gift just for you! ✨",
  "May your Christmas be as sweet as peppermint and as bright as you! 💖",
  "Sending you snowflakes of joy and ribbons of pure magic! ❄️✨",
  "May your dreams shimmer brighter than the tree topper tonight! 🎀💖",
  "Wishing you laughter, love, and a touch of glamorous sparkle! ✨",
  "Hope your holidays are wrapped in pink satin and starlight! 🎀❄️",
  "May every moment feel like a chic Christmas movie montage! ✨💖",
  "Sending glittery hugs and rose-gold wishes your way! 🎀✨",
  "May your spirit shine like diamond dust on fresh snow! ❄️💖",
  "Wishing you merry mornings and sparkly, cozy evenings! ✨🎀",
  "Hope Santa leaves extra glam under your tree this year! 💖✨",
  "May your heart be light, your cocoa hot, and your vibe iconic! 🎀",
  "Wishing you a season full of twinkle, charm, and pink joy! ✨❄️",
  "May every carol feel like it was written just for you! 💖🎀",
  "Hope your Christmas glows soft, pretty, and absolutely magical! ✨",
  "Sending wishes as sweet as sugar cookies with pearl icing! 🎀💖",
  "May your days be merry, bright, and dripping in sparkle! ✨❄️",
  "Wishing you a holiday season that feels like pure fairy dust! 💖✨",
];

const HOLIDAY_STYLING_TIPS: string[] = [
  "Layer pearl accessories over a cozy cream knit for instant glam! ✨🎀",
  "Add rose-gold tinsel to your tree for that extra girly sparkle! 💖",
  "Match your nail polish to your ornaments—pink chrome is so chic! ✨",
  "Drape a faux-fur throw in blush over your sofa for cozy luxe! 🎀❄️",
  "Use fairy lights inside mason jars for a soft, dreamy glow! ✨💖",
  "Tie velvet bows on your gifts in matching pink and gold! 🎀",
  "Style your entryway with a wreath sprinkled in glitter snow! ❄️✨",
  "Pair hot cocoa with a monogram mug—cute and totally festive! 💖🎀",
  "Hang delicate icicle ornaments at varying heights for elegance! ✨",
  "Add a satin ribbon garland to your mantle for instant romance! 🎀💖",
  "Use scented candles in vanilla and cinnamon for cozy vibes! ✨❄️",
  "Stack books under your tree skirt for a curated, aesthetic look! 🎀",
  "Mix matte and metallic ornaments for texture that pops on camera! ✨💖",
  "Drape a string of pearls on your tree like the chicest garland! 🎀",
  "Style your table with blush napkins and gold cutlery—so glam! ✨",
  "Add a touch of faux snow to window sills for winter wonderland! ❄️🎀",
  "Coordinate your pajamas with your bedding for the coziest reels! 💖✨",
  "Use clip-on bows on chairs for a dinner party that feels magical! 🎀",
  "Light a pink taper candle beside fresh eucalyptus for soft glam! ✨💖",
  "Finish every outfit with a subtle shimmer highlighter—holiday glow! ✨🎀",
];

let lastMessage: string | null = null;

function pickRandomAvoidRepeat(list: string[]): string {
  if (list.length === 1) return list[0];
  let choice: string;
  do {
    choice = list[Math.floor(Math.random() * list.length)];
  } while (choice === lastMessage);
  lastMessage = choice;
  return choice;
}

export const getFestiveContent = async (topic: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const normalized = topic.toLowerCase();
  if (normalized.includes("styling") || normalized.includes("tip")) {
    return pickRandomAvoidRepeat(HOLIDAY_STYLING_TIPS);
  }
  return pickRandomAvoidRepeat(CHRISTMAS_WISHES);
};
