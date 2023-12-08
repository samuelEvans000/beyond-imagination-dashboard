import dashboard from "/assets/dashboard.png";
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
       <aside className="sidebar">
          <div>
            <ul className="buttons">
              <li>
                <button className="button">
                  <img src={dashboard}></img>Dashboard
                </button>
              </li>
            </ul>
          </div>
        </aside>
    </div>
  )
}

export default Sidebar
