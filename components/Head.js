import React from "react";
import NextHead from "next/head";

const defaultTitle = "Geekyprofile by Shafin";
const defaultDescription =
  "A web application to 🔍inspect your GitHub Profile Stats📊 in a lucid way. Visualization made easy with Charts💡🚀.";
const defaultOGURL = "https://geekyprofile.vercel.app";
const defaultOGImage = "https://geekyprofile.vercel.app/view.png";

const Head = props => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || defaultTitle}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.svg" />
      <meta name="theme-color" content="#743ade" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || defaultTitle} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
    </NextHead>
  );
};

export default Head;
