import path from "path";
import multer from "multer";

const publicFolder = path.resolve(__dirname, "..", "..", "public");
export default {
  directory: publicFolder,

  storage: multer.diskStorage({
    destination: publicFolder,
    filename(req, file, cb) {
      //const fileName = new Date().getTime() + path.extname(file.originalname);
            var arquivo = file.originalname;
      const fileName = arquivo.substring(0, arquivo.lastIndexOf(".")) + path.extname(file.originalname);

      return cb(null, fileName);
    }
  })
};
