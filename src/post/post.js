import React, { Component } from "react";
import Render from "./header-render";
import Main from "./main-render";
import mes from "../img/134932.svg";
import share from "../img/1251845.svg";
import heart from "../img/929417.svg";
import post from "../img/454545.svg";
class Post extends Component {
  state = {
    info: [
      {
        name: "Anakin Skywalker",
        photo: "",
        nickname: "dart_vader",
        content: "WTF? Who is RAY? Why she is Skywalker? Luke...?",
        date: "•26 February",
      },
    ],
  };
  render() {
    return (
      <div className="cont">
        <Render
          name={this.state.info[0].name}
          nick={this.state.info[0].nickname}
          date={this.state.info[0].date}
          parag={this.state.info[0].content}
        />

        <Main mes={mes} share={share} heart={heart} post={post} />
      </div>
    );
  }
}
export default Post;
