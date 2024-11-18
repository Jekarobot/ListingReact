import './App.css'
import { ListingItem } from './components/Listing/Listing'
import Listing from './components/Listing/Listing'
import data from './data/data.json'

function App() {

  const parsedData = data as ListingItem[]

  return (
    <div className='item-list'>
      <Listing items={parsedData} />
    </div>
  )
}

export default App
