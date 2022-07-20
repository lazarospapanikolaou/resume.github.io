<script>
 z  let toggle = button => {
     let Element = document.getElementById("myvideo");
     let hidden = element.getAttribute("hidden");

     if (hidden) {
        element.removeAttribute("hidden");
        button.innerText = "Hide Video";
     } else {
        element.setAttribute("hidden", "hidden");
        button.innerText = "Show Video";
     }
  }
</script>