// Forest Theme for Hideout
(function() {
  const theme = {
    name: "Forest",
    colors: {
      background: "150 20% 8%",
      foreground: "150 10% 95%",
      card: "150 15% 12%",
      "card-foreground": "150 10% 95%",
      popover: "150 20% 8%",
      "popover-foreground": "150 10% 95%",
      primary: "150 70% 40%",
      "primary-foreground": "0 0% 100%",
      secondary: "150 15% 15%",
      "secondary-foreground": "150 10% 95%",
      muted: "150 15% 15%",
      "muted-foreground": "150 10% 65%",
      accent: "120 60% 45%",
      "accent-foreground": "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      "destructive-foreground": "0 0% 100%",
      border: "150 20% 20%",
      input: "150 20% 20%",
      ring: "150 70% 40%"
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
