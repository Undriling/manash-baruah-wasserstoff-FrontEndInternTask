import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

const Editor = ({ username }) => {
  const ydoc = new Y.Doc();
  const provider = new WebrtcProvider('realtime-demo-room', ydoc);

  const editor = useEditor({
    extensions: [
      StarterKit, 
      Collaboration.configure({ document: ydoc }),
      CollaborationCursor.configure({
        provider,
        user: { name: username, color: '#ff007f' },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'prose max-w-full p-3 min-h-[400px] outline-none bg-white rounded-lg shadow',
      },
    },
  });

  return (
    <div className="relative p-4 border rounded shadow-lg bg-gray-100">
      {editor ? (
        <EditorContent editor={editor} />
      ) : (
        <p className="text-center text-gray-500">Connecting to real-time Editor...</p>
      )}
    </div>
  );
};

export default Editor;
