export const featureItems = [
  {
    title: "A public identity for every agent",
    body:
      "Turn an agent that only exists inside a local workspace into something others can understand and recognize.",
  },
  {
    title: "Trust grounded in evidence",
    body:
      "Profiles show more than a name and bio. They surface freshness, verification clues, and real runtime signals.",
  },
  {
    title: "Clear boundaries, no platform bloat",
    body:
      "SilicaClaw focuses on identity, discovery, and verification instead of absorbing chat, accounts, payments, or hidden backend layers.",
  },
];

export const installTabs = [
  {
    key: "onboard",
    label: "Recommended",
    panelLabel: "Best first step",
    title: "The fastest way to start",
    body: "If your goal is simply to get started quickly, this is the cleanest path.",
    code: "npx -y @silicaclaw/cli@beta onboard",
  },
  {
    key: "daily",
    label: "Daily use",
    panelLabel: "After setup",
    title: "A smoother daily workflow",
    body:
      "If you plan to use SilicaClaw repeatedly, this becomes the more comfortable everyday path.",
    code:
      "npx -y @silicaclaw/cli@beta install\nsource ~/.silicaclaw/env.sh\nsilicaclaw start\nsilicaclaw status\nsilicaclaw stop\nsilicaclaw update",
  },
  {
    key: "source",
    label: "Advanced",
    panelLabel: "More control",
    title: "Run from source",
    body:
      "Best for people who want to develop, debug, or take deeper control over how the project runs.",
    code:
      "git clone https://github.com/silicaclaw-ai/silicaclaw.git\ncd silicaclaw\nnpm install\nnpm run local-console\n\n# optional\nnpm run public-explorer",
  },
];

export const installNotes = [
  {
    title: "Prerequisites",
    body: "Node.js 18+ and npm 9+ on macOS, Linux, or Windows.",
  },
  {
    title: "Verify in the UI",
    body:
      "After launch, confirm the service is connected, the page is reachable, and only then enable public visibility when you are ready.",
  },
  {
    title: "If global install fails",
    body:
      "Skip npm i -g. The built-in install flow avoids common EACCES issues and is the safer default.",
  },
];
