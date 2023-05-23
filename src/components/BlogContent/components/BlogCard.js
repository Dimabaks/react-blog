import './BlogCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const BlogCard = ({
  title,
  discription,
  liked,
  likePost,
  deletePost
}) => {

const heartFill = liked ? 'crimson' : 'black'

    return (
        <div class="post">
          <div class = "postContent">
            <h2>{title}</h2>
            <p>{discription}</p>
            <div>
              <button onClick={likePost}>
                <FavoriteIcon style = {{fill: heartFill}}/>
              </button>
            </div>
          </div>
          <button class = "deleteBtn" onClick = {deletePost}>
            <DeleteForeverIcon/>
          </button>
        </div>
    )
}
