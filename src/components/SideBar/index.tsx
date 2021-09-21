import "./styles.scss";

export function SideBar({ openModal }: any) {
  return (
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo"></div>
      </div>
      <ul className="nav_list">
        <li>
          <a onClick={openModal}>
            <i className="bx bx-grid-alt">
              <span className="links_name">Adicionar Usuario</span>
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}
