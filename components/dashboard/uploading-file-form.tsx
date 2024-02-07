'use client';

import { uploadFile } from '@/actions/dashboard/upload-file';
import {
  MultiFileDropzone,
  type FileState,
} from '@/components/dashboard/multiple_file_dropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { folderListState } from '@/store/atom/folder-list';
import { fileRecoilStates } from '@/store/atom/uploading-list-state';

import { toast } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { SelectFolder } from './select-folder';
import { useEffect, useState } from 'react';
import { getDownloadUrl } from '@edgestore/react/utils';
import { checkLimit } from '@/actions/dashboard/check-limit';

export function UploadingfileForm() {
  const [fileStates, setFileStates] = useRecoilState<FileState[]>(fileRecoilStates);
  const { edgestore } = useEdgeStore();
  const folderList = useRecoilState(folderListState)
  const [folderId , setFolderId] = useState<string>(null!)

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates( (fileStates) => {

    const newFileStates = structuredClone(fileStates);
    const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }
  
  const createFile = async ({addedFileState , folderId , downloadUrl , url}:{addedFileState : FileState , folderId : string , downloadUrl : string , url: string}) => {

    const id = toast.loading("Adding in your folder....")

    uploadFile({name : addedFileState.file.name , type : addedFileState.file.type , size : addedFileState.file.size , folderId : folderId , downloadUrl : downloadUrl , url : url})
     .then((data)=>{
      if(data.error){
        toast.error(data.error,{
          id : id
        })
       }

       if(data.success){
        toast.success(data.success,{
          id : id   })
        }
     }).catch((error)=>{
        toast.error(error,{
         id : id
       })
})

}

   const onCheckLimit =async () => {
     const res = await checkLimit()
     if(res.error){
      toast.error(res.error)
     }
     return res
    }

  return (
    <div className='w-full space-y-4'>
      <SelectFolder setFolder={setFolderId}/>
      {
        folderId && <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {   
          setFileStates([...addedFiles,...fileStates ]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {

                const value = await onCheckLimit()

                if(value.success){
                  const res = await edgestore.publicFiles.upload({
                    file: addedFileState.file,
                    input : {folderId : folderId},
                    onProgressChange: async (progress) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        updateFileProgress(addedFileState.key, 'COMPLETE'); 
                      }
                    },
                  });
  
                  const downloadUrl = getDownloadUrl(
                    res.url,
                    addedFileState.file.name + addedFileState.file.type
                  );
  
                  await createFile({addedFileState , folderId , downloadUrl , url : res.url})
  
                  return res.url
                }
                else{
                  return "null"
                }

           
              } catch (err) {
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
       
        }}
      />
      }
     
    </div>
  );
}

