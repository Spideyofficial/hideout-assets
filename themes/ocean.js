// Ocean Theme for Hideout
(function() {
  const theme = {
    name: "Ocean",
    colors: {
      background: "210 40% 8%",
      foreground: "210 10% 95%",
      card: "210 35% 12%",
      "card-foreground": "210 10% 95%",
      popover: "210 40% 8%",
      "popover-foreground": "210 10% 95%",
      primary: "200 90% 50%",
      "primary-foreground": "0 0% 100%",
      secondary: "210 30% 18%",
      "secondary-foreground": "210 10% 95%",
      muted: "210 30% 18%",
      "muted-foreground": "210 10% 65%",
      accent: "180 80% 45%",
      "accent-foreground": "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      "destructive-foreground": "0 0% 100%",
      border: "210 30% 22%",
      input: "210 30% 22%",
      ring: "200 90% 50%"
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
