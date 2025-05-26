import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  lang?: string;
  meta?: Array<{ name: string; content: string } | { property: string; content: string }>;
}

const SEO: React.FC<SEOProps> = ({ title, description, lang = "en", meta = [] }) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | Your Site Title`}
      meta={[
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: title },
        { property: "twitter:description", content: description },
      ].concat(meta)}
      link={[
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ]}
    />
  );
};

export default SEO;
