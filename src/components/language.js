import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl-v4";
import * as styles from "./language.module.css";

const languageName = {
  en: "English",
  es: "Spanish",
};

const Language = () => (
  <ul className={styles.language}>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => (
          <li>
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `green` : `black`,
                textDecoration:
                  currentLocale === language ? `underline` : `none`,
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
