import React from 'react';
import {Outlet} from "react-router-dom";

const BaseLayout: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default BaseLayout;