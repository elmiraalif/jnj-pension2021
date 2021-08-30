import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  fr: "FR",
}

export default function Language() {
  return (
    <div style={{marginTop: '10%'}}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <span
              className="switcher switcher-landing"
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: "#fff",
                fontFamily:
                  currentLocale === language
                    ? `'J&J CircularTT Light Web'`
                    : `'J&J CircularTT Bold Web'`,
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
