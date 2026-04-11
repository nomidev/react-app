import { Outlet } from 'react-router-dom'
import type { MenuItem } from '../types'
import { menuContent } from '../data'

interface ContentProps {
  activeMenu: string
  topMenuFilter: string
  topMenuItems: MenuItem[]
}

export const Content: React.FC<ContentProps> = ({ activeMenu, topMenuFilter, topMenuItems }) => {
  const getTitle = () => {
    // Find the label for active menu
    for (const topItem of topMenuItems) {
      if (topItem.id === activeMenu) return topItem.label
      for (const secondItem of topItem.children || []) {
        if (secondItem.id === activeMenu) return secondItem.label
        for (const thirdItem of secondItem.children || []) {
          if (thirdItem.id === activeMenu) return thirdItem.label
        }
      }
    }
    return topMenuItems.find((m) => m.id === topMenuFilter)?.label
  }

  const getBreadcrumb = () => {
    // Find the full path for breadcrumb
    for (const topItem of topMenuItems) {
      if (topItem.id === activeMenu) return topItem.label
      for (const secondItem of topItem.children || []) {
        if (secondItem.id === activeMenu) return secondItem.label
        for (const thirdItem of secondItem.children || []) {
          if (thirdItem.id === activeMenu) return `${secondItem.label} > ${thirdItem.label}`
        }
      }
    }
    return topMenuItems.find((m) => m.id === topMenuFilter)?.label || '홈'
  }

  const getContent = () => {

    console.log("activeMenu", activeMenu)

    return menuContent[activeMenu] || {
      description: '선택하신 메뉴에 대한 내용입니다.',
      details: ['메뉴를 선택해주세요.'],
    }
  }

  const content = getContent()

  return (
    <main className="content">
      <div className="content-header">
        <h1>{getTitle()}</h1>
        <p className="breadcrumb">
          {'현재 선택된 항목: '}
          <strong>{getBreadcrumb()}</strong>
        </p>
      </div>
      <div className="content-body">
        {/* <div className="card">
          <h2>{getTitle()}</h2>
          <p className="card-description">{content.description}</p>
          <div className="card-details">
            {content.details.map((detail, index) => (
              <div key={index} className="detail-item">
                <span className="detail-icon">•</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div> */}
        <Outlet />
      </div>
    </main>
  )
}
