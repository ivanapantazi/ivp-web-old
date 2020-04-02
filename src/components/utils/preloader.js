import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
 
class PreloadScreen extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder
                fadeDuration={1000}
                >
                    <div className="preloader"></div>
                </Placeholder>
            </Preloader>
        );
    }
}

export default PreloadScreen;