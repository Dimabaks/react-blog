import './AddPostForm.css'

export const AddPostForm = () => {
    return (
        <>
        <form action='' class = "addPostForm">
            <h2>Создание поста</h2>
        <div>
          <input type='text' name='postTitle' placeholder='Заголовок поста'/>
        </div>
        <div>
          <textarea name='postDescription' placeholder='Описание поста'/>
        </div>
        <div>
          <button type='button' class = "blackBtn">Добавить пост</button>
        </div>
      </form>
      <div class = "overlay"></div>
      </>
    )
}