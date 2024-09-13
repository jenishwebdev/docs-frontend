import { forwardRef } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor =  forwardRef((props, ref) => {
    return  <JoditEditor ref={ref} {...props}/>
})

export default RichTextEditor;