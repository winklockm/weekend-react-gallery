// // New Component: GalleryList!
// import the GalleryItem
import GalleryItem from '../GalleryItem/GalleryItem';

// // GOALS:
// // 1. pass in the gallery data stored in `App` via `props`
// // 2. iterate (loop over) the list of gallery data
// // 3. make GalleryItems
// // STEPS:
// // ✅ 1. create function in this file and give props as an argument. Props can be named anything.
// //    when props (or whatever I name it) are console.logged, it shows a big object
// // ✅ 2. in App.jsx import this GalleryList
// // ✅ 3. in App.jsx call this GalleryList by writing <GalleryList /> in the return
// //    where you want it to show up - ALSO give it the necessary props!!
// // ✅ 4. Now if you console.log the props in this file you will get the props you gave it in App.jsx
// // ✅ 5. In this file return an unordered list .mapping through the gallery, and returning the GalleryItem from GalleryItem.jsx

// // Use .map to iterate (loop over) the list of gallery data






// STEP 1
function GalleryList({gallery, getData} ) {
    // STEP 4
    console.log('props are', gallery, getData);  
    
    return (
        <>
        {/* //STEP 5 */}
            <ul>
                {gallery.map(item => {
                    return (
                        <GalleryItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            path={item.path}
                            likes={item.likes} />
                    )
                })}
            </ul>
        </>
      


    );
    
}

export default GalleryList;