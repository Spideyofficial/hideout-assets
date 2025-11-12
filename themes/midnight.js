// Midnight Theme for Hideout
(function() {
  const theme = {
    name: "Midnight",
    colors: {
      background: "240 20% 5%",
      foreground: "240 10% 95%",
      card: "240 18% 9%",
      "card-foreground": "240 10% 95%",
      popover: "240 20% 5%",
      "popover-foreground": "240 10% 95%",
      primary: "250 80% 60%",
      "primary-foreground": "0 0% 100%",
      secondary: "240 15% 12%",
      "secondary-foreground": "240 10% 95%",
      muted: "240 15% 12%",
      "muted-foreground": "240 10% 65%",
      accent: "270 70% 55%",
      "accent-foreground": "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      "destructive-foreground": "0 0% 100%",
      border: "240 18% 18%",
      input: "240 18% 18%",
      ring: "250 80% 60%"
    },
    customEffects: null
  };

  // Apply colors
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  console.log(`Hideout theme loaded: ${theme.name}`);
})();
