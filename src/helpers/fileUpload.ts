const fileUpload = async (file: File) => {
  const cloudUrl = process.env.REACT_APP_CLOUD_URL + '/upload';
  const formData = new FormData();

  console.log(cloudUrl)
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    if (resp.ok) {
      const cloudResp: { secure_url: string } = await resp.json();
      return cloudResp.secure_url
    } else {
      throw await resp.json();
    }
  } catch (err) {
    throw err;
  }
}

export default fileUpload