
const people = ['Alice', 'Bob']

describe('the-internet.herokuapp.com application', () => {
    
    for (const name of people) {

        it('Login page test', async () => {
            await browser.url('https://the-internet.herokuapp.com/login')
            // username= tomsmith
            // password= SuperSecretPassword!

            await $('#username').setValue(name)

        })
    }
})