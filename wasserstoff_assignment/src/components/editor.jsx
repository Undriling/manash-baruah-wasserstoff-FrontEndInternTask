import { useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { getRandomColor } from '../utils/randomclr';

const Editor = ({ username }) => {
  const ydoc = useRef(new Y.Doc()).current;
  const color = useRef(getRandomColor()).current;

  useEffect(() => {
    const provider = new WebrtcProvider('realtime-demo-room', ydoc);

    const awareness = provider.awareness;
    awareness.setLocalStateField('user', {
      name: username,
      color,
    });

    return () => provider.destroy();
  }, [username, ydoc, color]);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello Buddy! Start typing...</p>',
    editorProps: {
      attributes: {
        class: 'prose max-w-full p-3 min-h-[400px] outline-none bg-white rounded-lg shadow',
      },
    },
    onCreate: ({ editor }) => {
      const yXmlFragment = ydoc.getXmlFragment('prosemirror');
      editor.commands.setContentFromYjs(yXmlFragment);
    },
  });

  return (
    <div className="relative p-4 border rounded shadow-lg bg-gray-100">
      <EditorContent editor={editor} />
    </div>
  );
}

export default Editor;
