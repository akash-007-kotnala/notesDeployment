import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { CardContent, Card, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NoteGrid.css";
import { useDispatch } from "react-redux";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { deleteNoteAction } from "../../actions/noteAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  catergory: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const NotesGrid = ({ data }) => {
  const id = data._id;
  const title = data.title;
  const content = data.content;
  const category = data.category;

  const date = `${data.createdAt}`.substring(0, 10);

  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <Grid container spacing style={{ marginTop: 16 }}>
      <Grid item md={9} xs={12} sm={7}>
        <Accordion expanded={expanded === id} onChange={handleChange(id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ textAlign: "center" }}
          >
            <Typography className={classes.heading}>{title}</Typography>
            <Typography className={classes.secondaryHeading}>{date}</Typography>
            <Typography className={classes.heading}>{category}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Card style={{ overflow: "auto", maxHeight: 900, width: 900 }}>
              <CardContent>
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
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item md={3} xs={12} sm={5}>
        <Link
          to={`/note/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="default"
            style={{ marginLeft: "6px", marginRight: "6px" }}
          >
            Edit
          </Button>
        </Link>

        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </Button>

        <Link
          to={`/singleNote/${id}`}
          //to={{ pathname: "/singleNote", noteInfo: { data } }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="default"
            style={{ marginLeft: "6px", marginRight: "6px" }}
          >
            NewTab
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default NotesGrid;
