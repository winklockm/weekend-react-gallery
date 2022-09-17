import axios from 'axios';

// pass in the individual gallery item via `props`. 
//     - Update the `GalleryList` to use this component to display an image.
//     - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     - Display the number likes for each item and include a like button.
//     - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     - Update the gallery each time a like button is clicked.

function GalleryItem({item, getData}) {

const handleLike = () => {
    axios({
        method: 'PUT',
        url: '/gallery/${item.id}'
    }).then((response) => {
        getData();
    }).catch((error) => {
        console.log('handleLike not working due to:', error)
    })
}
// PUT ROUTE






return (
    <div className="photoCard">
        <p>photo goes here</p>
        <button onClick={handleLike}>LIKE!</button>
        <p>0 people like this</p>

    </div>
);

}

export default GalleryItem;