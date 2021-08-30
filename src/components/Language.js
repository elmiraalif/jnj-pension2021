import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  fr: "FR",
}


export default function Language() {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <span
              className="switcher"
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `black` : `#cc0299`,
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
