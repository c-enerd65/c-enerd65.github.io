let font;
let u_input;
let u_message;
let history = [];
let chat_log = "";
let chat_p;

let bot;
let delay = 3000;
let curr_time;

async function setup() {
  createCanvas(400, 400);

  font = await loadFont("./fonts/FSEX302.ttf");

  u_input = createInput();
  u_input.size(325);
  u_input.position(5, 375);
  
  let send = createButton("send");
  send.position(350, 376);
  send.mousePressed(sendMessage);
  
  chat_p = createP();
  chat_p.position(5, 0);
  chat_p.style('font-family', 'Courier New');
  chat_p.style('color', 'white');
  
  chat_p.style('height', '340px');
  chat_p.style('width', '387px');
  chat_p.style('overflow-y', 'scroll');
  
  //debug
  chat_p.style('border', '1px solid white');

  bot = new Chat();
}

async function sendMessage() {
  u_message = u_input.value();

  history.push({role: "user", content: u_message});
  
  chat_log = `<span style="color: #7aadff;">userNotFound</span>  <span style="font-size: 12px; color: grey;">${String(hour()).padStart(2, '0')}:${String(minute()).padStart(2, '0')}:${String(second()).padStart(2, '0')}</span> </br>${u_message}</br></br>` + chat_log;

  chat_p.html(chat_log);

  u_input.value('');

  setTimeout(wait, 2000);
}

function wait()
{
  console.log("responding");
  bot_respond(u_message);
}

function bot_respond(message) {
  let reply = bot.respond(message);
  
  history.push({role: "comp", content: reply});

  chat_log = `<span style="color: #66de7a">computer</span>  <span style="font-size: 12px; color: grey;">${String(hour()).padStart(2, '0')}:${String(minute()).padStart(2, '0')}:${String(second()).padStart(2, '0')}</span> </br>${reply}</br></br>` + chat_log;

  chat_p.html(chat_log);
}

function draw() {
  background(0);
  
}