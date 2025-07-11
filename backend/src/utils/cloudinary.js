import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadOnCloudinary = async (filePath) => {
        try {
            const result = await cloudinary.uploader.upload(filePath, {
                resource_type: 'auto', // Automatically detect the resource type
            });
            console.log('File uploaded successfully:', result.url);
            return result;
        } catch (error) {
            fs.unlinkSync(filePath); // Delete the file if upload fails
            console.error('Error uploading to Cloudinary:', error);
            throw error;
        }
    };

    const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);

export { uploadOnCloudinary, cloudinary };