import './AddPostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';

export const AddPostForm = ({handleAddFormHide}) => {
    return (
        <>
        <form action='' class = "addPostForm">
            <button class = "hideBtn" onClick={handleAddFormHide}>
            <CancelIcon/>
            </button>
            <h2>Создание поста</h2>
        <div>
          <input class = "addFormInput" type='text' name='postTitle' placeholder='Заголовок поста'/>
        </div>
        <div>
          <textarea class = "addFormInput" name='postDescription' placeholder='Описание поста'/>
        </div>
        <div>
          <button onClick = {handleAddFormHide} type='button' class = "blackBtn">Добавить пост</button>
        </div>
      </form>
      <div onClick = {handleAddFormHide} class = "overlay"></div>
      </>
    )
}