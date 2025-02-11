import React from 'react';

const links = [
  { link: "Home", section: "/" },
  { link: "About Me", section: "/about" },
  { link: "Skills", section: "/skills" },
  { link: "Projects", section: "/projects" },
  { link: "Contact", section: "/contact" }
];

function NavbarLinks() {
  return (
    <ul className='flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop:blur-lg lg:bg-black sm:w-full '>
      {links.map((link, index) => {
        return (
          <li key={index} className='group'>
            <a
              href={link.section} // Link to the section
              className='cursor-pointer text-white hover:text-cyan transition-all duration-500'
            >
              {link.link}
            </a>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;
