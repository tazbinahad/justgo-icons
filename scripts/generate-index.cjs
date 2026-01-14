const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../Icons');
const outputFile = path.join(__dirname, '../src/index.ts');

if (!fs.existsSync(path.dirname(outputFile))){
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

fs.readdir(iconsDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }
    const exports = files
        .filter(file => file.endsWith('.tsx') && !file.startsWith('_')) // Exclude _base if it was there as a file, but it's a folder, though readdir returns folders too? readdir returns names.
        .map(file => {
             // check if it is a directory
             const stat = fs.statSync(path.join(iconsDir, file));
             if(stat.isDirectory()) return null;
             
             const componentName = file.replace('.tsx', '');
             return `export { default as ${componentName} } from '../Icons/${componentName}';`;
        })
        .filter(Boolean)
        .join('\n');

    const typeExports = `export type { IconBaseProps } from '../Icons/_base/WithIconProps';\n`;
    
    fs.writeFileSync(outputFile, typeExports + exports);
    console.log('src/index.ts generated successfully');
});
