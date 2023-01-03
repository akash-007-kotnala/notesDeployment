import React, { useState, useEffect } from "react";

import "./SingleNote.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import MainScreen from "../../Components/MainScreen";
import { Typography, Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import Loading from "../../Components/Loading";

const SingleNote = ({ match }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const history = useHistory();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);

      if (data) {
        setTitle(data.title);
        setCategory(data.category);
        setDate(`${data.updatedAt}`.substring(0, 10));
        setContent(data.content);
      }
    };

    fetching();
  }, [match.params.id, history]);

  return (
    <div>
      <MainScreen title={title}>
        {category ? (
          <Paper elevation={15}>
            <Typography mt={2} variant="h5">
              Category : {category}
            </Typography>
            <Typography variant="body" style={{ marginTop: 20 }}>
              Created Date : {date}
            </Typography>
          </Paper>
        ) : (
          <Loading />
        )}

        <ReactMarkdown
          children={content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </MainScreen>
    </div>
  );
};

export default SingleNote;
