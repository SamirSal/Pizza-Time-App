import "./Navbar.css";
function Navbar() {
  const links = [
    { url: "/home", title: "Homepage" },
    { url: "/about", title: "Product" },
    { url: "/blog", title: "Menu" },
    { url: "/Img", title: "Img" },
    { url: "/Events", title: "Events" },
    { url: "/Blog", title: "Blog" },
    { url: "/Contact", title: "Contact" },
  ];
  return (
    <div className="nav1">
      <ul>
        <li>
          {links.map((link, i) => {
            return (
              <a key={i} href={link.url}>
                {link.title}
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
