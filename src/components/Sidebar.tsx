import type { SecondLevelItem } from '../types'

interface SidebarProps {
  sidebarMenuItems: SecondLevelItem[]
  activeMenu: string
  expandedMenus: Set<string>
  onToggleMenu: (menuId: string) => void
  onSubMenuClick: (subMenuId: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  sidebarMenuItems,
  activeMenu,
  expandedMenus,
  onToggleMenu,
  onSubMenuClick,
}) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {sidebarMenuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <button
                className={`menu-button ${activeMenu === item.id ? 'active' : ''}`}
                onClick={() => onToggleMenu(item.id)}
              >
                <span className="menu-label">{item.label}</span>
                {item.children && item.children.length > 0 && (
                  <span className={`toggle-icon ${expandedMenus.has(item.id) ? 'expanded' : ''}`}>
                    ▼
                  </span>
                )}
              </button>
              {item.children && item.children.length > 0 && (
                <ul className={`submenu ${expandedMenus.has(item.id) ? 'show' : ''}`}>
                  {item.children.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        className={`submenu-button ${activeMenu === subItem.id ? 'active' : ''}`}
                        onClick={() => onSubMenuClick(subItem.id)}
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
