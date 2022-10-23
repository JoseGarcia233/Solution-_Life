import "../css/sideBar.css";

const SiderBar = () => {
  return (
    <div>
      <aside>
        <p> Menu </p>
        <a href="/">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          My drive
        </a>
        <a href="/">
          <i class="fa fa-laptop" aria-hidden="true"></i>
          Computers
        </a>
        <a href="/">
          <i class="fa fa-clone" aria-hidden="true"></i>
          Shared with me
        </a>
        <a href="/">
          <i class="fa fa-star-o" aria-hidden="true"></i>
          Starred
        </a>
        <a href="/">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
          Trash
        </a>
      </aside>
    </div>
  );
};

export default SiderBar;
