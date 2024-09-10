declare module "*.svg?react" {
    import * as React from 'react';
    // const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    // export default value;
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}