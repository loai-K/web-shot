const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer')

router.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: 'Welcome to the Screen Shot API',
  })
})

// pdf
async function puppeteerPdf(url, path) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2',
  })
  await page.pdf({ path: path, format: 'a4' })

  await browser.close()
}

router.post('/pdf', (req, res) => {
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  let pathFolder = path.join(__dirname, '../upload/pdf')
  let fileName = req.body.file + '.pdf' || 'default.pdf'
    
  puppeteerPdf(req.body.url, path.join(pathFolder, fileName))

  return res.send({
    status: 'success',
    data: {
      file: fileName,
      format: path.extname(pathFolder + fileName),
      path: fullUrl + fileName,
    },
  })
})

router.get('/pdf/:file', (req, res) => {
  let filepath = path.join(__dirname, '../upload/pdf/')

  fs.exists(filepath + req.params.file, function fileExists(exists) {
    if (exists) {
      return res.sendFile(filepath + req.params.file)
    } else {
      res.status(500).send({ status: 'error', message: 'Not Found' })
    }
  })
})


//images
async function puppeteerImage(url, path) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({ path: path })

    await browser.close()
}

router.post('/image', (req, res) => {
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  let pathFolder = path.join(__dirname, '../upload/image/')
  let fileName = req.body.file + '.png' || 'default.png'

   puppeteerImage(req.body.url, path.join(pathFolder, fileName))

  return res.json({
    status: 'success',
    data: {
      file: fileName,
      format: path.extname(pathFolder + fileName),
      path: fullUrl + fileName,
    },
  })
})

router.get('/image/:image', (req, res) => {
  let filepath = path.join(__dirname, '../upload/image/')

  fs.exists(filepath + req.params.image, function fileExists(exists) {
    if (exists) {
      return res.sendFile(filepath + req.params.image)
    } else {
        res.status(500).send({ status: 'error', message: 'Not Found' })
    }
  })
})

module.exports = router
