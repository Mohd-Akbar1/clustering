
import crypto from "crypto"


export const Hashedpassword:any=(password:string)=>{

    const iteration='100000'
    const hashBytes=64
    const digest ='sha512'
    const salt=crypto.randomBytes(30).toString('hex')

    return crypto.pbkdf2Sync(password,salt,parseInt(iteration),hashBytes,digest).toString('hex')

}
   