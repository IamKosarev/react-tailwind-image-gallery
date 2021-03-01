import React, { useState, useEffect } from "react"

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  const cors = `https://artem-cors-proxy.herokuapp.com/`

  const url = `${cors}https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`

  useEffect(() => {
    console.log(process.env.REACT_APP_PIXABAY_API_KEY)
    fetch(url, { headers: { "X-Requested-With": "XMLHttpRequest" } })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="stock random" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">
          Photo by Bill Landing
        </div>
        <ul>
          <li>
            <strong>Views: </strong>4000
          </li>
          <li>
            <strong>Downloads: </strong>330
          </li>
          <li>
            <strong>Likes: </strong>475
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  )
}

export default App
