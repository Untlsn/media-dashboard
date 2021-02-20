import {TotalTileProps} from "@Components/TotalOfSide/Tile";

interface SocialsToday {
  name: string,
  count: number,
  icon: string
  percent_increments: number
}

export
interface ApiInterface {
  side_metadata: {
    title: string
  },
  socials: {
    total: number
    full: TotalTileProps[],
    today: SocialsToday[]
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
        "bar_color": ["#1ca0f2"],
        "people_name":"followers"
      },
      {
        "username": "@nathanf",
        "followers": 1044,
        "increments": 99,
        "icon": "icon-twitter",
        "bar_color": ["#00bfff"],
        "people_name": "followers"
      },
      {
        "username": "@realnathanf",
        "followers": 11000,
        "increments": 1099,
        "icon": "icon-instagram",
        "bar_color": ["#dcaa5f", "#bb5087"],
        "people_name": "followers"
      },
      {
        "username": "Nathan F.",
        "followers": 8239,
        "increments": -144,
        "icon": "icon-youtobe",
        "bar_color": ["#9b1030"],
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
        "icon": "icon-youtobe",
        "percent_increments": -19
      },
      {
        "name": "Total views",
        "count": 1407,
        "icon": "icon-youtobe",
        "percent_increments": -12
      }
    ]
  }
}

export
const fakeFetch = async() => fakeApi
