__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'EvolutionBot',
            namaowner: 'Venom',
            instagram: 'Venom-ofc',
            youtube : 'Venom Mods'
        }
    }
    res.json(config)
})

module.exports = router
