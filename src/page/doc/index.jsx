import React from 'react';
import RichTextEditor from './components/RichTextEditor';
import { useDoc } from './useDoc';

const Doc = () => {
  const {      
    connectedUsers,
    editorHtml, 
    editor, 
    handleChange
 } = useDoc();

  return (
    <div>
      {connectedUsers.map((user) => <h3 key={user.id}>{user.name}</h3>)}
      <RichTextEditor  
        ref={editor}
        value={editorHtml}
        onChange={newContent => handleChange(newContent)} 
      />
    </div>
  );
};

export default Doc;
