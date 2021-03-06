const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-63cd639d-b354-4191-aa89-2d3b4c49b72f',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
      };

    return imageParams;
}

module.exports = params;
