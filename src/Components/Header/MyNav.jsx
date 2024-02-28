import "./MyNav.css";
function MyNav() {
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
              <>
              if (link.title === 'Img') {
                <a key={i} href=''>
                {link.title}
              </a>
              }
              <a key={i} href={link.url}>
                {link.title}
              </a>
              </>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default MyNav;
