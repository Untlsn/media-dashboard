import BackgroundCreator from "@Libs/BackgroundCreator";
import {ThemedProps} from "@Style/theme";

export interface TotalTileProps {
  username: string,
  followers: number,
  increments: number,
  icon: string,
  bar_color: [string] | [string, string],
  people_name: string
}
export interface StyledTileProps {
  barColor: BackgroundCreator
}

export interface LogoProps {
  icon: string
}

export interface IncrementProps extends ThemedProps{
  type: 'down'|'up'|'none'
}
