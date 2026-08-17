class Chat {
  constructor() {
  }

  respond(u_in) {
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
      
      return mix_reply;
  }
}