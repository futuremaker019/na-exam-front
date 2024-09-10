import React from 'react';
import {Outlet} from "react-router-dom";

const EditorLayout:React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default EditorLayout;