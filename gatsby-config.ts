import type { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'The Habit Guide',
    description: 'Ideas, hacks and habits',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
  ],
}

export default config
