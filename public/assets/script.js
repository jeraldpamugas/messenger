// Declarations

var curUserName = "";
var myDataRef = firebase.database().ref("chat");
var _imgVal;
let imgFile = $("#customFile");
const imgVal = document.querySelector("#preUpload");

// ------------------------------------------------------------------------

$(document).ready(function () {
  $("input[type=file]").click(function () {
    $(this).val("");
  });

  $("input[type=file]").change(function (evt) {
    var _val = $(this).val();
    // $("#preUpload").attr("src", _val);
    $("#newPhoto").show();
    var tgt = evt.target || window.event.srcElement,
      files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
      var fr = new FileReader();

      _imgVal = new Blob([evt.target.result], { type: "image/jpg" });

      fr.onload = function () {
        document.getElementById("preUpload").src = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }
  });
});

$("#messageInput").keypress(function (e) {
  if (e.keyCode == 13) {
    var file = e.target.files[0];

    sendMessage();
  }
});

//On File Selected
function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("preUpload");
  imgtag.title = selectedFile.name;

  reader.onload = function (event) {
    imgtag.src = event.target.result;
  };
  console.log(imgtag.src);

  reader.readAsDataURL(selectedFile);
}

//On Remove
myDataRef.on("child_removed", function (snapshot) {
  var deletedPost = snapshot.val();
  console.log("Chat was removed", deletedPost);
});

// -------------------------------------------------------------

//Clear Image in <input> and <img>
function clearImage() {
  $("#newPhoto").hide();
  $("input[type=file]").val("");
  document.getElementById("preUpload").src = "";
}

//Send Message FUnction
function sendMessage() {
  if ($("#messageInput").val()) {
    console.log($("#messageInput").val());
    if (!$("input[type=file]").val()) {
      console.log("empty");

      var name = curUserName;
      var text = $("#messageInput").val();

      myDataRef.push({
        name: name,
        text: text,
      });
      $("#messageInput").val("");
    } else {
      console.log("with value");

      var name = curUserName;
      var text = $("#messageInput").val();
      var _fileName =
        "images/" +
        $("input[type=file]")
          .val()
          .replace(/.*(\/|\\)/, "");

      myDataRef.push({
        name: name,
        text: text,
        fileName: _fileName,
      });
      clearImage();
      $("#messageInput").val("");
    }
  }
}

//Display Chat Messages
function displayChatMessage(name, text) {
  if (typeof curUserName != "undefined") {
    if (name == curUserName) {
      $("<div class='chat-message me'/>")
        .prepend($("<p class='chat-text'/>").text(text))
        .appendTo($("#messagesDiv"));
    } else {
      $("<div class='chat-message'/>")
        .prepend($("<p class='chat-text'/>").text(text))
        .appendTo($("#messagesDiv"));
    }
  }

  $("#cardBody")[0].scrollTop = $("#cardBody")[0].scrollHeight;

  if (name != curUserName && curUserName) {
    let alert_sound = document.getElementById("chat-alert-sound");
    alert_sound.play();
  }
}

//Select User
function selectUser($cUser) {
  $("#userSelector").hide();
  $("#messenger").show();
  curUserName = $cUser;
  $("#messagesDiv").empty();

  //start laoding
  let timerInterval;
  Swal.fire({
    title: "Hi " + curUserName + "!",
    html: "Starting in <b></b>",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {

      myDataRef.on("child_added", function (snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      
      if (curUserName == "Jerald") {
        $("#recep").text("Marie");
      } else {
        $("#recep").text("Jerald");
      }
      console.log("Page is ready!");
    }
  });
}

//Upload image
function uploadImage() {
  console.log(imgVal.src);
  console.log("asd");
  if (imgVal.src == "") {
    console.log("No file selected");
    //console.log(imgVal.src.files);
    //console.log(txtfile.files[0]);
  } else {
    //get the file
    var _file = $("#preUpload");
    //Storage Reference
    var storageRef = firebase.storage().ref();
    var mountainImagesRef = storageRef.child("images/mountains.jpg");

    //create storage

    //upload file
  }
}
