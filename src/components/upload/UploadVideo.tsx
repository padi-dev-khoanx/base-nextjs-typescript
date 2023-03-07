import { message, Modal, Upload } from 'antd';
import Cookies from 'universal-cookie';
import { RcFile, UploadFile } from 'antd/lib/upload';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { JWT } from '@/src/constant/constant';

export const UploadVideo = ({ fileList, handleChangeVideo, number }: any) => {
  const cookies = new Cookies();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className='mt-[8px] text-black/[0.45]'>Upload</div>
    </div>
  );

  const handleCancel = () => setPreviewOpen(false);

  const handleBeforeUpload = async (file: RcFile): Promise<string | boolean> => {
    if (!['video/mp4', 'video/quicktime'].includes(file.type)) {
      message.error(`Video must be MP4/MOV`).then();
      return Upload.LIST_IGNORE;
    }
    if (file.size / 1024 / 1024 >= 10) {
      message.error(`${file.name} must smaller than 10MB!`).then();
      return Upload.LIST_IGNORE;
    }

    const _URL = window.URL || window.webkitURL;
    const video = document.createElement('video');
    video.src = _URL.createObjectURL(file);

    return new Promise((resolve) => {
      video.onloadedmetadata = function () {
        if (video.videoWidth * 9 != video.videoHeight * 16) {
          message.error(`${file.name} is not 16:9`).then();
          resolve(Upload.LIST_IGNORE);
        } else if (video.videoWidth < 1280 || video.videoHeight < 720) {
          message
            .error(`${file.name} must be more than 1280px and 720px in width and height`)
            .then();
          resolve(Upload.LIST_IGNORE);
        } else {
          resolve(true);
        }
      };
    });
  };

  return (
    <>
      <Upload
        action={process.env.NEXT_PUBLIC_API + 'upload/video'}
        headers={{ Authorization: 'Bearer ' + cookies.get(JWT) }}
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChangeVideo}
        name='files'
        beforeUpload={(file) => handleBeforeUpload(file)}
        accept='video/mp4, video/quicktime'
      >
        {fileList.length >= number ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt='' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};
