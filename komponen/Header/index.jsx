import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">KV</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <input type="checkbox"></input>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link href="/" legacyBehavior>
            <a className={activeLink === '/' ? 'active' : ''}>HOME</a>
          </Link>
        </li>
          
        <li>
          <Link href="/schedule" legacyBehavior>
            <a className={activeLink === '/schedule' ? 'active' : ''}>SCHEDULE</a>
          </Link>
        </li>

        <li>
          <Link href="/crtct" legacyBehavior>
            <a className={activeLink === '/crtct' ? 'active' : ''}>CERTIFICATE</a>
          </Link>
        </li>

        <li>
          <Link href="/about" legacyBehavior>
            <a className={activeLink === '/about' ? 'active' : ''}>ABOUT</a>
          </Link>
        </li>
      </ul>

      <button className="button" type="button" >
        <Link href="youtube.com">
            LETS TALK
        </Link>
      </button>

      <style jsx>{`
        nav{
          display: flex;
          padding-top: 2rem;
          margin-left: 5rem;
        }
          
        .logo{
          font-family: lato;
          font-weight: bold;
          font-size: 2rem;
          color: black;
        }
        
        .menu-toggle{
          display: none; /* hide on larger screens */
        }
        
        .menu {
          z-index: 2;
          display: flex; /* show on larger screens */
          list-style: none;
          margin-left: 37rem;
          font-family: lato;
          margin-top: 1rem;
          color: black;
        }
        
        .menu li{
          padding-left: 2rem;
        }

        .menu.open {
          position:absolute;
          display: block;
          height: 824px;
          margin-top: -2rem;
          width: 40%;
          margin-left: 11.4rem;
          background-color: white;
          transition: all 0.5s;
          transform: translateX(0);
        }

        .menu.open li{
          flex-direction: column;
          margin-top: 3rem;
        }

        .menu.open li:nth-child(1){
          margin-top: 9rem;
        }

        .active {
          font-weight: bold;
          color: rgba(34, 53, 219, 0.603);
        }

        .button{
          margin-left: 95rem;
          margin-top:1rem;
          width: 7rem;
          height: 2rem;
          background-color: rgba(34, 53, 219, 0.603);
          position: absolute;
          border-radius: 0.5rem;
          color: white;
          font-family: lato;
          box-shadow: 2px 5px 6px rgba(0, 60, 255, 0.397);
        }

        /* Media queries */
        @media (max-width: 768px) {
          nav{
            margin-left: 2rem;
          }
          
          .logo{
            margin-top: -3px;
            font-size: 1.5rem;
          }
          
          .menu-toggle {
            z-index: 4;
            display: flex;
            flex-direction: column;
            height: 20px;
            justify-content: space-between;
            position: relative;
            margin-left: 14rem;
            margin-top: 0.4rem;
          }

          .menu-toggle input{
            position: absolute;
            width: 30px;
            height: 25px;
            margin-left: -1px;
            margin-top: -2px;
            opacity: 0;
          }

          .menu-toggle span{
            display: block;
            width: 28px;
            height: 3px;
            border-radius: 3px;
            background-color: rgba(34, 53, 219, 0.603);
            transition: all 0.5s; 
          }

          .menu-toggle span:nth-child(2){
            transform-origin: 0 0;
          }

          .menu-toggle span:nth-child(4){
            transform-origin: 0 100%;
          }

          .menu-toggle input:checked ~ span:nth-child(2){
            transform: rotate(45deg) translate(-1px, -1px);
          }

          .menu-toggle input:checked ~ span:nth-child(3){
            transform: scale(0);
            opacity: 0;
          }

          .menu-toggle input:checked ~ span:nth-child(4){
            transform: rotate(-45deg) translate(0px, 0.5px);
          }

          .menu {
            transform: translateX(100%);
          }

          .button{
            display: none;
          }

        }
      `}</style>
    </nav>
  );
};

export default Navbar;