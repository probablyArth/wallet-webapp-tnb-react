import nacl from 'tweetnacl';
import { Buffer } from 'buffer';

function getAccountNumber (signingKey) {
    // Convert signingKey from string to Uint8Array
    const encodedKey = new Uint8Array(Buffer.from(signingKey, 'hex'))
  
    // Generating nacl keyPair Object
    const keyPair = nacl.sign.keyPair.fromSeed(encodedKey)
    
    return Buffer.from(keyPair.publicKey).toString('hex');
  }

export default getAccountNumber