const pincode = "111111";
let txt;
let msgtxt = "Hey Jhet,<br><br>I heard about what happened with Zyn Lei, and I'm really sorry.<br>Remember that you're not alone, and it's okay to feel hurt.<br>Take your time to process everything, and know that better days are ahead.<br>If you need someone to talk to or just want to hang out, I'm here for you.<br>Remember to take care of yourself and prioritize your well-being during this time.<br>You deserve happiness and peace of mind. Stay strong.<br><br>Best regards,<br>Your Friend";

document.getElementById("mybtn").onclick = function(){
    txt = document.getElementById("mytxt").value;
    if (pincode == txt){
        document.getElementById("myAudio").play();
        document.getElementById("mylb").textContent = txt;
        document.getElementById("cont1").style.display = "none";
        document.getElementById("msg").innerHTML = msgtxt;
        document.getElementById("cont2").style.display = "flex";
    }
    else{
        document.getElementById("iclb").style.visibility = "visible";
    }
}

document.getElementById("nextbtn").onclick = function (){
    document.getElementById("cont2").style.display = "none";
    document.getElementById("cont3").style.display = "flex";
}

function binaryToText(binaryString) {
    // Split the binary string into 8-bit chunks
    let binaryChunks = binaryString.match(/.{1,8}/g);

    // Convert each chunk to decimal and then to ASCII character
    let text = binaryChunks.map(chunk => String.fromCharCode(parseInt(chunk, 2))).join('');

    return text;
}