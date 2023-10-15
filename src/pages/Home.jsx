import React from "react";
import './home.css'
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from '../components/feed/Feed'

function Home() {
  return (
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
  );
}

export default Home;
