import React, { useEffect,useState } from 'react'
import './createPage.css'
import IKImage from '../../Components/Image/image'
import useAuthStore from '../../Utility/authStore'
import {useNavigate} from 'react-router'
import BoardForm from './boardForm'
import { useRef} from 'react'
import Editor from '../../Components/Editor/editor'
import useEditorStore from '../../Utility/editorStore'
import { useMutation , useQuery} from '@tanstack/react-query'
import apiRequest from '../../Utility/apiRequest'


const addPost = async (post) => {
  const res = await apiRequest.post("/pins", post);
  return res.data;
};

function createPage() {

  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newBoard, setNewBoard] = useState("");
  const [isNewBoardOpen, setIsNewBoardOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState({
    url: "",
    width: 0,
    height: 0,
  });

  const {textOptions, canvasOptions,resetStore} = useEditorStore();
  const formRef = useRef();
  const {currentUser} = useAuthStore();
  const navigate = useNavigate();


  useEffect(() => {
    if(!currentUser){
      navigate('/auth');
    }
  }, [navigate, currentUser])
  
  useEffect(() => {
    if(file){
      const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      setPreviewImg({ 
        url: img.src, 
        width: img.width, 
        height: img.height 
      });
    };
    }
  }, [file])

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
      resetStore();
      navigate(`/pin/${data._id}`);
    },
  });

  const handleSubmit = async () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      const formData = new FormData(formRef.current);
      formData.append("media", file);
      formData.append("textOptions", JSON.stringify(textOptions));
      formData.append("canvasOptions", JSON.stringify(canvasOptions));
      formData.append("newBoard", newBoard);
      mutation.mutate(formData);
    }
  }

  const { data, isPending, error } = useQuery({
    queryKey: ["formBoards", currentUser?._id], // Dodaj userId do queryKey
    queryFn: () => apiRequest.get(`/boards/${currentUser?._id}`).then((res) => res.data),
    enabled: !!currentUser, // Wykonaj zapytanie tylko jeśli jest user
  });
  const handleNewBoard = () => {
    setIsNewBoardOpen((prev) => !prev);
  };


  return (
    <div className="createPage">
      <div className="createTop">
        <h1>{isEditing ? "Design your Pin" : "Create Pin"}</h1>
        <button onClick={handleSubmit}>{isEditing ? "Done" : "Publish"}</button>
      </div>
      {isEditing ? (
        <Editor previewImg={previewImg} />
      ) : (
        <div className="createBottom">
          {previewImg.url ? (
            <div className="preview">
              <img src={previewImg.url} alt="" />
              <div className="editIcon" onClick={() => setIsEditing(true)}>
                <IKImage path="/general/edit.svg" alt="" />
              </div>
            </div>
          ) : (
            <>
              <label htmlFor="file" className="upload">
                <div className="uploadTitle">
                  <IKImage path="/general/upload.svg" alt="" />
                  <span>Choose a file</span>
                </div>
                <div className="uploadInfo">
                  We recommend using high quality .jpg files less than 20 MB or
                  .mp4 files less than 200 MB.
                </div>
              </label>
              <input
                type="file"
                id="file"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </>
          )}
          <form className="createForm" ref={formRef}>
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Add a title"
                name="title"
                id="title"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <textarea
                rows={6}
                type="text"
                placeholder="Add a detailed description"
                name="description"
                id="description"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                placeholder="Add a link"
                name="link"
                id="link"
              />
            </div>
            {(!isPending || !error) && (
              <div className="createFormItem">
                <label htmlFor="board">Board</label>
                <select name="board" id="board">
                  <option value="">Choose a board</option>
                  {data?.map((board) => (
                    <option value={board._id} key={board._id}>
                      {board.title}
                    </option>
                  ))}
                </select>
                <div className="newBoard">
                  {newBoard && (
                    <div className="newBoardContainer">
                      <div className="newBoardItem">{newBoard}</div>
                    </div>
                  )}
                  <div className="createBoardButton" onClick={handleNewBoard}>
                    Create new board
                  </div>
                </div>
              </div>
            )}
            <div className="createFormItem">
              <label htmlFor="tags">Tagged topics</label>
              <input type="text" placeholder="Add tags" name="tags" id="tags" />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
          </form>
          {isNewBoardOpen && (
            <BoardForm
              setIsNewBoardOpen={setIsNewBoardOpen}
              setNewBoard={setNewBoard}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default createPage