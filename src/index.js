import React from 'react'
import ReactDOM from 'react-dom'
import { data } from './books'
import Book from './Book'
import { greeting } from './testing/testing'

// CSS
import './index.css'

// setup vars

const BookList = () => {
  console.log(greeting)
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
