export
interface ThemeSettings {
  background: string,
  secBackground: string,
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
  textColor: '#22283b',
  secTextColor: '#8f97c6',
  tileColor: '#f0f2fa'
}
export
const darkTheme: ThemeSettings = {
  background: '#1e202a',
  secBackground: '#1f212e',
  textColor: '#fbfefe',
  secTextColor: '#8b97c6',
  tileColor: '#252a41'
}
