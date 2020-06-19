const sharp = require("sharp")
const mkdirp = require("mkdirp")
const fs = require("fs").promises

const assetDir = `${__dirname}/static/assets`
const thumbnailDir = `${__dirname}/static/thumbnails`

async function main() {
  await mkdirp(thumbnailDir)
  const assets = await fs.readdir(assetDir)
  await Promise.all(assets.map(optimizeAsset))
  console.log(`${assets.length} assets optimized`)
}

async function optimizeAsset(asset) {
  const fileName = `${assetDir}/${asset}`
  const outputFile = `${thumbnailDir}/${asset.slice(
    0,
    asset.lastIndexOf(".")
  )}.jpg`
  await sharp(fileName)
    .resize({ height: 320 })
    .jpeg({ quality: 80 })
    .toFile(outputFile)
}

main()
