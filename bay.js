var accessToken = "e28f992135a84429899a9bcf4642e538",
    baseUrl = "https://api.api.ai/v1/",
    $speechInput,
    $recBtn,
    recognition,
    messageRecording = "Recording...",
    messageCouldntHear = "I couldn't hear you, could you say that again?",
    messageInternalError = "Oh no, there has been an internal server error",
    messageSorry = "I'm sorry, I don't have the answer to that yet.";

    $speechInput.keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    send();
  }
});
$recBtn.on("click", function(event) {
  switchRecognition();
});
$(".debug__btn").on("click", function() {
  $(this).next().toggleClass("is-active");
  return false;
});

<html>
<head>
  <title>Barry</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script type="text/javascript">
    var accessToken = "dce399808780466db898fad9bfae71fe",
      baseUrl = "https://api.api.ai/v1/",
      $speechInput,
      $recBtn,
      recognition,
      messageRecording = "Recording...",
      messageCouldntHear = "I couldn't hear you, could you say that again?",
      messageInternalError = "Oh no, there has been an internal server error",
      messageSorry = "I'm sorry, I don't have the answer to that yet.";
    $(document).ready(function() {
      $speechInput = $("#speech");
      $recBtn = $("#rec");
      $speechInput.keypress(function(event) {
        if (event.which == 13) {
          event.preventDefault();
          send();
        }
      });
      $recBtn.on("click", function(event) {
        switchRecognition();
      });
      $(".debug__btn").on("click", function() {
        $(this).next().toggleClass("is-active");
        return false;
      });
    });
    function startRecognition() {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
          recognition.interimResults = false;
      recognition.onstart = function(event) {
        respond(messageRecording);
        updateRec();
      };
      recognition.onresult = function(event) {
        recognition.onend = null;

        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          setInput(text);
        stopRecognition();
      };
      recognition.onend = function() {
        respond(messageCouldntHear);
        stopRecognition();
      };
      recognition.lang = "en-US";
      recognition.start();
    }

    function stopRecognition() {
      if (recognition) {
        recognition.stop();
        recognition = null;
      }
      updateRec();
    }
    function switchRecognition() {
      if (recognition) {
        stopRecognition();
      } else {
        startRecognition();
      }
    }
    function setInput(text) {
      $speechInput.val(text);
      send();
    }
    function updateRec() {
      $recBtn.text(recognition ? "Stop" : "Speak");
    }
    function send() {
      var text = $speechInput.val();
      $.ajax({
        type: "POST",
        url: baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({query: text, lang: "en", sessionId: "yaydevdiner"}),
        success: function(data) {
          prepareResponse(data);
        },
        error: function() {
          respond(messageInternalError);
        }
      });
    }
    function prepareResponse(val) {
      var debugJSON = JSON.stringify(val, undefined, 2),
        spokenResponse = val.result.speech;
      respond(spokenResponse);
      debugRespond(debugJSON);
    }
    function debugRespond(val) {
      $("#response").text(val);
    }
    function respond(val) {
      if (val == "") {
        val = messageSorry;
      }
      if (val !== messageRecording) {
        var msg = new SpeechSynthesisUtterance();
        msg.voiceURI = "native";
        msg.text = val;
        msg.lang = "en-US";
        window.speechSynthesis.speak(msg);
      }
      $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
    }
  </script>
  <style type="text/css">
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      background-color: #192837;
      font-family: "Titillium Web", Arial, sans-serif;
      font-size: 20px;
      margin: 0;
    }
    .container {
      position: fixed;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
    }
    input {
      background-color: #126077;
      border: 1px solid #3F7F93;
      color: #A6CAE6;
      font-family: "Titillium Web";
      font-size: 20px;
      line-height: 43px;
      padding: 0 0.75em;
      width: 400px;
      -webkit-transition: all 0.35s ease-in;
    }
    textarea {
      background-color: #070F24;
      border: 1px solid #122435;
      color: #606B88;
      padding: 0.5em;
      width: 100%;
      -webkit-transition: all 0.35s ease-in;
    }
    input:active, input:focus, textarea:active, textarea:focus {
      outline: 1px solid #48788B;
    }
    .btn {
      background-color: #126178;
      border: 1px solid #549EAF;
      color: #549EAF;
      cursor: pointer;
      display: inline-block;
      font-family: "Titillium Web";
      font-size: 20px;
      line-height: 43px;
      padding: 0 0.75em;
      text-align: center;
      text-transform: uppercase;
      -webkit-transition: all 0.35s ease-in;
    }
    .btn:hover {
      background-color: #1888A9;
      color: #183035;
    }
    .debug {
      bottom: 0;
      position: fixed;
      right: 0;
    }
    .debug__content {
      font-size: 14px;
      max-height: 0;
      overflow: hidden;
      -webkit-transition: all 0.35s ease-in;
    }
    .debug__content.is-active {
      display: block;
      max-height: 500px;
    }
    .debug__btn {
      width: 100%;
    }
    .spoken-response {
      max-height: 0;
      overflow: hidden;
      -webkit-transition: all 0.35s ease-in;
    }
    .spoken-response.is-active {
      max-height: 400px;
    }
    .spoken-response__text {
      background-color: #040E23;
      color: #7584A2;
      padding: 1em;
    }
  </style>
</head>
<body>
  <div class="container">
    <input id="speech" type="text">
    <button id="rec" class="btn">Speak</button>
    <div id="spokenResponse" class="spoken-response">
      <div class="spoken-response__text"></div>
    </div>
  </div>
  <div class="debug">
    <div class="debug__btn btn">
      Debug JSON results
    </div>
    <div class="debug__content">
      <textarea id="response" cols="40" rows="20"></textarea>
    </div>
  </div>

  <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200" rel="stylesheet" type="text/css">
</body>
</html>
