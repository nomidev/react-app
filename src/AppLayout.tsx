import { useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'
import type { MenuItem } from './types'

export const AppLayout = () => {
  const navigate = useNavigate()
  const params = useParams()

  // URL에서 현재 메뉴 ID 추출 (예: /home/overview/intro → 'home-overview-intro')
  const getActiveMenuFromParams = () => {
    if (!params['*']) return 'home'
    return params['*'].split('/').join('-')
  }

  const activeMenu = getActiveMenuFromParams()
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set([activeMenu.split('-')[0]]))
  const [topMenuFilter, setTopMenuFilter] = useState<string>(activeMenu.split('-')[0])

  const topMenuItems: MenuItem[] = [
    {
      id: 'home',
      label: '홈',
      children: [
        {
          id: 'home-overview',
          label: '개요',
          children: [
            { id: 'home-overview-intro', label: '소개' },
            { id: 'home-overview-features', label: '주요 기능' },
          ],
        },
        {
          id: 'home-news',
          label: '뉴스',
          children: [
            { id: 'home-news-latest', label: '최신 뉴스' },
            { id: 'home-news-archive', label: '뉴스 보관' },
          ],
        },
      ],
    },
    {
      id: 'products',
      label: '제품',
      children: [
        {
          id: 'products-category1',
          label: '카테고리 1',
          children: [
            { id: 'products-cat1-item1', label: '제품 1' },
            { id: 'products-cat1-item2', label: '제품 2' },
            { id: 'products-cat1-item3', label: '제품 3' },
          ],
        },
        {
          id: 'products-category2',
          label: '카테고리 2',
          children: [
            { id: 'products-cat2-item1', label: '제품 4' },
            { id: 'products-cat2-item2', label: '제품 5' },
          ],
        },
      ],
    },
    {
      id: 'services',
      label: '서비스',
      children: [
        {
          id: 'services-support',
          label: '고객 지원',
          children: [
            { id: 'services-support-faq', label: 'FAQ' },
            { id: 'services-support-contact', label: '문의하기' },
          ],
        },
        {
          id: 'services-consulting',
          label: '컨설팅',
          children: [
            { id: 'services-consulting-business', label: '비즈니스' },
            { id: 'services-consulting-technical', label: '기술' },
          ],
        },
      ],
    },
  ]

  const toggleMenu = (menuId: string) => {
    const newExpanded = new Set(expandedMenus)
    if (newExpanded.has(menuId)) {
      newExpanded.delete(menuId)
    } else {
      newExpanded.add(menuId)
    }
    setExpandedMenus(newExpanded)
  }

  const handleSubMenuClick = (subMenuId: string) => {
    // ID를 경로로 변환 (예: 'home-overview-intro' → '/home/overview/intro')
    const navigationPath = '/' + subMenuId.split('-').join('/')

    console.log("navigationPath", navigationPath)
    
    navigate(navigationPath)
  }

  const handleTopMenuClick = (menuId: string) => {
    console.log("menuId", menuId)
    setTopMenuFilter(menuId)
    setExpandedMenus(new Set([menuId]))
    navigate(`/${menuId}`)
  }

  // 필터링된 메뉴 아이템 - 상단 메뉴 필터에 해당하는 것만 표시
  const sidebarMenuItems = topMenuItems.find((item) => item.id === topMenuFilter)?.children || []

  return (
    <div className="app-container">
      <Header topMenuItems={topMenuItems} onMenuClick={handleTopMenuClick} />

      <div className="layout">
        <Sidebar
          sidebarMenuItems={sidebarMenuItems}
          activeMenu={activeMenu}
          expandedMenus={expandedMenus}
          onToggleMenu={toggleMenu}
          onSubMenuClick={handleSubMenuClick}
        />

        <Content
          activeMenu={activeMenu}
          topMenuFilter={topMenuFilter}
          topMenuItems={topMenuItems}
        />
      </div>
    </div>
  )
}
