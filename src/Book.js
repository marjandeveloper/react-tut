const Book = (props) => {
  const { img, title, author } = props
  const clickHandler = () => {
    alert(`Hello, ${title}`)
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='I Love You to the Moon and Back' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={clickHandler}>
        Reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  )
}

export default Book
