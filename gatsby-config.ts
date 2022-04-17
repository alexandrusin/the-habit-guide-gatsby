import type { GatsbyConfig } from "gatsby"

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig
if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: "The Habit Guide",
    description: "Ideas, hacks and habits",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
  ],
}

export default config
