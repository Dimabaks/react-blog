import { posts } from '../../shared/projectData'
import './BlogContent.css'
import { AddPostForm } from './components/AddPostForm'
import { BlogCard } from './components/BlogCard'
import { Component } from "react"

export class BlogContent extends Component {

  state = {
    showAddForm: false,
    showBlog: true,
    blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
  }
  
  likePost = pos => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;
    
    this.setState({
      blogArr: temp
    })

    localStorage.setItem('blogPosts', JSON.stringify(temp))
  }

    toggleBlog = () => {
      this.setState({
        showBlog: !this.state.showBlog
      })
    }

    deletePost = pos => {
      if (window.confirm(`Удалить ${this.state.blogArr[pos].title} ?`)) {

      const temp = [...this.state.blogArr];
      temp.splice(pos, 1);

      this.setState({
        blogArr: temp
      })

      localStorage.setItem('blogPosts', JSON.stringify(temp))
    }
    };

    handleAddFormShow = () => {
      this.setState ({
        showAddForm: true
      })
    };

    handleAddFormHide = () => {
      this.setState ({
        showAddForm: false
      })
    }

    handleEscape = (e) => {
      if (e.key === "Escape" && this.state.showAddForm) {
        this.handleAddFormHide()
      }
    }

    addNewBlogPost = (blogPost) => {

      this.setState((state) => {
        const posts = [...state.blogArr];
        posts.push(blogPost);
        localStorage.setItem("blogPosts", JSON.stringify(posts))
        return{
          blogArr: posts
        }
      })

      this.handleAddFormHide()
    }

    componentDidMount() {
      window.addEventListener("keyup", this.handleEscape)
    }

    componentWillUnmount() {
      window.removeEventListener("keyup", this.handleEscape)
    }

    render() {
      
    const BlogPosts = this.state.blogArr.map((item,pos) => {
      return (
        <BlogCard 
          key = {item.id}
          title = {item.title}
          discription = {item.discription}
          liked = {item.liked}
          likePost = {() => this.likePost(pos)}
          deletePost = {() => this.deletePost(pos)}
        />
      )
    })
      return (
        <div class = "blogPage">
          {this.state.showAddForm ? (
          <AddPostForm 
          blogArr={this.state.blogArr} 
          addNewBlogPost = {this.addNewBlogPost}
          />
       ) :null
        }

        <button onClick = {this.toggleBlog}>
          {
            this.state.showBlog ? 'Скрыть блог' : 'Показать блог'
          }</button>

       {
          this.state.showBlog ?
        <>
        <h1>Blog</h1>
        <div class = "addNewPost">
        <button class = "blackBtn" onClick={this.handleAddFormShow}>Создать новый пост</button>
        </div>
        <div class="posts">
          {BlogPosts}
        </div>
        </>
        : null
       }

        </div>
    )
    }
}