var images=[
    "Dad.jpeg","Mom.jpeg", "Aaliyah.jpeg", "GooglePhoto.jpg"
]
var i=0;
function nextslide(){
  if(i==4)
    {
      i=0;
    }
  document.getElementById("album").src=
    images[i];
  i++;
}