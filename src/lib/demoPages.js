// Demo pages to pre-populate via API
export const demoPages = [
  {
    slug: "hello-world",
    components: [
      { type: "TextSection", props: { title: "Hello World!", text: "This is a demo page created via API." } },
      { type: "ImageBlock", props: { src: "/globe.svg", alt: "Globe" } },
      { type: "StatsBox", props: { label: "Demo Stat", value: 42 } },
      { type: "Card", props: { title: "Card Example", description: "Reusable Card component." } },
      { type: "CustomButton", props: { text: "Click Me", href: "/" } }
    ]
  },
  {
    slug: "bino-bot",
    components: [
      { type: "TextSection", props: { title: "Bino Bot", text: "Welcome to the Bino Bot demo page!" } },
      { type: "ImageBlock", props: { src: "/window.svg", alt: "Window" } },
      { type: "StatsBox", props: { label: "Bots", value: 7 } },
      { type: "Card", props: { title: "Bot Card", description: "Another Card demo." } },
      { type: "CustomButton", props: { text: "Go Home", href: "/" } }
    ]
  }
];
