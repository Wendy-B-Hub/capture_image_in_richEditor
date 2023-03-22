import React, {useRef, useMemo, useState} from "react";
import {createEditor} from "slate";
import {Slate,Editable,withReact} from "slate-react";
import html2canvas from "html2canvas";

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'Type your content here...' }],
//   },
// ];

const initialValue = [{"type":"h1","children":[{"text":"Hello World! "}]},{"type":"h2","children":[{"text":"This is my paragraph inside "}]},{"type":"h3","children":[{"text":"a sample document."}]},{"type":"h3","children":[{"text":""}]},{"id":"338fd2f4-253c-4c29-9a7a-9078afd321ba","type":"image","caption":"birds.png","url":"https://res.cloudinary.com/dr60njtjy/image/upload/v1649350656/sample.jpg","isUploading":false,"children":[{"text":""}]},{"type":"paragraph","children":[{"text":"flowers  and bees , sunny day","highlight":true}]},{"type":"paragraph","children":[{"text":""}]}]


export default function SlateToImage(){
  const editor=useMemo(()=>withReact(createEditor()),[])
  const [value,setValue]=useState(initialValue);
  const editorRef=useRef();

  const handleSaveAsImage= async ()=> {
    const canvas = await html2canvas(editorRef.current);
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    link.href = image;
    link.download = 'slate-image.png';
    link.click();
  }
  return(
      <div>
        <Slate editor={editor} value={value} onChange={(newChange)=>setValue(newChange)}>
          <div ref={editorRef}>
            <Editable/>
          </div>
        </Slate>
        <button onClick={handleSaveAsImage}>save as image</button>
      </div>
  )
}











































































