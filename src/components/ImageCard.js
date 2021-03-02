import React from "react"

const ImageCard = ({ image }) => {
  const tags = image.tags.split(", ")

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img src={image.webformatURL} alt="stock random" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className="text-gray-800">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
            >
              #{tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default ImageCard
