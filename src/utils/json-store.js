import fs from "fs";

export const jsonStore = {

  read(filePath) {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  },

  write(filePath, data) {
    fs.writeFileSync(
      filePath,
      JSON.stringify(data, null, 2)
    );
  }

};