module.exports = {
    date(_timestemp) {
        const date = new Date(_timestemp)
        const day = `0${date.getUTCDate()}`.slice(-2)
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const year = date.getUTCFullYear()

        return {
            format: `${day}/${month}/${year}`,
            ISO: `${year}-${month}-${day}`,
            birth: `${day}/${month}`
        }
    }
}