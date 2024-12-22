import React from 'react'
import { NavLink } from "react-router-dom";

const CatalogueNav = () => {
  return (
    
   <>
 

<div className="container my-3">
  <div className="row justify-content-center">
    <div className="col-auto">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/all"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            All
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/wine"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Wine
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/spiritscatalogue"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Spirits
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/sparklingwine"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Sparkling wine
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/alcoholbeverage"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Beer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/softdrink"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Soft drinks / Mineral water
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/fruitjuices"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Fruit juices
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/food"
            className={({ isActive }) =>
              `nav-link fw-bold rounded ${isActive ? "bg-primary text-white" : "text-muted"}`
            }
          >
            Food
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>

   </>

  )
}

export default CatalogueNav