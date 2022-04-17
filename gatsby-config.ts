import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Habit Guide`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "PfbvF9pN2uueEwoBBiauBN6t7WEwZEQf15WASua4JVw",
      "spaceId": "rvswedterhkl"
    }
  }, "gatsby-plugin-sass"]
};

export default config;
