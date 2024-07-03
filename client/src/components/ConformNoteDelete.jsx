import axios from "axios";
function ConformItemDelete(id) {
  const deleteNote = async () => {
    console.log(id);
    try {
      const deleteNote = await axios.delete("/api/notes/" + id.id);
      console.log(deleteNote);
      window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };
    const No = () => {
      window.location.reload();
    };
    return (
      <>
        <div className="move">
          <div className="form">
            <div className="delete">
              <p>Are You Sure?</p>
              <div>
                <button onClick={deleteNote}>YES</button>
                <button onClick={No}>NO</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default ConformItemDelete;
