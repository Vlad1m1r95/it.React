import React, { useState, useEffect } from 'react'

import { Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import useFetch from './../../../../../hooks/useFetch'
import { actions } from './../../../../../../actions/index'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    console.log(reader)
    console.log(file)
    reader.onload = () => resolve(reader.result)

    reader.onerror = error => reject(error)
  })
}
const Uploader = () => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])
  const [dataUrls, setDataUrls] = useState({ dataUrls: [] })
  const { setReq, res } = useFetch()

  const handleCancel = () => setPreviewVisible(false)

  const handleChange = ({ fileList }, e) => {
    const dataURLs = []
    fileList.forEach(item => {
      if (item.thumbUrl !== undefined) {
        console.log(item.thumbUrl)
        dataURLs.push(item.thumbUrl)
      }
    })
    setDataUrls({ dataUrls: dataURLs })
    setFileList(fileList)

    setReq('testUpload', dataURLs)
  }
  const transformFile = file => {
    return (file = JSON.stringify(file))
  }

  const handlePreview = async file => {
    console.log('ddd')
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  )
  return (
    <div className="clearfix">
      <Upload
        action="http://localhost:4000/images"
        headers={{
          'Content-Type': 'text/html',
          authorization: 'Bearer',
        }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
}

export default Uploader
