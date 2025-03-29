import './editor.css'
import Layers from "./layers";
import Options from "./options";
import Workspace from "./workspace";

function Editor({previewImg }) {
  return (
    <div className="editor">
      <Layers previewImg={previewImg} />
      <Workspace previewImg={previewImg} />
      <Options previewImg={previewImg} />
    </div>
  );
}

export default Editor