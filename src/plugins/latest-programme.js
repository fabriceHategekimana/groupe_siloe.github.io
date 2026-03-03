const fs = require('fs');
const path = require('path');

module.exports = function latestProgrammePlugin(_context, _options) {
  return {
    name: 'latest-programme',

    async contentLoaded({actions}) {
      const {setGlobalData} = actions;
      const programmesDir = path.join(__dirname, '../../docs/programmes');

      let latestSlug = '/docs/programmes/liste-programmes'; // fallback

      try {
        const files = fs.readdirSync(programmesDir);
        // Match files like YYYY-MM-DD-description.md
        const datePattern = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;

        const programmes = files
          .map((file) => {
            const match = file.match(datePattern);
            if (!match) return null;
            return {
              date: match[1],
              slug: `/docs/programmes/${match[1]}-${match[2]}`,
            };
          })
          .filter(Boolean)
          .sort((a, b) => b.date.localeCompare(a.date));

        if (programmes.length > 0) {
          latestSlug = programmes[0].slug;
        }
      } catch (err) {
        console.warn('[latest-programme] Could not read programmes directory:', err.message);
      }

      setGlobalData({latestProgrammeSlug: latestSlug});
    },
  };
};
