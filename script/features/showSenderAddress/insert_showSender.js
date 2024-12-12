// insertDiv.js

// Insert a new container to display the sender's address.
const insert_showSender = () => {
  const insertAt = '#app > div > :nth-child(1)'

  /**
   * (elementId, elementContent, insertionPoint, insertPosition)
   */
  insertNewElement(SHOW_SENDER.ID, '', insertAt, 'afterend')
}
