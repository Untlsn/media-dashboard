import { TitleProps } from "./Title";
import { DarkModeProps } from "./DarkMode";

export default
interface NavigationProps extends TitleProps, DarkModeProps {}

export type { default as TitleProps } from "./Title/props";
export type { default as DarkModeProps } from "./DarkMode/props";




