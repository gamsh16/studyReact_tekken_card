class ImageUploader {
    
    async upload(file) {

        const url = "https://api.cloudinary.com/v1_1/yunsunghyun/upload";

        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", "sxldb12n");

        const res = await fetch(url, {
            method: "POST",
            body: formData
        });
        
        return res.json();
    }
}

export default ImageUploader;