import { useState, useRef } from 'react';
import { ON_EDITOR_CHANGE } from './const';
import { socket } from '../../common/socket/socket'

export const useEditor = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const editor = useRef(null);
    
    const handleChange = (newContent) => {
        socket.emit(ON_EDITOR_CHANGE, newContent);
    }   

    return {
        editorHtml,
        setEditorHtml,
        handleChange,
        editor
    }
}