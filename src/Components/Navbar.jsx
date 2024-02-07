const Navbar = ({setCategory}) => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a class="navbar-brand"gi>
      <img src="src\images\logo.png" alt="Bootstrap" width="auto" height="50"/>
    </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("environment")}>Environment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar