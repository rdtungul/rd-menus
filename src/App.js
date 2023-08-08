import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)

  // dynamic navigations
  const allCategories = ['all', ...new Set(items.map((item) => item.category))] // to ba able to add a strings of arrays

  const [categories, setCategories] = useState(allCategories)

  // categories button navigations
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <menu>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </menu>
  )
}

export default App
