import {TotalTileProps} from "@Components/TotalOfSide/Tile";
import {DayTileProps} from "@Components/DayOverview/DayTile";

export
interface ApiInterface {
  side_metadata: {
    title: string
  },
  socials: {
    total: number
    full: TotalTileProps[],
    today: DayTileProps[]
  }
}


const fakeApi: ApiInterface = {
  "side_metadata": {
    "title": "Social Dashboard"
  },
  "socials": {
    "total": 23004,
    "full": [
      {
        "username": "@nathanf",
        "followers": 1987,
        "increments": 12,
        "icon": "icon-facebook",
        "bar_color": ["#188ff4"],
        "people_name":"followers"
      },
      {
        "username": "@nathanf",
        "followers": 1044,
        "increments": 99,
        "icon": "icon-twitter",
        "bar_color": ["#1da2f0"],
        "people_name": "followers"
      },
      {
        "username": "@realnathanf",
        "followers": 11000,
        "increments": 1099,
        "icon": "icon-instagram",
        "bar_color": ["#fdbe68", "#e04e93"],
        "people_name": "followers"
      },
      {
        "username": "Nathan F.",
        "followers": 8239,
        "increments": -144,
        "icon": "icon-youtube",
        "bar_color": ["#c4032b"],
        "people_name": "subscribers"
      }
    ],
    "today": [
      {
        "name": "Page views",
        "count": 87,
        "icon": "icon-facebook",
        "percent_increments": 3
      },
      {
        "name": "Likes",
        "count": 52,
        "icon": "icon-facebook",
        "percent_increments": -2
      },
      {
        "name": "Likes",
        "count": 5462,
        "icon": "icon-instagram",
        "percent_increments": 2257
      },
      {
        "name": "Profile views",
        "count": 52000,
        "icon": "icon-instagram",
        "percent_increments": 1375
      },
      {
        "name": "Retweets",
        "count": 117,
        "icon": "icon-twitter",
        "percent_increments": 303
      },
      {
        "name": "Likes",
        "count": 507,
        "icon": "icon-twitter",
        "percent_increments": 553
      },
      {
        "name": "Likes",
        "count": 107,
        "icon": "icon-youtube",
        "percent_increments": -19
      },
      {
        "name": "Total views",
        "count": 1407,
        "icon": "icon-youtube",
        "percent_increments": -12
      }
    ]
  }
}

export
const fakeFetch = async() => fakeApi
