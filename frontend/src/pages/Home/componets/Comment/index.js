import React from 'react';
import { MdPlayArrow } from 'react-icons/md';

export default function Comment({ comment }) {
    function playAudio(stream) {
        let audioBlob = new Blob(stream)
        let audioUrl = URL.createObjectURL(audioBlob)
        let audio = new Audio(audioUrl);
        audio.play();
    }
    async function acessIBM() {
        var token = ''
        await fetch("https://cors-anywhere.herokuapp.com/https://iam.cloud.ibm.com/identity/token", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
            },
            body: "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=Skn19ZdLF6zdTnMjHqcnzsyPfx5rw0Lnqp44YihUiEop"
        })
            .then(response => {
                return response.json();
            }).then(function (response) {
                token = response.access_token;
            })
            .catch(err => {
                //console.log(err);
            });
            return token
    }
    async function listenToAudio(id) {
        let token = await acessIBM();
        var wsURI = 'wss://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f0fba33e-a3bb-49df-af80-91aa51d72376/v1/synthesize'
            + '?access_token=' + token
            + '&voice=pt-BR_IsabelaV3Voice';

        var websocket = new WebSocket(wsURI);
        function onOpen(evt, id) {
            let message = document.getElementById(id).textContent;
            var textMessage = {
                text: message,
                accept: 'audio/mp3'
            };
            websocket.send(JSON.stringify(textMessage));
        }
        var mensagens;
        var audioStream = [];

        function onMessage(evt) {
            if (typeof evt.data === "string") {
                mensagens += evt.data;
                console.log(mensagens)
            } else {
                console.log(evt.data)
                console.log('Received ' + evt.data.size + ' binary bytes');
                audioStream.push(evt.data);
            }
        }

        function onClose(evt) {
            console.log(audioStream);
            playAudio(audioStream);
        }
        function onError(evt) {
            console.log(evt.data);
        }

        websocket.onopen = function (evt) { onOpen(evt, id) };
        websocket.onclose = function (evt) { onClose(evt) };
        websocket.onmessage = function (evt) { onMessage(evt) };
        websocket.onerror = function (evt) { onError(evt) };
    }



    return (
        <li className="comment">
            <p id={comment.id}>{comment.comment}</p>
            <button onClick={() => listenToAudio(comment.id)} className="button"><MdPlayArrow size={16} color="#F9F9F9" />Ouvir</button>
        </li>
    );
}