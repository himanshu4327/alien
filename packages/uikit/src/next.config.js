const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, "../../../apps/web/public/fonts/alien_league/alienleaguebold.ttf") {
    return config;
  }
});