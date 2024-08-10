interface Prop {
  pageTitle?: string;
  isLogin: boolean;
  onLogout?: () => void;
}

const TopBar = ({ pageTitle, isLogin, onLogout }: Prop) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          Akira's React Simple Website {pageTitle && " - " + pageTitle}
        </a>
        {isLogin && (
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={onLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default TopBar;
