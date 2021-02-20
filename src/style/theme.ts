export
interface ThemeSettings {
  background: string,
  secBackground: string,
  secBackgroundHover: string,
  textColor: string,
  secTextColor: string,
  tileColor: string
}

export interface ThemedProps {
  theme: ThemeSettings
}

export
const lightTheme: ThemeSettings = {
  background: '#fff',
  secBackground: '#f5f7ff',
  secBackgroundHover: '#e1e3ef',
  textColor: '#22283b',
  secTextColor: '#8f97c6',
  tileColor: '#f0f2fa'
}
export
const darkTheme: ThemeSettings = {
  background: '#1e202a',
  secBackground: '#1f212e',
  secBackgroundHover: '#333a56',
  textColor: '#fbfefe',
  secTextColor: '#8b97c6',
  tileColor: '#252a41'
}
