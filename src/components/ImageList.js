import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

class ImageList extends React.Component{
    renderImages(){
        return this.props.images.map(image => {
            return <ImageCard url={image.urls.regular} key={image.id}/>
        })
    }

    render(){
        return(
            <div className="image-list">
                {this.renderImages()}
            </div>
        )
    }
}

export default ImageList