# Neroshitron
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/e4a9e11b-0e52-42e0-ad9a-821a81e92e90)
 ![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/78e009be-caa0-4ae6-9c06-90dde2ab4389)


# Documentation For Technical Stack
- https://nextjs.org/docs
- https://supabase.com/docs/
- https://owncast.online/docs/
- https://github.com/maildev/maildev
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- https://docs.docker.com/engine/install/
  
# Running Backend
You will need docker installed.
- https://docs.docker.com/engine/install/

You will need supabase CLI.
- https://docs.docker.com/engine/install/

1) Open your terminal and navigate to the root of the git repository.
2) Make sure that docker and docker compose are installed.
3) Run `docker-compose --env-file ./docker.env up` which will start up OwnCast and a development mail server.
4) Run `supabase start`

## Supabase

### Updating the database
Run `supabase db reset`. This will wipe data.
https://supabase.com/docs/guides/cli/local-development?queryGroups=access-method&access-method=kong#database-migrations

### Setting up the buckets.
You will need to create a bucket named `galleries`.
https://supabase.com/docs/guides/storage/buckets/creating-buckets?queryGroups=language&language=dashboard

## MailDev
http://localhost:1080
This is where all mail being sent shows up from the application for developers.

## OwnCast 
http://localhost:8080/
Configuration is done through the Owncast administration page located on your server under /admin. The login username is admin and the password is your stream key, the default being abc123.

# Running UI
You need npm and nodejs installed. See documentation at start of document.
1) Open your terminal and navigate to the root folder of the git repository. 
2) Run the command `npm update`. 
3) Once the depedencies are pulled and installed you can run the command `npm run dev` to run the application in development mode.
4) Open http://localhost:3000/







# React Components
## Gallery Component
The `Gallery` component is a React component used to display a gallery of images. It fetches images from an API and displays them in a Masonry layout.
### Props
- `id` (number): The ID of the gallery to fetch images from.
- `closeMenu` (function): A function to close the menu.
### State
- `isSingle` (boolean): A state to check if only a single image is to be displayed.
- `loaded` (object): A state to keep track of loaded images.
- `selectedImage` (string | null): A state to keep track of the selected image.
- `images` (string[]): A state to store the fetched images.
- `galleryId` (number): A state to store the gallery ID.
### Functions
- `getData`: An async function to fetch images from the API.
- `generateRandomString`: A function to generate a random string of a given length.
- `handleDownload`: A function to handle the download of an image.
### Usage
The example below will load the images of the the gallery with an ID of `58201557-b392-471e-ac55-dcf6171cd18d` and will call the function for `setIsOpen(false)` when the back button is clicked.
```tsx
    <Gallery id={"58201557-b392-471e-ac55-dcf6171cd18d"} closeMenu={() => setIsOpen(false)}></Gallery>
```
## GalleryThumbnail Component
The `GalleryThumbnail` component is a React component used to display a thumbnail of a gallery. It fetches the thumbnail image from an API and displays it. When clicked, it triggers a callback function with the gallery ID.
### Props

- `id` (string): The ID of the gallery to fetch the thumbnail for.
- `onSelect` (function): A function to be called when the thumbnail is clicked. The gallery ID is passed as an argument.
- `title` (string) : The name of the gallery.
- `subscription` (subscription) : The name of the subscription required for the gallery.

### State

- `galleryId` (string): A state to store the gallery ID.
- `thumbnailUrl` (string): A state to store the fetched thumbnail URL.
- `isLoading` (boolean): A state to keep track of the loading status.
### Functions

- `openGallery`: A function to call the `onSelect` prop with the gallery ID.
- `getData`: An async function to fetch the thumbnail from the API.
### Usage
This will render a thumbnail for the gallery with the ID of "1". When the thumbnail is clicked, it will log the gallery ID to the console.
```tsx
<GalleryThumbnail id="1" onSelect={(id) => console.log(id)} />
```
