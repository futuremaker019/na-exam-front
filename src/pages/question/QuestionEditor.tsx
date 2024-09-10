import MDEditor from '@uiw/react-md-editor';
import React, {useState} from 'react';

const QuestionEditor: React.FC = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div className={"p-10"}>
            <MDEditor height={300} value={value} onChange={(val) => setValue(val || '')} />
        </div>
    );
};

export default QuestionEditor;