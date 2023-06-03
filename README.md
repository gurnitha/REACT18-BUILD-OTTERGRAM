# LEARNING REACT 18



## Chapter 1. Create React App

        new file:   .gitignore
        new file:   README.md


#### 1.1 Getting Started with Create React App

        > npx create-react-app ottergram

        modified:   README.md
        new file:   package-lock.json
        new file:   package.json
        new file:   public/favicon.ico
        new file:   public/index.html
        new file:   public/logo192.png
        new file:   public/logo512.png
        new file:   public/manifest.json
        new file:   public/robots.txt
        new file:   src/App.css
        new file:   src/App.js
        new file:   src/App.test.js
        new file:   src/index.css
        new file:   src/index.js
        new file:   src/logo.svg
        new file:   src/reportWebVitals.js
        new file:   src/setupTests.js


#### 1.2 Hello Ottergram

        modified:   README.md
        modified:   public/favicon.ico <<-- replaced logo
        modified:   public/index.html <<-- modified
        modified:   public/logo192.png <<-- replaced logo
        modified:   public/logo512.png <<-- replaced logo
        modified:   src/App.js <<-- modified

        NOTE:

        1. Modified files, added new logo and added page title.
        2. Display Hello Ottergram

        :)


#### 1.3 Adding Elements

        modified:   README.md
        modified:   src/App.js
        new file:   src/otters/otter1.jpg
        new file:   src/otters/otter2.jpg
        new file:   src/otters/otter3.jpg
        new file:   src/otters/otter4.jpg
        new file:   src/otters/otter5.jpg

        NOTE:

        1. Create new folder: otters
        2. Add some images to otters folder
        3. In App.js:
           - Import the images
           - Render them here 

        :)


#### 1.4 Styling the elements

        modified:   README.md
        modified:   src/App.css << -- add style
        modified:   src/App.js <<-- add className to each elements

        NOTE:

        1. Styling the elements in App.js

        :)


#### 1.5 Kesimpulan

        NOTE:

        Kerja bagus! 

        Anda menggunakan Create React App untuk membuat aplikasi kerangka dan
        menyesuaikan info default untuk memastikan pengguna tahu di situs mana mereka berada. 

        Anda menambahkan tajuk (header), gambar, dan teks ke laman sehingga menampilkan umpan dari
        berang-berang trendi. Anda juga menambahkan styles menggunakan kata kunci React className.

        Di bab selanjutnya, Anda akan mengembangkan pekerjaan yang Anda lakukan di sini dengan mengambil
        keuntungan dari alat Bereaksi yang kuat yang disebut komponen.


## Chapter 2. Components


#### 2.1 Membuat Header Component

        modified:   README.md
        new file:   src/components/Header.js << -- header components
        modified:   src/App.js << -- import Header component here

        NOTE:

        1. Membuat components folder
        2. Membuat Header.js file di dalam folder component
           dan fungsi Header dan export default Header
        3. Pindahkan element header dari app.js ke dalam
           fungsi Header di dalam Header.js
        4. Import Header.js ke App.js
        5. Render Header pada App.js

        :)


#### 2.2 Membuat Post Component

        modified:   src/App.js
        new file:   src/components/Post.js

        NOTE:

        Caranya sama spt dalam 2.1

        :)


#### 2.3 Props

        modified:   README.md
        modified:   src/App.js << -- Passing props using attributes (App.js)
        modified:   src/components/Post.js <<-- Using prop values in a component (Post.js)

        NOTE:

        Image Not appreared

        :)


#### 2.4 Reusing a Component

        modified:   README.md
        modified:   src/App.css
        modified:   src/App.js << -- Reusing the Post component (App.js)
        modified:   src/components/Post.js << -- Add props image in Post.js

        modified:   README.md

        NOTE:

        1. Reusing the post comp in App.js
        2. Add style
        3. Add props image in Post.js

        Image showing up again

        :)


#### 2.5 Object destructuring

        modified:   README.md
        modified:   src/components/Post.js

        NOTE:

        Before: function Post({props})
        Before: <img src={props.image} alt={props.name}/>
        Before: <p className="post-name">{props.name}</p>

        After: function Post({ image, name })
        After: <img src={image} alt={name}/>
        After: <p className="post-name">{name}</p>

        :)


#### 2.6 Rendering Lists

        modified:   README.md
        modified:   src/App.js

        NOTE:

        1. Create an array of data in App.js
        2. Use the hard-coded data array
        and loop (map) them within the App.js

        :)

        It shows some issues in the Browser DevTools.

        What happened? 
        As the warning says, you should include 
        a key as a prop for each child in the list.


#### 2.7 Including a key as a prop for each child in the list

        modified:   README.md
        modified:   src/App.js

        NOTE:

        Issues dis-appeared

        :)


#### 2.8 Conclusion

        Your app is on its way to being otter-ly amazing. Y
        ou broke down the Ottergram application into individual 
        components and can see those
        components and their props in the React DevTools. 

        And you are set up to
        render large arrays of data with just a few lines of code.
        
        In the next chapter, you will continue to build on what 
        you have learned and give users the ability to interact 
        with your app by highlighting their favorite
        otter.






