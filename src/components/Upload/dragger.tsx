import React, {useState} from 'react'
import classNames from 'classnames'

interface IdraggeerProps {
    onFile: (file: FileList) => void
}


const Dragger:React.FC<IdraggeerProps>=(props)=>{
    const {onFile,children}=props;
    const [dragOver,setDragOver]=useState(false);
    const Klass=classNames('viking-uploader-dragger',{
        'is-dragover':dragOver
    })
    const handleDrop=(e:React.DragEvent<HTMLElement>)=>{
        e.preventDefault();
        setDragOver(false)
        onFile(e.dataTransfer.files)

    }
    const handleDrag=(e:React.DragEvent<HTMLElement>,over:boolean)=>{
        e.preventDefault()
        setDragOver(over)
    }
    return (
        <div
            className={Klass}
            onDragOver={(e)=>handleDrag(e,true)}
            onDragLeave={(e)=>handleDrag(e,false)}
            onDrop={handleDrop}
        >
            {children}
        </div>
    )
}

export default Dragger
