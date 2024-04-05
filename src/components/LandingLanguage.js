import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import "../styles/global.scss"

const languageName = {
  en: "EN",
  fr: "FR",
}

export default function Language() {
  return (
    <div className="switcher_landing">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <span
              className="switcher locales"
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: "#fff",
                fontFamily:
                  currentLocale === language
                    ? `'Johnson Text Light'`
                    : `'Johnson Text Bold'`,
                textDecoration:
                  currentLocale === language ? `none` : `underline`,
              }}
            >
              {languageName[language]}
            </span>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}
