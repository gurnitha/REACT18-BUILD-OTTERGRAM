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
