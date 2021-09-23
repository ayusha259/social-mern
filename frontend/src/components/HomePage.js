import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUnfollow,
  getAllUsers,
  getFollowingPosts,
  uploadPost,
} from "../actions/userAction";
import Avatar from "@material-ui/core/Avatar";
import FollowUnfollow from "./extras/FollowUnfollow";
import Loader from "./extras/Loader";
import Posts from "./extras/Posts";
import { Dialog, TextField, Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import classes from "./HomePage.module.css";
import axios from "axios";

const HomePage = () => {
  const { user, auth } = useSelector((state) => state.userInfo);
  const { allUsers } = useSelector((state) => state.users);
  const { loading } = useSelector((state) => state.error);
  const { followingPosts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const [dialog, setDialog] = useState(false);
  const [photo, setPhoto] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getFollowingPosts(auth.token));
    return () => {
      dispatch({ type: "ALL_USERS_CLEAN" });
      dispatch({ type: "CLEAN_FOLLOWING_POSTS" });
    };
  }, [dispatch, auth.token]);

  const handleFollowUnfollow = (req, tok, id) => {
    dispatch(followUnfollow(req, tok, id));
  };

  const commentRequest = async (id, comment, name, profile) => {
    await axios.put(
      `/api/posts/comment/${id}`,
      { comment: comment, name: name, profilePicture: profile },
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  };

  const postComment = (id, comment, name, profile) => {
    commentRequest(id, comment, name, profile);
  };

  const handleClose = () => {
    setDialog(false);
    setContent("");
    setPhoto("");
  };

  const handleSubmit = () => {
    let data = {};
    if (photo) {
      data = {
        content,
        photo,
      };
    } else {
      data = { content };
    }
    handleClose();
    dispatch(uploadPost(auth.token, data));
    dispatch(getFollowingPosts(auth.token));
  };

  const getIndUser = (id) => {
    const user = allUsers.find((u) => u._id === id);
    return { name: user.name, profile: user.profilePicture };
  };

  let filterdUsers = user
    ? allUsers.filter((u) => u._id !== user._id)
    : allUsers;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Dialog onClose={handleClose} open={dialog}>
            <div className={classes.uploadImage}>
              <h1>Upload Post</h1>
              {photo ? (
                <div className={classes.dialogImage}>
                  <img src={photo} alt="" />
                </div>
              ) : (
                ""
              )}
              <div style={{ padding: "10px 0" }}>
                <TextField
                  label="Content"
                  style={{
                    width: "350px",
                    marginBottom: "10px",
                  }}
                  variant="standard"
                  onChange={(evt) => setContent(evt.target.value)}
                  type="text"
                  multiline
                  maxRows={1}
                  value={content}
                />
                <TextField
                  label="ImageUrl"
                  style={{ width: "350px" }}
                  variant="standard"
                  onChange={(evt) => setPhoto(evt.target.value)}
                  type="text"
                  value={photo}
                />
              </div>
              <div>
                <Button
                  onClick={handleSubmit}
                  style={{ width: "100px" }}
                  variant="contained"
                  color="primary"
                >
                  Upload
                </Button>
              </div>
            </div>
          </Dialog>
          <div className={classes.container}>
            <div className={classes.feedContainer}>
              <div className={classes.feed}>
                {followingPosts.map((post) => (
                  <Posts
                    key={post._id}
                    _id={post._id}
                    {...getIndUser(post.user)}
                    content={post.content}
                    image={post.photo}
                    likes={post.likes.length}
                    comments={post.comments}
                    width="80%"
                    liked={post.likes.includes(user._id)}
                    postComment={postComment}
                    created={new Date(post.createdAt)}
                  />
                ))}
              </div>
              <div className={classes.users}>
                <h1>USERS</h1>
                {filterdUsers.map((u) => (
                  <div key={u._id} className={classes.user}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={u.profilePicture} />
                      <span
                        style={{ marginLeft: "7px" }}
                        className={classes.name}
                      >
                        {u.name}
                      </span>
                    </span>
                    <FollowUnfollow
                      handleClick={handleFollowUnfollow}
                      followed={user.following.includes(u._id)}
                      targetId={u._id}
                      token={auth.token}
                      type={
                        user.following.includes(u._id) ? "unfollow" : "follow"
                      }
                    />
                  </div>
                ))}
              </div>
              <Tooltip
                title="Upload"
                onClick={() => setDialog(true)}
                disableHoverListener
                className={classes.postAddBtn}
                style={{
                  position: "fixed",
                  bottom: "40px",
                  right: "40px",
                  transition: "0.5s",
                }}
              >
                <Fab color="primary" className={classes.absolute}>
                  <AddIcon />
                </Fab>
              </Tooltip>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;