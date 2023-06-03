function Post(props) {

	return(
		<li className='post-component'>
          <button>
            <p>{props.name}</p>
          </button>
        </li>
	)
}

export default Post;