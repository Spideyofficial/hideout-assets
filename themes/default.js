(function() {
  const theme = {
    name: "Default Dark",
    author: "Hideout Network",
    
    colors: {
      background: "0 0% 4%",
      foreground: "0 0% 98%",
      card: "0 0% 6%",
      "card-foreground": "0 0% 98%",
      popover: "0 0% 6%",
      "popover-foreground": "0 0% 98%",
      primary: "142 76% 36%",
      "primary-foreground": "0 0% 100%",
      secondary: "0 0% 12%",
      "secondary-foreground": "0 0% 98%",
      muted: "0 0% 12%",
      "muted-foreground": "0 0% 60%",
      accent: "142 76% 36%",
      "accent-foreground": "0 0% 100%",
      destructive: "0 84% 60%",
      "destructive-foreground": "0 0% 98%",
      border: "0 0% 14%",
      input: "0 0% 14%",
      ring: "142 76% 36%",
      "nav-background": "0 0% 8%",
      "nav-border": "0 0% 16%",
      "nav-item-hover": "0 0% 12%",
      "nav-item-active": "142 76% 36%"
    },
    
    customEffects: {
      cleanup: function() {
        const themeEffects = document.getElementById('theme-effects');
        if (themeEffects) themeEffects.remove();
      }
    }
  };
  
  // Apply colors
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  // Clean up old effects
  if (theme.customEffects) {
    theme.customEffects.cleanup();
  }

  console.log(`Hideout theme loaded: ${theme.name}`);
})();
