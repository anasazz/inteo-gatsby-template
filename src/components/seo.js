import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import previewImage from "../images/og-preview.jpg";

function Seo({ lang, meta, title, description, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  );

  const siteTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  const ogImage = image || previewImage;
  const ogUrl = `/${url}` || "";

  // Enhanced Keywords for SEO (French and Arabic)
  const defaultKeywordsFr = [
    "design d'intérieur",
    "intérieurs modernes",
    "décoration intérieure",
    "design d'intérieur de luxe",
    "design d'intérieur marocain",
    "ndesign.ma",
    "rénovation de maison",
    "intérieurs de bureau",
    "décoration intérieure",
    "design contemporain",
    "mobilier sur mesure",
    "intérieurs résidentiels",
    "intérieurs commerciaux",
    "aménagement d'espace",
    "architecture et design",
    "stylisme d'intérieur",
    "rénovation de maison",
    "meilleurs designers d'intérieur",
    "services de design d'intérieur abordables",
    "consultation en design d'intérieur",
    "idées de design de pièces",
    "tendances en design d'intérieur",
    "styling de maison de luxe",
    "design d'espace commercial",
    "décor de style marocain",
    "design d'intérieur en ligne",
    "designers d'intérieur professionnels"
  ];

  const defaultKeywordsAr = [
    "تصميم داخلي",
    "تصميمات داخلية حديثة",
    "ديكور المنزل",
    "تصميم داخلي فاخر",
    "تصميم داخلي مغربي",
    "ndesign.ma",
    "تجديد المنازل",
    "تصميمات داخلية للمكاتب",
    "ديكور داخلي",
    "تصميم معاصر",
    "أثاث مخصص",
    "تصميمات داخلية سكنية",
    "تصميمات داخلية تجارية",
    "تخطيط المساحات",
    "هندسة معمارية وتصميم",
    "تنسيق داخلي",
    "تجديد المنزل",
    "أفضل مصممي الديكور الداخلي",
    "خدمات تصميم داخلي بأسعار معقولة",
    "استشارة تصميم داخلي",
    "أفكار تصميم الغرف",
    "اتجاهات التصميم الداخلي",
    "تصميم المنزل الفاخر",
    "تصميم المساحات التجارية",
    "ديكور على الطراز المغربي",
    "تصميم داخلي عبر الإنترنت",
    "مصممي الديكور الداخلي المحترفين"
  ];
  const allKeywords = [...defaultKeywordsFr, ...defaultKeywordsAr];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: allKeywords.join(", "), // Join keywords into a comma-separated string
        },
        {
          property: `og:image`,
          content: `${siteUrl}${ogImage}`,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${siteUrl}${ogUrl}`,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `fr`, // Default to French
  meta: [],
  description: ``,
};

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;