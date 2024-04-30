
import jsondata from "../data/login.json" assert{type:'json'};
import { browser } from '@wdio/globals'

// test\data\login.json

describe("Sauce demo app login", () => {

    it("valid login", async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await $('#username').setValue(jsondata.valid.username)

    })

})
console.log(jsondata.valid.username)
