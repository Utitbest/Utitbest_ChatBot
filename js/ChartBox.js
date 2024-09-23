 
 function createElement(d){
	return document.createElement(d);
 }


	let chat_initiate = document.querySelector('.invokechat');

chat_initiate.onclick = () =>{
	let chatResponse = document.querySelector('.chatbot-response');
	let __init__ = document.querySelector('.enterText');
	
	let __chat__ = __init__.value.toLowerCase();
	
	chatResponse.insertAdjacentElement('beforeend', userchat(__init__.value))
	chatResponse.insertAdjacentElement('beforeend', Robotchat(__init__.value))
	
	scrollDown();
	
	let all_pTag = document.getElementsByClassName('chatbot-rply')
	let lastP = all_pTag[all_pTag.length - 1];
	
	let Toarray, resp;
	
	setTimeout(() => {
		if(__chat__ == ''){
			Toarray = Object.values(response[0]);
			resp = Toarray[Math.floor(Math.random() * Toarray.length)];
			
			__Bot__(lastP, resp);
		}
		
		else if(__chat__.includes('your name')){
			Toarray = Object.values(response[2]);
			resp = Toarray[Math.floor(Math.random() * Toarray.length)];
			
			__Bot__(lastP, resp);
		}
		else if(__chat__.includes('my name is') || __chat__.includes('you can call me') || __chat__.includes('call me') || __chat__.includes('friends call me')){
			let lastSpace = __chat__.lastIndexOf(' ');
			
			if(__chat__.indexOf('is') != -1){
				txtpos = __chat__.indexOf('is');
			}else if(__chat__.indexOf('me')){
				txtpos = __chat__.indexOf('me');
			}
			//let txtpos = __chat__.indexOf('is') || __chat__.indexOf('me')
			let chatwith = __chat__.substring(txtpos + 2);
			Toarray = Object.values(response[3]);
			resp = Toarray[Math.floor(Math.random() * Toarray.length)];
			resp = chatwith + resp;
			__Bot__(lastP, resp);
		}else if(__chat__.includes('what is the time') || __chat__.includes('what\'s is the time') || __chat__.includes('what says the time') || __chat__.includes('what time it is')){
			resp = new DateTime().getTime();
			__Bot__(lastP, resp);
		}else if(__chat__.includes('hi') || __chat__.includes('hey') || __chat__.includes('hello') || __chat__.includes('whatsup') || __chat__.includes('how are you')){
			Toarray = Object.values(response[4]);
			resp = Toarray[Math.floor(Math.random() * Toarray.length)];
			
			__Bot__(lastP, resp);
		}
		else{
			Toarray = Object.values(response[1]);
			resp = Toarray[Math.floor(Math.random() * Toarray.length)];
			__Bot__(lastP, resp);
		}
		speakOut(resp);
	}, 3000)
}

userchat = (data) =>{
	let wrapper = createElement('div')
		wrapper.className = 'usr-qstion user';
	
	let usrqWrap = createElement('div')
		usrqWrap.className = 'usrqWrap';
		
	let p = createElement('p');
		p.className = 'usr-txt';
		p.innerHTML = data;
		usrqWrap.append(p)
	
	let spnUsr = createElement('span')
		spnUsr.className = 'spn-usr';
		
	let icon = createElement('i')
		icon.className = 'fa fa-user-circle'
		spnUsr.append(icon);
		usrqWrap.append(spnUsr);
		wrapper.appendChild(usrqWrap)
		return wrapper;
}

//   	ALL ABOUT ROBOT START HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE 

Robotchat = (data) =>{
	let wrapper = createElement('div')
		wrapper.className = 'robot-rply robot';
	
	let usrqWrap = createElement('div')
		usrqWrap.className = 'usrqWrap1';
		
	let spnNew = createElement('span')
		spnNew.className = 'spn-usr to-relative';
		
	let rbt = createElement('i');
		rbt.className = 'fa fa-robot';
		spnNew.append(rbt);
	
	let spanOld = createElement('span')
		spanOld.className = 'thinging';
		
		
	for(let x = 0; x < 3; x++){
		let threeDot = createElement('span');
			threeDot.className = 'dot';
			spanOld.append(threeDot)
	}
	spnNew.append(spanOld);
	
	
	
	let robotTxt = createElement('p')
		robotTxt.className = 'usr-txt chatbot-rply';
		//robotTxt.innerHTML = data;
		
		usrqWrap.append(spnNew)
		usrqWrap.append(robotTxt)
		
		
		wrapper.appendChild(usrqWrap)
		return wrapper;
}

 function __Bot__(rtn, txt){
	
	let start = 0;
	let time = setInterval(() =>{
		rtn.innerHTML += txt.charAt(start);
		scrollDown();
		if(start >= txt.length){
			clearInterval(time);
			let think = document.querySelectorAll('.thinging');
			let Ispan = think[think.length - 1];
			Ispan.remove();
			
		}
		start++;
	}, 45)
}
// function let scroll down chat

scrollDown = () =>{
	let chat = document.querySelector('.chatbot-response');
	let heigh = chat.scrollHeight + 50;
	chat.scrollTo(0, heigh)
}
// speaking chatbot-response
speakOut = (txt) => {
	let utterance = new SpeechSynthesisUtterance(txt)
	let synthesis = speechSynthesis;
		utterance.lang = 'english';
		utterance.onend = function(){

		}
		utterance.rate = 2;
		speechSynthesis.speak(utterance)
		
}
