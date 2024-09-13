import { useState, useEffect } from 'react';
import { useEditor } from './useEditor';
import { socket } from '../../common/socket/socket'
import { CONNECT, ON_USER_JOINED, ON_USER_REMOVED, ON_EDITOR_CHANGE  } from './const';

export const useDoc = () => {
    const [connectedUsers, setConnectedUsers] = useState([]);
    const [mySokcetId, setMySocketId] = useState();
    const { editorHtml, setEditorHtml, editor, handleChange } = useEditor();

    useEffect(() => {

        socket.on(CONNECT, () => {
          setMySocketId(socket.id);
        });
    
        socket.on(ON_USER_JOINED, ({liveUsersList, currentContent}) => {
          const connectedUsersList = Object.keys(liveUsersList).
          filter(userId => userId !== mySokcetId).map(userId => ({ id: userId, name: liveUsersList[userId] }));
          setConnectedUsers([...connectedUsersList]);
          setEditorHtml(currentContent)
        });
    
        socket.on(ON_USER_REMOVED, (liveUsersList) => {
          const connectedUsersList = Object.keys(liveUsersList).
          filter(userId => userId !== mySokcetId).map(userId => ({ id: userId, name: liveUsersList[userId] }));
          setConnectedUsers([...connectedUsersList]);
        });
    
        socket.on(ON_EDITOR_CHANGE, (newContent) => {
          setEditorHtml(newContent);
        });
    
        // Cleanup on component unmount
        return () => {
          socket.off(CONNECT);  
          socket.off(ON_USER_JOINED);
          socket.off(ON_USER_REMOVED);
          socket.off(ON_EDITOR_CHANGE);
        };
      }, []);

    return {
        connectedUsers,
        setConnectedUsers,
        mySokcetId,
        setMySocketId,
        editorHtml,
        setEditorHtml,
        editor,
        handleChange
    }
}