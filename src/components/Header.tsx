import type { MenuItem } from '../types'

interface HeaderProps {
  topMenuItems: MenuItem[]
  onMenuClick: (menuId: string) => void
}

export const Header: React.FC<HeaderProps> = ({ topMenuItems, onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          {/* <span className="logo-icon">📱</span> */}
          <span className="logo-text">BizWeb</span>
        </div>
        <nav className="top-nav">
          <ul>
            {topMenuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => onMenuClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
