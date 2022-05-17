import React, { useEffect, useState } from "react";
import "../Assets/Css/Home.css";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LinkIcon from "@mui/icons-material/Link";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import axios from "axios";

export function Home() {
  const [search, setSearch] = useState("OybekAbduljabbor");
  const [value, setValue] = useState({});

  useEffect(() => {
    axios(`https://api.github.com/users/${search}`)
      .then((res) => {
        console.log(res.data);
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  function SerchProfile(e) {
    e.preventDefault();
    setSearch(e.target[0].value);
  }

  return (
    <div id="home">
      <div id="card-profile">
        <form id="serch-form" onSubmit={SerchProfile}>
          <input type="text" placeholder="Serch GitHub profile..." />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </form>

        <div id="github-profile">
          <div id="github-profile-avatar">
            <figure>
              <img src={value.avatar_url} alt="" />
            </figure>
          </div>
          <div id="github-profile-info">
            <p>{value.name}</p>
            <p>{value.email || "No public email"}</p>
            <p>{value.bio}</p>

            <div id="github-profile-followes">
              <div>
                <p>Followers:</p>
                <p>{value.followers}</p>
              </div>
              <div>
                <p>Following:</p>
                <p>{value.following}</p>
              </div>
              <div>
                <p>Repos:</p>
                <p>{value.public_repos}</p>
              </div>
            </div>
            <div id="github-profile-links">
              <a
                href="http://pandashop.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
                <span>Twitter</span>
              </a>

              <a
                href="http://pandashop.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FmdGoodIcon />
                <span>Telegram</span>
              </a>
              <p>
                <LinkIcon />
                <span>{value.html_url}</span>
              </p>
              <a
                href="http://pandashop.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationCityIcon />
                <span>{value.location}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
