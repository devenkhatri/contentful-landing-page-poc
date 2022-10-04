import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl-v4";

const languageName = {
  "en-US": "English",
  es: "Spanish",
};

const Language = () => (
  <ul>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => (
          <li>
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `green` : `black`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          </li>
        ))
      }
    </IntlContextConsumer>
  </ul>
);

export default Language;
