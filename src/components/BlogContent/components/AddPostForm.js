import { Component } from 'react';
import './AddPostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';

export class AddPostForm extends Component{

  state = {
    postTitle: '',
    postDesc: '',
  }

  handlePostTitleChange = (e) => {
      this.setState({
        postTitle: e.target.value
      })
  }

  handlePostDescChange = (e) => {
    this.setState({
      postDesc: e.target.value,
    })
}

  createPost = () => {
    const post = {
      id: this.props.blogArr.length + 1,
      title: this.state.postTitle,
      discription: this.state.postDesc,
      liked: false
    }

    this.props.addNewBlogPost(post)
  }

/*   componentDidMount() {
    console.log("Компонент формы отрисовался")
}

  componentDidUpdate() {
    console.log("Компонент формы обновился")
  }

  componentWillUnmount() {
    console.log("Компонент формы удалился")
  } */

    render() {
        console.log("Отрисовка")
        const handleAddFormHide = this.props.handleAddFormHide;
      return (
        <>
        <form action='' class = "addPostForm">
            <button class = "hideBtn" onClick={handleAddFormHide}>
            <CancelIcon/>
            </button>
            <h2>Создание поста</h2>
        <div>
          <input 
          class = "addFormInput" 
          type='text' 
          name='postTitle' 
          placeholder='Заголовок поста'
          value = {this.state.postTitle}
          onChange={this.handlePostTitleChange}/>
        </div>
        <div>
          <textarea 
          class = "addFormInput" 
          name='postDescription' 
          placeholder='Описание поста'
          value = {this.state.postDescription}
          onChange={this.handlePostDescChange}/>
        </div>
        <div>
          <button 
          onClick = {this.createPost} 
          type='button' 
          class = "blackBtn">Добавить пост</button>
        </div>
      </form>
      <div onClick = {handleAddFormHide} class = "overlay"></div>
      </>
    )
    }
}