const timeoutSign = document.querySelector(".timeoutSign");
const questionContainer = document.querySelector(".question-container");
const questionContainerMuz = document.querySelector(".question-container-muz");
const restartDiv = document.querySelector(".restartDiv");
const continueDiv = document.querySelector(".continue");

const choiceTextAno = document.querySelector(".choice-text-ano");
const choiceTextNe = document.querySelector(".choice-text-ne");




// IDLE TIMEOUT - na nabidku, jestli bude pokracovat
(function() {
  const idleDurationSecs = 170;
  let redirectUrl = '../index.html';  // Redirect idle users to this URL
  let idleTimeout;
  let resetIdleTimeout = function() {
    if(idleTimeout) clearTimeout(idleTimeout);
    idleTimeout = setTimeout(function(){
      // location.href = redirectUrl
      overlay2.classList.remove("hideOverlay2");
      timeoutSign.classList.remove("hideTimeoutSign");
      let timeleft = 9;
      let downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.querySelector(".timer").innerHTML = "";
        } else {
        document.querySelector(".timer").innerHTML = timeleft;
        }
        timeleft -= 1;
      }, 1000);
    }, idleDurationSecs * 1000);
  };
  resetIdleTimeout();
  ['click', 'touchstart', 'mousemove'].forEach(function(evt) {
    document.addEventListener(evt, resetIdleTimeout, false)
  });
})();

// IDLE TIMEOUT - na presmerovani na zacatek
(function() {
  const idleDurationSecs = 180;
  let redirectUrl = '../index.html';  // Redirect idle users to this URL
  let idleTimeout;
  let resetIdleTimeout = function() {
    if(idleTimeout) clearTimeout(idleTimeout);
    idleTimeout = setTimeout(function(){
      location.href = redirectUrl
      // timeoutSign.classList.remove("hideTimeoutSign");
    }, idleDurationSecs * 1000);
  };
  resetIdleTimeout();
  ['click', 'touchstart', 'mousemove'].forEach(function(evt) {
    document.addEventListener(evt, resetIdleTimeout, false)
  });
})();






// RESETBUTTON vpravo nahore
const resetButton = document.createElement("button")
resetButton.className = "resetButton";
resetButton.innerText = "< RESTART";
questionContainer.appendChild(resetButton);
resetButton.addEventListener("pointerdown", function(){
  resetButton.classList.add("resetButtonActive")
});
resetButton.addEventListener("pointerup", function() {
  resetButton.classList.remove("resetButtonActive")
    return window.location.assign("../index.html");
});

// RESETBUTTONDIV v oznamovacim okne
const resetButtonDiv = document.createElement("button")
resetButtonDiv.className = "resetButtonDiv";
resetButtonDiv.innerText = " < RESTART";
restartDiv.appendChild(resetButtonDiv);
resetButtonDiv.addEventListener("pointerdown", function(){
  resetButtonDiv.classList.add("resetButtonDivActive")
});
resetButtonDiv.addEventListener("pointerup", function() {
  resetButtonDiv.classList.remove("resetButtonDivActive")
  return window.location.assign("../index.html");
});

// TLACITKO "ANO", PRO POKRACOVANI PO NECINNOSTI
const continueButton = document.createElement("button")
continueButton.className = "continueButton";
continueButton.innerText = "ANO";
continueDiv.appendChild(continueButton);
continueButton.addEventListener("pointerdown", function(){
  continueButton.classList.add("continueButtonActive")
});
continueButton.addEventListener("pointerup", function() {
  continueButton.classList.remove("continueButtonActive")
  timeoutSign.classList.add("hideTimeoutSign");
  overlay2.classList.add("hideOverlay2");
});

// ZISKAT A VYMAZAT TRIDU ACTIVE - PRO ZATLACENI TLACITKA ODPOVEDI
function active(){
  // aktivuje tridu activeAno a activeNe na normalnich otazkach
  function activeAno (){
    choiceTextAno.addEventListener("pointerdown", (e) => {
    choiceTextAno.classList.add("activeAno")
    })};
    activeAno();

  function deactiveAno (){
    choiceTextAno.addEventListener("pointerup", (e) => {
    choiceTextAno.classList.remove("activeAno")
    })};
    deactiveAno();

  function activeNe (){
    choiceTextNe.addEventListener("pointerdown", (e) => {
    choiceTextNe.classList.add("activeNe")
    })};
    activeNe();

  function deactiveNe (){
    choiceTextNe.addEventListener("pointerup", (e) => {
    choiceTextNe.classList.remove("activeNe")
    })};
    deactiveNe();
  };
  active();