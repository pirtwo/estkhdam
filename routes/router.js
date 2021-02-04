const fs = require('fs').promises
const path = require('path')
const Router = require('express').Router

const router = Router();
const layout = 'layouts/main'

router.get('/', async function (req, res) {
    try {
        let buff = await fs.readFile(path.resolve('./data/data.json'))
        let data = JSON.parse(buff.toString())
        res.render(layout, {
            title: 'خانه',
            body: '../index',
            header: true,
            footer: true,
            data: {
                ads: data.ads,
                regions: data.regions
            }
        })
    } catch (err) {
        res.status(500).send({ error: "can't read data" })
    }
})

router.get('/signin', (req, res) => {
    res.render(layout, {
        title: 'ورود کاربران',
        body: '../signin',
        header: false,
        footer: false
    })
})

router.get('/signup', (req, res) => {
    res.render(layout, {
        title: 'ثبت نام',
        body: '../signup',
        header: false,
        footer: false
    })
})


module.exports = router