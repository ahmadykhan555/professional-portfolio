import React from 'react';
import './Image.scss';

export interface Image {
    url: string;
    description?: string;
} 
export const Image: React.FC<Image> = (props: Image) => {
    return(
        <div className="image-component">
            <img src={props.url} style={{maxWidth: '200px'}}></img>
            {props.description && <p className="description">{props.description}</p>}
        </div>
    );
}
