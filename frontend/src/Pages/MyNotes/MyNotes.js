import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import MainScreen from "../../Components/MainScreen";
import { Link } from "react-router-dom";
import NotesGrid from "./NotesGrid";
import { useHistory } from "react-router";
import { listNotes } from "../../actions/noteAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../Components/Loading";
import ErrorAlert from "../../Components/ErrorAlert";

const MyNotes = ({ search }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { success: successDelete } = noteDelete;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  //UseEffect to get the and fetch the data whenever the component is been asked.

  //we cannot directly call the function inside the useEffect so makking a function to get the data values.
  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successUpdate,
    successCreate,
  ]);

  return (
    <MainScreen title={`Hi ${userInfo && userInfo.name}! ,You are welcomed `}>
      <div>
        <Link
          to="createnote"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="contained">Create New Note</Button>
        </Link>
      </div>
      {error && <ErrorAlert data={error} />}
      {loading && <Loading />}
      <div>
        {notes &&
          notes
            .filter((filteredNote) =>
              filteredNote.title.toLowerCase().includes(search.toLowerCase())
            )
            .reverse()
            .map((note) => <NotesGrid data={note} key={note._id} />)}
      </div>
    </MainScreen>
  );
};

export default MyNotes;
