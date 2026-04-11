export interface ThirdLevelItem {
  id: string
  label: string
}

export interface SecondLevelItem {
  id: string
  label: string
  children?: ThirdLevelItem[]
}

export interface MenuItem {
  id: string
  label: string
  children?: SecondLevelItem[]
}
