import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import sharp from 'sharp';

const execAsync = promisify(exec);
const targetDir = 'public/materials';

async function compressWebm(filePath) {
    const tempPath = filePath.replace('.webm', '_temp.webm');
    console.log(`Compressing video: ${filePath}...`);
    try {
        const cmd = `ffmpeg -y -i "${filePath}" -vf scale='min(1280,iw)':-2 -c:v libvpx-vp9 -crf 42 -b:v 0 -cpu-used 3 -an "${tempPath}"`;
        await execAsync(cmd);
        
        const stat = await fs.stat(tempPath);
        if (stat.size < 1.05 * 1024 * 1024) { 
            await fs.rename(tempPath, filePath);
            console.log(`✅ Video optimized: ${filePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        } else {
            console.log(`⚠️ Video still too big, trying harder: ${filePath}`);
            const cmd2 = `ffmpeg -y -i "${filePath}" -vf scale='min(854,iw)':-2 -c:v libvpx-vp9 -crf 48 -b:v 0 -cpu-used 3 -an "${tempPath}"`;
            await execAsync(cmd2);
            await fs.rename(tempPath, filePath);
            const stat2 = await fs.stat(filePath);
            console.log(`✅ Video forcefully optimized: ${filePath} (${(stat2.size / 1024 / 1024).toFixed(2)} MB)`);
        }
    } catch (err) {
        console.error(`❌ Failed to compress ${filePath}:`, err.message);
        await fs.unlink(tempPath).catch(() => {});
    }
}

async function compressWebp(filePath) {
    try {
        const inputBuffer = await fs.readFile(filePath);
        const image = sharp(inputBuffer);
        const metadata = await image.metadata();
        const initialSize = (await fs.stat(filePath)).size;
        
        if (initialSize <= 20 * 1024) return;
        
        console.log(`Compressing image: ${filePath} (${(initialSize/1024).toFixed(1)}KB)`);
        
        let targetWidth = metadata.width;
        if (targetWidth > 800) targetWidth = 800;
        
        const tempPath = filePath.replace('.webp', '_temp.webp');
        
        await image
            .resize({ width: targetWidth, withoutEnlargement: true })
            .webp({ quality: 65, effort: 6 })
            .toFile(tempPath);
            
        let stat = await fs.stat(tempPath);
        
        if (stat.size > 20 * 1024) {
            await sharp(inputBuffer)
                .resize({ width: 600, withoutEnlargement: true })
                .webp({ quality: 50, effort: 6 })
                .toFile(tempPath);
            stat = await fs.stat(tempPath);
        }
        
        await fs.unlink(filePath).catch(() => {});
        await fs.rename(tempPath, filePath);
        console.log(`✅ Image optimized: ${filePath} (${(stat.size / 1024).toFixed(2)} KB)`);
    } catch (err) {
        console.error(`❌ Failed to compress ${filePath}:`, err.message);
    }
}

async function main() {
    const files = await fs.readdir(targetDir);
    
    // Process Images
    const images = files.filter(f => f.endsWith('.webp') || f.endsWith('.jpeg') || f.endsWith('.png'));
    for (const file of images) {
        await compressWebp(path.join(targetDir, file));
    }

    // Process Videos
    const videos = files.filter(f => f.endsWith('.webm'));
    for (const file of videos) {
        await compressWebm(path.join(targetDir, file));
    }
    
    console.log("All done!");
}

main().catch(console.error);
