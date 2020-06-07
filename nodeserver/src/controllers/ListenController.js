const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'Skn19ZdLF6zdTnMjHqcnzsyPfx5rw0Lnqp44YihUiEop',
  }),
  url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f0fba33e-a3bb-49df-af80-91aa51d72376',
});
const synthesizeParams = {
    text: 'Olá mundo',
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaVoice',
  };
module.exports ={   
    synthe() {
        textToSpeech.synthesize(synthesizeParams)
        .then(response => {
        // only necessary for wav formats,
        // otherwise `response.result` can be directly piped to a file
        return textToSpeech.repairWavHeaderStream(response.result);
        })
        .then(buffer => {
        fs.writeFileSync('ola_mundo.mp3', buffer);
        })
        .catch(err => {
        console.log('error:', err);
    });
   
    }
  
}