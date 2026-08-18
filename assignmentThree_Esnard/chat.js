class Chat {
  constructor() {
    this.user_orignal = "";
  }

  respond(u_in) {
    this.user_original = u_in;
    return this.convertToBinary(u_in);
}

  convertToBinary(reply) {
    let to_convert = "";
    
    for(var i = 0; i < reply.length; i++) {
      to_convert += reply[i].charCodeAt(0).toString(2) + " ";
    }
    return this.mixLetters(to_convert);
  }
  
    mixLetters(reply) {
      let mix_reply = "";

      for(var i = 0; i < reply.length; i++) {
        mix_reply += reply[floor(random(0, reply.length))];  
      }
      
      return this.convertToString(mix_reply);
  }

  convertToString(reply){
    let reply_toString = "";
    let bin = "";

    for(var i = 0; i < reply.length; i ++)
    {
      let temp = "";

      if(reply[i] === " ") {
        continue;
      }
      
      bin += reply[i];
      
      if(bin.length == 8) {
        temp += String.fromCharCode(parseInt(bin, 2));

        if(temp.match(/^[ -~]+$/)) {
          //debug
          //console.log("Printable string: " + temp);
          reply_toString += temp;
        }

        bin = "";
      }
    }
      
    if(!reply_toString) {
      return `<span style="color: red;">TypeError: misunderstanding '${this.user_original}'</br><span style="display: inline-block;text-indent: 15%; white-space: nowrap;"> communication is not defined </span></span>`;
    }

    return reply_toString;
  }
}