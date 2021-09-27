import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "3440844_avatar_male_man_person_profile_icon.png",
      id: 1,
      name: "Jack",
      active: true,
      isOnline: true,
    },
    {
      image:
        "female.png",
      id: 2,
      name: "Lili",
      active: false,
      isOnline: false,
    },
    {
      image:
        "business_male.png",
      id: 3,
      name: "Josh",
      active: false,
      isOnline: false,
    },
    {
      image:
        "man.png",
      id: 4,
      name: "Ben",
      active: false,
      isOnline: true,
    },
    {
      image:
        "fem.png",
      id: 5,
      name: "Anna",
      active: false,
      isOnline: false,
    },
    {
      image:
        "fem1.png",
      id: 6,
      name: "Mini",
      active: false,
      isOnline: true,
    },
    {
      image:
        "man.png",
      id: 7,
      name: "Hagrid",
      active: false,
      isOnline: true,
    },

  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
