import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import CreatePost from '../pages/CreatePost';
import MainPage from '../pages/MainPage';
import Post from '../pages/Post';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Blog</Typography>
      </div>
      <div className={classes.content}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default MainContent;