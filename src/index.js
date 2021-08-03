import React from 'react'
import ReactDOM from 'react-dom'
import { data } from './books'
import Book from './Book'
// CSS
import './index.css'

// setup vars

const BookList = () => {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
