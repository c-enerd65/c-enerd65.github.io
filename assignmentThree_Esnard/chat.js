class Chat {
  constructor() {
    this.pos_response = true;
  }

  respond(u_in) {
    switch(this.pos_response) {
      case true:
        return this.generateReply_good(u_in);
      case false:
        return this.generateReply_bad(u_in);
    }
  }

  generateReply_good(u_in) {
    return "hello";
  }

  generateReply_bad(u_in) {
    return "goodbye";
  }

}