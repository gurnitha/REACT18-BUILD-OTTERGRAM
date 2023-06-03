import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const ottersArray = [
 { image: Barry, name: 'Barry' },
 { image: Robin, name: 'Robin' },
 { image: Maurice, name: 'Maurice' },
 { image: Lesley, name: 'Lesley' },
 { image: Barbara, name: 'Barbara' },
];


function App() {
  return (
    <div className="App">

      <Header />

      <ul className='post-list'>

        {ottersArray.map ((post) => (
        
          <Post 
            image={post.image}
            name={post.name}
          />

        ))}

      </ul>

    </div>
  );
}

export default App;
