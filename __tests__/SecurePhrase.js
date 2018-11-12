// import SecurePhrase from '../src/SecurePhrase'

describe('SecurePhrase', () => {
    it('can enrypt and decrypt', () => {
        const plain = 'pride six delay awful fitness sadness crush school tent margin sweet trouble avocado dove liberty trumpet trick neglect require always fringe cram shadow jelly'
        const password = '1234'

        const cipher = SecurePhrase.encrypt(password, plain)

        const msg = SecurePhrase.decrypt(password, cipher)

        console.log(msg)

        expect(msg).to.equal(plain)
    })
})
