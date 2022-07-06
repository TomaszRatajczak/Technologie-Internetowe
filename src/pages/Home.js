import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/baner2.png";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Home.css";
import "../styles/Menu.css";

function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover',backgroundPosition: 'top'}}>
      <div className="headerContainer">
        <h1> Księgowi-Online </h1>
        <p>Najlepsze usługi w sieci!</p>
        <Link to="/uslugi">
          <button>NASZE USŁUGI</button>
        </Link>
      </div>
      
    </div>
    <div className="aboutBottom">
      <h2> Czym sie zajmujemy?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente
        officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.
        Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
        cumque velit
      </p>
    </div>
    <div className="menu">
      <h2>Nasze Usługi</h2>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Home;
