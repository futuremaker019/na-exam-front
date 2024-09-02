import React from 'react';
import {Outlet} from "react-router-dom";

const ExamLayout:React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default ExamLayout;