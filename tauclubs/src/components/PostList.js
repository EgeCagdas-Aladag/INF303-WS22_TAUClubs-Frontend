import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

// class PostList extends React.Component {
//   state = {
//     posts: [],
//   };

//   componentDidMount() {
//     let data;

//     axios
//       //   .get("http://localhost:8000/posts/?search=" + club_id + "/")
//       .get("http://localhost:8000/posts/")

//       .then((res) => {
//         data = res.data;
//         console.log(data);
//         this.setState({
//           posts: data,
//         });
//       })
//       .catch((err) => {});
//   }
//   render() {
//     // Destructing
//     const { club_id, clubname } = this.props;

function PostList(props) {
  const { club_id, clubname } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let data;

    axios
      .get(`http://localhost:8000/posts/?search=${club_id}`)
      .then((res) => {
        data = res.data;
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {});
  }, [club_id]);

  return (
    <div className="postList">
      {/* {this.state.posts.map((post) => ( */}
      {posts.map((post) => (
        <div>
          <Post
            category={post.type}
            title={post.name}
            content={post.description}
            club={clubname}
            time={post.postdate}
          />
        </div>
      ))}
    </div>
  );
}

export default PostList;
