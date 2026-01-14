const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../Icons');

/**
 * Common SVG attributes needing camelCase conversion for React
 */
const replacements = [
    { from: /fill-rule=/g, to: 'fillRule=' },
    { from: /clip-rule=/g, to: 'clipRule=' },
    { from: /stroke-width=/g, to: 'strokeWidth=' },
    { from: /stroke-linecap=/g, to: 'strokeLinecap=' },
    { from: /stroke-linejoin=/g, to: 'strokeLinejoin=' },
    { from: /stroke-miterlimit=/g, to: 'strokeMiterlimit=' },
    { from: /stroke-opacity=/g, to: 'strokeOpacity=' },
    { from: /fill-opacity=/g, to: 'fillOpacity=' },
    { from: /stop-color=/g, to: 'stopColor=' },
    { from: /stop-opacity=/g, to: 'stopOpacity=' },
    { from: /flood-color=/g, to: 'floodColor=' },
    { from: /flood-opacity=/g, to: 'floodOpacity=' },
    { from: /clip-path=/g, to: 'clipPath=' },
    { from: /mask-type=/g, to: 'maskType=' },
    { from: /mask-units=/g, to: 'maskUnits=' }, // Sometimes maskUnits is already correct, but mask-units is invalid
    { from: /color-interpolation-filters=/g, to: 'colorInterpolationFilters=' },
    { from: /class=/g, to: 'className=' }, // Basic check, though usually processed files use className
];

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Apply attribute replacements
    replacements.forEach(({ from, to }) => {
        content = content.replace(from, to);
    });

    // Fix style="mask-type:luminance" specific case and generic simplistic style strings
    // This regex looks for style="key:value" and converts to style={{ key: 'value' }}
    // Note: This is a simple implementation and might need expansion for complex styles
    // Targeted fix for the known issue:
    content = content.replace(/style="mask-type:luminance"/g, "style={{ maskType: 'luminance' }}");
    
    // Attempt to handle other simple one-property styles: style="prop: value"
    // content = content.replace(/style="([a-zA-Z-]+): ?([^;"]+);?"/g, (match, prop, val) => {
    //     const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    //     return `style={{ ${camelProp}: '${val}' }}`;
    // });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${path.basename(filePath)}`);
    }
}

if (!fs.existsSync(iconsDir)){
    console.error('Icons directory not found');
    process.exit(1);
}

console.log('Scanning for icon issues...');
fs.readdir(iconsDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }
    
    files.forEach(file => {
        if (file.endsWith('.tsx')) {
            fixFile(path.join(iconsDir, file));
        }
    });
    console.log('Icon fix scan completed.');
});
