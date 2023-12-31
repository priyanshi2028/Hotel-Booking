import React, { useState } from "react";
import styles from "./navbar.module.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image1 from "../assest/img1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbarContent}>
          <div className={styles.leftSideNavbar}>
            <div className={styles.logoWrapper}>
              <a href="/" className={styles.logoimg}>
                <img src={Image1} alt="Logo" />
              </a>
            </div>

            <div
              className={styles.hamburgr_menu}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon style={{ fontSize: "1.4em" }} />
              ) : (
                <MenuIcon style={{ fontSize: "1.4em" }} />
              )}
            </div>
          </div>
          <div
            className={
              open ? styles.rightSideNavbarMobile : styles.rightSideNavbar
            }
          >
            <div className={styles.iconWrapper}>
              <div>
                <span>
                <Link to={'/'}>
                  <FlightIcon
                    className={styles.flightICON}
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightIcon>
                  </Link>
                </span>
                <p style={{ marginTop: "0px" }}>Flights</p>
              </div>
              <div>
                <span>
                  <Link to={`/hotel`}>
                    <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
                  </Link>
                </span>
                <p style={{ marginTop: "0px" }}>Hotels</p>
              </div>
              <div>
                <span>
                  <HomeWorkIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></HomeWorkIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Homestays</p>
              </div>

              <div>
                <span>
                  <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Trains</p>
              </div>
              <div>
                <span>
                  <DirectionsBusFilledIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DirectionsBusFilledIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Buses</p>
              </div>
              <div>
                <span>
                  <LocalTaxiIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></LocalTaxiIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Cabs</p>
              </div>
              <div>
                <span>
                  <CreditCardIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></CreditCardIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Visa</p>
              </div>
              <div>
                <span>
                  <FlightTakeoffIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightTakeoffIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Charter flights</p>
              </div>
              <div>
                <span>
                  <DownhillSkiingIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DownhillSkiingIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Activities</p>
              </div>
            </div>

            {/* login container */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
