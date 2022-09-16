// New Component: GalleryList!

// GOALS:
// 1. pass in the gallery data stored in `App` via `props`
// 2. iterate (loop over) the list of gallery data
// 3. make GalleryItems
// STEPS:
// ✅ 1. create function in this file and give props as an argument. Props can be named anything.
//    when I console.log props (or whatever I name it), it shows a big object
// ✅ 2. in App.js import this GalleryList
// 3. in App.js call this GalleryList by writing <GalleryList /> in the return
//    where you want it to show up - ALSO NEED TO GIVE IT SOME PROPS!!!!!!!!!!!!!

function GalleryList(props) {
    console.log('props are', props);
    return (
        <p>THIS IS THE GALLERYLIST</p>
    );
}

export default GalleryList;