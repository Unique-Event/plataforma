<!-- script classe ativa nav -->

<script>

let header = document.getElementById("menuLinks");
let item = header.getElementsByClassName("nav-link");
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
</script>