const SITE = "https://quinzha-beauty.vercel.app";

export default function sitemap() {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
