import { useState} from 'react';
import axios from 'axios';

// pass in the individual gallery item via `props`. 
//     ✅ - Update the `GalleryList` to use this component to display an image.
//     ✅ - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     ✅ - Display the number likes for each item and include a like button.
//     ✅ - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     ✅ - Update the gallery each time a like button is clicked.

function GalleryItem({item, getData}) {

// const for the description to be a boolean
const [description, setDescription] = useState(false);

// create const to be called by a click that will switch the boolean
const showDescription = () => {
    console.log('in showDescription');
    setDescription(!description)
   }

const handleLike = (id) => {
    axios({
        method: 'PUT',
        url: `/gallery/like/${id}`,
    }).then((response) => {
        getData();
    }).catch((error) => {
        console.log('Handle Like PUT request not working:', error);
    })
}
return (
    <div className='grid'>        
        <div className='flex1'>
                {(description === false)? 
                    <div>
                        <img className="photo" src={item.path} onClick={showDescription}/> 
                    </div>
                    : 
                    <div className='description' onClick={showDescription}>
                        <p className='descriptionText'>{item.description}</p>
                    </div>
                }
            </div>    
            <div className='likes'>
                <button onClick={() => handleLike(item.id)}>🖤</button>
                <p className='likeText'>{item.likes} LIKES</p>   
            </div>
    </div>

);

}

export default GalleryItem;