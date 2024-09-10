import MDEditor from '@uiw/react-md-editor';
import React, {useState} from 'react';

const QuestionEditor: React.FC = () => {
    const [value, setValue] = useState('');
    return (
        <div className={"p-10"}>
            <MDEditor height={300} value={value} onChange={setValue} />
        </div>
    );
};

export default QuestionEditor;