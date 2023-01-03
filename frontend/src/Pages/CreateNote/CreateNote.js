import { Button, Card, Container, Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/noteAction";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CardContent from "@mui/material/CardContent";
import "./CreateNote.css";
import ErrorAlert from "../../Components/ErrorAlert";
import Loading from "../../Components/Loading";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CreateNote = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error } = noteCreate;

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category));

    resetHandler();
    history.push("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <Container style={{ marginTop: 16, minHeight: 99 }}>
      <form noValidate onSubmit={submitHandler}>
        {error && <ErrorAlert data={error} />}
        {loading && <Loading />}
        <div className="createNote">
          <Grid container spacing style={{ marginTop: 36 }}>
            <Grid item md={12} xs={12} sm={12} style={{ marginLeft: 16 }}>
              <Box sx={{ width: 1100, maxWidth: "100%" }}>
                <TextField
                  required
                  fullWidth
                  label="Title"
                  id="fullWidth"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>

              <Box
                sx={{ width: 1100, maxWidth: "100%" }}
                style={{ marginTop: "20px" }}
              >
                <TextField
                  required
                  fullWidth
                  label="category"
                  id="fullWidth"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing style={{ marginTop: 18 }}>
            <Grid item md={6} xs={12} sm={12}>
              <Card
                sx={{ minHeight: 700 }}
                style={{
                  maxHeight: 650,
                  overflow: "auto",
                }}
              >
                <CardContent>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Enter the content"
                    minRows={40}
                    maxRows={40}
                    style={{
                      width: 550,
                      maxWidth: 560,
                      minWidth: 550,
                      maxHeight: 600,
                      minHeight: 600,
                    }}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={6} xs={12} sm={12}>
              <Card
                sx={{ minHeight: 700 }}
                style={{
                  minHeight: 650,
                  maxHeight: 650,
                  overflow: "auto",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Preview of Content
                  </Typography>
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <div>
            <Button
              type="submit"
              style={{ margin: 10 }}
              color="primary"
              variant="contained"
              disabled={
                title.length && category.length && content.length ? false : true
              }
            >
              Submit to create new
            </Button>

            <Button
              style={{ margin: 10 }}
              color="default"
              variant="contained"
              onClick={resetHandler}
            >
              Reset
            </Button>
            {loading && <Loading />}

            <Typography variant="subtitle" align="center" paragraph>
              Creating on - {new Date().toLocaleDateString()}{" "}
            </Typography>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default CreateNote;
