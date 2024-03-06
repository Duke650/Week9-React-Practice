import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'


const LikeButton = () => {
    const [like, setLike] = useState(false)

    const handleLike = () => {
        console.log(console.log(like ? "unliked" : "liked"))
        setLike(() => !like)
    }
  return (
    <>
        <div onClick={handleLike}>
            <FontAwesomeIcon icon={like ? solidHeart : faHeart} />
        </div>       
    </>
  )
}
export default LikeButton