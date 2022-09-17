import { useState} from 'react';
import axios from 'axios';

// pass in the individual gallery item via `props`. 
//     - Update the `GalleryList` to use this component to display an image.
//     - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     - Display the number likes for each item and include a like button.
//     - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     - Update the gallery each time a like button is clicked.

function GalleryItem({item, getData}) {

const [likeCount, setLikeCount] = useState(0)

const handleLike = (id) => {
    console.log(`in handleLike. for ${id} the like count is ${item.likes}`);
    setLikeCount(likeCount + 1);
    axios({
        method: 'PUT',
        url: '/gallery/like/:id',
        data: {
            likes: 2,
        }
    }).then((response) => {
        getData();
    }).catch((error) => {
        console.log('Handle Like PUT request not working:', error);
    })
}
console.log(`for item ${item.id} the likes are: ${item.likes}`)
return (
    <div className="photoCard">
        <img src={item.path} />
        <p>Title: {item.title}</p>
        <button onClick={() => handleLike(item.id)}>LIKE!</button>
        <p>{item.likes} people like this</p>

    </div>
);

}

export default GalleryItem;