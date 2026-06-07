// ═══════════════════════════════════════════════════════════
//  AI Workflow Trader — PRICING CONFIG
//  เมื่อขึ้น phase ใหม่: แก้ ACTIVE_PHASE (1 บรรทัด) + เพิ่ม Stripe URL ของ phase นั้น
// ═══════════════════════════════════════════════════════════

const PHASES = {
  earlyBird: {
    label:        "Early Bird",
    pl1:          1090,
    bundle:       1390,
    seats:        30,
    deadlineText: "15 มิ.ย. 2026",
    deadlineISO:  "2026-06-15T23:59:00+07:00",
    pl1Url:       "./bump-a/",          // → ผ่าน bump page
    bundleUrl:    "./bump-b/"           // → ผ่าน bump page
  },
  standard: {
    label:        "Standard",
    pl1:          1190,
    bundle:       1490,
    seats:        40,
    deadlineText: "24 มิ.ย. 2026",
    deadlineISO:  "2026-06-24T23:59:00+07:00",
    pl1Url:       "PLACEHOLDER_STD_PL1_STRIPE_URL",
    bundleUrl:    "PLACEHOLDER_STD_BUNDLE_STRIPE_URL"
  },
  lastCall: {
    label:        "Last Call",
    pl1:          1290,
    bundle:       1590,
    seats:        30,
    deadlineText: "3 ก.ค. 2026",
    deadlineISO:  "2026-07-03T23:59:00+07:00",
    pl1Url:       "PLACEHOLDER_LC_PL1_STRIPE_URL",
    bundleUrl:    "PLACEHOLDER_LC_BUNDLE_STRIPE_URL"
  }
};

// ← แก้แค่บรรทัดนี้เมื่อเปลี่ยน phase (earlyBird | standard | lastCall)
const ACTIVE_PHASE = "earlyBird";
const PTM_ADDON    = 990;            // คงที่ทุก phase
const PHASE        = PHASES[ACTIVE_PHASE];

function fmtPrice(n) {
  return n.toLocaleString("th-TH");
}
