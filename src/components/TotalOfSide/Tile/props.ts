import BackgroundCreator from "@Libs/BackgroundCreator";

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

